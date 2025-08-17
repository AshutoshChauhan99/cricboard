import { ScorecardData } from "./types";

export function buildDummyLiveMatch(matchId: string): ScorecardData {
  const liveMatches = {
    "match-live-1": {
      matchTitle: "GT vs SRH",
      venue: "Narendra Modi Stadium, Ahmedabad",
      currentOverProgress: {
        currentOver: "19.4",
        ballsInOver: 4,
        runsInOver: 8,
        wicketsInOver: 0,
        extrasInOver: 1,
        currentBatters: {
          striker: "Shubman Gill",
          nonStriker: "Rahul Tewatia"
        },
        currentBowler: "T Natarajan",
        lastBallResult: "1 run",
        currentRunRate: 8.4,
        requiredRunRate: 8.2,
        matchSituation: "GT needs 3 runs from 2 balls to win"
      },
      innings: [
        {
          teamName: "Gujarat Titans",
          runs: 168,
          wickets: 4,
          overs: "19.3",
          batters: [
            { name: "Shubman Gill", runs: 72, balls: 48, fours: 8, sixes: 2, strikeRate: 150, dismissal: "not out" },
            { name: "Wriddhiman Saha", runs: 18, balls: 15, fours: 2, sixes: 0, strikeRate: 120, dismissal: "c †Klaasen b Bhuvneshwar" },
            { name: "Sai Sudharsan", runs: 45, balls: 30, fours: 4, sixes: 1, strikeRate: 150, dismissal: "c Markram b Natarajan" },
            { name: "David Miller", runs: 12, balls: 8, fours: 1, sixes: 0, strikeRate: 150, dismissal: "c Markram b Natarajan" },
            { name: "Rahul Tewatia", runs: 8, balls: 6, fours: 0, sixes: 0, strikeRate: 133.33, dismissal: "not out" },
          ],
          yetToBat: [
            { name: "Rashid Khan", role: "Bowler" },
            { name: "Mohit Sharma", role: "Bowler" },
            { name: "Joshua Little", role: "Bowler" },
            { name: "Alzarri Joseph", role: "Bowler" },
            { name: "Umesh Yadav", role: "Bowler" },
            { name: "Spencer Johnson", role: "Bowler" }
          ],
          bowlers: [
            { name: "Bhuvneshwar Kumar", overs: "4", maidens: 0, runs: 35, wickets: 1, economy: 8.75 },
            { name: "T Natarajan", overs: "4", maidens: 0, runs: 29, wickets: 2, economy: 7.25 },
            { name: "Marco Jansen", overs: "4", maidens: 0, runs: 32, wickets: 0, economy: 8.0 },
            { name: "Mayank Markande", overs: "3.3", maidens: 0, runs: 28, wickets: 0, economy: 8.0 },
            { name: "Shahbaz Ahmed", overs: "4", maidens: 0, runs: 44, wickets: 1, economy: 11.0 },
          ],
        },
        {
          teamName: "Sunrisers Hyderabad",
          runs: 165,
          wickets: 7,
          overs: "20",
          batters: [
            { name: "Travis Head", runs: 55, balls: 34, fours: 6, sixes: 3, strikeRate: 161.8, dismissal: "c Tewatia b Rashid" },
            { name: "Abhishek Sharma", runs: 22, balls: 20, fours: 3, sixes: 0, strikeRate: 110, dismissal: "c Miller b Rashid" },
            { name: "Aiden Markram", runs: 18, balls: 15, fours: 2, sixes: 0, strikeRate: 120, dismissal: "c Tewatia b Rashid" },
            { name: "Heinrich Klaasen", runs: 35, balls: 22, fours: 2, sixes: 2, strikeRate: 159.1, dismissal: "c Gill b Mohit" },
            { name: "Abdul Samad", runs: 15, balls: 12, fours: 1, sixes: 0, strikeRate: 125, dismissal: "c Saha b Mohit" },
            { name: "Shahbaz Ahmed", runs: 8, balls: 6, fours: 0, sixes: 0, strikeRate: 133.33, dismissal: "c Tewatia b Rashid" },
            { name: "Marco Jansen", runs: 12, balls: 8, fours: 1, sixes: 0, strikeRate: 150, dismissal: "not out" },
          ],
          yetToBat: [
            { name: "Bhuvneshwar Kumar", role: "Bowler" },
            { name: "T Natarajan", role: "Bowler" },
            { name: "Mayank Markande", role: "Bowler" }
          ],
          bowlers: [
            { name: "Mohit Sharma", overs: "4", maidens: 0, runs: 28, wickets: 2, economy: 7.0 },
            { name: "Rashid Khan", overs: "4", maidens: 0, runs: 34, wickets: 4, economy: 8.5 },
            { name: "Joshua Little", overs: "4", maidens: 0, runs: 32, wickets: 0, economy: 8.0 },
            { name: "Alzarri Joseph", overs: "4", maidens: 0, runs: 38, wickets: 0, economy: 9.5 },
            { name: "Rahul Tewatia", overs: "4", maidens: 0, runs: 33, wickets: 1, economy: 8.25 },
          ],
        },
      ],
    },
    "match-live-2": {
      matchTitle: "MI vs CSK",
      venue: "Wankhede Stadium, Mumbai",
      currentOverProgress: {
        currentOver: "16.4",
        ballsInOver: 4,
        runsInOver: 6,
        wicketsInOver: 0,
        extrasInOver: 0,
        currentBatters: {
          striker: "Tim David",
          nonStriker: "Hardik Pandya"
        },
        currentBowler: "Shardul Thakur",
        lastBallResult: "2 runs",
        currentRunRate: 8.8,
        requiredRunRate: 7.2,
        matchSituation: "MI needs 8 runs from 20 balls to win"
      },
      innings: [
        {
          teamName: "Mumbai Indians",
          runs: 145,
          wickets: 6,
          overs: "16.4",
          batters: [
            { name: "Rohit Sharma", runs: 45, balls: 32, fours: 4, sixes: 2, strikeRate: 140.6, dismissal: "c †Dhoni b Pathirana" },
            { name: "Ishan Kishan", runs: 28, balls: 22, fours: 3, sixes: 1, strikeRate: 127.3, dismissal: "c †Dhoni b Jadeja" },
            { name: "Suryakumar Yadav", runs: 35, balls: 28, fours: 3, sixes: 1, strikeRate: 125, dismissal: "b Pathirana" },
            { name: "Tilak Varma", runs: 12, balls: 10, fours: 1, sixes: 0, strikeRate: 120, dismissal: "c †Dhoni b Jadeja" },
            { name: "Tim David", runs: 15, balls: 12, fours: 1, sixes: 0, strikeRate: 125, dismissal: "not out" },
            { name: "Hardik Pandya", runs: 8, balls: 6, fours: 0, sixes: 0, strikeRate: 133.33, dismissal: "not out" },
          ],
          yetToBat: [
            { name: "Romario Shepherd", role: "All-rounder" },
            { name: "Piyush Chawla", role: "Bowler" },
            { name: "Jasprit Bumrah", role: "Bowler" },
            { name: "Gerald Coetzee", role: "Bowler" },
            { name: "Akash Madhwal", role: "Bowler" }
          ],
          bowlers: [
            { name: "Ravindra Jadeja", overs: "4", maidens: 0, runs: 28, wickets: 2, economy: 7.0 },
            { name: "Matheesha Pathirana", overs: "4", maidens: 0, runs: 32, wickets: 2, economy: 8.0 },
            { name: "Shardul Thakur", overs: "3.4", maidens: 0, runs: 25, wickets: 1, economy: 6.82 },
            { name: "Tushar Deshpande", overs: "3", maidens: 0, runs: 28, wickets: 0, economy: 9.33 },
            { name: "Maheesh Theekshana", overs: "2", maidens: 0, runs: 32, wickets: 1, economy: 16.0 },
          ],
        },
        {
          teamName: "Chennai Super Kings",
          runs: 142,
          wickets: 8,
          overs: "20",
          batters: [
            { name: "Ruturaj Gaikwad", runs: 38, balls: 30, fours: 4, sixes: 1, strikeRate: 126.7, dismissal: "c Kishan b Bumrah" },
            { name: "Rachin Ravindra", runs: 25, balls: 18, fours: 2, sixes: 1, strikeRate: 138.9, dismissal: "c Kishan b Bumrah" },
            { name: "Ajinkya Rahane", runs: 18, balls: 15, fours: 2, sixes: 0, strikeRate: 120, dismissal: "c David b Coetzee" },
            { name: "Daryl Mitchell", runs: 22, balls: 18, fours: 2, sixes: 1, strikeRate: 122.2, dismissal: "c Kishan b Coetzee" },
            { name: "Shivam Dube", runs: 15, balls: 12, fours: 1, sixes: 0, strikeRate: 125, dismissal: "c Kishan b Bumrah" },
            { name: "MS Dhoni", runs: 12, balls: 8, fours: 1, sixes: 0, strikeRate: 150, dismissal: "c Kishan b Coetzee" },
            { name: "Ravindra Jadeja", runs: 8, balls: 6, fours: 0, sixes: 0, strikeRate: 133.33, dismissal: "c Kishan b Bumrah" },
            { name: "Shardul Thakur", runs: 4, balls: 3, fours: 0, sixes: 0, strikeRate: 133.33, dismissal: "not out" },
          ],
          yetToBat: [
            { name: "Tushar Deshpande", role: "Bowler" },
            { name: "Matheesha Pathirana", role: "Bowler" },
            { name: "Maheesh Theekshana", role: "Bowler" }
          ],
          bowlers: [
            { name: "Jasprit Bumrah", overs: "4", maidens: 0, runs: 25, wickets: 4, economy: 6.25 },
            { name: "Gerald Coetzee", overs: "4", maidens: 0, runs: 30, wickets: 3, economy: 7.5 },
            { name: "Akash Madhwal", overs: "4", maidens: 0, runs: 35, wickets: 0, economy: 8.75 },
            { name: "Piyush Chawla", overs: "4", maidens: 0, runs: 28, wickets: 1, economy: 7.0 },
            { name: "Hardik Pandya", overs: "4", maidens: 0, runs: 24, wickets: 0, economy: 6.0 },
          ],
        },
      ],
    },
    "match-live-3": {
      matchTitle: "RCB vs KKR",
      venue: "M. Chinnaswamy Stadium, Bengaluru",
      currentOverProgress: {
        currentOver: "8.2",
        ballsInOver: 2,
        runsInOver: 4,
        wicketsInOver: 0,
        extrasInOver: 0,
        currentBatters: {
          striker: "Virat Kohli",
          nonStriker: "Faf du Plessis"
        },
        currentBowler: "Mitchell Starc",
        lastBallResult: "2 runs",
        currentRunRate: 10.8,
        requiredRunRate: 9.3,
        matchSituation: "RCB chasing 187, need 98 runs from 70 balls"
      },
      innings: [
        {
          teamName: "Kolkata Knight Riders",
          runs: 186,
          wickets: 7,
          overs: "20",
          batters: [
            { name: "Sunil Narine", runs: 85, balls: 39, fours: 7, sixes: 7, strikeRate: 217.9, dismissal: "c Kohli b Siraj" },
            { name: "Andre Russell", runs: 45, balls: 22, fours: 3, sixes: 3, strikeRate: 204.5, dismissal: "c Kohli b Siraj" },
            { name: "Rinku Singh", runs: 32, balls: 18, fours: 2, sixes: 2, strikeRate: 177.8, dismissal: "c †Karthik b Dagar" },
            { name: "Shreyas Iyer", runs: 12, balls: 10, fours: 1, sixes: 0, strikeRate: 120, dismissal: "c Maxwell b Joseph" },
            { name: "Venkatesh Iyer", runs: 8, balls: 6, fours: 1, sixes: 0, strikeRate: 133.33, dismissal: "c †Karthik b Joseph" },
            { name: "Nitish Rana", runs: 2, balls: 3, fours: 0, sixes: 0, strikeRate: 66.67, dismissal: "c †Karthik b Joseph" },
            { name: "Rahmanullah Gurbaz", runs: 2, balls: 2, fours: 0, sixes: 0, strikeRate: 100, dismissal: "not out" },
          ],
          bowlers: [
            { name: "Mohammed Siraj", overs: "4", maidens: 0, runs: 35, wickets: 3, economy: 8.75 },
            { name: "Mayank Dagar", overs: "2", maidens: 0, runs: 18, wickets: 1, economy: 9.0 },
            { name: "Alzarri Joseph", overs: "4", maidens: 0, runs: 42, wickets: 2, economy: 10.5 },
            { name: "Cameron Green", overs: "4", maidens: 0, runs: 38, wickets: 0, economy: 9.5 },
            { name: "Glenn Maxwell", overs: "3", maidens: 0, runs: 28, wickets: 0, economy: 9.33 },
            { name: "Yash Dayal", overs: "3", maidens: 0, runs: 25, wickets: 1, economy: 8.33 },
          ],
          yetToBat: []
        },
        {
          teamName: "Royal Challengers Bengaluru",
          runs: 89,
          wickets: 3,
          overs: "8.2",
          batters: [
            { name: "Virat Kohli", runs: 45, balls: 28, fours: 4, sixes: 2, strikeRate: 160.7, dismissal: "not out" },
            { name: "Faf du Plessis", runs: 38, balls: 22, fours: 3, sixes: 2, strikeRate: 172.7, dismissal: "not out" },
            { name: "Glenn Maxwell", runs: 6, balls: 4, fours: 0, sixes: 0, strikeRate: 150, dismissal: "c †Gurbaz b Russell" },
          ],
          yetToBat: [
            { name: "Cameron Green", role: "All-rounder" },
            { name: "Dinesh Karthik", role: "Wicket-keeper" },
            { name: "Anuj Rawat", role: "Wicket-keeper" },
            { name: "Mahipal Lomror", role: "Batsman" },
            { name: "Alzarri Joseph", role: "Bowler" },
            { name: "Mayank Dagar", role: "Bowler" },
            { name: "Mohammed Siraj", role: "Bowler" },
            { name: "Yash Dayal", role: "Bowler" }
          ],
          bowlers: [
            { name: "Andre Russell", overs: "2", maidens: 0, runs: 15, wickets: 1, economy: 7.5 },
            { name: "Sunil Narine", overs: "2", maidens: 0, runs: 18, wickets: 0, economy: 9.0 },
            { name: "Varun Chakravarthy", overs: "2", maidens: 0, runs: 20, wickets: 0, economy: 10.0 },
            { name: "Harshit Rana", overs: "1.2", maidens: 0, runs: 18, wickets: 0, economy: 13.5 },
            { name: "Mitchell Starc", overs: "1", maidens: 0, runs: 18, wickets: 0, economy: 18.0 },
          ],
        },
      ],
    }
  };

  const matchData = liveMatches[matchId as keyof typeof liveMatches] || liveMatches["match-live-1"];

  return {
    id: matchId,
    matchId,
    matchTitle: matchData.matchTitle,
    venue: matchData.venue,
    status: "LIVE",
    lastUpdatedISO: new Date().toISOString(),
    currentOverProgress: matchData.currentOverProgress,
    innings: matchData.innings,
  };
}
