import Link from "next/link";
import { login } from "./action";

import SubmitButton from "@/components/ui/submit_button";
import Radar from "@/components/animation/Radar";

interface PageProps {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
}

export default async function OrganizationLoginPage({
  searchParams,
}: PageProps) {
  const { error, message } = await searchParams;

  return (
    <section className="min-h-screen grid lg:grid-cols-2">
      <div className="relative hidden lg:flex items-center justify-center overflow-hidden bg-[#0b1120]">

        <Radar />

        <div className="absolute z-10 text-center px-10">

          <h1 className="text-6xl font-bold text-white">
            ScholarMatch AI
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-lg">
            Connect your scholarships with qualified students around
            the world and manage applications from one powerful dashboard.
          </p>

        </div>

      </div>

      {/* Login Form */}
      <div className="flex items-center justify-center px-6">

        <div className="w-full max-w-md">

          <h2 className="text-4xl font-bold text-white">
            Organization Login
          </h2>

          <p className="mt-2 text-gray-400">
            Sign in to manage your scholarships and applicants.
          </p>

          {error && (
            <div className="mt-6 rounded-lg bg-red-500/10 border border-red-500/30 p-4 text-red-400">
              {error}
            </div>
          )}

          {message && (
            <div className="mt-6 rounded-lg bg-green-500/10 border border-green-500/30 p-4 text-green-400">
              {message}
            </div>
          )}

          <form action={login} className="mt-10 space-y-6">

            <div>

              <label className="mb-2 block text-sm text-gray-300">
                Organization Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="organization@example.com"
                required
                className="w-full rounded-xl border border-gray-700 bg-[#111827] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-indigo-500"
              />

            </div>

            <div>

              <div className="mb-2 flex items-center justify-between">

                <label className="text-sm text-gray-300">
                  Password
                </label>

                <Link
                  href="/organization/forgot_password"
                  className="text-sm text-indigo-400 hover:text-indigo-300"
                >
                  Forgot Password?
                </Link>

              </div>

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
                idleText="Log In"
                loadingText="Logging in..."
              />
            </div>

          </form>

          <p className="mt-8 text-center text-gray-400">

            Don't have an organization account?{" "}

            <Link
              href="/organization/register"
              className="font-medium text-indigo-400 hover:text-indigo-300"
            >
              Register Organization
            </Link>

          </p>

          <div className="mt-6 text-center">

            <Link
              href="/login"
              className="text-sm text-gray-500 hover:text-indigo-400"
            >
              ← Back to Student Login
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}