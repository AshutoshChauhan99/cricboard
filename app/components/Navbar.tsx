"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  title?: string;
  showBack?: boolean;
}

export default function Navbar({ title = "IPL CricBoard", showBack = false }: Props) {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-40 w-full bg-[#1F4571] text-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && (
            <button
              onClick={() => router.back()}
              className="p-1 hover:bg-white/10 rounded transition-colors"
              aria-label="Go back"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <Link href="/" className="text-lg font-bold tracking-wide hover:opacity-80 transition-opacity">
            {title}
          </Link>
        </div>
        <div className="text-xs opacity-80">IPL T20</div>
      </div>
    </div>
  );
}


