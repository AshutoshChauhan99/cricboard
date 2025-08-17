import { NextRequest } from "next/server";
import { buildDummyScorecard } from "@/lib/dummyScorecard";
import { buildDummyCompletedMatch } from "@/lib/dummyCompletedMatch";

export const revalidate = 0;

export async function GET(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  
  // Return different types of matches based on ID
  if (id.startsWith('completed-')) {
    const data = buildDummyCompletedMatch(id);
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }
  
  if (id.startsWith('live-')) {
    // For live matches, return live scorecard
    const data = buildDummyScorecard(id);
    data.status = "LIVE";
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }
  
  // Default: return live scorecard
  const data = buildDummyScorecard(id);
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}


