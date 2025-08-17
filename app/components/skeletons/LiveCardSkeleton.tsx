"use client";

export default function LiveCardSkeleton() {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-white/70 dark:bg-zinc-900/50 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-3 w-12 rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-3 w-28 rounded bg-zinc-200 dark:bg-zinc-800" />
      </div>
      <div className="mt-3 h-5 w-48 rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="mt-2 h-3 w-64 rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="mt-4 grid grid-cols-2 gap-4">
        {[0, 1].map((i) => (
          <div key={i}>
            <div className="h-4 w-32 rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="mt-2 h-3 w-20 rounded bg-zinc-200 dark:bg-zinc-800" />
          </div>
        ))}
      </div>
      <div className="mt-4 h-3 w-40 rounded bg-zinc-200 dark:bg-zinc-800" />
    </div>
  );
}


