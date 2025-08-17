import { NextRequest } from "next/server";
import { buildDummyScorecard } from "@/lib/dummyScorecard";

export const revalidate = 0;

export async function GET(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const data = buildDummyScorecard(id);
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}


