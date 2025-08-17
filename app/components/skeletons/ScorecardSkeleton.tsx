"use client";

export default function ScorecardSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {Array.from({ length: 2 }).map((_, block) => (
        <div key={block} className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900">
            <div className="h-4 w-40 rounded bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <div className="p-3 space-y-3">
            {Array.from({ length: 6 }).map((__, i) => (
              <div key={i} className="h-5 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


