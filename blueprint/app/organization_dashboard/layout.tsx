import { ReactNode } from "react";

import DashboardShell from "@/components/dashboard/dashboardShell";

import Sidebar from "@/components/organization/sidebar";
import Topbar from "@/components/organization/topbar";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DashboardShell
      sidebar={<Sidebar />}
      topbar={<Topbar />}
    >
      {children}
    </DashboardShell>
  );
}