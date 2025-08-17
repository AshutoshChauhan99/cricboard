"use client";
import useSWR from "swr";
import Scorecard from "@/app/components/Scorecard";
import ScorecardSkeleton from "@/app/components/skeletons/ScorecardSkeleton";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function ClientLiveScorecardPage() {
  const { data, error, isLoading, } = useSWR("/api/scorecard/live", fetcher, {
    refreshInterval: 15_000,
  });

  if (isLoading) return <ScorecardSkeleton />;
  if (error) return <div className="text-sm text-red-600">Failed to load live scorecard.</div>;
  if (!data) return null;

  return <Scorecard data={data} />;
}


