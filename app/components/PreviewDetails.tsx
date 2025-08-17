"use client";
import { MatchPreviewData } from "@/lib/types";

export default function PreviewDetails({ data }: { data: MatchPreviewData }) {
  const home = data.team1;
  const away = data.team2;
  return (
    <div className="space-y-4">
      <div className="text-xs inline-flex items-center gap-2 px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-900/60">
        <span className="font-semibold">Status:</span> {data.status}
      </div>
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
        <div className="text-sm text-zinc-500">Venue</div>
        <div className="text-lg font-semibold">{data.venue.name}</div>
        <div className="text-sm text-zinc-600">{[data.venue.city, data.venue.country].filter(Boolean).join(", ")}</div>
        {data.venue.pitchDescription && (
          <div className="mt-2 text-sm text-zinc-700">Pitch: {data.venue.pitchDescription}</div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[home, away].map((team) => (
          <div key={team.name} className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
            <div className="text-sm text-zinc-500">Playing XI</div>
            <div className="text-lg font-semibold">{team.name}</div>
            <ul className="mt-2 list-disc list-inside text-sm space-y-1">
              {team.playing11.map((p) => (
                <li key={p.name}>{p.name} ({p.role})</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
        <div className="text-sm text-zinc-500">Match Officials</div>
        <div className="text-sm mt-1">On-field: {data.officials.onField.join(", ")}</div>
        {data.officials.thirdUmpire && <div className="text-sm">Third umpire: {data.officials.thirdUmpire}</div>}
        {data.officials.referee && <div className="text-sm">Match referee: {data.officials.referee}</div>}
      </div>

      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
        <div className="text-sm text-zinc-500">Weather</div>
        <div className="text-lg font-semibold">{data.weather.summary}</div>
        <div className="text-sm text-zinc-600">
          {data.weather.temperatureC != null && <span>{data.weather.temperatureC}°C</span>}
          {data.weather.humidityPct != null && <span> • {data.weather.humidityPct}% humidity</span>}
          {data.weather.windKph != null && <span> • Wind {data.weather.windKph} km/h</span>}
          {data.weather.precipitationPct != null && <span> • {data.weather.precipitationPct}% precip</span>}
        </div>
      </div>

      {data.commentary && data.commentary.length > 0 && (
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
          <div className="text-sm text-zinc-500">Commentary</div>
          <ul className="mt-2 list-disc list-inside text-sm space-y-1">
            {data.commentary.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


