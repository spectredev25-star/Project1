"use client";

import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";

type DashboardShellProps = {
  sidebar: ReactNode;
  topbar: ReactNode;
  children: ReactNode;
};

export default function DashboardShell({
  sidebar,
  topbar,
  children,
}: DashboardShellProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0B1120] text-white">

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block">
        {sidebar}
      </aside>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">

          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="relative w-72 h-full bg-[#111827]">

            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5"
            >
              <X size={24} />
            </button>

            {sidebar}

          </div>

        </div>
      )}

      <div className="flex-1">

        {/* Mobile Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 lg:hidden">

          <button onClick={() => setOpen(true)}>
            <Menu />
          </button>

          <h1 className="font-semibold">
            Blueprint
          </h1>

          <div className="w-6" />

        </div>

        {topbar}

        <main className="p-6 lg:p-8">

          {children}

        </main>

      </div>

    </div>
  );
}