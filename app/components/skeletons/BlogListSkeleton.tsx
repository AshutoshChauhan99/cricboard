"use client";

export default function BlogListSkeleton() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-800 py-8">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="text-center mb-8">
          <div className="h-8 bg-zinc-200 dark:bg-zinc-700 rounded-lg w-80 mx-auto mb-2 animate-pulse"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-96 mx-auto animate-pulse"></div>
        </div>

        {/* Blog Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-200 dark:border-zinc-700">
              {/* Image Skeleton */}
              <div className="h-48 bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-600 animate-pulse"></div>

              {/* Content Skeleton */}
              <div className="p-6">
                {/* Tags and Date */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-6 bg-zinc-200 dark:bg-zinc-700 rounded-full w-20 animate-pulse"></div>
                  <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-16 animate-pulse"></div>
                </div>

                {/* Title */}
                <div className="h-6 bg-zinc-200 dark:bg-zinc-700 rounded w-full mb-3 animate-pulse"></div>
                <div className="h-6 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4 mb-3 animate-pulse"></div>

                {/* Summary */}
                <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-full mb-2 animate-pulse"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-5/6 mb-2 animate-pulse"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-4/6 mb-4 animate-pulse"></div>

                {/* Author and Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-zinc-200 dark:bg-zinc-700 rounded-full animate-pulse"></div>
                    <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-16 animate-pulse"></div>
                  </div>
                  <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-20 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Skeleton */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-zinc-200 dark:bg-zinc-700 px-8 py-4 rounded-full animate-pulse">
            <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
            <div className="h-5 bg-zinc-300 dark:bg-zinc-600 rounded w-32"></div>
            <div className="w-5 h-5 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


