'use server'

import { createClient } from "@/utils/supabase/server";

export async function forgotPassword(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;

  const result = await supabase.auth.resetPasswordForEmail(email);

  console.log(result);

  if (result.error) {
    console.log(result.error);
    throw new Error(result.error.message);
  }
}