"use client";
import { ScorecardData, InningsScore, BatterScore, BowlerSpell, Player } from "@/lib/types";
import { isEmpty, get } from "lodash";

interface Props {
  scorecardData: ScorecardData;
}

export default function CompletedMatchView({ scorecardData }: Props) {
  if (isEmpty(scorecardData)) {
    return (
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="text-center text-gray-500 dark:text-gray-400">No completed match data available</div>
      </div>
    );
  }

  const matchTitle = get(scorecardData, 'matchTitle', 'Match Result');
  const status = get(scorecardData, 'status', 'COMPLETED');
  const venue = get(scorecardData, 'venue', '');
  const matchNumber = get(scorecardData, 'matchNumber', '');
  const innings = get(scorecardData, 'innings', []);
  const matchResult = get(scorecardData, 'matchResult', {});


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

  const getWinner = () => {
    if (!matchResult || isEmpty(matchResult)) return null;
    return get(matchResult, 'winner', '');
  };

  const getResultText = () => {
    if (!matchResult || isEmpty(matchResult)) return '';
    return get(matchResult, 'resultText', '');
  };

  const getMargin = () => {
    if (!matchResult || isEmpty(matchResult)) return '';
    return get(matchResult, 'margin', '');
  };

  const getWinningTeam = () => {
    if (!matchResult || isEmpty(matchResult)) return null;
    const winner = get(matchResult, 'winner', '');
    if (!winner) return null;

    // Find the innings data for the winning team
    return innings.find(inning => get(inning, 'teamName', '') === winner) || null;
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Match Header */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="text-center">
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 mb-2 sm:mb-3">
            🏆 {status}
          </div>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-2">
            {matchTitle}
          </h1>
          {matchNumber && (
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{matchNumber}</p>
          )}
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">{venueName}</p>
        </div>

        {/* Match Result */}
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-4">
            {innings.map((inning: InningsScore, index: number) => {
              const teamScore = getTeamScore(inning);
              const teamName = get(inning, 'teamName', `Team ${index + 1}`);
              const winningTeam = getWinningTeam();
              const isWinner = winningTeam && get(winningTeam, 'teamName', '') === teamName;

              return (
                <div key={index} className={`text-center p-3 sm:p-4 rounded-lg border-2 ${isWinner
                  ? 'bg-green-50 border-green-200'
                  : 'bg-gray-50 border-gray-200'
                  }`}>
                  <h3 className={`text-base sm:text-lg font-semibold mb-2 ${isWinner
                    ? 'text-green-900'
                    : 'text-gray-900'
                    }`}>
                    {teamName}
                    {isWinner && <span className="ml-2">👑</span>}
                  </h3>
                  <div className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                    {teamScore.score}/{teamScore.wickets}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {teamScore.overs} overs
                  </div>
                  {isWinner && (
                    <div className="mt-2 text-xs text-green-600 font-medium">
                      Winner
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Match Highlights */}
        <div className="card">
          <div className="card-header">
            <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Match Highlights</h2>
          </div>
          <div className="card-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Batting Highlights */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-sm sm:text-base font-semibold text-blue-900 dark:text-blue-100 border-b border-blue-200 dark:border-blue-700 pb-2">Batting Highlights</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs sm:text-sm font-medium text-blue-900 dark:text-blue-100">Top Scorer</span>
                      <span className="text-xs text-blue-600 dark:text-blue-400 bg-blue-200 dark:bg-blue-700 px-2 py-1 rounded">Man of the Match</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-blue-900 dark:text-blue-100">
                      {get(innings, '[1].batters[0].name', 'Player')} - {get(innings, '[1].batters[0].runs', '0')} runs
                    </div>
                    <div className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">
                      {get(innings, '[1].batters[0].balls', '0')} balls, {get(innings, '[1].batters[0].fours', '0')} fours, {get(innings, '[1].batters[0].sixes', '0')} sixes
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="text-xs sm:text-sm font-medium text-green-900 dark:text-green-100 mb-2">Best Partnership</div>
                    <div className="text-base sm:text-lg font-bold text-green-900 dark:text-green-100">89 runs</div>
                    <div className="text-xs sm:text-sm text-green-700 dark:text-green-300">2nd wicket partnership</div>
                  </div>
                  <div className="p-2 sm:p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-700">
                    <div className="text-xs sm:text-sm font-medium text-yellow-900 dark:text-yellow-100 mb-2">Fastest Fifty</div>
                    <div className="text-base sm:text-lg font-bold text-yellow-900 dark:text-yellow-100">24 balls</div>
                    <div className="text-xs sm:text-sm text-yellow-700 dark:text-yellow-300">by {get(innings, '[1].batters[0].name', 'Player')}</div>
                  </div>
                </div>
              </div>

              {/* Bowling Highlights */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-sm sm:text-base font-semibold text-green-900 dark:text-green-100 border-b border-green-200 dark:border-green-700 pb-2">Bowling Highlights</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="p-2 sm:p-3 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs sm:text-sm font-medium text-green-900 dark:text-green-100">Best Bowler</span>
                      <span className="text-xs text-green-600 dark:text-green-400 bg-green-200 dark:bg-green-700 px-2 py-1 rounded">Most Wickets</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-green-900 dark:text-green-100">
                      {get(innings, '[0].bowlers[0].name', 'Bowler')} - {get(innings, '[0].bowlers[0].wickets', '0')}/28
                    </div>
                    <div className="text-xs sm:text-sm text-green-700 dark:text-green-300">
                      Economy: {get(innings, '[0].bowlers[0].economy', '0')}, Overs: {get(innings, '[0].bowlers[0].overs', '0')}
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
                    <div className="text-xs sm:text-sm font-medium text-purple-900 dark:text-purple-100 mb-2">Best Economy</div>
                    <div className="text-base sm:text-lg font-bold text-purple-900 dark:text-purple-100">5.50</div>
                    <div className="text-xs sm:text-sm text-purple-700 dark:text-purple-300">by {get(innings, '[0].bowlers[1].name', 'Bowler')}</div>
                  </div>
                  <div className="p-2 sm:p-3 bg-red-50 dark:bg-red-900/30 rounded-lg border border-red-200 dark:border-red-700">
                    <div className="text-xs sm:text-sm font-medium text-red-900 dark:text-red-100 mb-2">Most Dot Balls</div>
                    <div className="text-base sm:text-lg font-bold text-red-900 dark:text-red-100">12</div>
                    <div className="text-xs sm:text-sm text-red-700 dark:text-red-300">by {get(innings, '[0].bowlers[2].name', 'Bowler')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Match Summary Stats */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">Match Summary Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
                <div className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                    {parseInt(get(innings, '[0].score', '0')) + parseInt(get(innings, '[1].score', '0'))}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Total Runs</div>
                </div>
                <div className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                    {(() => {
                      const wickets1 = Number(String(get(innings, '[0].wickets', '0')));
                      const wickets2 = Number(String(get(innings, '[1].wickets', '0')));
                      return wickets1 + wickets2;
                    })()}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Total Wickets</div>
                </div>
                <div className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                    {(get(innings, '[0].batters', []) || []).length + (get(innings, '[1].batters', []) || []).length}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Batsmen Used</div>
                </div>
                <div className="p-2 sm:p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                    {(get(innings, '[0].bowlers', []) || []).length + (get(innings, '[1].bowlers', []) || []).length}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Bowlers Used</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Match Info */}
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {(innings || []).map((inning: InningsScore, index: number) => {
              const teamScore = getTeamScore(inning);
              const teamName = get(inning, 'teamName', `Team ${index + 1}`);
              const isWinner = getWinner() === teamName;

              return (
                <div key={index} className={`text-center p-3 sm:p-4 rounded-lg border-2 ${isWinner
                  ? 'bg-green-50 border-green-200'
                  : 'bg-gray-50 border-gray-200'
                  }`}>
                  <h3 className={`text-base sm:text-lg font-semibold mb-2 ${isWinner
                    ? 'text-green-900'
                    : 'text-gray-900'
                    }`}>
                    {teamName}
                    {isWinner && <span className="ml-2">👑</span>}
                  </h3>
                  <div className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                    {teamScore.score}/{teamScore.wickets}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {teamScore.overs} overs
                  </div>
                </div>
              );
            })}
          </div>

          {/* Match Details */}
          <div className="space-y-3 sm:space-y-4">
            {venueName && (
              <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Venue</span>
                <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">{venueName}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Detailed Scorecard */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="mb-3 sm:mb-4">
          <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Detailed Scorecard</h2>
        </div>

        {(innings || []).map((inning: InningsScore, index: number) => {
          const teamName = get(inning, 'teamName', `Team ${index + 1}`);
          const batters = get(inning, 'batters', []);
          const bowlers = get(inning, 'bowlers', []);
          const yetToBat = get(inning, 'yetToBat', []);

          return (
            <div key={index} className="mb-6 sm:mb-8 last:mb-0">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 border-b border-gray-200 pb-2 text-gray-900 dark:text-gray-100">
                {teamName} Innings
              </h3>

              {/* Batters */}
              {batters && batters.length > 0 && (
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-gray-800 dark:text-gray-200">Batting</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="text-left text-xs text-gray-500 border-b border-gray-200">
                          <th className="p-2 sm:p-3 font-medium">Batter</th>
                          <th className="p-2 sm:p-3 text-right font-medium">R</th>
                          <th className="p-2 sm:p-3 text-right font-medium">B</th>
                          <th className="p-2 sm:p-3 text-right font-medium">4s</th>
                          <th className="p-2 sm:p-3 text-right font-medium">6s</th>
                          <th className="p-2 sm:p-3 text-right font-medium">SR</th>
                          <th className="p-2 sm:p-3 font-medium">Dismissal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {batters.map((batter: BatterScore, bIndex: number) => (
                          <tr key={bIndex} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-2 sm:p-3 font-medium text-gray-900">
                              {get(batter, 'name', `Batter ${bIndex + 1}`)}
                            </td>
                            <td className="p-2 sm:p-3 text-right font-semibold text-gray-900">
                              {get(batter, 'runs', '0')}
                            </td>
                            <td className="p-2 sm:p-3 text-right text-gray-600">
                              {get(batter, 'balls', '0')}
                            </td>
                            <td className="p-2 sm:p-3 text-right text-gray-600">
                              {get(batter, 'fours', '0')}
                            </td>
                            <td className="p-2 sm:p-3 text-right text-gray-600">
                              {get(batter, 'sixes', '0')}
                            </td>
                            <td className="p-2 sm:p-3 text-right text-gray-600">
                              {get(batter, 'strikeRate', '0')}
                            </td>
                            <td className="p-2 sm:p-3 text-gray-500">
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
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-gray-800 dark:text-gray-200">Bowling</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="text-left text-xs text-gray-500 border-b border-gray-200">
                          <th className="p-2 sm:p-3 font-medium">Bowler</th>
                          <th className="p-2 sm:p-3 text-right font-medium">O</th>
                          <th className="p-2 sm:p-3 text-right font-medium">M</th>
                          <th className="p-2 sm:p-3 text-right font-medium">R</th>
                          <th className="p-2 sm:p-3 text-right font-medium">W</th>
                          <th className="p-2 sm:p-3 text-right font-medium">Econ</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bowlers.map((bowler: BowlerSpell, bIndex: number) => (
                          <tr key={bIndex} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-2 sm:p-3 font-medium text-gray-900 dark:text-gray-100">
                              {get(bowler, 'name', `Bowler ${bIndex + 1}`)}
                            </td>
                            <td className="p-2 sm:p-3 text-right text-gray-600 dark:text-gray-400">
                              {get(bowler, 'overs', '0')}
                            </td>
                            <td className="p-2 sm:p-3 text-right text-gray-600 dark:text-gray-400">
                              {get(bowler, 'maidens', '0')}
                            </td>
                            <td className="p-2 sm:p-3 text-right text-gray-600 dark:text-gray-400">
                              {get(bowler, 'runs', '0')}
                            </td>
                            <td className="p-2 sm:p-3 text-right font-semibold text-gray-900 dark:text-gray-100">
                              {get(bowler, 'wickets', '0')}
                            </td>
                            <td className="p-2 sm:p-3 text-right text-gray-600 dark:text-gray-400">
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
                  <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-gray-800 dark:text-gray-200">Yet to Bat</h4>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {yetToBat.map((player: Player, pIndex: number) => (
                      <span key={pIndex}>
                        {get(player, 'name', `Player ${pIndex + 1}`)}
                        {pIndex < yetToBat.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Match Details */}
      <div className="card">
        <div className="card-header">
          <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Match Details</h2>
        </div>
        <div className="card-content">
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
                  <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">Bengaluru, Karnataka</span>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Capacity</span>
                  <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">40,000</span>
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
                  <span className="text-xs sm:text-sm text-blue-900 dark:text-blue-100">28°C</span>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">Humidity</span>
                  <span className="text-xs sm:text-sm text-blue-900 dark:text-blue-100">70%</span>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">Wind</span>
                  <span className="text-xs sm:text-sm text-blue-900 dark:text-blue-100">8 km/h</span>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">Conditions</span>
                  <span className="text-xs sm:text-sm text-blue-900 dark:text-blue-100">Partly cloudy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Umpire Information */}
          <div className="mt-4 sm:mt-6">
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">Match Officials</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-gray-600 dark:text-gray-400">On-Field Umpire 1:</span>
                <span className="text-gray-900 dark:text-gray-100">Kumar Dharmasena</span>
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-gray-600 dark:text-gray-400">On-Field Umpire 2:</span>
                <span className="text-gray-900 dark:text-gray-100">Marais Erasmus</span>
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-gray-600 dark:text-gray-400">Third Umpire:</span>
                <span className="text-gray-900 dark:text-gray-100">Richard Illingworth</span>
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-gray-600 dark:text-gray-400">Match Referee:</span>
                <span className="text-gray-900 dark:text-gray-100">Andy Pycroft</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Match Commentary */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="mb-3 sm:mb-4">
          <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Match Commentary</h2>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium text-green-800">Final Over</span>
            </div>
            <p className="text-xs sm:text-sm text-green-800">
              <strong>MATCH OVER!</strong> What a thrilling finish! KKR has successfully chased down the target
              with 7 wickets in hand. Sunil Narine&apos;s explosive 85 off 39 balls was the highlight of the chase.
            </p>
          </div>

          <div className="p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium text-blue-800">Over 16.4</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-800">
              <strong>FOUR!</strong> Andre Russell finishes it in style! He smashes the ball through the covers
              for a boundary to seal the victory for KKR. What a performance from the Caribbean all-rounder.
            </p>
          </div>

          <div className="p-3 sm:p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium text-yellow-800">Over 15.2</span>
            </div>
            <p className="text-xs sm:text-sm text-yellow-800">
              <strong>WICKET!</strong> Sunil Narine departs after a magnificent innings! He&apos;s caught by Kohli
              off Siraj&apos;s bowling. Narine&apos;s 85 off 39 balls has put KKR in a commanding position.
            </p>
          </div>
        </div>
      </div>

      {/* Match Highlights */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="mb-3 sm:mb-4">
          <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Match Highlights</h2>
        </div>
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
          This match has been completed. The detailed scorecard shows the complete performance of both teams,
          including individual player statistics, bowling figures, and the final result.
        </p>
        <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-xs sm:text-sm text-green-800">
            <strong>Match Complete:</strong> All innings have been played and the final result has been determined.
          </p>
        </div>
      </div>
    </div>
  );
}
