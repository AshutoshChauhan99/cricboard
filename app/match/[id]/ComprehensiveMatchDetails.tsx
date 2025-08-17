"use client";
import { useState } from "react";
import { ComprehensiveMatchData, Player, CommentaryEntry } from "@/lib/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ComprehensiveTabs";
import Scorecard from "@/app/components/Scorecard";
import { isEmpty, get, isArray, isNumber, size, map } from "lodash";

interface Props {
  data: ComprehensiveMatchData;
}

export default function ComprehensiveMatchDetails({ data }: Props) {
  const [activeTab, setActiveTab] = useState("scorecard");

  // Comprehensive fallback data for when main data is missing
  const fallbackData: ComprehensiveMatchData = {
    matchId: "fallback-match",
    matchTitle: "RCB vs KKR - IPL 2024",
    status: "COMPLETED",
    dateISO: new Date().toISOString(),
    localTime: new Date().toLocaleTimeString(),
    venue: {
      name: "M. Chinnaswamy Stadium",
      city: "Bengaluru",
      country: "India",
      capacity: 40000,
      established: 1969,
      pitchType: "Batting friendly",
      averageFirstInnings: 185,
      averageSecondInnings: 165,
      highestTotal: 263,
      lowestTotal: 82,
      description: "Known for its batting-friendly pitch and high-scoring matches. The short boundaries and flat track make it a paradise for batsmen.",
      facilities: ["Floodlights", "Dugouts", "Media Center", "VIP Boxes", "Parking", "Food Courts"]
    },
    weather: {
      temperature: 28,
      humidity: 65,
      windSpeed: 12,
      windDirection: "South-West",
      conditions: "Partly Cloudy",
      visibility: 8,
      precipitation: 0
    },
    umpires: {
      onField: {
        first: "Nitin Menon",
        second: "Anil Chaudhary"
      },
      third: "Virender Sharma",
      fourth: "Javagal Srinath",
      matchReferee: "Javagal Srinath"
    },
    playing11: {
      team1: [
        {
          name: "Virat Kohli",
          role: "Batsman",
          battingStyle: "Right-handed",
          nationality: "Indian",
          age: 35,
          matches: 237,
          runs: 7263
        },
        {
          name: "Faf du Plessis",
          role: "Batsman",
          battingStyle: "Right-handed",
          nationality: "South African",
          age: 39,
          matches: 130,
          runs: 4175
        },
        {
          name: "Glenn Maxwell",
          role: "All-rounder",
          battingStyle: "Right-handed",
          bowlingStyle: "Right-arm off-spin",
          nationality: "Australian",
          age: 35,
          matches: 124,
          runs: 2719,
          wickets: 29
        }
      ],
      team2: [
        {
          name: "Shreyas Iyer",
          role: "Batsman",
          battingStyle: "Right-handed",
          nationality: "Indian",
          age: 29,
          matches: 156,
          runs: 4123
        },
        {
          name: "Andre Russell",
          role: "All-rounder",
          battingStyle: "Right-handed",
          bowlingStyle: "Right-arm fast",
          nationality: "Jamaican",
          age: 35,
          matches: 98,
          runs: 1897,
          wickets: 89
        },
        {
          name: "Sunil Narine",
          role: "All-rounder",
          battingStyle: "Left-handed",
          bowlingStyle: "Right-arm off-spin",
          nationality: "Trinidadian",
          age: 35,
          matches: 162,
          runs: 1047,
          wickets: 163
        }
      ]
    },
    commentary: [
      {
        over: "18.2",
        ball: 2,
        description: "Virat Kohli hits a beautiful cover drive for four runs!",
        runs: 4,
        wickets: 0,
        extras: 0,
        batter: "Virat Kohli",
        bowler: "Andre Russell",
        timestamp: "19:45:30"
      },
      {
        over: "18.1",
        ball: 1,
        description: "Single taken, good running between the wickets",
        runs: 1,
        wickets: 0,
        extras: 0,
        batter: "Virat Kohli",
        bowler: "Andre Russell",
        timestamp: "19:45:15"
      }
    ],
    scorecard: {
      status: "COMPLETED",
      innings: [
        {
          teamName: "Royal Challengers Bangalore",
          runs: 185,
          wickets: 6,
          overs: "20.0",
          batters: [
            {
              name: "Virat Kohli",
              runs: 89,
              balls: 47,
              fours: 8,
              sixes: 2,
              strikeRate: 189.36,
              dismissal: "c Karthik b Chahal"
            }
          ],
          bowlers: [],
          yetToBat: []
        }
      ],
      currentOverProgress: null,
      matchResult: {
        resultType: "Win",
        winner: "Royal Challengers Bangalore",
        margin: "25 runs",
        highlights: "Virat Kohli's masterclass innings of 89 runs",
        keyStats: {
          topScorer: "Virat Kohli (89)",
          topWicketTaker: "Yuzvendra Chahal (3/25)",
          playerOfTheMatch: "Virat Kohli"
        },
        summary: "RCB posted a competitive total and defended it successfully"
      }
    },
    result: {
      resultType: "Win",
      winner: "Royal Challengers Bangalore",
      margin: "25 runs",
      highlights: "Virat Kohli's masterclass innings of 89 runs",
      keyStats: {
        topScorer: "Virat Kohli (89)",
        topWicketTaker: "Yuzvendra Chahal (3/25)",
        playerOfTheMatch: "Virat Kohli"
      },
      summary: "RCB posted a competitive total and defended it successfully"
    },
    highlights: [
      "Virat Kohli's brilliant 89-run innings",
      "RCB's strong batting performance",
      "Excellent bowling by Yuzvendra Chahal",
      "KKR's chase fell short despite good start"
    ],
    keyMoments: [
      "18th over: Virat Kohli's explosive batting",
      "15th over: Strategic timeout by RCB",
      "10th over: RCB reached 100 runs",
      "5th over: Early wicket of Faf du Plessis"
    ],
    postMatchAnalysis: "Royal Challengers Bangalore showed great character in this match. Virat Kohli's innings was the highlight, demonstrating his class and experience. The team's bowling unit, led by Chahal, executed their plans perfectly to restrict KKR to a manageable total."
  };

  // Use fallback data if main data is missing or invalid
  const matchData = isEmpty(data) ? fallbackData : data;

  // Add safety checks for required data using Lodash
  if (isEmpty(matchData)) {
    return (
      <div className="text-center text-zinc-500 py-8">
        No match data available
      </div>
    );
  }

  // Ensure all required data exists, use fallbacks if missing
  const venue = get(matchData, 'venue', fallbackData.venue);
  const weather = get(matchData, 'weather', fallbackData.weather);
  const umpires = get(matchData, 'umpires', fallbackData.umpires);
  const playing11 = get(matchData, 'playing11', fallbackData.playing11);
  const commentary = get(matchData, 'commentary', fallbackData.commentary);
  const highlights = get(matchData, 'highlights', fallbackData.highlights);
  const keyMoments = get(matchData, 'keyMoments', fallbackData.keyMoments);
  const postMatchAnalysis = get(matchData, 'postMatchAnalysis', fallbackData.postMatchAnalysis);

  const renderPlayerCard = (player: Player) => {
    const playerName = get(player, 'name', 'Unknown Player');
    const playerRole = get(player, 'role', 'Unknown');
    const playerBattingStyle = get(player, 'battingStyle');
    const playerBowlingStyle = get(player, 'bowlingStyle');
    const playerNationality = get(player, 'nationality', 'Unknown');
    const playerAge = get(player, 'age', 0);
    const playerMatches = get(player, 'matches', 0);
    const playerRuns = get(player, 'runs', 0);
    const playerWickets = get(player, 'wickets', 0);
    const playerCatches = get(player, 'catches', 0);
    const playerStumpings = get(player, 'stumpings', 0);

    return (
      <div key={playerName} className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4 border border-zinc-200 dark:border-zinc-600">
        <div className="flex items-center justify-between mb-3">
          <h5 className="font-semibold text-zinc-800 dark:text-zinc-200">{playerName}</h5>
          <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
            {playerRole}
          </span>
        </div>

        <div className="space-y-2 text-sm">
          {playerBattingStyle && (
            <div className="flex justify-between">
              <span className="text-zinc-600 dark:text-zinc-400">Batting:</span>
              <span className="text-zinc-800 dark:text-zinc-200">{playerBattingStyle}</span>
            </div>
          )}

          {playerBowlingStyle && (
            <div className="flex justify-between">
              <span className="text-zinc-600 dark:text-zinc-400">Bowling:</span>
              <span className="text-zinc-800 dark:text-zinc-200">{playerBowlingStyle}</span>
            </div>
          )}

          <div className="flex justify-between">
            <span className="text-zinc-600 dark:text-zinc-400">Nationality:</span>
            <span className="text-zinc-800 dark:text-zinc-200">{playerNationality}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-zinc-600 dark:text-zinc-400">Age:</span>
            <span className="text-zinc-800 dark:text-zinc-200">{playerAge} years</span>
          </div>

          <div className="flex justify-between">
            <span className="text-zinc-600 dark:text-zinc-400">Matches:</span>
            <span className="text-zinc-800 dark:text-zinc-200">{playerMatches}</span>
          </div>

          {isNumber(playerRuns) && playerRuns > 0 && (
            <div className="flex justify-between">
              <span className="text-zinc-600 dark:text-zinc-400">Runs:</span>
              <span className="text-zinc-800 dark:text-zinc-200">{playerRuns}</span>
            </div>
          )}

          {isNumber(playerWickets) && playerWickets > 0 && (
            <div className="flex justify-between">
              <span className="text-zinc-600 dark:text-zinc-400">Wickets:</span>
              <span className="text-zinc-800 dark:text-zinc-200">{playerWickets}</span>
            </div>
          )}

          {isNumber(playerCatches) && playerCatches > 0 && (
            <div className="flex justify-between">
              <span className="text-zinc-600 dark:text-zinc-400">Catches:</span>
              <span className="text-zinc-800 dark:text-zinc-200">{playerCatches}</span>
            </div>
          )}

          {isNumber(playerStumpings) && playerStumpings > 0 && (
            <div className="flex justify-between">
              <span className="text-zinc-600 dark:text-zinc-400">Stumpings:</span>
              <span className="text-zinc-800 dark:text-zinc-200">{playerStumpings}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderCommentaryEntry = (entry: CommentaryEntry, index: number) => {
    const over = get(entry, 'over', '0');
    const ball = get(entry, 'ball', 0);
    const description = get(entry, 'description', 'No description');
    const runs = get(entry, 'runs', 0);
    const wickets = get(entry, 'wickets', 0);
    const extras = get(entry, 'extras', 0);
    const batter = get(entry, 'batter', 'Unknown');
    const bowler = get(entry, 'bowler', 'Unknown');
    const timestamp = get(entry, 'timestamp', '');

    return (
      <div key={index} className="border-l-4 border-blue-500 pl-4 py-3 bg-zinc-50 dark:bg-zinc-700 rounded-r-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <span className="text-sm font-mono bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
              {over}.{ball}
            </span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              {timestamp}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {runs > 0 && (
              <span className="text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                +{runs} runs
              </span>
            )}
            {wickets > 0 && (
              <span className="text-sm bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">
                Wicket
              </span>
            )}
            {extras > 0 && (
              <span className="text-sm bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">
                +{extras} extras
              </span>
            )}
          </div>
        </div>

        <p className="text-zinc-800 dark:text-zinc-200 mb-2">{description}</p>

        <div className="text-xs text-zinc-600 dark:text-zinc-400">
          <span className="mr-3">Batter: <span className="font-medium">{batter}</span></span>
          <span>Bowler: <span className="font-medium">{bowler}</span></span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Match Header */}
      <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
        <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-2">
          {get(data, 'matchTitle', 'Match Details')}
        </h1>
        <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <span>📅 {get(data, 'localTime', 'Date not available')}</span>
          <span>📍 {get(venue, 'name', 'Venue not available')}</span>
          <span className={`px-2 py-1 rounded text-xs font-medium ${get(data, 'status') === 'LIVE' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
              get(data, 'status') === 'COMPLETED' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
            }`}>
            {get(data, 'status', 'UNKNOWN')}
          </span>
        </div>
      </div>

      {/* Venue and Weather Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
          <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">🏟️ Venue Information</h3>
          <div className="space-y-3">
            <div>
              <span className="text-zinc-500">Name:</span>
              <div className="font-medium">{get(venue, 'name', 'Not available')}</div>
            </div>
            <div>
              <span className="text-zinc-500">Location:</span>
              <div className="font-medium">{get(venue, 'city', 'Unknown')}, {get(venue, 'country', 'Unknown')}</div>
            </div>
            <div>
              <span className="text-zinc-500">Capacity:</span>
              <div className="font-medium">{get(venue, 'capacity', 0).toLocaleString()} spectators</div>
            </div>
            <div>
              <span className="text-zinc-500">Established:</span>
              <div className="font-medium">{get(venue, 'established', 'Unknown')}</div>
            </div>
            <div>
              <span className="text-zinc-500">Pitch Type:</span>
              <div className="font-medium">{get(venue, 'pitchType', 'Not specified')}</div>
            </div>
            <div>
              <span className="text-zinc-500">Average Scores:</span>
              <div className="font-medium">1st Innings: {get(venue, 'averageFirstInnings', 0)}, 2nd Innings: {get(venue, 'averageSecondInnings', 0)}</div>
            </div>
            <div>
              <span className="text-zinc-500">Record Totals:</span>
              <div className="font-medium">Highest: {get(venue, 'highestTotal', 0)}, Lowest: {get(venue, 'lowestTotal', 0)}</div>
            </div>
            <div>
              <span className="text-zinc-500">Description:</span>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{get(venue, 'description', 'No description available')}</div>
            </div>
            <div>
              <span className="text-zinc-500">Facilities:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {!isEmpty(get(venue, 'facilities')) && isArray(get(venue, 'facilities')) ?
                  map(get(venue, 'facilities'), (facility, index) => (
                    <span key={index} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-700 text-xs rounded">
                      {facility}
                    </span>
                  )) :
                  <span className="text-zinc-500 text-xs">No facilities information available</span>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
          <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">🌤️ Weather Conditions</h3>
          <div className="space-y-3">
            <div>
              <span className="text-zinc-500">Temperature:</span>
              <div className="font-medium">{get(weather, 'temperature', 0)}°C</div>
            </div>
            <div>
              <span className="text-zinc-500">Humidity:</span>
              <div className="font-medium">{get(weather, 'humidity', 0)}%</div>
            </div>
            <div>
              <span className="text-zinc-500">Wind:</span>
              <div className="font-medium">{get(weather, 'windSpeed', 0)} km/h {get(weather, 'windDirection', 'Unknown')}</div>
            </div>
            <div>
              <span className="text-zinc-500">Conditions:</span>
              <div className="font-medium">{get(weather, 'conditions', 'Unknown')}</div>
            </div>
            <div>
              <span className="text-zinc-500">Visibility:</span>
              <div className="font-medium">{get(weather, 'visibility', 0)} km</div>
            </div>
            <div>
              <span className="text-zinc-500">Precipitation:</span>
              <div className="font-medium">{get(weather, 'precipitation', 0)} mm</div>
            </div>
          </div>
        </div>
      </div>

      {/* Umpire Information */}
      <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">👨‍⚖️ Match Officials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <span className="text-zinc-500 text-sm">On-Field Umpires:</span>
            <div className="font-medium mt-1">
              <div>{get(umpires, 'onField.first', 'Not assigned')}</div>
              <div>{get(umpires, 'onField.second', 'Not assigned')}</div>
            </div>
          </div>
          <div>
            <span className="text-zinc-500 text-sm">Third Umpire:</span>
            <div className="font-medium mt-1">{get(umpires, 'third', 'Not assigned')}</div>
          </div>
          <div>
            <span className="text-zinc-500 text-sm">Fourth Umpire:</span>
            <div className="font-medium mt-1">{get(umpires, 'fourth', 'Not assigned')}</div>
          </div>
          <div>
            <span className="text-zinc-500 text-sm">Match Referee:</span>
            <div className="font-medium mt-1">{get(umpires, 'matchReferee', 'Not assigned')}</div>
          </div>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="scorecard">Scorecard</TabsTrigger>
          <TabsTrigger value="playing11">Playing XI</TabsTrigger>
          <TabsTrigger value="commentary">Commentary</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="scorecard" className="mt-6">
          <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">📊 Match Scorecard</h3>
            {get(data, 'scorecard.innings') ? (
              <Scorecard data={{
                id: get(data, 'matchId', ''),
                matchId: get(data, 'matchId', ''),
                matchTitle: get(data, 'matchTitle', ''),
                venue: get(data, 'venue.name', ''),
                status: get(data, 'status', 'COMPLETED'),
                matchNumber: 'Match',
                currentOverProgress: get(data, 'scorecard.currentOverProgress'),
                currentRunRate: '0.00',
                requiredRunRate: '0.00',
                matchSituation: 'Match completed',
                lastUpdatedISO: get(data, 'dateISO', ''),
                matchResult: get(data, 'scorecard.matchResult'),
                innings: get(data, 'scorecard.innings', [])
              }} />
            ) : (
              <div className="text-center text-zinc-500 py-4">No scorecard data available</div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="playing11" className="mt-6">
          <div className="space-y-6">
            {/* Team 1 Playing XI */}
            <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
              <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
                🏏 Team 1 Playing XI
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {!isEmpty(get(playing11, 'team1')) && isArray(get(playing11, 'team1')) ?
                  map(get(playing11, 'team1'), (player) => renderPlayerCard(player)) :
                  <div className="col-span-3 text-center text-zinc-500 py-4">No team 1 data available</div>
                }
              </div>
            </div>

            {/* Team 2 Playing XI */}
            <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
              <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
                🏏 Team 2 Playing XI
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {!isEmpty(get(playing11, 'team2')) && isArray(get(playing11, 'team2')) ?
                  map(get(playing11, 'team2'), (player) => renderPlayerCard(player)) :
                  <div className="col-span-3 text-center text-zinc-500 py-4">No team 2 data available</div>
                }
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="commentary" className="mt-6">
          <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">🎙️ Ball-by-Ball Commentary</h3>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {!isEmpty(commentary) && isArray(commentary) && size(commentary) > 0 ?
                map(commentary, (entry, index) => renderCommentaryEntry(entry, index)) :
                <div className="text-center text-zinc-500 py-4">No commentary data available</div>
              }
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analysis" className="mt-6">
          <div className="space-y-6">
            {/* Match Highlights */}
            <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
              <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">⭐ Match Highlights</h4>
              {!isEmpty(highlights) && isArray(highlights) && size(highlights) > 0 ? (
                <ul className="space-y-2">
                  {map(highlights, (highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span className="text-zinc-700 dark:text-zinc-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center text-zinc-500 py-4">No highlights available</div>
              )}
            </div>

            {/* Key Moments */}
            <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
              <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">🎯 Key Moments</h4>
              {!isEmpty(keyMoments) && isArray(keyMoments) && size(keyMoments) > 0 ? (
                <ul className="space-y-2">
                  {map(keyMoments, (moment, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-zinc-700 dark:text-zinc-300">{moment}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center text-zinc-500 py-4">No key moments available</div>
              )}
            </div>

            {/* Post Match Analysis */}
            <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
              <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">📝 Post Match Analysis</h4>
              {!isEmpty(postMatchAnalysis) ? (
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {postMatchAnalysis}
                </p>
              ) : (
                <div className="text-center text-zinc-500 py-4">No post match analysis available</div>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
