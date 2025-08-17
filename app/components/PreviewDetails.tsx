"use client";
import { MatchPreviewData } from "@/lib/types";

export default function PreviewDetails({ data }: { data: MatchPreviewData }) {
  const home = data.team1;
  const away = data.team2;
  const teams = [home, away];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Teams */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="mb-3 sm:mb-4">
          <h2 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">Playing XI</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {teams.map((team) => (
            <div key={team.name} className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4">
              <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">Playing XI</div>
              <div className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">{team.name}</div>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm space-y-1">
                {team.playing11.map((player, index) => (
                  <li key={index} className="text-zinc-600 dark:text-zinc-300">{player.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">Match Officials</div>
        <div className="text-xs sm:text-sm mt-1 text-zinc-800 dark:text-zinc-200">On-field: {data.officials.onField.join(", ")}</div>
        {data.officials.thirdUmpire && <div className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">Third umpire: {data.officials.thirdUmpire}</div>}
        {data.officials.referee && <div className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">Match referee: {data.officials.referee}</div>}
      </div>

      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
        <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">Weather</div>
        <div className="text-sm sm:text-base font-semibold text-zinc-800 dark:text-zinc-200">{data.weather.summary}</div>
        <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
          {data.weather.temperatureC != null && <span>{data.weather.temperatureC}°C</span>}
          {data.weather.humidityPct != null && <span> • {data.weather.humidityPct}% humidity</span>}
          {data.weather.windKph != null && <span> • Wind {data.weather.windKph} km/h</span>}
          {data.weather.precipitationPct != null && <span> • {data.weather.precipitationPct}% precip</span>}
        </div>
      </div>

      {data.commentary && data.commentary.length > 0 && (
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 bg-white/70 dark:bg-zinc-900/50">
          <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">Commentary</div>
          <ul className="mt-2 list-disc list-inside text-xs sm:text-sm space-y-1 text-zinc-800 dark:text-zinc-200">
            {data.commentary.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


