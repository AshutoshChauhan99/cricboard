"use client";
import { TeamStanding } from "@/lib/types";

interface Props {
  rows: TeamStanding[];
}

export default function PointsTable({ rows }: Props) {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white/70 dark:bg-zinc-900/50">
      <div className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200">Points Table</div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs sm:text-sm">
          <thead className="bg-zinc-100 dark:bg-zinc-900/50">
            <tr>
              <th className="text-left p-1 sm:p-2">Team</th>
              <th className="text-right p-1 sm:p-2">P</th>
              <th className="text-right p-1 sm:p-2">W</th>
              <th className="text-right p-1 sm:p-2">L</th>
              <th className="text-right p-1 sm:p-2">NR</th>
              <th className="text-right p-1 sm:p-2">NRR</th>
              <th className="text-right p-1 sm:p-2">Pts</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.teamName} className="odd:bg-white even:bg-zinc-50/50 dark:odd:bg-zinc-950 dark:even:bg-zinc-900/30">
                <td className="p-1 sm:p-2 whitespace-nowrap text-zinc-800 dark:text-zinc-200">{r.teamName}</td>
                <td className="p-1 sm:p-2 text-right">{r.matchesPlayed}</td>
                <td className="p-1 sm:p-2 text-right">{r.wins}</td>
                <td className="p-1 sm:p-2 text-right">{r.losses}</td>
                <td className="p-1 sm:p-2 text-right">{r.noResults}</td>
                <td className="p-1 sm:p-2 text-right">{r.netRunRate.toFixed(3)}</td>
                <td className="p-1 sm:p-2 text-right font-semibold">{r.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


