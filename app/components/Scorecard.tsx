"use client";
import { ScorecardData } from "@/lib/types";

interface Props {
  data: ScorecardData;
}

export default function Scorecard({ data }: Props) {
  return (
    <div className="space-y-4">
      {data.innings.map((inn) => (
        <div key={inn.teamName} className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <div className="px-4 py-2 text-sm font-semibold bg-zinc-50 dark:bg-zinc-900 flex items-center justify-between">
            <div>{inn.teamName}</div>
            <div className="text-xs text-zinc-600">{inn.score}/{inn.wickets} ({inn.overs})</div>
          </div>
          <div className="p-3">
            <div className="text-xs font-semibold mb-1">Batting</div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-zinc-500">
                    <th className="p-2">Batter</th>
                    <th className="p-2 text-right">R</th>
                    <th className="p-2 text-right">B</th>
                    <th className="p-2 text-right">4s</th>
                    <th className="p-2 text-right">6s</th>
                    <th className="p-2 text-right">SR</th>
                    <th className="p-2">Dismissal</th>
                  </tr>
                </thead>
                <tbody>
                  {inn.batters.map((b) => (
                    <tr key={b.name} className="border-t border-zinc-100 dark:border-zinc-800">
                      <td className="p-2 whitespace-nowrap font-medium">{b.name}</td>
                      <td className="p-2 text-right">{b.runs}</td>
                      <td className="p-2 text-right">{b.balls}</td>
                      <td className="p-2 text-right">{b.fours}</td>
                      <td className="p-2 text-right">{b.sixes}</td>
                      <td className="p-2 text-right">{b.strikeRate.toFixed(1)}</td>
                      <td className="p-2 text-zinc-500">{b.dismissal ?? "not out"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-xs font-semibold mt-4 mb-1">Bowling</div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-zinc-500">
                    <th className="p-2">Bowler</th>
                    <th className="p-2 text-right">O</th>
                    <th className="p-2 text-right">M</th>
                    <th className="p-2 text-right">R</th>
                    <th className="p-2 text-right">W</th>
                    <th className="p-2 text-right">Econ</th>
                  </tr>
                </thead>
                <tbody>
                  {inn.bowlers.map((bw) => (
                    <tr key={bw.name} className="border-t border-zinc-100 dark:border-zinc-800">
                      <td className="p-2 whitespace-nowrap font-medium">{bw.name}</td>
                      <td className="p-2 text-right">{bw.overs}</td>
                      <td className="p-2 text-right">{bw.maidens}</td>
                      <td className="p-2 text-right">{bw.runs}</td>
                      <td className="p-2 text-right">{bw.wickets}</td>
                      <td className="p-2 text-right">{bw.economy.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


