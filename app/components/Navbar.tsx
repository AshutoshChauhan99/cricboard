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
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-[#1F4571] text-white shadow-lg border-b border-[#183a60]">
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
          <Link href="/" className="text-xl font-semibold tracking-wide hover:opacity-80 transition-opacity">
            {title}
          </Link>
        </div>
        <div className="text-xs opacity-80">IPL T20</div>
      </div>
    </div>
  );
}


