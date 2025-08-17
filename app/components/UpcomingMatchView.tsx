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
    <div className="space-y-6">
      {/* Match Header */}
      <div className="card">
        <div className="card-header text-center">
          <div className="badge badge-success mb-3">
            {status}
          </div>
          <h1 className="h1">
            {matchTitle}
          </h1>
          {matchNumber && (
            <p className="text-sm text-gray-600">{matchNumber}</p>
          )}
        </div>

        {/* Match Info */}
        <div className="card-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="h4 mb-2">
                {get(team1, 'name', 'Team 1')}
              </h3>
              <div className="text-sm text-gray-600">
                {get(team1, 'shortName', '')}
              </div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="h4 mb-2">
                {get(team2, 'name', 'Team 2')}
              </h3>
              <div className="text-sm text-gray-600">
                {get(team2, 'shortName', '')}
              </div>
            </div>
          </div>

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
                      <span className="text-gray-900">{venueCity || 'Mumbai, Maharashtra'}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Capacity</span>
                      <span className="text-gray-900">{venueCapacity || '33,108'}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Pitch Type</span>
                      <span className="text-gray-900">{venuePitchDescription || 'Balanced'}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Average Score</span>
                      <span className="text-gray-900">165 runs</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Toss Win %</span>
                      <span className="text-gray-900">52%</span>
                    </div>
                  </div>
                </div>

                {/* Weather Information */}
                <div className="space-y-4">
                  <h3 className="h4 text-gray-900">Weather & Conditions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-blue-700">Temperature</span>
                      <span className="text-blue-900">30°C</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-blue-700">Humidity</span>
                      <span className="text-blue-900">68%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-blue-700">Wind</span>
                      <span className="text-blue-900">10 km/h</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-blue-700">Conditions</span>
                      <span className="text-blue-900">Sunny</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-blue-700">Rain Chance</span>
                      <span className="text-blue-900">5%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-blue-700">Visibility</span>
                      <span className="text-blue-900">Excellent</span>
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
                    <span className="text-purple-900">Chris Gaffaney</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <span className="font-medium text-purple-700">On-Field Umpire 2</span>
                    <span className="text-purple-900">Rod Tucker</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <span className="font-medium text-purple-700">Third Umpire</span>
                    <span className="text-purple-900">Paul Reiffel</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <span className="font-medium text-purple-700">Match Referee</span>
                    <span className="text-purple-900">Jeff Crowe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Playing XI */}
        <div className="card">
          <div className="card-header">
            <h2 className="h2">Playing XI (15 Players)</h2>
          </div>

          <div className="card-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Team 1 Playing XI */}
              <div>
                <h3 className="h4 mb-3 border-b border-gray-200 pb-2 text-gray-900">
                  {get(team1, 'name', 'Team 1')} Squad
                </h3>
                <div className="space-y-2">
                  {get(team1, 'playing11', []).map((player: Player, index: number) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-200">
                      <span className="text-sm text-gray-900 font-medium">
                        {get(player, 'name', `Player ${index + 1}`)}
                      </span>
                      <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded">
                        {get(player, 'role', '')}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-xs text-gray-500 text-center">
                  Total: {get(team1, 'playing11', []).length} players
                </div>
              </div>

              {/* Team 2 Playing XI */}
              <div>
                <h3 className="h4 mb-3 border-b border-gray-200 pb-2 text-gray-900">
                  {get(team2, 'name', 'Team 2')} Squad
                </h3>
                <div className="space-y-2">
                  {get(team2, 'playing11', []).map((player: Player, index: number) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-200">
                      <span className="text-sm text-gray-900 font-medium">
                        {get(player, 'name', `Player ${index + 1}`)}
                      </span>
                      <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded">
                        {get(player, 'role', '')}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-xs text-gray-500 text-center">
                  Total: {get(team2, 'playing11', []).length} players
                </div>
              </div>
            </div>

            {/* Squad Summary */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="h4 text-blue-900 mb-2">Squad Summary</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-blue-900">
                    {get(team1, 'name', 'Team 1')}
                  </div>
                  <div className="text-sm text-blue-700">
                    {get(team1, 'playing11', []).length} players
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-900">
                    {get(team2, 'name', 'Team 2')}
                  </div>
                  <div className="text-sm text-blue-700">
                    {get(team2, 'playing11', []).length} players
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Statistics & Win Percentage */}
        <div className="card">
          <div className="card-header">
            <h2 className="h2">Team Statistics & Win Percentage</h2>
          </div>
          <div className="card-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Team 1 Stats */}
              <div className="space-y-4">
                <h3 className="h4 text-blue-900 border-b border-blue-200 pb-2">
                  {get(team1, 'name', 'Team 1')} Statistics
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-blue-900">Season Win %</span>
                    <span className="text-lg font-bold text-blue-700">65%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-blue-900">Last 5 Matches</span>
                    <span className="text-sm text-blue-700">W W L W L</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-blue-900">Home Record</span>
                    <span className="text-sm text-blue-700">4-1 (80%)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-blue-900">Average Score</span>
                    <span className="text-sm text-blue-700">175/6</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-blue-900">Best Bowler</span>
                    <span className="text-sm text-blue-700">Jasprit Bumrah (12 wkts)</span>
                  </div>
                </div>
              </div>

              {/* Team 2 Stats */}
              <div className="space-y-4">
                <h3 className="h4 text-green-900 border-b border-green-200 pb-2">
                  {get(team2, 'name', 'Team 2')} Statistics
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-green-900">Season Win %</span>
                    <span className="text-lg font-bold text-green-700">60%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-green-900">Last 5 Matches</span>
                    <span className="text-sm text-green-700">L W W L W</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-green-900">Away Record</span>
                    <span className="text-sm text-green-700">3-2 (60%)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-green-900">Average Score</span>
                    <span className="text-sm text-green-700">168/7</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-green-900">Best Bowler</span>
                    <span className="text-sm text-green-700">Ravindra Jadeja (8 wkts)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Head-to-Head Stats */}
            <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="h4 text-purple-900 mb-3">Head-to-Head Statistics</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-white rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-900">12</div>
                  <div className="text-sm text-purple-700">Total Matches</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-900">7</div>
                  <div className="text-sm text-purple-700">{get(team1, 'name', 'Team 1')} Wins</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-900">5</div>
                  <div className="text-sm text-purple-700">{get(team2, 'name', 'Team 2')} Wins</div>
                </div>
              </div>
              <div className="mt-3 text-sm text-purple-700 text-center">
                Last Meeting: {get(team1, 'name', 'Team 1')} won by 25 runs in IPL 2023
              </div>
            </div>
          </div>
        </div>

        {/* Pre-Match Commentary & Analysis */}
        <div className="card">
          <div className="card-header">
            <h2 className="h2">Pre-Match Commentary & Analysis</h2>
          </div>
          <div className="card-content">
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="h4 text-yellow-900 mb-2">🎯 Key Battle</h3>
                <p className="text-sm text-yellow-800">
                  <strong>Jasprit Bumrah vs Ruturaj Gaikwad:</strong> The battle between MI&apos;s pace spearhead and CSK&apos;s in-form opener could decide the powerplay outcome.
                  Bumrah has dismissed Gaikwad 3 times in their 8 encounters.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="h4 text-blue-900 mb-2">🏏 Team Strategy</h3>
                <p className="text-sm text-blue-800">
                  <strong>{get(team1, 'name', 'Team 1')}:</strong> Look to capitalize on home advantage with aggressive batting in powerplay.
                  Their spinners will be crucial in middle overs on this surface.
                </p>
                <p className="text-sm text-blue-800 mt-2">
                  <strong>{get(team2, 'name', 'Team 2')}:</strong> Focus on building partnerships and targeting specific bowlers.
                  Their experience in pressure situations could be the difference.
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="h4 text-green-900 mb-2">⭐ Player to Watch</h3>
                <p className="text-sm text-green-800">
                  <strong>Hardik Pandya:</strong> The MI captain has been in scintillating form with both bat and ball.
                  His ability to accelerate in death overs and pick crucial wickets makes him the X-factor for this match.
                </p>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h3 className="h4 text-red-900 mb-2">🌦️ Weather Impact</h3>
                <p className="text-sm text-red-800">
                  <strong>Dew Factor:</strong> With clear skies and moderate humidity, dew is expected to play a significant role in the second innings.
                  Teams winning the toss might prefer to chase, as the ball will be harder to grip for spinners.
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="h4 text-purple-900 mb-2">📊 Match Prediction</h3>
                <p className="text-sm text-purple-800">
                  <strong>Expected Score:</strong> 180-200 runs on this batting-friendly surface.
                  <strong>Win Probability:</strong> {get(team1, 'name', 'Team 1')} 55% | {get(team2, 'name', 'Team 2')} 45%
                </p>
                <p className="text-sm text-purple-800 mt-2">
                  <strong>Key Factors:</strong> Toss, powerplay performance, and death overs execution will be crucial in determining the winner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
