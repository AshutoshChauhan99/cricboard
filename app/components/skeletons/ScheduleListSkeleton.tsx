"use client";

export default function ScheduleListSkeleton() {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden animate-pulse">
      <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900">
        <div className="h-4 w-24 rounded bg-zinc-200 dark:bg-zinc-800" />
      </div>
      <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
        {Array.from({ length: 6 }).map((_, i) => (
          <li key={i} className="p-3">
            <div className="h-4 w-48 rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="mt-2 h-3 w-64 rounded bg-zinc-200 dark:bg-zinc-800" />
          </li>
        ))}
      </ul>
    </div>
  );
}


