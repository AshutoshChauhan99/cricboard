import { ScorecardData } from "./types";

export function buildDummyScorecard(matchId: string): ScorecardData {
  return {
    matchId,
    matchTitle: "GT vs SRH",
    venue: "Narendra Modi Stadium, Ahmedabad",
    status: "LIVE",
    lastUpdatedISO: new Date().toISOString(),
    innings: [
      {
        teamName: "Gujarat Titans",
        runs: 168,
        wickets: 4,
        overs: "19.3",
        batters: [
          { name: "S Gill", runs: 72, balls: 48, fours: 8, sixes: 2, strikeRate: 150 },
          { name: "W Saha", runs: 18, balls: 15, fours: 2, sixes: 0, strikeRate: 120, dismissal: "c wk b B Kumar" },
          { name: "S Sudharsan", runs: 45, balls: 30, fours: 4, sixes: 1, strikeRate: 150 },
        ],
        bowlers: [
          { name: "B Kumar", overs: "4", maidens: 0, runs: 35, wickets: 1, economy: 8.75 },
          { name: "T Natarajan", overs: "4", maidens: 0, runs: 29, wickets: 2, economy: 7.25 },
        ],
      },
      {
        teamName: "Sunrisers Hyderabad",
        runs: 165,
        wickets: 7,
        overs: "20",
        batters: [
          { name: "T Head", runs: 55, balls: 34, fours: 6, sixes: 3, strikeRate: 161.8 },
          { name: "A Sharma", runs: 22, balls: 20, fours: 3, sixes: 0, strikeRate: 110 },
        ],
        bowlers: [
          { name: "M Shami", overs: "4", maidens: 0, runs: 28, wickets: 2, economy: 7.0 },
          { name: "R Khan", overs: "4", maidens: 0, runs: 34, wickets: 1, economy: 8.5 },
        ],
      },
    ],
  };
}


