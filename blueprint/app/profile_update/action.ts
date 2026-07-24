'use server'
console.log("Profile update action started");

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function saveProfile(formData: FormData) {

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const full_name = formData.get("full_name") as string;
  const university = formData.get("university") as string;
  const department = formData.get("department") as string;
  const cgpa = Number(formData.get("cgpa"));
  const country = formData.get("country") as string;
  const level = formData.get("level") as string;
  const faculty = formData.get("faculty") as string;
  const preferred_country = formData.get("preferred_country") as string;

  console.log("Current user:", user);
  console.log("User ID:", user?.id);
  const { error } = await supabase
    .from("Profiles")
    .upsert({
      user_id: user.id,
      full_name,
      university,
      department,
      cgpa,
      country,
      level,
      faculty,
      preferred_country,

    });

  if (error) {
    console.error(error);
    return;
  }

  redirect("/Dashboard_home");
}