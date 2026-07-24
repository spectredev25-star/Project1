"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Welcome from "./Welcome";
import Profile from "./Profile";

type DashboardProps = {
  profile: any;
};

export default function Dashboard({ profile }: DashboardProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen dashboard ml-0 lg:ml-32">

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">

          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-black"
            onClick={() => setMenuOpen(false)}
          />

          {/* Sidebar */}
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
            <h2 className="text-xl font-semibold mb-4">
              Recommended Scholarships
            </h2>

            <p className="text-gray-500">
              Scholarship recommendations will appear here after your profile is complete.
            </p>
          </section>

        </div>

      </main>

    </div>
  );
}