"use client";
import { useState } from "react";
import { MatchInfo } from "@/lib/types";
import LiveCard from "./LiveCard";

interface Props {
  matches: MatchInfo[];
}

export default function LiveMatchCarousel({ matches }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!matches || matches.length === 0) {
    return (
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">No live matches right now.</div>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % matches.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + matches.length) % matches.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Live Matches Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">
          Live Matches ({matches.length})
        </h2>
        <div className="flex items-center gap-2 self-end">
          <button
            onClick={prevSlide}
            disabled={matches.length <= 1}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors"
            aria-label="Previous match"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={matches.length <= 1}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors"
            aria-label="Next match"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Current Match Card */}
      <div className="mb-4">
        <LiveCard match={matches[currentIndex]} />
      </div>

      {/* Dots Navigation */}
      {matches.length > 1 && (
        <div className="flex justify-center gap-2">
          {matches.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex
                ? "bg-[#1F4571] dark:bg-blue-400"
                : "bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500"
                }`}
              aria-label={`Go to match ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Match List Preview */}
      {matches.length > 1 && (
        <div className="mt-4 p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg">
          <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-2">
            All Live Matches
          </div>
          <div className="space-y-2">
            {matches.map((match, index) => (
              <div
                key={match.id}
                className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${index === currentIndex
                  ? "bg-[#1F4571] text-white"
                  : "hover:bg-zinc-200 dark:hover:bg-zinc-800"
                  }`}
                onClick={() => goToSlide(index)}
              >
                <div className="text-sm font-medium">{match.matchTitle}</div>
                <div className="text-xs opacity-80">{match.venue.split(",")[0]}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
