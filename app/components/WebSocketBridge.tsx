"use client";
import { useEffect } from "react";
import { useIplData } from "@/app/hooks/useIplData";

interface Props {
  wsUrl?: string;
}

export default function WebSocketBridge({ wsUrl }: Props) {
  const { mutate } = useIplData();

  useEffect(() => {
    const url = wsUrl || `ws://localhost:${process.env.NEXT_PUBLIC_WS_PORT || 4001}`;
    const ws = new WebSocket(url);
    ws.onmessage = (ev) => {
      try {
        const payload = JSON.parse(ev.data);
        if (payload?.type === "ipl:update") {
          mutate();
        }
      } catch {}
    };
    return () => ws.close();
  }, [mutate, wsUrl]);

  return null;
}


