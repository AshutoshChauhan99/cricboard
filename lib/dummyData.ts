import { IplData, MatchInfo, MatchStatus, TeamStanding } from "./types";

const now = new Date();

const iso = (d: Date) => d.toISOString();

const addMinutes = (d: Date, mins: number) => new Date(d.getTime() + mins * 60000);

const dummyLive: MatchInfo[] = [
  {
    id: "live-1",
    status: "LIVE",
    matchTitle: "Gujarat Titans vs Sunrisers Hyderabad",
    dateISO: "2025-04-10T19:30:00.000Z",
    localTime: "10 Apr 2025, 7:30 PM",
    venue: "Narendra Modi Stadium, Ahmedabad",
    teams: [
      { name: "Gujarat Titans", shortName: "GT", score: "168/4", overs: "19.3" },
      { name: "Sunrisers Hyderabad", shortName: "SRH", score: "165/7", overs: "20.0" },
    ],
    matchNumber: "Match 12",
    resultText: "GT needs 2 runs from 3 balls to win",
  },
  {
    id: "live-2",
    status: "LIVE",
    matchTitle: "Mumbai Indians vs Chennai Super Kings",
    dateISO: iso(now),
    localTime: now.toLocaleString(),
    venue: "Wankhede Stadium, Mumbai",
    teams: [
      { name: "Mumbai Indians", shortName: "MI", score: "145/6", overs: "16.4" },
      { name: "Chennai Super Kings", shortName: "CSK", score: "142/8", overs: "20" },
    ],
    matchNumber: "Match 13",
    resultText: "MI needs 3 runs from 20 balls to win",
  },
  {
    id: "live-3",
    status: "LIVE",
    matchTitle: "Royal Challengers Bengaluru vs Kolkata Knight Riders",
    dateISO: iso(now),
    localTime: now.toLocaleString(),
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    teams: [
      { name: "Royal Challengers Bengaluru", shortName: "RCB", score: "89/3", overs: "8.2" },
      { name: "Kolkata Knight Riders", shortName: "KKR", score: "186/7", overs: "20" },
    ],
    matchNumber: "Match 14",
    resultText: "RCB needs 98 runs from 70 balls to win",
  },
];

const dummyUpcoming: MatchInfo[] = [
  {
    id: "match-1",
    status: "UPCOMING",
    matchTitle: "Punjab Kings vs Delhi Capitals",
    dateISO: iso(addMinutes(now, 120)),
    localTime: addMinutes(now, 120).toLocaleString(),
    venue: "IS Bindra Stadium, Mohali",
    teams: [
      { name: "Punjab Kings", shortName: "PBKS" },
      { name: "Delhi Capitals", shortName: "DC" },
    ],
    matchNumber: "Match 15",
    resultText: "Match starts in 2 hours",
  },
  {
    id: "match-2",
    status: "UPCOMING",
    matchTitle: "Rajasthan Royals vs Lucknow Super Giants",
    dateISO: iso(addMinutes(now, 300)),
    localTime: addMinutes(now, 300).toLocaleString(),
    venue: "Sawai Mansingh Stadium, Jaipur",
    teams: [
      { name: "Rajasthan Royals", shortName: "RR" },
      { name: "Lucknow Super Giants", shortName: "LSG" },
    ],
    matchNumber: "Match 16",
    resultText: "Match starts in 5 hours",
  },
  {
    id: "match-3",
    status: "UPCOMING",
    matchTitle: "Kolkata Knight Riders vs Gujarat Titans",
    dateISO: iso(addMinutes(now, 480)),
    localTime: addMinutes(now, 480).toLocaleString(),
    venue: "Eden Gardens, Kolkata",
    teams: [
      { name: "Kolkata Knight Riders", shortName: "KKR" },
      { name: "Gujarat Titans", shortName: "GT" },
    ],
    matchNumber: "Match 17",
    resultText: "Match starts in 8 hours",
  },
];

const dummyPoints: TeamStanding[] = [
  {
    teamName: "Kolkata Knight Riders",
    matchesPlayed: 10,
    wins: 8,
    losses: 2,
    ties: 0,
    noResults: 0,
    netRunRate: 1.234,
    points: 16,
  },
  {
    teamName: "Rajasthan Royals",
    matchesPlayed: 10,
    wins: 7,
    losses: 3,
    ties: 0,
    noResults: 0,
    netRunRate: 0.876,
    points: 14,
  },
  {
    teamName: "Chennai Super Kings",
    matchesPlayed: 10,
    wins: 6,
    losses: 4,
    ties: 0,
    noResults: 0,
    netRunRate: 0.543,
    points: 12,
  },
  {
    teamName: "Gujarat Titans",
    matchesPlayed: 10,
    wins: 6,
    losses: 4,
    ties: 0,
    noResults: 0,
    netRunRate: 0.321,
    points: 12,
  },
  {
    teamName: "Mumbai Indians",
    matchesPlayed: 10,
    wins: 5,
    losses: 5,
    ties: 0,
    noResults: 0,
    netRunRate: 0.123,
    points: 10,
  },
  {
    teamName: "Sunrisers Hyderabad",
    matchesPlayed: 10,
    wins: 5,
    losses: 5,
    ties: 0,
    noResults: 0,
    netRunRate: -0.098,
    points: 10,
  },
  {
    teamName: "Royal Challengers Bengaluru",
    matchesPlayed: 10,
    wins: 4,
    losses: 6,
    ties: 0,
    noResults: 0,
    netRunRate: -0.234,
    points: 8,
  },
  {
    teamName: "Delhi Capitals",
    matchesPlayed: 10,
    wins: 4,
    losses: 6,
    ties: 0,
    noResults: 0,
    netRunRate: -0.456,
    points: 8,
  },
  {
    teamName: "Punjab Kings",
    matchesPlayed: 10,
    wins: 3,
    losses: 7,
    ties: 0,
    noResults: 0,
    netRunRate: -0.678,
    points: 6,
  },
  {
    teamName: "Lucknow Super Giants",
    matchesPlayed: 10,
    wins: 2,
    losses: 8,
    ties: 0,
    noResults: 0,
    netRunRate: -0.890,
    points: 4,
  },
];

const dummySchedule: MatchInfo[] = [
  // 10 upcoming matches
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: `upcoming-${i + 1}`,
    status: "UPCOMING" as MatchStatus,
    matchTitle: `Upcoming Team X vs Team Y ${i + 1}`,
    dateISO: iso(addMinutes(now, (i + 1) * 120)),
    localTime: addMinutes(now, (i + 1) * 120).toLocaleString(),
    venue: "Stadium " + (i + 1),
    teams: [
      { name: `Team X ${i + 1}`, shortName: `X${i + 1}` },
      { name: `Team Y ${i + 1}`, shortName: `Y${i + 1}` },
    ],
    matchNumber: `Match ${i + 1}`,
    resultText: "",
  })),
  // 10 completed matches
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: `completed-${i + 1}`,
    status: "COMPLETED" as MatchStatus,
    matchTitle: `Completed Team A vs Team B ${i + 1}`,
    dateISO: iso(addMinutes(now, -(i + 1) * 24 * 60)), // Past dates
    localTime: addMinutes(now, -(i + 1) * 24 * 60).toLocaleString(),
    venue: `Venue ${i + 1}`,
    teams: [
      { name: `Team A ${i + 1}`, shortName: `TA${i + 1}` },
      { name: `Team B ${i + 1}`, shortName: `TB${i + 1}` },
    ],
    matchNumber: `Match ${i + 1}`,
    resultText: `Team ${i % 2 === 0 ? 'A' : 'B'} won by ${Math.floor(Math.random() * 50) + 10} runs`,
  })),
];

export const buildDummyData = (): IplData => {
  const source: IplData["source"] = "dummy";
  const liveOrNextMatch = dummyLive[0]; // First live match
  const lastUpdatedISO = new Date().toISOString();
  return {
    lastUpdatedISO,
    liveOrNextMatch,
    upcoming: dummyUpcoming,
    pointsTable: dummyPoints,
    schedule: [...dummyLive, ...dummyUpcoming, ...dummySchedule],
    source,
  };
};


