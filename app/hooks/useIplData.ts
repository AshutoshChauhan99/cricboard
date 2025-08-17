"use client";
import useSWR from "swr";
import { IplData } from "@/lib/types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useIplData() {
  const { data, error, isLoading, mutate } = useSWR<IplData>("/api/scrape", fetcher, {
    refreshInterval: 60_000,
    revalidateOnFocus: true,
  });

  return { data, error, isLoading, mutate };
}


