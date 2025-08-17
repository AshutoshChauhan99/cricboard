"use client";
import { MatchPreviewData, Player } from "@/lib/types";
import { isEmpty, get } from "lodash";

interface Props {
  data: MatchPreviewData;
}

export default function UpcomingMatchView({ data }: Props) {
  if (isEmpty(data)) {
    return (
      <div className="card">
        <div className="text-center text-gray-500">No upcoming match data available</div>
      </div>
    );
  }

  const matchTitle = get(data, 'matchTitle', 'Match Details');
  const status = get(data, 'status', 'UPCOMING');
  const venue = get(data, 'venue', {});
  const matchNumber = get(data, 'matchNumber', '');
  const team1 = get(data, 'team1', {});
  const team2 = get(data, 'team2', {});

  // Extract venue name from venue object
  const venueName = get(venue, 'name', 'Venue not specified');
  const venueCity = get(venue, 'city', '');
  const venueCapacity = get(venue, 'capacity', '');
  const venuePitchDescription = get(venue, 'pitchDescription', '');

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Match Header */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="text-center">
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 mb-2 sm:mb-3">
            🟢 {status}
          </div>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-2">
            {matchTitle}
          </h1>
          {matchNumber && (
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{matchNumber}</p>
          )}
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">{venueName}</p>
        </div>

        {/* Match Preview */}
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-6">
            <div className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {get(team1, 'name', 'Team 1')}
              </h3>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {get(team1, 'shortName', 'T1')} • {get(team1, 'city', 'City')}
              </div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {get(team2, 'name', 'Team 2')}
              </h3>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {get(team2, 'shortName', 'T2')} • {get(team2, 'city', 'City')}
              </div>
            </div>
          </div>

          {/* Match Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Venue Information */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">Venue Details</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg gap-1 sm:gap-0">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Stadium</span>
                  <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">{venueName}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg gap-1 sm:gap-0">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">City</span>
                  <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">{venueCity || 'Mumbai, Maharashtra'}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg gap-1 sm:gap-0">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Capacity</span>
                  <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">{venueCapacity || '33,108'}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg gap-1 sm:gap-0">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Pitch Type</span>
                  <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">{venuePitchDescription || 'Balanced'}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg gap-1 sm:gap-0">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Average Score</span>
                  <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">165 runs</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg gap-1 sm:gap-0">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Toss Win %</span>
                  <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">52%</span>
                </div>
              </div>
            </div>

            {/* Weather Information */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">Weather & Conditions</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">Temperature</span>
                  <span className="text-xs sm:text-sm text-blue-900 dark:text-blue-100">30°C</span>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">Humidity</span>
                  <span className="text-xs sm:text-sm text-blue-900 dark:text-blue-100">68%</span>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">Wind</span>
                  <span className="text-xs sm:text-sm text-blue-900 dark:text-blue-100">10 km/h</span>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">Conditions</span>
                  <span className="text-xs sm:text-sm text-blue-900 dark:text-blue-100">Sunny</span>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">Rain Chance</span>
                  <span className="text-xs sm:text-sm text-blue-900 dark:text-blue-100">5%</span>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">Visibility</span>
                  <span className="text-xs sm:text-sm text-blue-900 dark:text-blue-100">Excellent</span>
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
                <span className="text-xs sm:text-sm text-purple-900 dark:text-purple-100">Chris Gaffaney</span>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
                <span className="text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300">On-Field Umpire 2</span>
                <span className="text-xs sm:text-sm text-purple-900 dark:text-purple-100">Rod Tucker</span>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
                <span className="text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300">Third Umpire</span>
                <span className="text-xs sm:text-sm text-purple-900 dark:text-purple-100">Paul Reiffel</span>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
                <span className="text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300">Match Referee</span>
                <span className="text-xs sm:text-sm text-purple-900 dark:text-purple-100">Jeff Crowe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Playing XI */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
          <div className="mb-3 sm:mb-4">
            <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Playing XI (15 Players)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Team 1 Playing XI */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 border-b border-gray-200 pb-2 text-gray-900 dark:text-gray-100">
                {get(team1, 'name', 'Team 1')} Squad
              </h3>
              <div className="space-y-2">
                {get(team1, 'playing11', []).map((player: Player, index: number) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
                    <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100 font-medium">
                      {get(player, 'name', `Player ${index + 1}`)}
                    </span>
                    <span className="text-xs text-gray-600 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      {get(player, 'role', '')}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-2 sm:mt-3 text-xs text-gray-500 dark:text-gray-400 text-center">
                Total: {get(team1, 'playing11', []).length} players
              </div>
            </div>

            {/* Team 2 Playing XI */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 border-b border-gray-200 pb-2 text-gray-900 dark:text-gray-100">
                {get(team2, 'name', 'Team 2')} Squad
              </h3>
              <div className="space-y-2">
                {get(team2, 'playing11', []).map((player: Player, index: number) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
                    <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100 font-medium">
                      {get(player, 'name', `Player ${index + 1}`)}
                    </span>
                    <span className="text-xs text-gray-600 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      {get(player, 'role', '')}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-2 sm:mt-3 text-xs text-gray-500 dark:text-gray-400 text-center">
                Total: {get(team2, 'playing11', []).length} players
              </div>
            </div>
          </div>

          {/* Squad Summary */}
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
            <h3 className="text-sm sm:text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">Squad Summary</h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
              <div>
                <div className="text-base sm:text-lg font-bold text-blue-900 dark:text-blue-100">
                  {get(team1, 'name', 'Team 1')}
                </div>
                <div className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">
                  {get(team1, 'playing11', []).length} players
                </div>
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-blue-900 dark:text-blue-100">
                  {get(team2, 'name', 'Team 2')}
                </div>
                <div className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">
                  {get(team2, 'playing11', []).length} players
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Statistics & Win Percentage */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
          <div className="mb-3 sm:mb-4">
            <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Team Statistics & Win Percentage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Team 1 Stats */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-base font-semibold text-blue-900 dark:text-blue-100 border-b border-blue-200 dark:border-blue-700 pb-2">
                {get(team1, 'name', 'Team 1')} Statistics
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-blue-900 dark:text-blue-100">Season Win %</span>
                  <span className="text-base sm:text-lg font-bold text-blue-700 dark:text-blue-300">65%</span>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-blue-900 dark:text-blue-100">Last 5 Matches</span>
                  <span className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">W W L W L</span>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-blue-900 dark:text-blue-100">Home Record</span>
                  <span className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">4-1 (80%)</span>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-blue-900 dark:text-blue-100">Average Score</span>
                  <span className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">175/6</span>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-blue-900 dark:text-blue-100">Best Bowler</span>
                  <span className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">Jasprit Bumrah (12 wkts)</span>
                </div>
              </div>
            </div>

            {/* Team 2 Stats */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-base font-semibold text-green-900 dark:text-green-100 border-b border-green-200 dark:border-green-700 pb-2">
                {get(team2, 'name', 'Team 2')} Statistics
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-green-900 dark:text-green-100">Season Win %</span>
                  <span className="text-base sm:text-lg font-bold text-green-700 dark:text-green-300">60%</span>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-green-900 dark:text-green-100">Last 5 Matches</span>
                  <span className="text-xs sm:text-sm text-green-700 dark:text-green-300">L W W L W</span>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-green-900 dark:text-green-100">Away Record</span>
                  <span className="text-xs sm:text-sm text-green-700 dark:text-green-300">3-2 (60%)</span>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-green-900 dark:text-green-100">Average Score</span>
                  <span className="text-xs sm:text-sm text-green-700 dark:text-green-300">168/7</span>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-green-900 dark:text-green-100">Best Bowler</span>
                  <span className="text-xs sm:text-sm text-green-700 dark:text-green-300">Ravindra Jadeja (8 wkts)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Head-to-Head Stats */}
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
            <h3 className="text-sm sm:text-base font-semibold text-purple-900 dark:text-purple-100 mb-2 sm:mb-3">Head-to-Head Statistics</h3>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg border border-purple-200 dark:border-purple-700">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-900 dark:text-purple-100">12</div>
                <div className="text-xs sm:text-sm text-purple-700 dark:text-purple-300">Total Matches</div>
              </div>
              <div className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg border border-purple-200 dark:border-purple-700">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-900 dark:text-purple-100">7</div>
                <div className="text-xs sm:text-sm text-purple-700 dark:text-purple-300">{get(team1, 'name', 'Team 1')} Wins</div>
              </div>
              <div className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg border border-purple-200 dark:border-purple-700">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-900 dark:text-purple-100">5</div>
                <div className="text-xs sm:text-sm text-purple-700 dark:text-purple-300">{get(team2, 'name', 'Team 2')} Wins</div>
              </div>
            </div>
            <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-purple-700 dark:text-purple-300 text-center">
              Last Meeting: {get(team1, 'name', 'Team 1')} won by 25 runs in IPL 2023
            </div>
          </div>
        </div>

        {/* Pre-Match Commentary & Analysis */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
          <div className="mb-3 sm:mb-4">
            <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Pre-Match Commentary & Analysis</h2>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="p-3 sm:p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="text-sm sm:text-base font-semibold text-yellow-900 mb-2">🎯 Key Battle</h3>
              <p className="text-xs sm:text-sm text-yellow-800">
                <strong>Jasprit Bumrah vs Ruturaj Gaikwad:</strong> The battle between MI&apos;s pace spearhead and CSK&apos;s in-form opener could decide the powerplay outcome.
                Bumrah has dismissed Gaikwad 3 times in their 8 encounters.
              </p>
            </div>

            <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-sm sm:text-base font-semibold text-blue-900 mb-2">🏏 Team Strategy</h3>
              <p className="text-xs sm:text-sm text-blue-800">
                <strong>{get(team1, 'name', 'Team 1')}:</strong> Look to capitalize on home advantage with aggressive batting in powerplay.
                Their spinners will be crucial in middle overs on this surface.
              </p>
              <p className="text-xs sm:text-sm text-blue-800 mt-2">
                <strong>{get(team2, 'name', 'Team 2')}:</strong> Focus on building partnerships and targeting specific bowlers.
                Their experience in pressure situations could be the difference.
              </p>
            </div>

            <div className="p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-sm sm:text-base font-semibold text-green-900 mb-2">⭐ Player to Watch</h3>
              <p className="text-xs sm:text-sm text-green-800">
                <strong>Hardik Pandya:</strong> The MI captain has been in scintillating form with both bat and ball.
                His ability to accelerate in death overs and pick crucial wickets makes him the X-factor for this match.
              </p>
            </div>

            <div className="p-3 sm:p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="text-sm sm:text-base font-semibold text-red-900 mb-2">🌦️ Weather Impact</h3>
              <p className="text-xs sm:text-sm text-red-800">
                <strong>Dew Factor:</strong> With clear skies and moderate humidity, dew is expected to play a significant role in the second innings.
                Teams winning the toss might prefer to chase, as the ball will be harder to grip for spinners.
              </p>
            </div>

            <div className="p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="text-sm sm:text-base font-semibold text-purple-900 mb-2">📊 Match Prediction</h3>
              <p className="text-xs sm:text-sm text-purple-800">
                <strong>Expected Score:</strong> 180-200 runs on this batting-friendly surface.
                <strong>Win Probability:</strong> {get(team1, 'name', 'Team 1')} 55% | {get(team2, 'name', 'Team 2')} 45%
              </p>
              <p className="text-xs sm:text-sm text-purple-800 mt-2">
                <strong>Key Factors:</strong> Toss, powerplay performance, and death overs execution will be crucial in determining the winner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
