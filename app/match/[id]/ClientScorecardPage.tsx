"use client";
import useSWR from "swr";
import { useParams } from "next/navigation";
import ScorecardSkeleton from "@/app/components/skeletons/ScorecardSkeleton";
import UpcomingMatchView from "@/app/components/UpcomingMatchView";
import CompletedMatchView from "@/app/components/CompletedMatchView";
import LiveMatchView from "@/app/components/LiveMatchView";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function ClientScorecardPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;

  // Determine match type based on ID pattern FIRST
  let matchType: 'LIVE' | 'COMPLETED' | 'UPCOMING' | 'UNKNOWN' = 'UNKNOWN';

  if (id) {
    if (id.startsWith('live-') || id.startsWith('match-live')) {
      matchType = 'LIVE';
    } else if (id.startsWith('completed-')) {
      matchType = 'COMPLETED';
    } else if (id.startsWith('match-') && !id.includes('live')) {
      matchType = 'UPCOMING';
    }
  }

  // Call all hooks at the top level to follow Rules of Hooks
  const { data: scorecardData, error: scorecardError, isLoading: scorecardLoading } = useSWR(
    (matchType === 'LIVE' || matchType === 'COMPLETED') && id ? `/api/scorecard/${id}` : null,
    fetcher
  );

  const { data: previewData, error: previewError, isLoading: previewLoading } = useSWR(
    matchType === 'UPCOMING' && id ? `/api/preview/${id}` : null,
    fetcher
  );

  // Handle loading states
  if (matchType === 'LIVE' || matchType === 'COMPLETED') {
    if (scorecardLoading) return <ScorecardSkeleton />;
    if (scorecardError) return <div className="text-sm text-red-600">Failed to load match data.</div>;
    if (!scorecardData) return <div className="text-sm text-red-600">No scorecard data available.</div>;

    if (matchType === 'LIVE') {
      return (
        <div className="container mx-auto px-4 py-6">
          <LiveMatchView scorecardData={scorecardData} />
        </div>
      );
    }

    if (matchType === 'COMPLETED') {
      return (
        <div className="container mx-auto px-4 py-6">
          <CompletedMatchView scorecardData={scorecardData} />
        </div>
      );
    }
  }

  // Handle upcoming matches
  if (matchType === 'UPCOMING') {
    if (previewLoading) return <ScorecardSkeleton />;
    if (previewError) return <div className="text-sm text-red-600">Failed to load preview data.</div>;
    if (!previewData) return <div className="text-sm text-red-600">No preview data available.</div>;

    return (
      <div className="container mx-auto px-4 py-6">
        <UpcomingMatchView data={previewData} />
      </div>
    );
  }

  // Fallback for unknown match types
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="text-center text-zinc-500 py-8">
        Unknown match type. Please check the URL.
      </div>
    </div>
  );
}


