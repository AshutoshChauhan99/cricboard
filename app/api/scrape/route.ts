
import { scrapeIpl } from "@/lib/scraper";

export const revalidate = 0;

export async function GET() {
  const data = await scrapeIpl();
  return new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}


