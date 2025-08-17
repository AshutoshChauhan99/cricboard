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
    matchTitle: "Mumbai Indians vs Chennai Super Kings",
    dateISO: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    status,
    venue: {
      name: "Wankhede Stadium",
      city: "Mumbai",
      country: "India",
      capacity: "33,108",
      pitchDescription: "Traditionally flat with good bounce; aids stroke play and high scores. Dew factor in second innings.",
    },
    team1: {
      name: "Mumbai Indians",
      shortName: "MI",
      playing11: [
        { name: "Rohit Sharma", role: "Batsman" },
        { name: "Ishan Kishan (wk)", role: "Wicket-keeper" },
        { name: "Suryakumar Yadav", role: "Batsman" },
        { name: "Tim David", role: "All-rounder" },
        { name: "Tilak Varma", role: "Batsman" },
        { name: "Hardik Pandya (c)", role: "All-rounder" },
        { name: "Romario Shepherd", role: "All-rounder" },
        { name: "Piyush Chawla", role: "Bowler" },
        { name: "Jasprit Bumrah", role: "Bowler" },
        { name: "Gerald Coetzee", role: "Bowler" },
        { name: "Akash Madhwal", role: "Bowler" },
        { name: "Nehal Wadhera", role: "Batsman" },
        { name: "Kumar Kartikeya", role: "Bowler" },
        { name: "Hrithik Shokeen", role: "All-rounder" },
        { name: "Raghav Goyal", role: "Bowler" },
        { name: "Dewald Brevis", role: "Batsman" },
      ],
    },
    team2: {
      name: "Chennai Super Kings",
      shortName: "CSK",
      playing11: [
        { name: "Ruturaj Gaikwad (c)", role: "Batsman" },
        { name: "Rachin Ravindra", role: "All-rounder" },
        { name: "Ajinkya Rahane", role: "Batsman" },
        { name: "Daryl Mitchell", role: "All-rounder" },
        { name: "Shivam Dube", role: "All-rounder" },
        { name: "MS Dhoni (wk)", role: "Wicket-keeper" },
        { name: "Ravindra Jadeja", role: "All-rounder" },
        { name: "Shardul Thakur", role: "All-rounder" },
        { name: "Tushar Deshpande", role: "Bowler" },
        { name: "Matheesha Pathirana", role: "Bowler" },
        { name: "Maheesh Theekshana", role: "Bowler" },
        { name: "Sameer Rizvi", role: "Batsman" },
        { name: "Shaik Rasheed", role: "Batsman" },
        { name: "Nishant Sindhu", role: "All-rounder" },
        { name: "Simarjeet Singh", role: "Bowler" },
        { name: "Mitchell Santner", role: "All-rounder" },
      ],
    },
    officials: {
      onField: ["Nitin Menon", "Anil Chaudhary"],
      thirdUmpire: "Michael Gough",
      referee: "Javagal Srinath",
    },
    weather: {
      summary: "Clear skies, warm evening with moderate humidity",
      temperatureC: 31,
      humidityPct: 65,
      windKph: 12,
      precipitationPct: 5,
    },
    commentary: [
      "Preview: MI's top-order form vs CSK's death bowling.",
      "Focus: Dew factor may influence chasing advantage.",
      "Pitch: Expect a 180+ surface with good carry.",
      "Key Battle: Bumrah vs Gaikwad in powerplay.",
      "X-Factor: MS Dhoni's finishing abilities in death overs."
    ],
    lastUpdatedISO: new Date().toISOString(),
  };
}


