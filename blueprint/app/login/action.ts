'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  // Initialize the server-side Supabase client
  const supabase = await createClient()

  // Safely extract the input data from your HTML form fields
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Attempt log in with Supabase Authentication
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) {
    redirect("/login?error=Invalid Email or Password. Please try again.");
  }

  revalidatePath('/', 'layout')
  
  // Send the authenticated user to your main layout landing or workspace dashboard
  redirect("/Dashboard_home?message=You have successfully logged in.");
}
