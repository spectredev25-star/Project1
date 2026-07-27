import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { saveProfile } from "./action";

export default async function Profile() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("Profiles")
    .select("*")
    .eq("user_id", user.id)
    .single();

  return (
    <section className="flex flex-col w-full justify-center items-center">
      <div className="flex w-full justify-center items-center mb-6">
        <h1 className="text-2xl font-bold">Profile Information</h1>
      </div>

      <form action={saveProfile} className="w-full max-w-xl space-y-5">

        <div>
          <p>Full Name</p>
          <input
            type="text"
            name="full_name"
            defaultValue={profile?.full_name ?? ""}
            placeholder="John Doe"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <p>University</p>
          <input
            type="text"
            name="university"
            defaultValue={profile?.university ?? ""}
            placeholder="Federal University Lokoja"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <p>Faculty</p>
          <input
            type="text"
            name="faculty"
            defaultValue={profile?.faculty ?? ""}
            placeholder="Engineering"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <p>Department</p>
          <input
            type="text"
            name="department"
            defaultValue={profile?.department ?? ""}
            placeholder="Computer Engineering"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <p>Level</p>
          <input
            type="number"
            name="level"
            defaultValue={profile?.level ?? ""}
            placeholder="400"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <p>CGPA</p>
          <input
            type="number"
            step="0.01"
            name="cgpa"
            defaultValue={profile?.cgpa ?? ""}
            placeholder="4.50"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <p>Country of Residence</p>
          <input
            type="text"
            name="country"
            defaultValue={profile?.country ?? ""}
            placeholder="Nigeria"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <p>Preferred Country of Study</p>
          <input
            type="text"
            name="preferred_country"
            defaultValue={profile?.preferred_country ?? ""}
            placeholder="Canada"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Save Changes
        </button>

      </form>
    </section>
  );
}