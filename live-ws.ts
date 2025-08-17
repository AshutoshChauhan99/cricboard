/*
  Simple WebSocket server to push IPL updates to clients.
  Run alongside Next.js dev server using: npm run dev:all
*/
import { WebSocketServer } from "ws";
import { scrapeIpl } from "./lib/scraper";

const PORT = Number(process.env.WS_PORT || 4001);
const TICK_MS = 30_000; // broadcast every 30s

const wss = new WebSocketServer({ port: PORT });
console.log(`[ws] Live server listening on ws://localhost:${PORT}`);

async function broadcastLatest() {
  try {
    const data = await scrapeIpl();
    const payload = JSON.stringify({ type: "ipl:update", data });
    for (const client of wss.clients) {
      if (client.readyState === 1) {
        client.send(payload);
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Broadcast error", err);
  }
}

wss.on("connection", (ws) => {
  ws.send(JSON.stringify({ type: "hello", message: "connected" }));
});

setInterval(broadcastLatest, TICK_MS);


