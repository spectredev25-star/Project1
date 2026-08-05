'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Login with Supabase Auth
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    redirect('/organization/login?error=Invalid email or password')
  }

  // Get logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/organization/login?error=Authentication failed')
  }

  // Verify this account belongs to an organization
  const { data: organization } = await supabase
    .from('Organizations')
    .select('id')
    .eq('user_id', user.id)
    .single()

  if (!organization) {
    await supabase.auth.signOut()

    redirect(
      '/organization/login?error=This account is not registered as an organization.'
    )
  }

  revalidatePath('/', 'layout')

  redirect('/organization/dashboard')
}