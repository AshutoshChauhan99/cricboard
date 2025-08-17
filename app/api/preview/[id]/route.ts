import { NextRequest } from "next/server";
import { buildDummyPreview } from "@/lib/dummyPreview";

export const revalidate = 0;

export async function GET(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;

  // For live and completed matches, return minimal preview data
  if (id.startsWith('live-') || id.startsWith('completed-')) {
    // Return minimal data for live/completed matches to avoid interference
    const minimalData = {
      matchId: id,
      status: id.startsWith('live-') ? 'LIVE' : 'COMPLETED',
      matchTitle: 'Match Details',
      dateISO: new Date().toISOString(),
      venue: { name: 'Venue' },
      team1: { name: 'Team 1', shortName: 'T1', playing11: [] },
      team2: { name: 'Team 2', shortName: 'T2', playing11: [] },
      officials: { onField: [] },
      weather: { summary: 'Weather' },
      lastUpdatedISO: new Date().toISOString(),
    };

    return new Response(JSON.stringify(minimalData), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  // For upcoming matches, return full preview data
  const data = buildDummyPreview(id);
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}


