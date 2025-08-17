"use client";
import { useIplData } from "./hooks/useIplData";
import PointsTable from "./components/PointsTable";
import ScheduleList from "./components/ScheduleList";
import WebSocketBridge from "./components/WebSocketBridge";
import Navbar from "./components/Navbar";
import LiveStrip from "./components/LiveStrip";
import Tabs from "./components/Tabs";
import { useState, useMemo } from "react";
import useSWR from "swr";
import ScheduleListSkeleton from "./components/skeletons/ScheduleListSkeleton";
import PointsTableSkeleton from "./components/skeletons/PointsTableSkeleton";
import BlogList from "./components/BlogList";
import BlogListSkeleton from "./components/skeletons/BlogListSkeleton";
import LiveMatchCarousel from "./components/LiveMatchCarousel";
import LiveMatchCarouselSkeleton from "./components/skeletons/LiveMatchCarouselSkeleton";

// ✅ bring in actual types (adjust path if needed)
import type { MatchInfo, BlogPost } from "@/lib/types";

export default function Home() {
  const { data, error, isLoading } = useIplData();
  const [tab, setTab] = useState<string>("live");

  const scheduleByTab = useMemo<MatchInfo[]>(() => {
    if (!data || !data.schedule) return [];
    const normalize = (s: string) => (s || "").toUpperCase().trim();

    // we can just use the array directly; cloning isn’t needed for filtering
    const schedule: MatchInfo[] = data.schedule;

    const map: Record<string, Set<string>> = {
      live: new Set(["LIVE"]),
      upcoming: new Set(["UPCOMING"]),
      results: new Set(["COMPLETED", "RESULT", "FINISHED", "ENDED"]),
    };
    const allowed = map[tab] ?? new Set<string>();

    return schedule.filter((m: MatchInfo) => allowed.has(normalize(m.status)));
  }, [data, tab]);

  const liveMatches = useMemo<MatchInfo[]>(
    () => (data ? data.schedule.filter((m: MatchInfo) => m.status === "LIVE") : []),
    [data]
  );

  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  // ✅ type the posts properly
  const { data: blogData, isLoading: blogLoading } = useSWR<{ posts: BlogPost[] }>(
    "/api/blog",
    fetcher
  );

  return (
    <div className="min-h-[100svh] flex flex-col overflow-x-hidden">
      <Navbar title="IPL CricBoard" />
      <WebSocketBridge />
      <main className="flex-1 min-h-0">
        <LiveStrip match={data?.liveOrNextMatch ?? null} />

        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <Tabs
            tabs={[
              { key: "live", label: "Live" },
              { key: "upcoming", label: "Upcoming" },
              { key: "results", label: "Results" },
            ]}
            value={tab}
            onChange={setTab}
          />
          <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {error && (
              <div className="text-sm text-red-600 col-span-full">
                Failed to load data. Showing last known values if any.
              </div>
            )}

            {!data && isLoading && (
              <>
                <div className="col-span-1 md:col-span-2">
                  {tab === "live" ? <LiveMatchCarouselSkeleton /> : <ScheduleListSkeleton />}
                  <div className="mt-4">
                    <BlogListSkeleton />
                  </div>
                </div>
                <div className="col-span-1">
                  <PointsTableSkeleton />
                </div>
              </>
            )}

            {data && (
              <>
                {/* Main column */}
                <div className="col-span-1 md:col-span-2">
                  {tab === "live" ? (
                    <LiveMatchCarousel matches={liveMatches} />
                  ) : (
                    <ScheduleList items={scheduleByTab} />
                  )}
                  <div className="mt-4">
                    {blogLoading ? (
                      <BlogListSkeleton />
                    ) : (
                      <BlogList posts={blogData?.posts ?? []} />
                    )}
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="-mx-3 sm:mx-0 overflow-x-auto overflow-y-visible">
                    <div className="min-w-[320px] sm:min-w-0 px-3 sm:px-0">
                      <PointsTable rows={data.pointsTable} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <footer className="mt-8 text-center text-xs text-zinc-500 pb-[env(safe-area-inset-bottom)] px-3">
          © {new Date().getFullYear()} IPL CricBoard. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
