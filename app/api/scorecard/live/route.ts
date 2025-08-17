
import { buildDummyScorecard } from "@/lib/dummyScorecard";
import { scrapeIpl } from "@/lib/scraper";

export const revalidate = 0;

export async function GET() {
  const data = await scrapeIpl();
  const id = data.liveOrNextMatch?.status === "LIVE" ? data.liveOrNextMatch.id : data.liveOrNextMatch?.id || "match-live";
  const scorecard = buildDummyScorecard(id);
  return new Response(JSON.stringify(scorecard), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}


