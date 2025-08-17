import * as cheerio from "cheerio";
import { IplData, MatchInfo, MatchStatus, TeamStanding, TeamInfo } from "./types";
import { buildDummyData } from "./dummyData";

type CacheEntry = { data: IplData; expiresAt: number };

const IN_MEMORY_CACHE: { entry: CacheEntry | null } = { entry: null };
const CACHE_TTL_MS = 60 * 1000; // 1 minute

const IPL_BASE = "https://www.iplt20.com";

async function fetchHtml(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
      "Cache-Control": "no-cache",
    },
    // Some hosts require no-cors or keepalive; Next's edge/runtime fetch is fine in node
    cache: "no-store",
  } as RequestInit);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return await res.text();
}

function parseMatchesFromHome($: cheerio.CheerioAPI): {
  liveOrNextMatch: MatchInfo | null;
  upcoming: MatchInfo[];
} {
  // NOTE: IPL website markup changes. We keep this resilient but minimal; fallback to dummy data when selectors fail.
  const upcoming: MatchInfo[] = [];
  let liveOrNextMatch: MatchInfo | null = null;

  // Attempt a generic card parse
  $("a, div").each((_, el) => {
    const el$ = $(el);
    const text = el$.text().trim();
    if (!text) return;
    const normalized = text.replace(/\s+/g, " ");
    const hasVs = /\bvs\b/i.test(normalized);
    const hasDate = /\b\d{1,2}\s\w+\b|\b\d{2}:\d{2}\b/i.test(normalized);
    if (hasVs && hasDate && normalized.length < 160) {
      const teamsMatch = normalized.match(/([A-Za-z .&()]+)\s+vs\s+([A-Za-z .&()]+)/i);
      if (teamsMatch) {
        const teamA = teamsMatch[1].trim();
        const teamB = teamsMatch[2].trim();
        const id = `${teamA}-${teamB}-${Math.random().toString(36).slice(2, 8)}`;
        const teams: TeamInfo[] = [{ name: teamA }, { name: teamB }];

        const m: MatchInfo = {
          id,
          status: "UPCOMING" as MatchStatus,
          matchTitle: `${teamA} vs ${teamB}`,
          dateISO: new Date().toISOString(),
          venue: "TBD",
          teams,                // <-- typed
          localTime: "",
          matchNumber: "",
          resultText: "",
        };
        upcoming.push(m);
        if (!liveOrNextMatch) liveOrNextMatch = m;
      }
    }
  });

  return { liveOrNextMatch, upcoming };
}

function parsePointsTable($: cheerio.CheerioAPI): TeamStanding[] {
  const standings: TeamStanding[] = [];
  $("table tr").each((i, tr) => {
    const cells = $(tr)
      .find("td, th")
      .map((_, c) => $(c).text().trim())
      .get();
    // Very loose parse: expect something like: Team, P, W, L, NR, NRR, Pts
    if (cells.length >= 7 && i > 0) {
      const teamName = cells[0];
      const matchesPlayed = Number(cells[1]) || 0;
      const wins = Number(cells[2]) || 0;
      const losses = Number(cells[3]) || 0;
      const noResults = Number(cells[4]) || 0;
      const netRunRate = parseFloat(cells[5]) || 0;
      const points = Number(cells[6]) || 0;
      if (teamName) {
        standings.push({
          teamName,
          matchesPlayed,
          wins,
          losses,
          ties: 0,
          noResults,
          netRunRate,
          points,
        });
      }
    }
  });
  return standings;
}

export async function scrapeIpl(): Promise<IplData> {
  try {
    const now = Date.now();
    if (IN_MEMORY_CACHE.entry && IN_MEMORY_CACHE.entry.expiresAt > now) {
      return IN_MEMORY_CACHE.entry.data;
    }

    const [homeHtml, pointsHtml] = await Promise.all([
      fetchHtml(IPL_BASE),
      fetchHtml(`${IPL_BASE}/points-table/men/2024`),
    ]);

    const $home = cheerio.load(homeHtml);
    const $points = cheerio.load(pointsHtml);

    const { liveOrNextMatch, upcoming } = parseMatchesFromHome($home);
    const pointsTable = parsePointsTable($points);

    const data: IplData = {
      lastUpdatedISO: new Date().toISOString(),
      liveOrNextMatch: liveOrNextMatch || null,
      upcoming,
      pointsTable,
      schedule: upcoming, // For simplicity; full schedule can be scraped from schedule page similarly
      source: "scraped",
    };

    // If scrape is clearly empty, fallback to dummy
    if (!data.liveOrNextMatch && data.upcoming.length === 0 && data.pointsTable.length === 0) {
      const dummy = buildDummyData();
      IN_MEMORY_CACHE.entry = { data: dummy, expiresAt: now + CACHE_TTL_MS };
      return dummy;
    }

    IN_MEMORY_CACHE.entry = { data, expiresAt: now + CACHE_TTL_MS };
    return data;
  } catch (err) {
    console.log("Scrape failed, falling back to my dummy data:", err);
    const dummy = buildDummyData();
    IN_MEMORY_CACHE.entry = { data: dummy, expiresAt: Date.now() + CACHE_TTL_MS };
    return dummy;
  }
}

export function getCachedIpl(): IplData | null {
  const entry = IN_MEMORY_CACHE.entry;
  if (!entry) return null;
  if (entry.expiresAt < Date.now()) return null;
  return entry.data;
}

export function setCachedIpl(data: IplData): void {
  IN_MEMORY_CACHE.entry = { data, expiresAt: Date.now() + CACHE_TTL_MS };
}


