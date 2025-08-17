"use client";
import { useState } from "react";

interface TabDef {
  key: string;
  label: string;
}

interface Props {
  tabs: TabDef[];
  initial?: string;
  value?: string; // controlled value (optional)
  onChange?: (key: string) => void;
}

export default function Tabs({ tabs, initial, value, onChange }: Props) {
  const [internal, setInternal] = useState<string>(initial ?? tabs[0]?.key);
  const current = value ?? internal;

  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-2 sm:px-4">
        <nav className="flex gap-4 overflow-x-auto" aria-label="Tabs" role="tablist">
          {tabs.map((t) => {
            const active = t.key === current;
            return (
              <button
                key={t.key}
                className={`whitespace-nowrap px-3 py-3 text-sm font-medium cursor-pointer ${
                  active ? "border-b-2 border-[#1F4571] text-[#1F4571]" : "text-zinc-500 hover:text-zinc-700"
                }`}
                role="tab"
                aria-selected={active}
                onClick={() => {
                  if (value === undefined) setInternal(t.key);
                  onChange?.(t.key);
                }}
              >
                {t.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}


