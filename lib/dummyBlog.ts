import { BlogPost } from "./types";

export function buildDummyBlog(): BlogPost[] {
  const now = Date.now();
  return Array.from({ length: 6 }).map((_, i) => ({
    id: `post-${i + 1}`,
    title: `Analysis: Key takeaways from last night's thriller ${i + 1}`,
    summary:
      "A deep dive into batting intent in the powerplay, death-overs execution, and tactical match-ups.",
    author: i % 2 ? "Cric Analyst" : "Guest Writer",
    publishedISO: new Date(now - i * 86400000).toISOString(),
    tags: ["IPL", "Tactics", "Analysis"],
    imageUrl: undefined,
    url: "#",
  }));
}


