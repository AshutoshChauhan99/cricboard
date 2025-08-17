import { BlogPost, RecentResult } from "./types";

export function buildDummyBlog(): BlogPost[] {
  return [
    {
      id: "blog-1",
      title: "Sunil Narine's Masterclass: How KKR's Star All-rounder is Redefining T20 Cricket",
      summary: "An in-depth analysis of Sunil Narine's explosive batting and economical bowling that's making him the most valuable player in IPL 2024.",
      author: "Harsha Bhogle",
      publishedISO: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      tags: ["IPL 2024", "Kolkata Knight Riders", "Sunil Narine", "Analysis"],
      imageUrl: "/api/placeholder/400/250",
      url: "/blog/sunil-narine-masterclass"
    },
    {
      id: "blog-2",
      title: "The Rise of Young Indian Talent: Emerging Stars in IPL 2024",
      summary: "From Abhishek Sharma to Tilak Varma, discover the young Indian cricketers who are taking the IPL by storm this season.",
      author: "Gaurav Kapur",
      publishedISO: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      tags: ["IPL 2024", "Young Talent", "Indian Cricket", "Emerging Stars"],
      imageUrl: "/api/placeholder/400/250",
      url: "/blog/young-indian-talent-2024"
    },
    {
      id: "blog-3",
      title: "MS Dhoni's Legacy: The Captain Who Changed Indian Cricket Forever",
      summary: "As MS Dhoni continues to inspire in IPL 2024, we look back at his incredible journey and the impact he's had on Indian cricket.",
      author: "Ravi Shastri",
      publishedISO: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      tags: ["MS Dhoni", "Chennai Super Kings", "Indian Cricket", "Legacy"],
      imageUrl: "/api/placeholder/400/250",
      url: "/blog/ms-dhoni-legacy"
    },
    {
      id: "blog-4",
      title: "Pitch Report: Understanding the Different Surfaces in IPL 2024",
      summary: "From the batting-friendly Wankhede to the spin-friendly Chepauk, learn how different pitches are affecting match outcomes this season.",
      author: "Sanjay Manjrekar",
      publishedISO: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
      tags: ["IPL 2024", "Pitch Report", "Venues", "Analysis"],
      imageUrl: "/api/placeholder/400/250",
      url: "/blog/pitch-report-2024"
    },
    {
      id: "blog-5",
      title: "The Evolution of T20 Cricket: How IPL Has Changed the Game",
      summary: "From 2008 to 2024, explore how the Indian Premier League has revolutionized T20 cricket and influenced the sport globally.",
      author: "Ian Bishop",
      publishedISO: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
      tags: ["IPL", "T20 Cricket", "Evolution", "Global Impact"],
      imageUrl: "/api/placeholder/400/250",
      url: "/blog/ipl-evolution-t20"
    },
    {
      id: "blog-6",
      title: "Fantasy Cricket Guide: Top Picks for IPL 2024 Fantasy Leagues",
      summary: "Get the best fantasy cricket tips and player recommendations to dominate your IPL 2024 fantasy leagues.",
      author: "Aakash Chopra",
      publishedISO: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      tags: ["Fantasy Cricket", "IPL 2024", "Tips", "Player Picks"],
      imageUrl: "/api/placeholder/400/250",
      url: "/blog/fantasy-cricket-guide-2024"
    }
  ];
}

export function buildDummyRecentResults(): RecentResult[] {
  return [
    {
      matchId: "completed-1",
      matchTitle: "KKR vs RCB",
      result: "KKR won by 7 wickets",
      date: "Yesterday",
      highlights: "Sunil Narine's explosive 85 off 39 balls, Andre Russell's finishing 25 off 12 balls"
    },
    {
      matchId: "completed-2",
      matchTitle: "MI vs CSK",
      result: "CSK won by 20 runs",
      date: "2 days ago",
      highlights: "Ravindra Jadeja's 3/20, MS Dhoni's finishing 26 off 11 balls"
    },
    {
      matchId: "completed-3",
      matchTitle: "RR vs DC",
      result: "RR won by 6 wickets",
      date: "3 days ago",
      highlights: "Jos Buttler's 82 off 58 balls, Yuzvendra Chahal's 3/25"
    },
    {
      matchId: "completed-4",
      matchTitle: "GT vs SRH",
      result: "GT won by 5 wickets",
      date: "4 days ago",
      highlights: "Shubman Gill's 67 off 48 balls, Rashid Khan's 2/32"
    },
    {
      matchId: "completed-5",
      matchTitle: "PBKS vs LSG",
      result: "PBKS won by 8 wickets",
      date: "5 days ago",
      highlights: "Shikhar Dhawan's 70 off 50 balls, Kagiso Rabada's 2/28"
    }
  ];
}


