import { signup } from "./action";
import SubmitButton from "@/components/ui/submit_button";

interface PageProps {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
}

export default async function RegisterPage({ searchParams }: PageProps) {
  const { error, message } = await searchParams;

  return (
    <section className="p-4 flex justify-center items-center h-screen sign-up">
      <form action={signup} className="space-y-4">
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

        <div>
          <p className="pt-4">Full Name:</p>
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            required
          />
        </div>

        <div>
          <p className="pt-4">Email:</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div>
          <p className="pt-4">Password:</p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>

        <SubmitButton idleText="Create Account" loadingText="Creating account..." />
      </form>
    </section>
  );
}