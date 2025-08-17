import { notFound } from "next/navigation";
import { comprehensiveMatchData } from "@/lib/comprehensiveMatchData";
import ComprehensiveMatchDetails from "../ComprehensiveMatchDetails";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function MatchDetailsPage({ params }: Props) {
  const { id } = await params;
  const matchData = comprehensiveMatchData[id];

  if (!matchData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <ComprehensiveMatchDetails data={matchData} />
      </div>
    </div>
  );
}
