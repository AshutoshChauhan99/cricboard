import Navbar from "@/app/components/Navbar";
import LiveStrip from "@/app/components/LiveStrip";
import ClientLiveScorecardPage from "./ClientLiveScorecardPage";

export default function LiveMatchPage() {
  return (
    <div className="min-h-screen">
      <Navbar title="IPL CricBoard" showBack={true} />
      <LiveStrip match={null} />
      <main className="mx-auto max-w-7xl px-4 py-4">
        <ClientLiveScorecardPage />
      </main>
    </div>
  );
}


