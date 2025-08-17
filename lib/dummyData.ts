import { IplData, MatchInfo, MatchStatus, TeamStanding } from "./types";

const now = new Date();

const iso = (d: Date) => d.toISOString();

const addMinutes = (d: Date, mins: number) => new Date(d.getTime() + mins * 60000);

const dummyLive: MatchInfo[] = [
  {
    id: "match-live-1",
    status: "LIVE",
    matchTitle: "GT vs SRH",
    dateISO: "2025-04-10T19:30:00.000Z",
    localTime: "10 Apr 2025, 7:30 PM",
    venue: "Narendra Modi Stadium, Ahmedabad",
    teams: [
      { name: "Gujarat Titans", shortName: "GT", score: "180/5", overs: "20.0" },
      { name: "Sunrisers Hyderabad", shortName: "SRH", score: "175/7", overs: "20.0" },
    ],
    matchNumber: "Match 1",
    resultText: "Match in progress",
  },
  {
    id: "match-live-2",
    status: "LIVE",
    matchTitle: "MI vs CSK",
    dateISO: iso(now),
    localTime: now.toLocaleString(),
    venue: "Wankhede Stadium, Mumbai",
    teams: [
      { name: "Mumbai Indians", shortName: "MI", score: "145/6", overs: "16.4" },
      { name: "Chennai Super Kings", shortName: "CSK", score: "142/8", overs: "20" },
    ],
    matchNumber: "Match 2",
    resultText: "Match in progress",
  },
  {
    id: "match-live-3",
    status: "LIVE",
    matchTitle: "RCB vs KKR",
    dateISO: iso(now),
    localTime: now.toLocaleString(),
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    teams: [
      { name: "Royal Challengers Bengaluru", shortName: "RCB", score: "89/3", overs: "8.2" },
      { name: "Kolkata Knight Riders", shortName: "KKR", score: "186/7", overs: "20" },
    ],
    matchNumber: "Match 3",
    resultText: "Match in progress",
  },
];

const dummyUpcoming: MatchInfo[] = [
  {
    id: "match-1",
    status: "UPCOMING",
    matchTitle: "PBKS vs DC",
    dateISO: iso(addMinutes(now, 120)),
    localTime: addMinutes(now, 120).toLocaleString(),
    venue: "IS Bindra Stadium, Mohali",
    teams: [
      { name: "Punjab Kings", shortName: "PBKS" },
      { name: "Delhi Capitals", shortName: "DC" },
    ],
    matchNumber: "Match 4",
    resultText: "Match in progress",
  },
  {
    id: "match-2",
    status: "UPCOMING",
    matchTitle: "RR vs LSG",
    dateISO: iso(addMinutes(now, 300)),
    localTime: addMinutes(now, 300).toLocaleString(),
    venue: "Sawai Mansingh Stadium, Jaipur",
    teams: [
      { name: "Rajasthan Royals", shortName: "RR" },
      { name: "Lucknow Super Giants", shortName: "LSG" },
    ],
    matchNumber: "Match 5",
    resultText: "Match in progress",
  },
  {
    id: "match-3",
    status: "UPCOMING",
    matchTitle: "KKR vs GT",
    dateISO: iso(addMinutes(now, 480)),
    localTime: addMinutes(now, 480).toLocaleString(),
    venue: "Eden Gardens, Kolkata",
    teams: [
      { name: "Kolkata Knight Riders", shortName: "KKR" },
      { name: "Gujarat Titans", shortName: "GT" },
    ],
    matchNumber: "Match 6",
    resultText: "Match in progress",
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
    netRunRate: 0.412,
    points: 12,
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
    dateISO: iso(addMinutes(now, (i + 11) * 120)),
    localTime: addMinutes(now, (i + 11) * 120).toLocaleString(),
    venue: "Stadium " + (i + 11),
    teams: [
      { name: `Team A ${i + 1}`, shortName: `A${i + 1}` },
      { name: `Team B ${i + 1}`, shortName: `B${i + 1}` },
    ],
    matchNumber: `Match ${i + 11}`,
    resultText: "Team A won by 5 wickets",
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


