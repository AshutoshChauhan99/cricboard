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

export interface CurrentOverProgress {
  currentOver: string;
  ballsInOver: number;
  matchSituation?: string;
}

export type CurrentOverProgressOrNull = CurrentOverProgress | null;

export interface MatchResult {
  winner: string;
  resultText?: string;
  resultType?: string;
  margin: string;
  method?: string;
  highlights?: string;
  keyStats?: {
    topScorer: string;
    topWicketTaker: string;
    playerOfTheMatch: string;
  };
  summary?: string;
}

export interface Player {
  name: string;
  role: string;
}

export interface DetailedPlayer extends Player {
  battingStyle?: string;
  bowlingStyle?: string;
  nationality?: string;
  age?: number;
  matches?: number;
  runs?: number;
  wickets?: number;
  catches?: number;
  stumpings?: number;
}

export interface Playing11 {
  team1: Player[];
  team2: Player[];
}

export interface InningsScore {
  teamName: string;
  score?: string;
  runs?: number;
  wickets: string | number;
  overs: string;
  batters: BatterScore[];
  bowlers: BowlerSpell[];
  yetToBat: Player[];
}

export interface ScorecardData {
  id: string;
  matchId: string;
  matchTitle: string;
  venue: string;
  status: MatchStatus;
  matchNumber?: string;
  innings: InningsScore[];
  currentOverProgress?: CurrentOverProgressOrNull;
  currentRunRate?: string;
  requiredRunRate?: string;
  matchSituation?: string;
  matchResult?: MatchResult;
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
  playing11: Player[];
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
  localTime?: string;
  status: MatchStatus;
  venue: VenueInfo;
  team1: TeamPreview;
  team2: TeamPreview;
  playing11?: Playing11;
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

export interface RecentResult {
  matchId: string;
  matchTitle: string;
  result: string;
  date: string;
  highlights: string;
}

export interface CommentaryEntry {
  over: string;
  ball: number;
  description: string;
  runs: number;
  wickets: number;
  extras: number;
  batter: string;
  bowler: string;
  timestamp: string;
}

export interface ComprehensiveMatchData {
  matchId: string;
  matchTitle: string;
  status: MatchStatus;
  dateISO: string;
  localTime: string;
  venue: {
    name: string;
    city: string;
    country: string;
    capacity: number;
    established: number;
    pitchType: string;
    averageFirstInnings: number;
    averageSecondInnings: number;
    highestTotal: number;
    lowestTotal: number;
    description: string;
    facilities: string[];
  };
  weather: {
    temperature: number;
    humidity: number;
    windSpeed: number;
    windDirection: string;
    conditions: string;
    visibility: number;
    precipitation: number;
  };
  umpires: {
    onField: {
      first: string;
      second: string;
    };
    third: string;
    fourth: string;
    matchReferee: string;
  };
  playing11: {
    team1: DetailedPlayer[];
    team2: DetailedPlayer[];
  };
  commentary?: CommentaryEntry[];
  scorecard?: {
    status?: string;
    innings?: {
      teamName: string;
      runs: number;
      wickets: number;
      overs: string;
      batters: BatterScore[];
      bowlers: BowlerSpell[];
      yetToBat: Player[];
    }[];
    currentOverProgress?: {
      currentOver: string;
      ballsInOver: number;
      matchSituation: string;
    } | null;
    matchResult?: {
      resultType: string;
      winner: string;
      margin: string;
      highlights: string;
      keyStats: {
        topScorer: string;
        topWicketTaker: string;
        playerOfTheMatch: string;
      };
      summary: string;
    };
  };
  result?: {
    resultType: string;
    winner: string;
    margin: string;
    highlights: string;
    keyStats: {
      topScorer: string;
      topWicketTaker: string;
      playerOfTheMatch: string;
    };
    summary: string;
  };
  highlights?: string[];
  keyMoments?: string[];
  postMatchAnalysis?: string;
}


