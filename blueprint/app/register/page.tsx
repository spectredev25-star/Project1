import Link from "next/link";

import { signup } from "./action";
import SubmitButton from "@/components/ui/submit_button";
import Radar from "@/components/animation/Radar";

interface PageProps {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
}

export default async function RegisterPage({
  searchParams,
}: PageProps) {
  const { error, message } = await searchParams;

  return (
    <section className="min-h-screen grid lg:grid-cols-2 bg-[#0B1120]">
      <div className="relative hidden lg:flex items-center justify-center overflow-hidden bg-[#0B1120]">
        <Radar />
        <div className="absolute z-10 text-center px-10">

          <h1 className="text-6xl font-bold text-white">
            ScholarMatch AI
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-lg">
            Join thousands of students discovering scholarships
            tailored to their academic journey.
          </p>

        </div>

      </div>
      <div className="flex items-center justify-center px-6">

        <div className="w-full max-w-md">

          <h2 className="text-4xl font-bold text-white">
            Create Account
          </h2>

          <p className="mt-2 text-gray-400">
            Begin your scholarship journey with Blueprint.
          </p>

          {message && (
            <div className="mt-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-green-400">
              {message}
            </div>
          )}

          {error && (
            <div className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-400">
              {error}
            </div>
          )}

          <form action={signup} className="mt-10 space-y-6">

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                name="full_name"
                placeholder="John Doe"
                required
                className="w-full rounded-xl border border-gray-700 bg-[#111827] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-gray-700 bg-[#111827] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className="w-full rounded-xl border border-gray-700 bg-[#111827] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-indigo-500"
              />
            </div>

            <div className="pt-2">
              <SubmitButton
                idleText="Create Account"
                loadingText="Creating Account..."
              />
            </div>

          </form>

          <p className="mt-8 text-center text-gray-400">

            Already have an account?{" "}

            <Link
              href="/login"
              className="font-medium text-indigo-400 hover:text-indigo-300"
            >
              Log In
            </Link>

          </p>

        </div>

      </div>

    </section>
  );
}