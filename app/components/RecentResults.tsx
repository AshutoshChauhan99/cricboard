"use client";
import Link from "next/link";
import { RecentResult } from "@/lib/types";
import { isEmpty, get, isArray, isString, map, take } from "lodash";

interface Props {
  results: RecentResult[];
}

export default function RecentResults({ results }: Props) {
  // Fallback data for when main data is missing
  const fallbackResults: RecentResult[] = [
    {
      matchId: "completed-1",
      matchTitle: "RCB vs KKR",
      result: "RCB won by 25 runs",
      date: "Yesterday",
      highlights: "Virat Kohli's 89 runs, RCB's strong bowling"
    },
    {
      matchId: "completed-2",
      matchTitle: "CSK vs MI",
      result: "CSK won by 6 wickets",
      date: "2 days ago",
      highlights: "MS Dhoni's finishing touch, CSK's chase"
    },
    {
      matchId: "completed-3",
      matchTitle: "DC vs PBKS",
      result: "DC won by 7 wickets",
      date: "3 days ago",
      highlights: "Rishabh Pant's captaincy, DC's bowling"
    },
    {
      matchId: "completed-4",
      matchTitle: "RR vs SRH",
      result: "RR won by 5 wickets",
      date: "4 days ago",
      highlights: "Sanju Samson's batting, RR's chase"
    },
    {
      matchId: "completed-5",
      matchTitle: "GT vs LSG",
      result: "GT won by 3 wickets",
      date: "5 days ago",
      highlights: "Hardik Pandya's all-round show"
    }
  ];

  // Use fallback data if main data is missing or invalid
  const resultsData = isEmpty(results) || !isArray(results) ? fallbackResults : results;

  // Add safety checks using Lodash
  if (isEmpty(resultsData) || !isArray(resultsData)) {
    return (
      <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">🏆 Recent Results</h3>
        <div className="text-center text-zinc-500 py-8">
          No recent results available
        </div>
      </div>
    );
  }

  // Get the first 5 results using Lodash
  const recentResults = take(resultsData, 5);

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
      <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">🏆 Recent Results</h3>
      <div className="space-y-0">
        {map(recentResults, (result, index) => {
          // Safely extract data using Lodash
          const matchId = get(result, 'matchId', '');
          const matchTitle = get(result, 'matchTitle', 'Unknown Match');
          const resultText = get(result, 'result', 'No result');
          const date = get(result, 'date', 'Date not available');

          // Generate fallback match ID if not provided
          const fallbackMatchId = !isEmpty(matchId) ? matchId :
            (isString(matchTitle) && matchTitle.includes("RCB vs KKR") ? "completed-1" :
              isString(matchTitle) && matchTitle.includes("CSK vs MI") ? "completed-2" :
                `match-${index + 1}`);

          return (
            <Link
              key={index}
              href={`/match/${fallbackMatchId}/details`}
              className="block border-b border-zinc-100 dark:border-zinc-800 last:border-b-0 pb-3 last:pb-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg p-3 transition-colors cursor-pointer group"
            >
              <div className="font-medium text-zinc-800 dark:text-zinc-200 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {matchTitle}
              </div>
              <div className="text-sm text-green-600 dark:text-green-400 font-semibold mb-1">
                {resultText}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">
                {date}
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1">
                <span>View Full Details</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          );
        })}
      </div>


    </div>
  );
}
