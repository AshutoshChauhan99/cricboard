"use client";
import useSWR from "swr";
import { useParams } from "next/navigation";
import Scorecard from "@/app/components/Scorecard";
import ScorecardSkeleton from "@/app/components/skeletons/ScorecardSkeleton";
import PreviewDetails from "@/app/components/PreviewDetails";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function ClientScorecardPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const { data, error, isLoading } = useSWR(id ? `/api/scorecard/${id}` : null, fetcher);
  const { data: preview } = useSWR(id ? `/api/preview/${id}` : null, fetcher);

  if (isLoading) return <ScorecardSkeleton />;
  if (error) return <div className="text-sm text-red-600">Failed to load scorecard.</div>;
  if (!data) return null;

  // For live matches, show scorecard with preview
  if (id === "match-live" || preview?.status === "LIVE") {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <Scorecard data={data} />
        </div>
        <div>
          {preview ? <PreviewDetails data={preview} /> : null}
        </div>
      </div>
    );
  }

  // For upcoming matches, show only preview
  if (preview?.status === "UPCOMING") {
    return (
      <div className="grid grid-cols-1 gap-4">
        {preview ? <PreviewDetails data={preview} /> : null}
      </div>
    );
  }

  // For completed matches, show only scorecard (no preview)
  if (preview?.status === "COMPLETED") {
    return (
      <div className="grid grid-cols-1 gap-4">
        <Scorecard data={data} />
      </div>
    );
  }

  // Fallback: show scorecard with preview if available
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <Scorecard data={data} />
      </div>
      <div>
        {preview ? <PreviewDetails data={preview} /> : null}
      </div>
    </div>
  );
}


