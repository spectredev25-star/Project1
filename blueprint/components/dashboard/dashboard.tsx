"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Welcome from "./Welcome";
import Profile from "./Profile";
import DashboardToast from "./DashboardToast";
import ScholarshipCard from "./ScholarshipCard";

import type { ScoredScholarship } from "@/lib/matching/type";
// If your file is named "types.ts", change "./type" to "./types"

type DashboardProps = {
  profile: any;
  recommendations: ScoredScholarship[];
  success?: string;
  error?: string;
};

export default function Dashboard({
  profile,
  recommendations,
  success,
  error,
}: DashboardProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen dashboard ml-0 lg:ml-32">

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">

          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setMenuOpen(false)}
          />

          <div className="relative w-full h-full">

            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 z-50 text-white"
            >
              <X size={28} />
            </button>

            <Sidebar className="text-white" />

          </div>

        </div>
      )}

      <main className="flex-1 overflow-y-auto">

        <DashboardToast
          success={success}
          error={error}
        />

        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 lg:hidden">

          <button onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>

          <div className="w-7" />

        </div>

        <Topbar />

        <div className="p-6 space-y-6">

          <Welcome profile={profile} />

          <Profile profile={profile} />

          <section className="rounded-xl shadow-sm p-6">

            <h2 className="text-2xl font-bold mb-6">
              Recommended Scholarships
            </h2>

            {recommendations.length === 0 ? (

              <p className="text-gray-500">
                No scholarship matches your profile yet.
              </p>

            ) : (

              <div className="grid gap-6">

                {recommendations.map((scholarship) => (

                  <ScholarshipCard
                    key={scholarship.id}
                    scholarship={scholarship}
                  />

                ))}

              </div>

            )}

          </section>

        </div>

      </main>

    </div>
  );
}