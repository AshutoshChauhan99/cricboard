import { MatchPreviewData } from "./types";

export function buildDummyPreview(matchId: string): MatchPreviewData {
  // Determine status based on match ID
  let status: "LIVE" | "UPCOMING" | "COMPLETED" = "UPCOMING";
  if (matchId === "match-live") {
    status = "LIVE";
  } else if (matchId.startsWith("sched-") && parseInt(matchId.split("-")[1]) % 3 === 0) {
    status = "COMPLETED";
  }

  return {
    matchId,
    matchTitle: "MI vs CSK",
    dateISO: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    status,
    venue: {
      name: "Wankhede Stadium",
      city: "Mumbai",
      country: "India",
      capacity: "33,000",
      pitchDescription: "Traditionally flat with good bounce; aids stroke play and high scores.",
    },
    teams: [
      {
        name: "Mumbai Indians",
        shortName: "MI",
        playing11: [
          "Rohit Sharma", "Ishan Kishan (wk)", "Suryakumar Yadav", "Tim David", "Tilak Varma",
          "Hardik Pandya (c)", "Romario Shepherd", "Piyush Chawla", "Jasprit Bumrah",
          "Gerald Coetzee", "Akash Madhwal",
        ],
      },
      {
        name: "Chennai Super Kings",
        shortName: "CSK",
        playing11: [
          "Ruturaj Gaikwad (c)", "Rachin Ravindra", "Ajinkya Rahane", "Daryl Mitchell",
          "Shivam Dube", "MS Dhoni (wk)", "Ravindra Jadeja", "Shardul Thakur",
          "Tushar Deshpande", "Matheesha Pathirana", "Maheesh Theekshana",
        ],
      },
    ],
    officials: {
      onField: ["Nitin Menon", "Anil Chaudhary"],
      thirdUmpire: "Michael Gough",
      referee: "Javagal Srinath",
    },
    weather: {
      summary: "Clear skies, warm evening",
      temperatureC: 31,
      humidityPct: 65,
      windKph: 12,
      precipitationPct: 5,
    },
    commentary: [
      "Preview: MI's top-order form vs CSK's death bowling.",
      "Focus: Dew factor may influence chasing advantage.",
      "Pitch: Expect a 180+ surface with good carry.",
    ],
    lastUpdatedISO: new Date().toISOString(),
  };
}


