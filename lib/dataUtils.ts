import { IplData } from "./types";

// Server-side data fetching function
export async function getIplData(): Promise<IplData> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/scrape`, {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Failed to fetch IPL data:", error);
  }

  // Return fallback data if API fails
  return {
    lastUpdatedISO: new Date().toISOString(),
    liveOrNextMatch: null,
    upcoming: [],
    pointsTable: [],
    schedule: [],
    source: "dummy"
  };
}
