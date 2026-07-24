
import { saveProfile } from "./action";
import SubmitButton from "@/components/ui/submit_button";

interface PageProps {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
}

export default async function Profile({ searchParams }: PageProps) {
  const { error, message } = await searchParams;

  return (
    <section className="flex flex-col w-full justify-center items-center">
      <div className="flex w-full justify-center items-center">
        <h1>Profile Info</h1>
      </div>

      <form action={saveProfile}>
        {message && (
          <div className="mb-4 rounded-lg border border-green-300 bg-green-100 p-3 text-green-700">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-4 rounded-lg border border-red-300 bg-red-100 p-3 text-red-700">
            {error}
          </div>
        )}

        <div className="info-edit-box">
          <p>Full Name:</p>
          <input
            type="text"
            name="full_name"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <p>University:</p>
          <input
            type="text"
            name="university"
            placeholder="Federal University, Lokoja"
          />
        </div>

        <div>
          <p>Department:</p>
          <input
            type="text"
            name="department"
            placeholder="Computer Engineering"
          />
        </div>

        <div>
          <p>CGPA:</p>
          <input
            type="number"
            name="cgpa"
            placeholder="4.00"
          />
        </div>

        <div>
          <p>Country of Residence:</p>
          <input
            type="text"
            name="country"
            placeholder="Nigeria"
          />
        </div>

        <div>
          <p>Preferred Country:</p>
          <input
            type="text"
            name="preferred_country"
            placeholder="USA"
          />
        </div>

        <div>
          <p>Level:</p>
          <input
            type="text"
            name="level"
            placeholder="400"
          />
        </div>

        <div>
          <p>Faculty:</p>
          <input
            type="text"
            name="faculty"
            placeholder="Engineering"
          />
        </div>

        <div>
          <p>Gender:</p>
          <input
            type="text"
            name="gender"
            placeholder="Male"
          />
        </div>

        <SubmitButton idleText="Save Changes" loadingText="Saving..." />
      </form>
    </section>
  );
}