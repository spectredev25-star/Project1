'use server'

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function registerOrganization(formData: FormData) {
  const supabase = await createClient();

  const organizationName = formData.get("organization_name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const website = formData.get("website") as string;
  const country = formData.get("country") as string;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    redirect(
      "/organization/register?error=" +
        encodeURIComponent(error.message)
    );
  }

  const user = data.user;

  if (!user) {
    redirect(
      "/organization/register?error=Could not create account"
    );
  }

  const { error: insertError } = await supabase
    .from("Organizations")
    .insert({
      user_id: user.id,
      organization_name: organizationName,
      email,
      website,
      country,
      verified: false,
      subscription: "free",
    });

  if (insertError) {
    redirect(
      "/organization/register?error=" +
        encodeURIComponent(insertError.message)
    );
  }

  revalidatePath("/", "layout");

  redirect(
    "/organization/dashboard?message=Organization account created successfully"
  );
}