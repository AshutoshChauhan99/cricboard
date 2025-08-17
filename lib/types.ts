export type MatchStatus = "LIVE" | "UPCOMING" | "COMPLETED";
export type Team = { name: string; shortName: string };

export interface TeamStanding {
  teamName: string;
  matchesPlayed: number;
  wins: number;
  losses: number;
  ties: number;
  noResults: number;
  netRunRate: number;
  points: number;
}

export type TeamInfo = {
  name: string;
  shortName?: string;
  score?: string;
  overs?: string;
};

export type MatchInfo = {
  id: string;
  status: "UPCOMING" | "LIVE" | "COMPLETED";
  matchTitle: string;
  dateISO: string;
  localTime: string;
  venue: string;
  teams: TeamInfo[];
  matchNumber: string;
  resultText: string;
};

export interface IplData {
  lastUpdatedISO: string;
  liveOrNextMatch: MatchInfo | null;
  upcoming: MatchInfo[];
  pointsTable: TeamStanding[];
  schedule: MatchInfo[];
  source: "scraped" | "dummy";
}

export interface BatterScore {
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
  dismissal?: string;
}

export interface BowlerSpell {
  name: string;
  overs: string;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
}

export interface InningsScore {
  teamName: string;
  runs: number;
  wickets: number;
  overs: string;
  batters: BatterScore[];
  bowlers: BowlerSpell[];
}

export interface ScorecardData {
  matchId: string;
  matchTitle: string;
  venue: string;
  status: MatchStatus;
  innings: InningsScore[];
  lastUpdatedISO: string;
}

export interface VenueInfo {
  name: string;
  city?: string;
  country?: string;
  capacity?: string;
  pitchDescription?: string;
}

export interface TeamPreview {
  name: string;
  shortName?: string;
  playing11: string[];
}

export interface OfficialInfo {
  onField: string[];
  thirdUmpire?: string;
  referee?: string;
}

export interface WeatherInfo {
  summary: string;
  temperatureC?: number;
  humidityPct?: number;
  windKph?: number;
  precipitationPct?: number;
}

export interface MatchPreviewData {
  matchId: string;
  matchTitle: string;
  dateISO: string;
  status: MatchStatus;
  venue: VenueInfo;
  teams: [TeamPreview, TeamPreview];
  officials: OfficialInfo;
  weather: WeatherInfo;
  commentary?: string[];
  lastUpdatedISO: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  author: string;
  publishedISO: string;
  tags?: string[];
  imageUrl?: string;
  url?: string;
}


