import Link from "next/link";

import { registerOrganization } from "./action";
import SubmitButton from "@/components/ui/submit_button";
import Radar from "@/components/animation/Radar";

interface PageProps {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
}

export default async function OrganizationRegisterPage({
  searchParams,
}: PageProps) {
  const { error, message } = await searchParams;

  return (
    <section className="min-h-screen grid lg:grid-cols-2">

      {/* Left Panel */}
      <div className="relative hidden lg:flex items-center justify-center overflow-hidden bg-[#0b1120]">

        <Radar />

        <div className="absolute z-10 text-center px-10">

          <h1 className="text-6xl font-bold text-white">
            ScholarMatch AI
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-lg">
            Publish scholarship opportunities, manage applicants,
            and reach talented students worldwide.
          </p>

        </div>

      </div>

      {/* Register Form */}
      <div className="flex items-center justify-center px-6">

        <div className="w-full max-w-md">

          <h2 className="text-4xl font-bold text-white">
            Register Organization
          </h2>

          <p className="mt-2 text-gray-400">
            Create your organization account.
          </p>

          {error && (
            <div className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-400">
              {error}
            </div>
          )}

          {message && (
            <div className="mt-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-green-400">
              {message}
            </div>
          )}

          <form action={registerOrganization} className="mt-10 space-y-6">

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Organization Name
              </label>

              <input
                type="text"
                name="organization_name"
                placeholder="Google Foundation"
                required
                className="w-full rounded-xl border border-gray-700 bg-[#111827] px-4 py-3 text-white outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Organization Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="foundation@google.org"
                required
                className="w-full rounded-xl border border-gray-700 bg-[#111827] px-4 py-3 text-white outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Website
              </label>

              <input
                type="url"
                name="website"
                placeholder="https://example.org"
                className="w-full rounded-xl border border-gray-700 bg-[#111827] px-4 py-3 text-white outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Country
              </label>

              <input
                type="text"
                name="country"
                placeholder="Nigeria"
                required
                className="w-full rounded-xl border border-gray-700 bg-[#111827] px-4 py-3 text-white outline-none focus:border-indigo-500"
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
                className="w-full rounded-xl border border-gray-700 bg-[#111827] px-4 py-3 text-white outline-none focus:border-indigo-500"
              />
            </div>

            <SubmitButton
              idleText="Create Organization"
              loadingText="Creating..."
            />

          </form>

          <p className="mt-8 text-center text-gray-400">
            Already have an account?{" "}
            <Link
              href="/organization/login"
              className="font-medium text-indigo-400 hover:text-indigo-300"
            >
              Log In
            </Link>
          </p>

          <div className="mt-6 text-center">
            <Link
              href="/register"
              className="text-sm text-gray-500 hover:text-indigo-400"
            >
              ← Student Registration
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}