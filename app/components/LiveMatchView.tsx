"use client";
import { ScorecardData, InningsScore, BatterScore, BowlerSpell, Player } from "@/lib/types";
import { isEmpty, get } from "lodash";

interface Props {
  scorecardData: ScorecardData;
}

export default function LiveMatchView({ scorecardData }: Props) {
  if (isEmpty(scorecardData)) {
    return (
      <div className="card">
        <div className="text-center text-gray-500">No live match data available</div>
      </div>
    );
  }

  const matchTitle = get(scorecardData, 'matchTitle', 'Live Match');
  const status = get(scorecardData, 'status', 'LIVE');
  const venue = get(scorecardData, 'venue', '');
  const matchNumber = get(scorecardData, 'matchNumber', '');
  const innings = get(scorecardData, 'innings', []);
  const currentOverProgress = get(scorecardData, 'currentOverProgress', {});
  const currentRunRate = get(scorecardData, 'currentRunRate', '');
  const requiredRunRate = get(scorecardData, 'requiredRunRate', '');
  const matchSituation = get(scorecardData, 'matchSituation', '');

  // Extract venue name if venue is an object
  const venueName = typeof venue === 'object' && venue !== null ? get(venue, 'name', '') : venue;

  const getTeamScore = (teamInnings: InningsScore) => {
    if (!teamInnings) return { score: '-', overs: '-', wickets: '-' };
    return {
      score: get(teamInnings, 'score', '-'),
      overs: get(teamInnings, 'overs', '-'),
      wickets: get(teamInnings, 'wickets', '-')
    };
  };

  const getCurrentBattingTeam = () => {
    if (!innings || innings.length === 0) return null;

    // Find the team that is currently batting (has overs > 0)
    for (const inning of innings) {
      const overs = get(inning, 'overs', '0');
      if (overs && overs !== '0' && overs !== '20.0') {
        return inning;
      }
    }
    return null;
  };

  const getChasingTeam = () => {
    if (!innings || innings.length < 2) return null;

    const team1Score = get(innings[0], 'score', '0');
    const team2Score = get(innings[1], 'score', '0');
    const team2Overs = get(innings[1], 'overs', '0');

    // If team 2 has started batting, they are chasing
    if (team2Overs && team2Overs !== '0') {
      return {
        team: innings[1],
        target: parseInt(team1Score) + 1,
        currentScore: parseInt(team2Score),
        remainingOvers: 20 - parseFloat(team2Overs)
      };
    }
    return null;
  };



  const chasingTeam = getChasingTeam();
  const currentBattingTeam = getCurrentBattingTeam();

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Match Header */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="text-center">
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 mb-2 sm:mb-3 animate-pulse">
            🔴 {status}
          </div>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-2">
            {matchTitle}
          </h1>
          {matchNumber && (
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{matchNumber}</p>
          )}
        </div>

        {/* Live Match Info */}
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-6">
            {innings.map((inning: InningsScore, index: number) => {
              const teamScore = getTeamScore(inning);
              const teamName = get(inning, 'teamName', `Team ${index + 1}`);
              const isBatting = inning === currentBattingTeam;

              return (
                <div key={index} className={`text-center p-3 sm:p-4 rounded-lg border-2 ${isBatting
                  ? 'bg-red-50 border-red-200'
                  : 'bg-gray-50 border-gray-200'
                  }`}>
                  <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${isBatting
                    ? 'text-red-900'
                    : 'text-gray-900'
                    }`}>
                    {teamName}
                    {isBatting && <span className="ml-2">🏏</span>}
                  </h3>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                    {teamScore.score}/{teamScore.wickets}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {teamScore.overs} overs
                  </div>
                  {isBatting && (
                    <div className="mt-2 text-xs text-red-600 font-medium">
                      Currently Batting
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Current Over Progress */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
            <div className="mb-3 sm:mb-4">
              <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Current Over Progress</h2>
              {currentOverProgress && 'currentOver' in currentOverProgress && (
                <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  Over {currentOverProgress.currentOver} • Ball {currentOverProgress.ballsInOver + 1}/6
                </div>
              )}
            </div>
            <div className="grid grid-cols-6 gap-1">
              {Array.from({ length: 6 }, (_, i) => {
                const isCurrentBall = currentOverProgress && 'ballsInOver' in currentOverProgress && currentOverProgress.ballsInOver === i;
                const isCompletedBall = currentOverProgress && 'ballsInOver' in currentOverProgress && currentOverProgress.ballsInOver > i;

                return (
                  <div key={i} className="text-center">
                    <div className={`w-5 h-5 mx-auto rounded-full flex items-center justify-center text-xs font-medium transition-all duration-200 ${isCurrentBall
                        ? 'bg-red-500 text-white shadow-lg scale-110 ring-2 ring-red-300 animate-pulse'
                        : isCompletedBall
                          ? 'bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                      }`}>
                      {i + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Brief Scorecard */}
          {currentBattingTeam && (
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
              <div className="mb-3 sm:mb-4">
                <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Brief Scorecard</h2>
              </div>
              
              {/* Current Batsmen */}
              <div className="mb-4">
                <h3 className="text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300 mb-2">Current Batsmen</h3>
                <div className="space-y-2">
                  {currentBattingTeam.batters.slice(0, 2).map((batter, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                          {batter.name}
                        </span>
                        {index === 0 && (
                          <span className="text-xs px-1.5 py-0.5 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 rounded-full">
                            ✨
                          </span>
                        )}
                      </div>
                      <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                        {batter.runs} ({batter.balls})
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Wickets */}
              {currentBattingTeam.batters.filter(b => b.dismissal).length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300 mb-2">Recent Wickets</h3>
                  <div className="space-y-2">
                    {currentBattingTeam.batters
                      .filter(b => b.dismissal)
                      .slice(-3)
                      .map((batter, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-red-50 dark:bg-red-900/30 rounded-lg">
                          <span className="text-xs sm:text-sm text-red-800 dark:text-red-200">
                            {batter.name}
                          </span>
                          <span className="text-xs sm:text-sm text-red-600 dark:text-red-400">
                            {batter.runs} - {batter.dismissal}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Current Bowler */}
              {innings.length > 1 && innings[1].bowlers && innings[1].bowlers.length > 0 && (
                <div>
                  <h3 className="text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300 mb-2">Current Bowler</h3>
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-medium text-blue-800 dark:text-blue-200">
                        {innings[1].bowlers[0].name}
                      </span>
                      <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400">
                        {innings[1].bowlers[0].wickets}/{innings[1].bowlers[0].runs}
                      </span>
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                      {innings[1].bowlers[0].overs} overs • {innings[1].bowlers[0].economy.toFixed(1)} econ
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Run Rate Analysis */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
            <div className="mb-3 sm:mb-4">
              <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Run Rate Analysis</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <div className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-100">8.5</div>
                <div className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">Current RR</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <div className="text-lg sm:text-xl font-bold text-green-900 dark:text-green-100">7.2</div>
                <div className="text-xs sm:text-sm text-green-700 dark:text-green-300">Required RR</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <div className="text-lg sm:text-xl font-bold text-purple-900 dark:text-purple-100">+1.3</div>
                <div className="text-xs sm:text-sm text-purple-700 dark:text-purple-300">RR Difference</div>
              </div>
            </div>
          </div>

          {/* Match Situation */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
            <div className="mb-3 sm:mb-4">
              <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Match Situation</h2>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Target</span>
                <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">185 runs</span>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Overs Remaining</span>
                <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">8.2 overs</span>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Wickets in Hand</span>
                <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">6 wickets</span>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Runs Needed</span>
                <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">45 runs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Moments */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="mb-3 sm:mb-4">
          <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Key Moments</h2>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 p-2 sm:p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span className="text-xs sm:text-sm text-purple-800 dark:text-purple-200">Powerplay: 45 runs for 2 wickets</span>
          </div>
          <div className="flex items-center gap-2 p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span className="text-xs sm:text-sm text-blue-800 dark:text-blue-200">Middle Overs: Building momentum</span>
          </div>
          <div className="flex items-center gap-2 p-2 sm:p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-xs sm:text-sm text-green-800 dark:text-green-200">Death Overs: Crucial phase ahead</span>
          </div>
        </div>
      </div>

      {/* Live Commentary */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="mb-3 sm:mb-4">
          <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Live Commentary</h2>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium text-green-800">Over 15.2</span>
            </div>
            <p className="text-xs sm:text-sm text-green-800">
              <strong>FOUR!</strong> Excellent shot through the covers! The batsman is in great form today.
            </p>
          </div>

          <div className="p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium text-blue-800">Over 14.6</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-800">
              <strong>Single:</strong> Good running between the wickets, keeping the scoreboard ticking.
            </p>
          </div>

          <div className="p-3 sm:p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium text-yellow-800">Over 14.3</span>
            </div>
            <p className="text-xs sm:text-sm text-yellow-800">
              <strong>Dot Ball:</strong> Excellent bowling, building pressure on the batsman.
            </p>
          </div>
        </div>
      </div>

      {/* Match Situation */}
      {chasingTeam && (
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700">
          <h3 className="text-base sm:text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2 sm:mb-3">Match Situation</h3>
          <div className="text-center">
            <div className="text-base sm:text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
              {get(chasingTeam.team, 'teamName', 'Chasing Team')} needs {chasingTeam.target - chasingTeam.currentScore} runs to win
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div>
                <div className="text-blue-700 dark:text-blue-300 font-medium">Target</div>
                <div className="text-blue-900 dark:text-blue-100 font-bold">{chasingTeam.target}</div>
              </div>
              <div>
                <div className="text-blue-700 dark:text-blue-300 font-medium">Current</div>
                <div className="text-blue-900 dark:text-blue-100 font-bold">{chasingTeam.currentScore}</div>
              </div>
              <div>
                <div className="text-blue-700 dark:text-blue-300 font-medium">Remaining</div>
                <div className="text-blue-900 dark:text-blue-100 font-bold">{chasingTeam.remainingOvers.toFixed(1)} overs</div>
              </div>
            </div>
            {requiredRunRate && (
              <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-blue-800 dark:text-blue-200">
                Required Run Rate: <span className="font-semibold">{requiredRunRate}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Run Rates */}
      {(currentRunRate || requiredRunRate) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {currentRunRate && (
            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Current RR</div>
              <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100">{currentRunRate}</div>
            </div>
          )}
          {requiredRunRate && (
            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Required RR</div>
              <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100">{requiredRunRate}</div>
            </div>
          )}
        </div>
      )}

      {/* Match Details */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="mb-3 sm:mb-4">
          <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Match Details</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Venue Information */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">Venue Details</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Stadium</span>
                <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">{venueName}</span>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">City</span>
                <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">Ahmedabad, Gujarat</span>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Capacity</span>
                <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">132,000</span>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Pitch Type</span>
                <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">Batting friendly</span>
              </div>
            </div>
          </div>

          {/* Weather Information */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">Weather & Conditions</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">Temperature</span>
                <span className="text-xs sm:text-sm text-blue-900 dark:text-blue-100">32°C</span>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">Humidity</span>
                <span className="text-xs sm:text-sm text-blue-900 dark:text-blue-100">65%</span>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">Wind</span>
                <span className="text-xs sm:text-sm text-blue-900 dark:text-blue-100">12 km/h</span>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">Conditions</span>
                <span className="text-xs sm:text-sm text-blue-900 dark:text-blue-100">Clear skies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Umpire Information */}
        <div className="mt-4 sm:mt-6">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">Match Officials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-center justify-between p-2 sm:p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
              <span className="text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300">On-Field Umpire 1</span>
              <span className="text-xs sm:text-sm text-purple-900 dark:text-purple-100">Nitin Menon</span>
            </div>
            <div className="flex items-center justify-between p-2 sm:p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
              <span className="text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300">On-Field Umpire 2</span>
              <span className="text-xs sm:text-sm text-purple-900 dark:text-purple-100">Anil Chaudhary</span>
            </div>
            <div className="flex items-center justify-between p-2 sm:p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
              <span className="text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300">Third Umpire</span>
              <span className="text-xs sm:text-sm text-purple-900 dark:text-purple-100">Virender Sharma</span>
            </div>
            <div className="flex items-center justify-between p-2 sm:p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
              <span className="text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300">Match Referee</span>
              <span className="text-xs sm:text-sm text-purple-900 dark:text-purple-100">Javagal Srinath</span>
            </div>
          </div>
        </div>
      </div>

      {/* Live Scorecard */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="mb-3 sm:mb-4">
          <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Live Scorecard</h2>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">Current Batsmen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex justify-between items-center p-2 sm:p-3 bg-white dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600">
                <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">Batsman 1</span>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">45 (32)</span>
              </div>
              <div className="flex justify-between items-center p-2 sm:p-3 bg-white dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600">
                <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">Batsman 2</span>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">23 (18)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Updates */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="mb-3 sm:mb-4">
          <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Live Updates</h2>
        </div>
        <div>
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
            This match is currently live. The scorecard updates in real-time with ball-by-ball information,
            current over progress, and match situation.
          </p>
          <div className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-xs sm:text-sm text-red-800">
              <strong>Live Match:</strong> Updates are happening in real-time. Refresh the page for the latest scores and statistics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
