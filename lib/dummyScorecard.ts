import { ScorecardData } from "./types";

export function buildDummyScorecard(matchId: string): ScorecardData {
  return {
    id: matchId,
    matchId,
    matchTitle: "Gujarat Titans vs Sunrisers Hyderabad",
    venue: "Narendra Modi Stadium, Ahmedabad",
    status: "LIVE",
    matchNumber: "Match 12",
    currentOverProgress: {
      currentOver: "19.3",
      ballsInOver: 3,
      matchSituation: "GT needs 2 runs from 3 balls to win"
    },
    currentRunRate: "8.65",
    requiredRunRate: "2.00",
    matchSituation: "GT is in a strong position to win with Gill and Miller at the crease",
    lastUpdatedISO: new Date().toISOString(),
    innings: [
      {
        teamName: "Sunrisers Hyderabad",
        score: "165",
        wickets: "7",
        overs: "20",
        batters: [
          {
            name: "Abhishek Sharma",
            runs: 45,
            balls: 28,
            fours: 4,
            sixes: 2,
            strikeRate: 160.71,
            dismissal: "c Pandya b Shami"
          },
          {
            name: "Travis Head",
            runs: 32,
            balls: 24,
            fours: 3,
            sixes: 1,
            strikeRate: 133.33,
            dismissal: "b Little"
          },
          {
            name: "Aiden Markram",
            runs: 28,
            balls: 20,
            fours: 2,
            sixes: 1,
            strikeRate: 140.00,
            dismissal: "c Wade b Shami"
          },
          {
            name: "Heinrich Klaasen",
            runs: 25,
            balls: 18,
            fours: 1,
            sixes: 2,
            strikeRate: 138.89,
            dismissal: "c Pandya b Rashid"
          },
          {
            name: "Abdul Samad",
            runs: 15,
            balls: 12,
            fours: 1,
            sixes: 0,
            strikeRate: 125.00,
            dismissal: "run out (Pandya/Wade)"
          },
          {
            name: "Shahbaz Ahmed",
            runs: 8,
            balls: 6,
            fours: 0,
            sixes: 0,
            strikeRate: 133.33,
            dismissal: "c Wade b Rashid"
          },
          {
            name: "Pat Cummins",
            runs: 5,
            balls: 4,
            fours: 0,
            sixes: 0,
            strikeRate: 125.00,
            dismissal: "b Shami"
          },
          {
            name: "Bhuvneshwar Kumar",
            runs: 2,
            balls: 3,
            fours: 0,
            sixes: 0,
            strikeRate: 66.67,
            dismissal: "not out"
          },
          {
            name: "Jaydev Unadkat",
            runs: 1,
            balls: 2,
            fours: 0,
            sixes: 0,
            strikeRate: 50.00,
            dismissal: "not out"
          }
        ],
        bowlers: [
          {
            name: "Mohammed Shami",
            overs: "4",
            maidens: 0,
            runs: 35,
            wickets: 3,
            economy: 8.75
          },
          {
            name: "Joshua Little",
            overs: "4",
            maidens: 0,
            runs: 28,
            wickets: 1,
            economy: 7.00
          },
          {
            name: "Rashid Khan",
            overs: "4",
            maidens: 0,
            runs: 32,
            wickets: 2,
            economy: 8.00
          },
          {
            name: "Hardik Pandya",
            overs: "4",
            maidens: 0,
            runs: 38,
            wickets: 1,
            economy: 9.50
          },
          {
            name: "Azmatullah Omarzai",
            overs: "4",
            maidens: 0,
            runs: 32,
            wickets: 0,
            economy: 8.00
          }
        ],
        yetToBat: [
          { name: "Mayank Markande", role: "Bowler" },
          { name: "T Natarajan", role: "Bowler" }
        ]
      },
      {
        teamName: "Gujarat Titans",
        score: "168",
        wickets: "4",
        overs: "19.3",
        batters: [
          {
            name: "Shubman Gill",
            runs: 89,
            balls: 56,
            fours: 8,
            sixes: 3,
            strikeRate: 158.93,
            dismissal: "not out"
          },
          {
            name: "Wriddhiman Saha",
            runs: 25,
            balls: 18,
            fours: 3,
            sixes: 0,
            strikeRate: 138.89,
            dismissal: "c Klaasen b Cummins"
          },
          {
            name: "Azmatullah Omarzai",
            runs: 18,
            balls: 12,
            fours: 2,
            sixes: 0,
            strikeRate: 150.00,
            dismissal: "c Markram b Unadkat"
          },
          {
            name: "David Miller",
            runs: 15,
            balls: 8,
            fours: 1,
            sixes: 1,
            strikeRate: 187.50,
            dismissal: "c Klaasen b Cummins"
          },
          {
            name: "Rahul Tewatia",
            runs: 8,
            balls: 6,
            fours: 0,
            sixes: 0,
            strikeRate: 133.33,
            dismissal: "c Markram b Unadkat"
          },
          {
            name: "Rashid Khan",
            runs: 5,
            balls: 3,
            fours: 0,
            sixes: 0,
            strikeRate: 166.67,
            dismissal: "not out"
          }
        ],
        bowlers: [
          {
            name: "Pat Cummins",
            overs: "4",
            maidens: 0,
            runs: 42,
            wickets: 2,
            economy: 10.50
          },
          {
            name: "Bhuvneshwar Kumar",
            overs: "4",
            maidens: 0,
            runs: 35,
            wickets: 0,
            economy: 8.75
          },
          {
            name: "Jaydev Unadkat",
            overs: "3.3",
            maidens: 0,
            runs: 28,
            wickets: 2,
            economy: 8.00
          },
          {
            name: "Mayank Markande",
            overs: "4",
            maidens: 0,
            runs: 38,
            wickets: 0,
            economy: 9.50
          },
          {
            name: "Shahbaz Ahmed",
            overs: "4",
            maidens: 0,
            runs: 25,
            wickets: 0,
            economy: 6.25
          }
        ],
        yetToBat: [
          { name: "Hardik Pandya", role: "All-rounder" },
          { name: "Mohammed Shami", role: "Bowler" },
          { name: "Joshua Little", role: "Bowler" },
          { name: "Azmatullah Omarzai", role: "All-rounder" }
        ]
      }
    ]
  };
}


