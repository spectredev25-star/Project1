import Dashboard from "@/components/dashboard/dashboard";
import { createClient } from "@/utils/supabase/server";
import { recommendationEngine } from "@/lib/matching/recommendationEngine";
import { mockScholarships } from "@/lib/matching/mockScholarships";

type DashboardPageProps = {
  searchParams: Promise<{
    success?: string;
    error?: string;
  }>;
};


export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: profile } = await supabase
    .from("Profiles")
    .select("*")
    .eq("user_id", user.id)
    .single();

  const recommendations = profile
    ? recommendationEngine(profile, mockScholarships)
    : [];

  const params = await searchParams;

  return (
    <Dashboard
      profile={profile}
      recommendations={recommendations}
      success={params.success}
      error={params.error}
    />
  );
}