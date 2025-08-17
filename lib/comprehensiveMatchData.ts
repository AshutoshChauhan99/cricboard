import { ComprehensiveMatchData } from "./types";

export const comprehensiveMatchData: Record<string, ComprehensiveMatchData> = {
  "completed-1": {
    matchId: "completed-1",
    matchTitle: "RCB vs KKR",
    status: "COMPLETED",
    dateISO: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    localTime: new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleTimeString(),
    venue: {
      name: "M. Chinnaswamy Stadium",
      city: "Bengaluru",
      country: "India",
      capacity: 40000,
      established: 1969,
      pitchType: "Batting friendly",
      averageFirstInnings: 185,
      averageSecondInnings: 165,
      highestTotal: 263,
      lowestTotal: 82,
      description: "Known for its batting-friendly pitch and high-scoring matches. The short boundaries and flat track make it a paradise for batsmen. The pitch tends to slow down in the second innings, giving spinners some assistance.",
      facilities: ["Floodlights", "Dugouts", "Media Center", "VIP Boxes", "Parking", "Food Courts"]
    },
    weather: {
      temperature: 28,
      humidity: 65,
      windSpeed: 12,
      windDirection: "South-West",
      conditions: "Partly Cloudy",
      visibility: 8,
      precipitation: 0
    },
    umpires: {
      onField: {
        first: "Nitin Menon",
        second: "Anil Chaudhary"
      },
      third: "Virender Sharma",
      fourth: "Javagal Srinath",
      matchReferee: "Javagal Srinath"
    },
    playing11: {
      team1: [
        {
          name: "Virat Kohli",
          role: "Batsman",
          battingStyle: "Right-handed",
          nationality: "Indian",
          age: 35,
          matches: 237,
          runs: 7263
        },
        {
          name: "Faf du Plessis",
          role: "Batsman",
          battingStyle: "Right-handed",
          nationality: "South African",
          age: 39,
          matches: 130,
          runs: 4175
        },
        {
          name: "Glenn Maxwell",
          role: "All-rounder",
          battingStyle: "Right-handed",
          bowlingStyle: "Right-arm off-spin",
          nationality: "Australian",
          age: 35,
          matches: 124,
          runs: 2719,
          wickets: 29
        },
        {
          name: "Dinesh Karthik",
          role: "Wicket-keeper",
          battingStyle: "Right-handed",
          nationality: "Indian",
          age: 38,
          matches: 242,
          runs: 4516,
          catches: 140,
          stumpings: 37
        },
        {
          name: "Mahipal Lomror",
          role: "All-rounder",
          battingStyle: "Left-handed",
          bowlingStyle: "Right-arm off-spin",
          nationality: "Indian",
          age: 24,
          matches: 23,
          runs: 426,
          wickets: 3
        },
        {
          name: "Anuj Rawat",
          role: "Wicket-keeper",
          battingStyle: "Left-handed",
          nationality: "Indian",
          age: 24,
          matches: 12,
          runs: 151
        },
        {
          name: "Dwayne Bravo",
          role: "All-rounder",
          battingStyle: "Right-handed",
          bowlingStyle: "Right-arm medium-fast",
          nationality: "West Indian",
          age: 40,
          matches: 161,
          runs: 1536,
          wickets: 183
        },
        {
          name: "Harshal Patel",
          role: "Bowler",
          bowlingStyle: "Right-arm medium-fast",
          nationality: "Indian",
          age: 33,
          matches: 91,
          wickets: 139
        },
        {
          name: "Mohammed Siraj",
          role: "Bowler",
          bowlingStyle: "Right-arm fast-medium",
          nationality: "Indian",
          age: 29,
          matches: 73,
          wickets: 78
        },
        {
          name: "Josh Hazlewood",
          role: "Bowler",
          bowlingStyle: "Right-arm fast-medium",
          nationality: "Australian",
          age: 32,
          matches: 27,
          wickets: 35
        },
        {
          name: "Wanindu Hasaranga",
          role: "All-rounder",
          battingStyle: "Right-handed",
          bowlingStyle: "Right-arm leg-spin",
          nationality: "Sri Lankan",
          age: 25,
          matches: 26,
          runs: 352,
          wickets: 35
        }
      ],
      team2: [
        {
          name: "Shreyas Iyer",
          role: "Batsman",
          battingStyle: "Right-handed",
          nationality: "Indian",
          age: 28,
          matches: 101,
          runs: 2776
        },
        {
          name: "Rahmanullah Gurbaz",
          role: "Wicket-keeper",
          battingStyle: "Right-handed",
          nationality: "Afghan",
          age: 22,
          matches: 12,
          runs: 325,
          catches: 8,
          stumpings: 2
        },
        {
          name: "Venkatesh Iyer",
          role: "All-rounder",
          battingStyle: "Left-handed",
          bowlingStyle: "Right-arm medium",
          nationality: "Indian",
          age: 28,
          matches: 32,
          runs: 474,
          wickets: 5
        },
        {
          name: "Nitish Rana",
          role: "Batsman",
          battingStyle: "Left-handed",
          nationality: "Indian",
          age: 29,
          matches: 98,
          runs: 2180
        },
        {
          name: "Rinku Singh",
          role: "Batsman",
          battingStyle: "Left-handed",
          nationality: "Indian",
          age: 26,
          matches: 11,
          runs: 474
        },
        {
          name: "Andre Russell",
          role: "All-rounder",
          battingStyle: "Right-handed",
          bowlingStyle: "Right-arm fast",
          nationality: "West Indian",
          age: 35,
          matches: 98,
          runs: 1897,
          wickets: 89
        },
        {
          name: "Sunil Narine",
          role: "All-rounder",
          battingStyle: "Left-handed",
          bowlingStyle: "Right-arm off-spin",
          nationality: "West Indian",
          age: 35,
          matches: 162,
          runs: 1047,
          wickets: 163
        },
        {
          name: "Shardul Thakur",
          role: "Bowler",
          bowlingStyle: "Right-arm medium-fast",
          nationality: "Indian",
          age: 32,
          matches: 95,
          wickets: 89
        },
        {
          name: "Umesh Yadav",
          role: "Bowler",
          bowlingStyle: "Right-arm fast",
          nationality: "Indian",
          age: 35,
          matches: 136,
          wickets: 136
        },
        {
          name: "Varun Chakravarthy",
          role: "Bowler",
          bowlingStyle: "Right-arm leg-spin",
          nationality: "Indian",
          age: 32,
          matches: 42,
          wickets: 42
        },
        {
          name: "Harshit Rana",
          role: "Bowler",
          bowlingStyle: "Right-arm fast-medium",
          nationality: "Indian",
          age: 22,
          matches: 8,
          wickets: 11
        }
      ]
    },
    commentary: [
      {
        over: "1",
        ball: 1,
        description: "Good length delivery outside off, Kohli defends it to cover point. No run.",
        runs: 0,
        wickets: 0,
        extras: 0,
        batter: "Virat Kohli",
        bowler: "Umesh Yadav",
        timestamp: "19:30:15"
      },
      {
        over: "1",
        ball: 2,
        description: "Full delivery on the pads, Kohli flicks it beautifully through mid-wicket for FOUR!",
        runs: 4,
        wickets: 0,
        extras: 0,
        batter: "Virat Kohli",
        bowler: "Umesh Yadav",
        timestamp: "19:30:45"
      },
      {
        over: "1",
        ball: 3,
        description: "Short ball outside off, Kohli cuts it hard but straight to point. No run.",
        runs: 0,
        wickets: 0,
        extras: 0,
        batter: "Virat Kohli",
        bowler: "Umesh Yadav",
        timestamp: "19:31:15"
      },
      {
        over: "1",
        ball: 4,
        description: "WIDE! Too wide outside off stump, umpire signals wide.",
        runs: 0,
        wickets: 0,
        extras: 1,
        batter: "Virat Kohli",
        bowler: "Umesh Yadav",
        timestamp: "19:31:45"
      },
      {
        over: "1",
        ball: 4,
        description: "Good length delivery, Kohli drives it to mid-off. Single taken.",
        runs: 1,
        wickets: 0,
        extras: 0,
        batter: "Virat Kohli",
        bowler: "Umesh Yadav",
        timestamp: "19:32:15"
      },
      {
        over: "1",
        ball: 5,
        description: "Full delivery on middle, du Plessis defends it back to the bowler.",
        runs: 0,
        wickets: 0,
        extras: 0,
        batter: "Faf du Plessis",
        bowler: "Umesh Yadav",
        timestamp: "19:32:45"
      },
      {
        over: "1",
        ball: 6,
        description: "WICKET! Full delivery, du Plessis tries to drive but edges it to the keeper! OUT!",
        runs: 0,
        wickets: 1,
        extras: 0,
        batter: "Faf du Plessis",
        bowler: "Umesh Yadav",
        timestamp: "19:33:15"
      }
    ],
    scorecard: {
      status: "COMPLETED",
      innings: [
        {
          teamName: "Royal Challengers Bengaluru",
          runs: 182,
          wickets: 6,
          overs: "20.0",
          batters: [
            { name: "Virat Kohli", runs: 83, balls: 59, fours: 4, sixes: 4, strikeRate: 140.68, dismissal: "c Gurbaz b Russell" },
            { name: "Faf du Plessis", runs: 5, balls: 4, fours: 1, sixes: 0, strikeRate: 125.00, dismissal: "c Gurbaz b Yadav" },
            { name: "Glenn Maxwell", runs: 28, balls: 19, fours: 2, sixes: 1, strikeRate: 147.37, dismissal: "b Narine" },
            { name: "Dinesh Karthik", runs: 22, balls: 18, fours: 1, sixes: 1, strikeRate: 122.22, dismissal: "c Iyer b Russell" },
            { name: "Mahipal Lomror", runs: 26, balls: 13, fours: 2, sixes: 1, strikeRate: 200.00, dismissal: "c Gurbaz b Russell" },
            { name: "Anuj Rawat", runs: 3, balls: 4, fours: 0, sixes: 0, strikeRate: 75.00, dismissal: "run out" },
            { name: "Dwayne Bravo", runs: 7, balls: 3, fours: 0, sixes: 1, strikeRate: 233.33, dismissal: "not out" },
            { name: "Harshal Patel", runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0.00, dismissal: "not out" }
          ],
          bowlers: [
            { name: "Umesh Yadav", overs: "4.0", maidens: 0, runs: 27, wickets: 1, economy: 6.75 },
            { name: "Harshit Rana", overs: "4.0", maidens: 0, runs: 35, wickets: 0, economy: 8.75 },
            { name: "Sunil Narine", overs: "4.0", maidens: 0, runs: 28, wickets: 1, economy: 7.00 },
            { name: "Varun Chakravarthy", overs: "4.0", maidens: 0, runs: 33, wickets: 0, economy: 8.25 },
            { name: "Andre Russell", overs: "4.0", maidens: 0, runs: 29, wickets: 3, economy: 7.25 }
          ],
          yetToBat: []
        },
        {
          teamName: "Kolkata Knight Riders",
          runs: 186,
          wickets: 3,
          overs: "16.5",
          batters: [
            { name: "Rahmanullah Gurbaz", runs: 57, balls: 44, fours: 6, sixes: 2, strikeRate: 129.55, dismissal: "c Rawat b Siraj" },
            { name: "Venkatesh Iyer", runs: 50, balls: 30, fours: 5, sixes: 2, strikeRate: 166.67, dismissal: "c Kohli b Hasaranga" },
            { name: "Nitish Rana", runs: 48, balls: 21, fours: 4, sixes: 3, strikeRate: 228.57, dismissal: "not out" },
            { name: "Rinku Singh", runs: 18, balls: 10, fours: 1, sixes: 1, strikeRate: 180.00, dismissal: "not out" }
          ],
          bowlers: [
            { name: "Mohammed Siraj", overs: "3.0", maidens: 0, runs: 24, wickets: 1, economy: 8.00 },
            { name: "Josh Hazlewood", overs: "3.0", maidens: 0, runs: 28, wickets: 0, economy: 9.33 },
            { name: "Harshal Patel", overs: "3.0", maidens: 0, runs: 35, wickets: 0, economy: 11.67 },
            { name: "Wanindu Hasaranga", overs: "4.0", maidens: 0, runs: 33, wickets: 1, economy: 8.25 },
            { name: "Glenn Maxwell", overs: "2.0", maidens: 0, runs: 18, wickets: 0, economy: 9.00 },
            { name: "Dwayne Bravo", overs: "1.5", maidens: 0, runs: 48, wickets: 1, economy: 26.18 }
          ],
          yetToBat: []
        }
      ]
    },
    result: {
      winner: "Kolkata Knight Riders",
      margin: "7 wickets",
      resultType: "Won by wickets",
      highlights: "KKR chased down the target with 19 balls to spare",
      keyStats: {
        topScorer: "Virat Kohli (83 runs)",
        topWicketTaker: "Andre Russell (3 wickets)",
        playerOfTheMatch: "Rahmanullah Gurbaz"
      },
      summary: "KKR won by 7 wickets in a high-scoring thriller"
    },
    highlights: [
      "Virat Kohli's masterclass 83 off 59 balls",
      "Rahmanullah Gurbaz's explosive 57 off 44 balls",
      "Venkatesh Iyer's quickfire 50 off 30 balls",
      "Andre Russell's 3-wicket haul",
      "KKR's successful chase with 19 balls remaining"
    ],
    keyMoments: [
      "RCB lost Faf du Plessis early in the first over",
      "Virat Kohli and Glenn Maxwell built a solid partnership",
      "KKR openers provided a flying start in the chase",
      "Nitish Rana's quickfire innings sealed the victory",
      "KKR won their first match of the season"
    ],
    postMatchAnalysis: "This was a perfect example of how T20 cricket should be played. RCB's batting was clinical with Kohli leading from the front, but KKR's chase was even more impressive. The openers set the tone, and the middle order finished the job professionally. RCB will be disappointed with their bowling performance, especially in the powerplay where they conceded too many runs. KKR's strategy of attacking from the start paid off, and they never let the required rate climb too high."
  },
  "completed-2": {
    matchId: "completed-2",
    matchTitle: "CSK vs MI",
    status: "COMPLETED",
    dateISO: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    localTime: new Date(Date.now() - 48 * 60 * 60 * 1000).toLocaleTimeString(),
    venue: {
      name: "MA Chidambaram Stadium",
      city: "Chennai",
      country: "India",
      capacity: 50000,
      established: 1916,
      pitchType: "Spin friendly",
      averageFirstInnings: 165,
      averageSecondInnings: 155,
      highestTotal: 246,
      lowestTotal: 70,
      description: "Traditionally a spin-friendly wicket that offers assistance to spinners as the match progresses. The pitch tends to slow down in the second innings, making batting difficult. Known for low-scoring matches and spin dominance.",
      facilities: ["Floodlights", "Dugouts", "Media Center", "VIP Boxes", "Parking", "Food Courts", "Museum"]
    },
    weather: {
      temperature: 32,
      humidity: 75,
      windSpeed: 8,
      windDirection: "North-East",
      conditions: "Hot and Humid",
      visibility: 6,
      precipitation: 0
    },
    umpires: {
      onField: {
        first: "Kumar Dharmasena",
        second: "Marais Erasmus"
      },
      third: "Chris Gaffaney",
      fourth: "Andy Pycroft",
      matchReferee: "Andy Pycroft"
    },
    playing11: {
      team1: [
        {
          name: "MS Dhoni",
          role: "Wicket-keeper",
          battingStyle: "Right-handed",
          nationality: "Indian",
          age: 42,
          matches: 250,
          runs: 5082,
          catches: 142,
          stumpings: 38
        },
        {
          name: "Ruturaj Gaikwad",
          role: "Batsman",
          battingStyle: "Right-handed",
          nationality: "Indian",
          age: 26,
          matches: 52,
          runs: 1797
        },
        {
          name: "Devon Conway",
          role: "Batsman",
          battingStyle: "Left-handed",
          nationality: "New Zealander",
          age: 32,
          matches: 23,
          runs: 924
        },
        {
          name: "Moeen Ali",
          role: "All-rounder",
          battingStyle: "Left-handed",
          bowlingStyle: "Right-arm off-spin",
          nationality: "English",
          age: 36,
          matches: 87,
          runs: 1489,
          wickets: 46
        },
        {
          name: "Ben Stokes",
          role: "All-rounder",
          battingStyle: "Left-handed",
          bowlingStyle: "Right-arm fast-medium",
          nationality: "English",
          age: 32,
          matches: 89,
          runs: 3085,
          wickets: 89
        },
        {
          name: "Ravindra Jadeja",
          role: "All-rounder",
          battingStyle: "Left-handed",
          bowlingStyle: "Left-arm orthodox",
          nationality: "Indian",
          age: 34,
          matches: 226,
          runs: 2692,
          wickets: 139
        },
        {
          name: "Shivam Dube",
          role: "All-rounder",
          battingStyle: "Left-handed",
          bowlingStyle: "Right-arm medium",
          nationality: "Indian",
          age: 30,
          matches: 54,
          runs: 1176,
          wickets: 8
        },
        {
          name: "Mitchell Santner",
          role: "Bowler",
          bowlingStyle: "Left-arm orthodox",
          nationality: "New Zealander",
          age: 31,
          matches: 15,
          wickets: 15
        },
        {
          name: "Deepak Chahar",
          role: "Bowler",
          bowlingStyle: "Right-arm medium-fast",
          nationality: "Indian",
          age: 30,
          matches: 73,
          wickets: 72
        },
        {
          name: "Sisanda Magala",
          role: "Bowler",
          bowlingStyle: "Right-arm fast",
          nationality: "South African",
          age: 32,
          matches: 8,
          wickets: 8
        },
        {
          name: "Rahane",
          role: "Batsman",
          battingStyle: "Right-handed",
          nationality: "Indian",
          age: 35,
          matches: 164,
          runs: 4408
        }
      ],
      team2: [
        {
          name: "Rohit Sharma",
          role: "Batsman",
          battingStyle: "Right-handed",
          nationality: "Indian",
          age: 36,
          matches: 243,
          runs: 6211
        },
        {
          name: "Ishan Kishan",
          role: "Wicket-keeper",
          battingStyle: "Left-handed",
          nationality: "Indian",
          age: 24,
          matches: 91,
          runs: 2755,
          catches: 58,
          stumpings: 12
        },
        {
          name: "Cameron Green",
          role: "All-rounder",
          battingStyle: "Right-handed",
          bowlingStyle: "Right-arm fast-medium",
          nationality: "Australian",
          age: 24,
          matches: 23,
          runs: 452,
          wickets: 18
        },
        {
          name: "Suryakumar Yadav",
          role: "Batsman",
          battingStyle: "Right-handed",
          nationality: "Indian",
          age: 32,
          matches: 139,
          runs: 3249
        },
        {
          name: "Tilak Varma",
          role: "Batsman",
          battingStyle: "Left-handed",
          nationality: "Indian",
          age: 21,
          matches: 25,
          runs: 740
        },
        {
          name: "Tim David",
          role: "Batsman",
          battingStyle: "Right-handed",
          nationality: "Australian",
          age: 27,
          matches: 25,
          runs: 450
        },
        {
          name: "Hrithik Shokeen",
          role: "Bowler",
          bowlingStyle: "Right-arm off-spin",
          nationality: "Indian",
          age: 22,
          matches: 8,
          wickets: 4
        },
        {
          name: "Arshad Khan",
          role: "Bowler",
          bowlingStyle: "Right-arm medium",
          nationality: "Indian",
          age: 24,
          matches: 8,
          wickets: 6
        },
        {
          name: "Jasprit Bumrah",
          role: "Bowler",
          bowlingStyle: "Right-arm fast",
          nationality: "Indian",
          age: 29,
          matches: 120,
          wickets: 145
        },
        {
          name: "Piyush Chawla",
          role: "Bowler",
          bowlingStyle: "Right-arm leg-spin",
          nationality: "Indian",
          age: 34,
          matches: 181,
          wickets: 179
        },
        {
          name: "Jason Behrendorff",
          role: "Bowler",
          bowlingStyle: "Left-arm fast-medium",
          nationality: "Australian",
          age: 33,
          matches: 12,
          wickets: 12
        }
      ]
    },
    commentary: [
      {
        over: "1",
        ball: 1,
        description: "Good length delivery outside off, Rohit defends it to cover. No run.",
        runs: 0,
        wickets: 0,
        extras: 0,
        batter: "Rohit Sharma",
        bowler: "Deepak Chahar",
        timestamp: "19:30:15"
      },
      {
        over: "1",
        ball: 2,
        description: "FOUR! Full delivery on the pads, Rohit flicks it beautifully through mid-wicket!",
        runs: 4,
        wickets: 0,
        extras: 0,
        batter: "Rohit Sharma",
        bowler: "Deepak Chahar",
        timestamp: "19:30:45"
      },
      {
        over: "1",
        ball: 3,
        description: "WICKET! Rohit tries to pull but gets a top edge! Caught at mid-wicket! OUT!",
        runs: 0,
        wickets: 1,
        extras: 0,
        batter: "Rohit Sharma",
        bowler: "Deepak Chahar",
        timestamp: "19:31:15"
      }
    ],
    scorecard: {
      status: "COMPLETED",
      innings: [
        {
          teamName: "Chennai Super Kings",
          runs: 173,
          wickets: 8,
          overs: "20.0",
          batters: [
            { name: "Ruturaj Gaikwad", runs: 92, balls: 50, fours: 4, sixes: 9, strikeRate: 184.00, dismissal: "c Kishan b Bumrah" },
            { name: "Devon Conway", runs: 30, balls: 31, fours: 3, sixes: 0, strikeRate: 96.77, dismissal: "c Green b Chawla" },
            { name: "Moeen Ali", runs: 19, balls: 12, fours: 1, sixes: 1, strikeRate: 158.33, dismissal: "c David b Behrendorff" },
            { name: "Ben Stokes", runs: 7, balls: 6, fours: 0, sixes: 0, strikeRate: 116.67, dismissal: "b Bumrah" },
            { name: "Ravindra Jadeja", runs: 12, balls: 8, fours: 1, sixes: 0, strikeRate: 150.00, dismissal: "c Kishan b Bumrah" },
            { name: "Shivam Dube", runs: 8, balls: 6, fours: 0, sixes: 0, strikeRate: 133.33, dismissal: "c Kishan b Bumrah" },
            { name: "MS Dhoni", runs: 2, balls: 3, fours: 0, sixes: 0, strikeRate: 66.67, dismissal: "not out" },
            { name: "Mitchell Santner", runs: 1, balls: 2, fours: 0, sixes: 0, strikeRate: 50.00, dismissal: "not out" }
          ],
          bowlers: [
            { name: "Jasprit Bumrah", overs: "4.0", maidens: 0, runs: 25, wickets: 4, economy: 6.25 },
            { name: "Jason Behrendorff", overs: "4.0", maidens: 0, runs: 37, wickets: 1, economy: 9.25 },
            { name: "Piyush Chawla", overs: "4.0", maidens: 0, runs: 35, wickets: 1, economy: 8.75 },
            { name: "Hrithik Shokeen", overs: "4.0", maidens: 0, runs: 30, wickets: 0, economy: 7.50 },
            { name: "Arshad Khan", overs: "4.0", maidens: 0, runs: 46, wickets: 2, economy: 11.50 }
          ],
          yetToBat: []
        },
        {
          teamName: "Mumbai Indians",
          runs: 176,
          wickets: 4,
          overs: "18.2",
          batters: [
            { name: "Ishan Kishan", runs: 58, balls: 25, fours: 5, sixes: 5, strikeRate: 232.00, dismissal: "c Dhoni b Chahar" },
            { name: "Cameron Green", runs: 31, balls: 20, fours: 2, sixes: 2, strikeRate: 155.00, dismissal: "c Conway b Jadeja" },
            { name: "Suryakumar Yadav", runs: 26, balls: 22, fours: 2, sixes: 1, strikeRate: 118.18, dismissal: "c Dhoni b Santner" },
            { name: "Tilak Varma", runs: 34, balls: 18, fours: 2, sixes: 2, strikeRate: 188.89, dismissal: "not out" },
            { name: "Tim David", runs: 19, balls: 17, fours: 1, sixes: 1, strikeRate: 111.76, dismissal: "not out" }
          ],
          bowlers: [
            { name: "Deepak Chahar", overs: "4.0", maidens: 0, runs: 35, wickets: 1, economy: 8.75 },
            { name: "Sisanda Magala", overs: "3.0", maidens: 0, runs: 28, wickets: 0, economy: 9.33 },
            { name: "Mitchell Santner", overs: "4.0", maidens: 0, runs: 28, wickets: 1, economy: 7.00 },
            { name: "Ravindra Jadeja", overs: "4.0", maidens: 0, runs: 37, wickets: 1, economy: 9.25 },
            { name: "Moeen Ali", overs: "3.2", maidens: 0, runs: 48, wickets: 1, economy: 14.40 }
          ],
          yetToBat: []
        }
      ]
    },
    result: {
      winner: "Mumbai Indians",
      margin: "6 wickets",
      resultType: "Won by wickets",
      highlights: "MI chased down the target with 10 balls to spare",
      keyStats: {
        topScorer: "Ruturaj Gaikwad (92 runs)",
        topWicketTaker: "Jasprit Bumrah (4 wickets)",
        playerOfTheMatch: "Ishan Kishan"
      },
      summary: "MI won by 6 wickets in a high-scoring thriller"
    },
    highlights: [
      "Ruturaj Gaikwad's brilliant 92 off 50 balls",
      "Ishan Kishan's explosive 58 off 25 balls",
      "Jasprit Bumrah's 4-wicket haul",
      "MI's successful chase with 10 balls remaining",
      "High-scoring match with 349 runs scored"
    ],
    keyMoments: [
      "CSK lost early wickets but Gaikwad held the innings together",
      "Gaikwad's 92 helped CSK post a competitive total",
      "MI lost Rohit early but Kishan provided a flying start",
      "Bumrah's 4-wicket haul restricted CSK",
      "MI's middle order finished the job professionally"
    ],
    postMatchAnalysis: "This was a classic CSK vs MI encounter with high drama and quality cricket. CSK's batting was led by Gaikwad's masterclass, but their middle order failed to capitalize. MI's chase was perfectly executed with Kishan's explosive start and a composed finish by the middle order. The match highlighted the importance of partnerships and finishing strong in T20 cricket."
  }
};
