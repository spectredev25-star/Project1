'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const fullName = formData.get('full_name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  })

  if (error) {
    redirect('/register?error=Could not create account')
  }

  // Create profile for new user
  if (user) {
    const { error: profileError } = await supabase
      .from('Profiles')
      .insert({
        user_id: user.id,
        full_name: fullName,
        university: '',
        faculty: '',
        department: '',
        level: null,
        cgpa: null,
        country: '',
        preferred_country: '',
      })

    if (profileError) {
      console.error('Profile creation failed:', profileError)
    }
  }

  revalidatePath('/', 'layout')
  redirect('/Dashboard_home?message=Account created successfully')
}