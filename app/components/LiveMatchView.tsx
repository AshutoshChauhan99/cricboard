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
    <div className="space-y-6">
      {/* Match Header */}
      <div className="card">
        <div className="card-header text-center">
          <div className="badge badge-error mb-3 animate-pulse">
            🔴 {status}
          </div>
          <h1 className="h1">
            {matchTitle}
          </h1>
          {matchNumber && (
            <p className="text-sm text-gray-600">{matchNumber}</p>
          )}
        </div>

        {/* Live Match Info */}
        <div className="card-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {innings.map((inning: InningsScore, index: number) => {
              const teamScore = getTeamScore(inning);
              const teamName = get(inning, 'teamName', `Team ${index + 1}`);
              const isBatting = inning === currentBattingTeam;

              return (
                <div key={index} className={`text-center p-4 rounded-lg border-2 ${isBatting
                  ? 'bg-red-50 border-red-200'
                  : 'bg-gray-50 border-gray-200'
                  }`}>
                  <h3 className={`h4 mb-2 ${isBatting
                    ? 'text-red-900'
                    : 'text-gray-900'
                    }`}>
                    {teamName}
                    {isBatting && <span className="ml-2">🏏</span>}
                  </h3>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {teamScore.score}/{teamScore.wickets}
                  </div>
                  <div className="text-sm text-gray-600">
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
          <div className="card">
            <div className="card-header">
              <h2 className="h2">Current Over Progress</h2>
            </div>
            <div className="card-content">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Over Progress */}
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h3 className="h4 text-red-900 mb-3">Over {get(currentOverProgress, 'currentOver', '0')}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-medium text-red-700">Ball Progress:</span>
                      <div className="flex gap-1">
                        {Array.from({ length: 6 }).map((_, i) => {
                          const isCompleted = i < (get(currentOverProgress, 'ballsInOver', 0) || 0);
                          return (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full ${isCompleted ? 'bg-red-500' : 'bg-gray-300'}`}
                            />
                          );
                        })}
                      </div>
                      <span className="text-xs text-red-600">
                        {get(currentOverProgress, 'ballsInOver', 0)}/6 balls
                      </span>
                    </div>
                    <div className="text-sm text-red-800">
                      <strong>Current Situation:</strong> {get(matchSituation, '', 'Match in progress')}
                    </div>
                  </div>

                  {/* Run Rate Analysis */}
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="h4 text-blue-900 mb-3">Run Rate Analysis</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-blue-700">Current Run Rate:</span>
                        <span className="font-semibold text-blue-900">{get(currentRunRate, '', '0.00')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-blue-700">Required Run Rate:</span>
                        <span className="font-semibold text-blue-900">{get(requiredRunRate, '', '0.00')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-blue-700">Run Rate Difference:</span>
                        <span className={`font-semibold ${parseFloat(get(currentRunRate, '', '0')) > parseFloat(get(requiredRunRate, '', '0')) ? 'text-green-600' : 'text-red-600'}`}>
                          {parseFloat(get(currentRunRate, '', '0')) > parseFloat(get(requiredRunRate, '', '0')) ? '+' : ''}
                          {(parseFloat(get(currentRunRate, '', '0')) - parseFloat(get(requiredRunRate, '', '0'))).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Match Situation */}
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="h4 text-green-900 mb-3">Match Situation</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-green-700">Target:</span>
                        <span className="font-semibold text-green-900">
                          {get(innings, '[0].score', '0')} runs
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-green-700">Current Score:</span>
                        <span className="font-semibold text-green-900">
                          {get(innings, '[1].score', '0')}/{get(innings, '[1].wickets', '0')}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-green-700">Overs Remaining:</span>
                        <span className="font-semibold text-green-900">
                          {(20 - parseFloat(get(innings, '[1].overs', '0'))).toFixed(1)} overs
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-green-700">Runs Needed:</span>
                        <span className="font-semibold text-green-900">
                          {(() => {
                            const team1Score = parseInt(get(innings, '[0].score', '0'));
                            const team2Score = parseInt(get(innings, '[1].score', '0'));
                            return Math.max(0, team1Score - team2Score);
                          })()} runs
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Key Moments */}
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h3 className="h4 text-purple-900 mb-3">Key Moments</h3>
                    <div className="space-y-2 text-sm text-purple-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>Powerplay: {get(innings, '[1].score', '0')} runs for {get(innings, '[1].wickets', '0')} wickets</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>Middle Overs: Building momentum</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>Death Overs: Crucial phase ahead</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Match Summary */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="h4 text-gray-900 mb-3">Match Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-gray-900">{get(innings, '[0].score', '0')}</div>
                    <div className="text-sm text-gray-600">{get(innings, '[0].teamName', 'Team 1')} Score</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-gray-900">{get(innings, '[1].score', '0')}/{get(innings, '[1].wickets', '0')}</div>
                    <div className="text-sm text-gray-600">{get(innings, '[1].teamName', 'Team 2')} Score</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-gray-900">{get(innings, '[1].overs', '0')}</div>
                    <div className="text-sm text-gray-600">Overs Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Commentary */}
        <div className="card">
          <div className="card-header">
            <h2 className="h2">Live Commentary</h2>
          </div>
          <div className="card-content">
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span className="text-sm font-medium text-yellow-800">Over 19.3</span>
                </div>
                <p className="text-sm text-yellow-800">
                  <strong>FOUR!</strong> Brilliant shot by Gill! He drives it through the covers for a boundary.
                  GT now needs just 2 runs from 3 balls to win this match.
                </p>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm font-medium text-blue-800">Over 19.2</span>
                </div>
                <p className="text-sm text-blue-800">
                  <strong>Single.</strong> Good running between the wickets. The batsmen take a quick single
                  and rotate the strike. Pressure building on the bowling side.
                </p>
              </div>

              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm font-medium text-green-800">Over 19.1</span>
                </div>
                <p className="text-sm text-green-800">
                  <strong>Dot ball.</strong> Excellent bowling! The bowler keeps it tight and doesn&apos;t give
                  any room for the batsman to score. GT needs 3 runs from 5 balls.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Match Situation */}
        {chasingTeam && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="h4 text-blue-900 mb-3">Match Situation</h3>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-900 mb-2">
                {get(chasingTeam.team, 'teamName', 'Chasing Team')} needs {chasingTeam.target - chasingTeam.currentScore} runs to win
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-blue-700 font-medium">Target</div>
                  <div className="text-blue-900 font-bold">{chasingTeam.target}</div>
                </div>
                <div>
                  <div className="text-blue-700 font-medium">Current</div>
                  <div className="text-blue-900 font-bold">{chasingTeam.currentScore}</div>
                </div>
                <div>
                  <div className="text-blue-700 font-medium">Remaining</div>
                  <div className="text-blue-900 font-bold">{chasingTeam.remainingOvers.toFixed(1)} overs</div>
                </div>
              </div>
              {requiredRunRate && (
                <div className="mt-3 text-sm text-blue-800">
                  Required Run Rate: <span className="font-semibold">{requiredRunRate}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Run Rates */}
        {(currentRunRate || requiredRunRate) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentRunRate && (
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <div className="text-sm text-gray-600">Current RR</div>
                <div className="text-lg font-bold text-gray-900">{currentRunRate}</div>
              </div>
            )}
            {requiredRunRate && (
              <div className="p-3 bg-gray-50 rounded-lg text-center">
                <div className="text-sm text-gray-600">Required RR</div>
                <div className="text-lg font-bold text-gray-900">{requiredRunRate}</div>
              </div>
            )}
          </div>
        )}

        {/* Match Details */}
        <div className="card">
          <div className="card-header">
            <h2 className="h2">Match Details</h2>
          </div>
          <div className="card-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Venue Information */}
              <div className="space-y-4">
                <h3 className="h4 text-gray-900">Venue Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Stadium</span>
                    <span className="text-gray-900">{venueName}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">City</span>
                    <span className="text-gray-900">Ahmedabad, Gujarat</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Capacity</span>
                    <span className="text-gray-900">132,000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Pitch Type</span>
                    <span className="text-gray-900">Batting friendly</span>
                  </div>
                </div>
              </div>

              {/* Weather Information */}
              <div className="space-y-4">
                <h3 className="h4 text-gray-900">Weather & Conditions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-blue-700">Temperature</span>
                    <span className="text-blue-900">32°C</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-blue-700">Humidity</span>
                    <span className="text-blue-900">65%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-blue-700">Wind</span>
                    <span className="text-blue-900">12 km/h</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-blue-700">Conditions</span>
                    <span className="text-blue-900">Clear skies</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Umpire Information */}
            <div className="mt-6">
              <h3 className="h4 text-gray-900 mb-3">Match Officials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <span className="font-medium text-purple-700">On-Field Umpire 1</span>
                  <span className="text-purple-900">Nitin Menon</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <span className="font-medium text-purple-700">On-Field Umpire 2</span>
                  <span className="text-purple-900">Anil Chaudhary</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <span className="font-medium text-purple-700">Third Umpire</span>
                  <span className="text-purple-900">Virender Sharma</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <span className="font-medium text-purple-700">Match Referee</span>
                  <span className="text-purple-900">Javagal Srinath</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Scorecard */}
        <div className="card">
          <div className="card-header">
            <h2 className="h2">Live Scorecard</h2>
          </div>

          <div className="card-content">
            {innings.map((inning: InningsScore, index: number) => {
              const teamName = get(inning, 'teamName', `Team ${index + 1}`);
              const batters = get(inning, 'batters', []);
              const bowlers = get(inning, 'bowlers', []);
              const yetToBat = get(inning, 'yetToBat', []);

              return (
                <div key={index} className="mb-8 last:mb-0">
                  <h3 className="h4 mb-4 border-b border-gray-200 pb-2 text-gray-900">
                    {teamName} Innings
                  </h3>

                  {/* Batters */}
                  {batters && batters.length > 0 && (
                    <div className="mb-6">
                      <h4 className="h5 mb-3 text-gray-800">Batting</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                          <thead>
                            <tr className="text-left text-xs text-gray-500 border-b border-gray-200">
                              <th className="p-3 font-medium">Batter</th>
                              <th className="p-3 text-right font-medium">R</th>
                              <th className="p-3 text-right font-medium">B</th>
                              <th className="p-3 text-right font-medium">4s</th>
                              <th className="p-3 text-right font-medium">6s</th>
                              <th className="p-3 text-right font-medium">SR</th>
                              <th className="p-3 font-medium">Dismissal</th>
                            </tr>
                          </thead>
                          <tbody>
                            {batters.map((batter: BatterScore, bIndex: number) => (
                              <tr key={bIndex} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-3 font-medium text-gray-900">
                                  {get(batter, 'name', `Batter ${bIndex + 1}`)}
                                </td>
                                <td className="p-3 text-right font-semibold text-gray-900">
                                  {get(batter, 'runs', '0')}
                                </td>
                                <td className="p-3 text-right text-gray-600">
                                  {get(batter, 'balls', '0')}
                                </td>
                                <td className="p-3 text-right text-gray-600">
                                  {get(batter, 'fours', '0')}
                                </td>
                                <td className="p-3 text-right text-gray-600">
                                  {get(batter, 'sixes', '0')}
                                </td>
                                <td className="p-3 text-right text-gray-600">
                                  {get(batter, 'strikeRate', '0')}
                                </td>
                                <td className="p-3 text-gray-500">
                                  {get(batter, 'dismissal', 'not out')}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Bowlers */}
                  {bowlers && bowlers.length > 0 && (
                    <div className="mb-6">
                      <h4 className="h5 mb-3 text-gray-800">Bowling</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                          <thead>
                            <tr className="text-left text-xs text-gray-500 border-b border-gray-200">
                              <th className="p-3 font-medium">Bowler</th>
                              <th className="p-3 text-right font-medium">O</th>
                              <th className="p-3 text-right font-medium">M</th>
                              <th className="p-3 text-right font-medium">R</th>
                              <th className="p-3 text-right font-medium">W</th>
                              <th className="p-3 text-right font-medium">Econ</th>
                            </tr>
                          </thead>
                          <tbody>
                            {bowlers.map((bowler: BowlerSpell, bIndex: number) => (
                              <tr key={bIndex} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-3 font-medium text-gray-900">
                                  {get(bowler, 'name', `Bowler ${bIndex + 1}`)}
                                </td>
                                <td className="p-3 text-right text-gray-600">
                                  {get(bowler, 'overs', '0')}
                                </td>
                                <td className="p-3 text-right text-gray-600">
                                  {get(bowler, 'maidens', '0')}
                                </td>
                                <td className="p-3 text-right text-gray-600">
                                  {get(bowler, 'runs', '0')}
                                </td>
                                <td className="p-3 text-right font-semibold text-gray-900">
                                  {get(bowler, 'wickets', '0')}
                                </td>
                                <td className="p-3 text-right text-gray-600">
                                  {get(bowler, 'economy', '0')}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Yet to Bat */}
                  {yetToBat && yetToBat.length > 0 && (
                    <div>
                      <h4 className="h5 mb-3 text-gray-800">Yet to Bat</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {yetToBat.map((player: Player, pIndex: number) => (
                          <div key={pIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <span className="text-sm font-medium text-gray-900">
                              {get(player, 'name', `Player ${pIndex + 1}`)}
                            </span>
                            <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded">
                              {get(player, 'role', '')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Updates */}
        <div className="card">
          <div className="card-header">
            <h2 className="h2">Live Updates</h2>
          </div>
          <div className="card-content">
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              This match is currently live. The scorecard updates in real-time with ball-by-ball information,
              current over progress, and match situation.
            </p>
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">
                <strong>Live Match:</strong> Updates are happening in real-time. Refresh the page for the latest scores and statistics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
