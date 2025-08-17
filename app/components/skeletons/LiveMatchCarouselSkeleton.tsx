"use client";

export default function LiveMatchCarouselSkeleton() {
    return (
        <div className="relative animate-pulse">
            {/* Header Skeleton */}
            <div className="flex items-center justify-between mb-4">
                <div className="h-6 w-32 rounded bg-zinc-200 dark:bg-zinc-800" />
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                    <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                </div>
            </div>

            {/* Match Card Skeleton */}
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-white/70 dark:bg-zinc-900/50 mb-4">
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

            {/* Dots Skeleton */}
            <div className="flex justify-center gap-2 mb-4">
                {[0, 1, 2].map((i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                ))}
            </div>

            {/* Match List Skeleton */}
            <div className="p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg">
                <div className="h-3 w-24 rounded bg-zinc-200 dark:bg-zinc-800 mb-2" />
                <div className="space-y-2">
                    {[0, 1, 2].map((i) => (
                        <div key={i} className="flex items-center justify-between p-2">
                            <div className="h-3 w-20 rounded bg-zinc-200 dark:bg-zinc-800" />
                            <div className="h-3 w-16 rounded bg-zinc-200 dark:bg-zinc-800" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
