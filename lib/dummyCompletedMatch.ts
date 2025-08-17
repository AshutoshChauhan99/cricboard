import { ScorecardData } from "./types";

export function buildDummyCompletedMatch(matchId: string): ScorecardData {
    const completedMatches = {
        "completed-1": {
            matchTitle: "Kolkata Knight Riders vs Royal Challengers Bengaluru",
            venue: "Eden Gardens, Kolkata",
            team1: "Kolkata Knight Riders",
            team2: "Royal Challengers Bengaluru",
            winner: "Kolkata Knight Riders",
            resultText: "KKR won by 7 wickets",
            margin: "with 16 balls remaining",
            team1Score: "186/7",
            team2Score: "182/6",
            team1Overs: "20",
            team2Overs: "17.2",
            highlights: "Sunil Narine's explosive 85 off 39 balls and Andre Russell's finishing 25 off 12 balls"
        },
        "completed-2": {
            matchTitle: "Mumbai Indians vs Chennai Super Kings",
            venue: "Wankhede Stadium, Mumbai",
            team1: "Mumbai Indians",
            team2: "Chennai Super Kings",
            winner: "Chennai Super Kings",
            resultText: "CSK won by 20 runs",
            margin: "defending 173",
            team1Score: "153/8",
            team2Score: "173/6",
            team1Overs: "20",
            team2Overs: "20",
            highlights: "Ravindra Jadeja's 3/20 and MS Dhoni's finishing 26 off 11 balls"
        },
        "completed-3": {
            matchTitle: "Rajasthan Royals vs Delhi Capitals",
            venue: "Sawai Mansingh Stadium, Jaipur",
            team1: "Rajasthan Royals",
            team2: "Delhi Capitals",
            winner: "Rajasthan Royals",
            resultText: "RR won by 6 wickets",
            margin: "with 8 balls remaining",
            team1Score: "185/4",
            team2Score: "184/8",
            team1Overs: "18.4",
            team2Overs: "20",
            highlights: "Jos Buttler's 82 off 58 balls and Yuzvendra Chahal's 3/25"
        }
    };

    const matchData = completedMatches[matchId as keyof typeof completedMatches] || completedMatches["completed-1"];

    return {
        id: matchId,
        matchId,
        matchTitle: matchData.matchTitle,
        venue: matchData.venue,
        status: "COMPLETED",
        matchNumber: "Match 15",
        currentOverProgress: {
            currentOver: "20.0",
            ballsInOver: 6,
            matchSituation: "Match completed"
        },
        currentRunRate: "9.25",
        requiredRunRate: "0.00",
        matchSituation: "Match has been completed with " + matchData.highlights,
        lastUpdatedISO: new Date().toISOString(),
        matchResult: {
            winner: matchData.winner,
            resultText: matchData.resultText,
            margin: matchData.margin,
            method: "D/L"
        },
        innings: [
            {
                teamName: matchData.team2,
                score: matchData.team2Score.split('/')[0],
                wickets: matchData.team2Score.split('/')[1],
                overs: matchData.team2Overs,
                batters: [
                    {
                        name: "Virat Kohli",
                        runs: 67,
                        balls: 48,
                        fours: 5,
                        sixes: 2,
                        strikeRate: 139.58,
                        dismissal: "c Narine b Starc"
                    },
                    {
                        name: "Faf du Plessis",
                        runs: 45,
                        balls: 32,
                        fours: 4,
                        sixes: 1,
                        strikeRate: 140.63,
                        dismissal: "c Iyer b Narine"
                    },
                    {
                        name: "Glenn Maxwell",
                        runs: 28,
                        balls: 18,
                        fours: 2,
                        sixes: 1,
                        strikeRate: 155.56,
                        dismissal: "c Pandey b Narine"
                    },
                    {
                        name: "Cameron Green",
                        runs: 18,
                        balls: 12,
                        fours: 1,
                        sixes: 0,
                        strikeRate: 150.00,
                        dismissal: "c Pandey b Starc"
                    },
                    {
                        name: "Dinesh Karthik",
                        runs: 12,
                        balls: 8,
                        fours: 1,
                        sixes: 0,
                        strikeRate: 150.00,
                        dismissal: "c Pandey b Narine"
                    },
                    {
                        name: "Anuj Rawat",
                        runs: 8,
                        balls: 6,
                        fours: 0,
                        sixes: 0,
                        strikeRate: 133.33,
                        dismissal: "run out (Narine/Pandey)"
                    },
                    {
                        name: "Mahipal Lomror",
                        runs: 4,
                        balls: 3,
                        fours: 0,
                        sixes: 0,
                        strikeRate: 133.33,
                        dismissal: "not out"
                    }
                ],
                bowlers: [
                    {
                        name: "Mitchell Starc",
                        overs: "4",
                        maidens: 0,
                        runs: 42,
                        wickets: 2,
                        economy: 10.50
                    },
                    {
                        name: "Sunil Narine",
                        overs: "4",
                        maidens: 0,
                        runs: 28,
                        wickets: 3,
                        economy: 7.00
                    },
                    {
                        name: "Andre Russell",
                        overs: "4",
                        maidens: 0,
                        runs: 38,
                        wickets: 1,
                        economy: 9.50
                    },
                    {
                        name: "Varun Chakravarthy",
                        overs: "4",
                        maidens: 0,
                        runs: 35,
                        wickets: 0,
                        economy: 8.75
                    },
                    {
                        name: "Harshit Rana",
                        overs: "4",
                        maidens: 0,
                        runs: 39,
                        wickets: 0,
                        economy: 9.75
                    }
                ],
                yetToBat: [
                    { name: "Karn Sharma", role: "Bowler" },
                    { name: "Yash Dayal", role: "Bowler" },
                    { name: "Mohammed Siraj", role: "Bowler" }
                ]
            },
            {
                teamName: matchData.team1,
                score: matchData.team1Score.split('/')[0],
                wickets: matchData.team1Score.split('/')[1],
                overs: matchData.team1Overs,
                batters: [
                    {
                        name: "Sunil Narine",
                        runs: 85,
                        balls: 39,
                        fours: 7,
                        sixes: 6,
                        strikeRate: 217.95,
                        dismissal: "c Kohli b Siraj"
                    },
                    {
                        name: "Phil Salt",
                        runs: 32,
                        balls: 24,
                        fours: 3,
                        sixes: 1,
                        strikeRate: 133.33,
                        dismissal: "c Maxwell b Dayal"
                    },
                    {
                        name: "Venkatesh Iyer",
                        runs: 28,
                        balls: 20,
                        fours: 2,
                        sixes: 1,
                        strikeRate: 140.00,
                        dismissal: "c du Plessis b Siraj"
                    },
                    {
                        name: "Andre Russell",
                        runs: 25,
                        balls: 12,
                        fours: 1,
                        sixes: 2,
                        strikeRate: 208.33,
                        dismissal: "not out"
                    },
                    {
                        name: "Rinku Singh",
                        runs: 8,
                        balls: 6,
                        fours: 0,
                        sixes: 0,
                        strikeRate: 133.33,
                        dismissal: "c Maxwell b Dayal"
                    },
                    {
                        name: "Shreyas Iyer",
                        runs: 6,
                        balls: 4,
                        fours: 0,
                        sixes: 0,
                        strikeRate: 150.00,
                        dismissal: "not out"
                    }
                ],
                bowlers: [
                    {
                        name: "Mohammed Siraj",
                        overs: "4",
                        maidens: 0,
                        runs: 45,
                        wickets: 2,
                        economy: 11.25
                    },
                    {
                        name: "Yash Dayal",
                        overs: "4",
                        maidens: 0,
                        runs: 38,
                        wickets: 2,
                        economy: 9.50
                    },
                    {
                        name: "Karn Sharma",
                        overs: "4",
                        maidens: 0,
                        runs: 42,
                        wickets: 1,
                        economy: 10.50
                    },
                    {
                        name: "Glenn Maxwell",
                        overs: "4",
                        maidens: 0,
                        runs: 35,
                        wickets: 1,
                        economy: 8.75
                    },
                    {
                        name: "Cameron Green",
                        overs: "4",
                        maidens: 0,
                        runs: 22,
                        wickets: 0,
                        economy: 5.50
                    }
                ],
                yetToBat: [
                    { name: "Manish Pandey", role: "Batsman" },
                    { name: "Ramandeep Singh", role: "All-rounder" },
                    { name: "Mitchell Starc", role: "Bowler" },
                    { name: "Varun Chakravarthy", role: "Bowler" }
                ]
            }
        ]
    };
}
