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

  const handleTabClick = (key: string) => {
    if (onChange) {
      onChange(key);
    } else {
      setInternal(key);
    }
  };

  return (
    <div className="mb-4 sm:mb-6">
      <nav className="flex gap-2 sm:gap-4 overflow-x-auto scrollbar-hide pt-2" aria-label="Tabs" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            role="tab"
            aria-selected={current === tab.key}
            className={`whitespace-nowrap px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm font-medium cursor-pointer rounded-lg transition-colors ${current === tab.key
              ? "bg-[#1F4571] text-white"
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}


