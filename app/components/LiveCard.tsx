"use client";
import { MatchInfo } from "@/lib/types";
import Link from "next/link";

interface Props {
  match: MatchInfo | null;
}

export default function LiveCard({ match }: Props) {
  if (!match) {
    return (
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="text-sm text-zinc-500">No live match right now.</div>
      </div>
    );
  }
  const [t1, t2] = match.teams;
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-white/70 dark:bg-zinc-900/50">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold tracking-wide text-emerald-600">{match.status}</div>
        <div className="text-xs text-zinc-500">{new Date(match.dateISO).toLocaleString()}</div>
      </div>
      <div className="mt-2 text-lg font-semibold">{match.matchTitle}</div>
      <div className="mt-1 text-sm text-zinc-500">{match.venue}</div>
      <div className="mt-3 grid grid-cols-2 gap-4 items-center">
        <div>
          <div className="font-medium">{t1.name}</div>
          <div className="text-sm text-zinc-600">{t1.score ?? "-"} {t1.overs ? `(${t1.overs})` : ""}</div>
        </div>
        <div>
          <div className="font-medium">{t2.name}</div>
          <div className="text-sm text-zinc-600">{t2.score ?? "-"} {t2.overs ? `(${t2.overs})` : ""}</div>
        </div>
      </div>
      {match.resultText && <div className="mt-3 text-sm text-zinc-700">{match.resultText}</div>}
      {match.status === "LIVE" && (
        <div className="mt-4">
          <Link
            href={`/match/${match.id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#1F4571] hover:bg-[#183a60] px-3 py-1.5 rounded"
          >
            View scorecard
          </Link>
        </div>
      )}
    </div>
  );
}


