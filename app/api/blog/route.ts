
import { buildDummyBlog } from "@/lib/dummyBlog";

export const revalidate = 0;

export async function GET() {
  const posts = buildDummyBlog();
  return new Response(JSON.stringify({ posts }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}


