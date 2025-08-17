"use client";
import { MatchInfo } from "@/lib/types";
import Link from "next/link";

interface Props {
  match: MatchInfo | null;
}

export default function LiveCard({ match }: Props) {
  if (!match) {
    return (
      <div className="card">
        <div className="text-center text-gray-500">No live match right now.</div>
      </div>
    );
  }

  const [t1, t2] = match.teams;
  const isLive = match.status === "LIVE";
  const isUpcoming = match.status === "UPCOMING";
  const isCompleted = match.status === "COMPLETED";

  const getStatusColor = () => {
    if (isLive) return "text-red-600";
    if (isUpcoming) return "text-emerald-600";
    if (isCompleted) return "text-purple-600";
    return "text-gray-600";
  };

  const getStatusIcon = () => {
    if (isLive) return "🔴";
    if (isUpcoming) return "🟢";
    if (isCompleted) return "🏆";
    return "⚪";
  };

  const getActionButton = () => {
    if (isLive) {
      return (
        <Link
          href={`/match/${match.id}`}
          className="btn btn-primary w-[250px] justify-center"
        >
          View Live Scorecard
        </Link>
      );
    }

    if (isUpcoming) {
      return (
        <Link
          href={`/match/${match.id}`}
          className="btn btn-secondary w-[250px] justify-center"
        >
          View Preview
        </Link>
      );
    }

    if (isCompleted) {
      return (
        <Link
          href={`/match/${match.id}`}
          className="btn btn-primary w-[250px] justify-center"
        >
          View Result
        </Link>
      );
    }

    return (
      <Link
        href={`/match/${match.id}`}
        className="btn btn-primary w-[250px] justify-center"
      >
        View Details
      </Link>
    );
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className={`text-xs font-semibold tracking-wide ${getStatusColor()}`}>
          {getStatusIcon()} {match.status}
        </div>
        <div className="text-xs text-gray-500">{new Date(match.dateISO).toLocaleString()}</div>
      </div>
      <div className="h3 mb-2">{match.matchTitle}</div>
      <div className="text-sm text-gray-600 mb-4">{match.venue}</div>
      <div className="grid grid-cols-2 gap-4 items-center mb-4">
        <div>
          <div className="font-medium">{t1.name}</div>
          <div className="text-sm text-gray-600">{t1.score ?? "-"} {t1.overs ? `(${t1.overs})` : ""}</div>
        </div>
        <div>
          <div className="font-medium">{t2.name}</div>
          <div className="text-sm text-gray-600">{t2.score ?? "-"} {t2.overs ? `(${t2.overs})` : ""}</div>
        </div>
      </div>
      {match.resultText && <div className="text-sm text-gray-700 mb-4">{match.resultText}</div>}
      <div className="mt-4">
        {getActionButton()}
      </div>
    </div>
  );
}


