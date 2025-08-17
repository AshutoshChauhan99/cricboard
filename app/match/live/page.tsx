import Navbar from "@/app/components/Navbar";
import LiveStrip from "@/app/components/LiveStrip";
import ClientLiveScorecardPage from "./ClientLiveScorecardPage";

export default function LiveMatchPage() {
  return (
    <div className="min-h-screen">
      <Navbar title="IPL CricBoard" showBack={true} />
      <LiveStrip match={null} />
      <main className="flex-1 min-h-0 pt-16">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <ClientLiveScorecardPage />
        </div>
      </main>
    </div>
  );
}


