import Navbar from "@/app/components/Navbar";
import LiveStrip from "@/app/components/LiveStrip";
import ClientScorecardPage from "./ClientScorecardPage";
export const dynamic = "force-dynamic";

export default async function MatchPage() {
  return (
    <div className="min-h-screen">
      <Navbar title="IPL CricBoard" showBack={true} />
      <LiveStrip match={null} />
      <main className="mx-auto max-w-7xl px-4 py-4 pt-16">
        <ClientScorecardPage />
      </main>
    </div>
  );
}


