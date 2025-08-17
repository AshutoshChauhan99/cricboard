"use client";
import { ScorecardData } from "@/lib/types";

interface Props {
  data: ScorecardData;
}

export default function Scorecard({ data }: Props) {
  // Get the first innings data for batting and bowling
  const firstInnings = data.innings[0];
  const batting = firstInnings?.batters || [];
  const bowling = firstInnings?.bowlers || [];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Batting */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="mb-3 sm:mb-4">
          <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Batting</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-1 sm:p-2 text-left">Batter</th>
                <th className="p-1 sm:p-2 text-right">R</th>
                <th className="p-1 sm:p-2 text-right">B</th>
                <th className="p-1 sm:p-2 text-right">4s</th>
                <th className="p-1 sm:p-2 text-right">6s</th>
                <th className="p-1 sm:p-2 text-right">SR</th>
                <th className="p-1 sm:p-2">Dismissal</th>
              </tr>
            </thead>
            <tbody>
              {batting.map((b, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="p-1 sm:p-2 whitespace-nowrap font-medium text-xs sm:text-sm">{b.name}</td>
                  <td className="p-1 sm:p-2 text-right text-xs sm:text-sm">{b.runs}</td>
                  <td className="p-1 sm:p-2 text-right text-xs sm:text-sm">{b.balls}</td>
                  <td className="p-1 sm:p-2 text-right text-xs sm:text-sm">{b.fours}</td>
                  <td className="p-1 sm:p-2 text-right text-xs sm:text-sm">{b.sixes}</td>
                  <td className="p-1 sm:p-2 text-right text-xs sm:text-sm">{b.strikeRate.toFixed(1)}</td>
                  <td className="p-1 sm:p-2 text-zinc-500 text-xs sm:text-sm">{b.dismissal ?? "not out"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bowling */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="mb-3 sm:mb-4">
          <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Bowling</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-1 sm:p-2 text-left">Bowler</th>
                <th className="p-1 sm:p-2 text-right">O</th>
                <th className="p-1 sm:p-2 text-right">M</th>
                <th className="p-1 sm:p-2 text-right">R</th>
                <th className="p-1 sm:p-2 text-right">W</th>
                <th className="p-1 sm:p-2 text-right">ECO</th>
              </tr>
            </thead>
            <tbody>
              {bowling.map((b, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="p-1 sm:p-2 whitespace-nowrap font-medium text-xs sm:text-sm">{b.name}</td>
                  <td className="p-1 sm:p-2 text-right text-xs sm:text-sm">{b.overs}</td>
                  <td className="p-1 sm:p-2 text-right text-xs sm:text-sm">{b.maidens}</td>
                  <td className="p-1 sm:p-2 text-right text-xs sm:text-sm">{b.runs}</td>
                  <td className="p-1 sm:p-2 text-right text-xs sm:text-sm">{b.wickets}</td>
                  <td className="p-1 sm:p-2 text-right text-xs sm:text-sm">{b.economy.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


