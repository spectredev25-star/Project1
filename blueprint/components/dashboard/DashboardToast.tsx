"use client";

import { useEffect } from "react";
import { toast } from "sonner";

type DashboardToastProps = {
  success?: string;
  error?: string;
};

export default function DashboardToast({
  success,
  error,
}: DashboardToastProps) {
  useEffect(() => {
    if (success === "profile-updated") {
      toast.success("Profile updated successfully!");
    }

    if (error === "profile-update-failed") {
      toast.error("Failed to update profile.");
    }
  }, [success, error]);

  return null;
}