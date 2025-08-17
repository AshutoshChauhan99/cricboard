"use client";
import { BlogPost } from "@/lib/types";
import Link from "next/link";

export default function BlogList({ posts }: { posts: BlogPost[] }) {

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            Latest Cricket News & Analysis
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Stay updated with the latest IPL insights, match analysis, and cricket stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-zinc-200 dark:border-zinc-700">
              {/* Blog Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🏏</div>
                    <div className="text-sm font-medium opacity-90">
                      {post.title.split(' ').slice(0, 3).join(' ')}...
                    </div>
                  </div>
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Cricket News
                  </span>
                  <span className="text-xs text-zinc-500">
                    {new Date(post.publishedISO).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3">
                  {post.summary}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {post.author.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                      {post.author}
                    </span>
                  </div>

                  <Link
                    href={post.url || "#"}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="text-lg">📰</span>
            <span className="font-semibold">View All Cricket News</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}


