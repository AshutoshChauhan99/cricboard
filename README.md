# 🏏 IPL CricBoard

**Live Cricket Scoreboard & Match Updates Platform**

IPL CricBoard is a comprehensive, real-time cricket application that provides live match updates, detailed scorecards, upcoming fixtures, match results, and cricket news. Built with modern web technologies, it offers an ESPNcricinfo-inspired user experience with a focus on real-time data, beautiful UI, and comprehensive match information.

## 🌟 **Live Demo**

**[🚀 View Live Demo](https://cricboardil.netlify.app/)**

*Experience the full application with live data and interactive features*

## ✨ **Key Features**

### 🎯 **Match Management**
- **Live Matches**: Real-time score updates, current over progress, run rates, and match situation
- **Upcoming Fixtures**: Complete match previews with venue details, weather conditions, and playing XI
- **Match Results**: Comprehensive completed match summaries with detailed statistics
- **Scorecard Details**: Full batting, bowling, and fielding statistics for each match

### 📊 **Data & Analytics**
- **Live Scorecard**: Ball-by-ball updates with current over progress
- **Points Table**: Real-time team standings and rankings
- **Player Statistics**: Detailed player performance metrics
- **Match Analysis**: Comprehensive match insights and commentary

### 🎨 **User Experience**
- **Responsive Design**: Mobile-first approach with tablet and desktop optimization
- **Modern UI/UX**: Clean, intuitive interface inspired by ESPNcricinfo
- **Skeleton Loaders**: Smooth loading experience with animated placeholders
- **Dark/Light Mode**: Theme support for better user preference
- **Interactive Elements**: Hover effects, smooth transitions, and engaging animations

### 📰 **Content & News**
- **Cricket Blogs**: Rich content with cricket-themed images and realistic layouts
- **Match Commentary**: Ball-by-ball commentary and match highlights
- **Venue Information**: Detailed venue details and weather conditions
- **Umpire Details**: Complete match official information

## 🛠 **Technology Stack**

### **Frontend Framework**
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - Modern React with hooks and functional components
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### **Styling & UI**
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Custom CSS Variables** - Consistent design system
- **[Responsive Design** - Mobile-first approach

### **Data Management**
- **[SWR](https://swr.vercel.app/)** - Data fetching and caching
- **[WebSocket Support** - Real-time updates (ready for implementation)
- **[API Routes** - Custom backend endpoints

### **Development Tools**
- **[ESLint** - Code quality and consistency
- **[TypeScript** - Static type checking
- **[Hot Reload** - Fast development experience

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn package manager

### **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AshutoshChauhan99/ipl-cricboard.git
   cd ipl-cricboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📁 **Project Structure**

```
cricboard/
├── app/                    # Next.js App Router
│   ├── components/         # Reusable UI components
│   ├── match/             # Match-related pages
│   ├── api/               # API routes
│   ├── hooks/             # Custom React hooks
│   └── globals.css        # Global styles
├── lib/                   # Utility functions & data
│   ├── types.ts           # TypeScript interfaces
│   ├── dummyData.ts       # Sample data
│   └── utils.ts           # Helper functions
├── public/                # Static assets
└── package.json           # Dependencies & scripts
```

## 🎮 **Core Components**

### **Match Components**
- `LiveMatchView` - Live match scorecard with real-time updates
- `UpcomingMatchView` - Match previews and team information
- `CompletedMatchView` - Match results and statistics
- `LiveCard` - Compact match cards for overview

### **Data Components**
- `PointsTable` - Team standings and rankings
- `ScheduleList` - Match schedule and fixtures
- `BlogList` - Cricket news and articles
- `LiveStrip` - Live match ticker

### **UI Components**
- `Navbar` - Navigation with sticky positioning
- `Footer` - Comprehensive footer with developer info
- `Tabs` - Tabbed navigation system
- `Skeletons` - Loading state components

## 🔧 **API Endpoints**

- `GET /api/scrape` - Scrape cricket data from external sources
- `GET /api/scorecard/[id]` - Get match scorecard data
- `GET /api/preview/[id]` - Get match preview data
- `GET /api/blog` - Get cricket blog posts

## 📱 **Responsive Design**

- **Mobile**: Optimized for small screens with touch-friendly interactions
- **Tablet**: Adaptive layout for medium-sized devices
- **Desktop**: Full-featured experience with advanced navigation

## 🌐 **Browser Support**

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is for **educational and demonstration purposes** only. It is not affiliated with the official IPL, BCCI, or ESPNcricinfo.

## 👨‍💻 **Developer**

**Ashutosh Chauhan**
- **GitHub**: [@AshutoshChauhan99](https://github.com/AshutoshChauhan99)
- **LinkedIn**: [ashutoshchauhan954](https://www.linkedin.com/in/ashutoshchauhan954/)
- **Email**: [ashutoshrajput954@gmail.com](mailto:ashutoshrajput954@gmail.com)

*Technology enthusiast, fast learner, An aspiring Engineer, Problem Solver*

## 🎯 **Future Enhancements**

- [ ] Real-time WebSocket updates
- [ ] User authentication and profiles
- [ ] Match notifications and alerts
- [ ] Advanced statistics and analytics
- [ ] Mobile app (React Native)
- [ ] Social features and sharing
- [ ] Multi-language support

## 🙏 **Acknowledgments**

- Inspired by ESPNcricinfo's design and functionality
- Built with modern web technologies and best practices
- Special thanks to the cricket community for inspiration

---

**🏏 Enjoy following IPL matches with IPL CricBoard! 🏆**

*Built with ❤️ for cricket enthusiasts*