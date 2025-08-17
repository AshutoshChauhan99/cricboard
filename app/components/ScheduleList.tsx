"use client";
import { MatchInfo } from "@/lib/types";
import Link from "next/link";

interface Props {
  items: MatchInfo[];
}

export default function ScheduleList({ items }: Props) {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="px-4 py-2 text-sm font-semibold bg-zinc-50 dark:bg-zinc-900">Schedule</div>
      <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
        {items.map((m) => (
          <li key={m.id}>
            <Link
              href={`/match/${m.id}`}
              className="group flex items-center justify-between p-3 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
            >
              <div className="min-w-0">
                <div className="text-sm font-medium truncate group-hover:text-[#1F4571]">
                  {m.matchTitle}
                </div>
                <div className="text-xs text-zinc-500 truncate">
                  {new Date(m.dateISO).toLocaleString()} • {m.venue}
                </div>
              </div>
              <div className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-900/60 ml-3 shrink-0">
                {m.status}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


