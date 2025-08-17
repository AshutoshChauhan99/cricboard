"use client";
import { MatchInfo } from "@/lib/types";

interface Props {
  match: MatchInfo | null;
}

export default function LiveStrip({ match }: Props) {
  return (
    <div className="w-full bg-[#153556] text-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-2">
        {match ? (
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto">
            <span className="inline-flex items-center gap-1 text-xs bg-red-600 px-2 py-0.5 rounded">
              <span className="inline-block h-2 w-2 rounded-full bg-white animate-pulse" />
              LIVE
            </span>
            <span className="whitespace-nowrap font-semibold text-xs sm:text-sm">{match.matchTitle}</span>
            <span className="opacity-80 whitespace-nowrap text-xs sm:text-sm">{match.venue}</span>
            <span className="opacity-80 whitespace-nowrap text-xs sm:text-sm">{new Date(match.dateISO).toLocaleTimeString()}</span>
          </div>
        ) : (
          <div className="opacity-90 text-xs sm:text-sm">No live match. Showing upcoming fixtures.</div>
        )}
      </div>
    </div>
  );
}


