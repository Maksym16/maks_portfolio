# Steam Portfolio

A developer portfolio inspired by [steam-portfolio-demo.vercel.app](https://steam-portfolio-demo.vercel.app/), built with **React + Vite**.

## Features

- Anime.js interactive dot grid on the hero
- Brand-green wipe reveal animation on every section element
- Fixed vertical sidebar navigation
- Scroll-triggered section detection
- Alternating project image/copy layout with hover tilt
- Fully responsive (sidebar hides on mobile)

## Project Structure

```
src/
├── App.jsx                   # Root layout — assembles all sections
├── main.jsx                  # ReactDOM entry point
│
├── data/
│   └── constants.js          # Theme colors, nav links, all content data
│
├── styles/
│   └── global.css            # Global reset, typography, utility classes
│
├── hooks/
│   ├── useActiveSection.js   # Tracks which nav section is scrolled into view
│   └── useIntersectionReveal.js  # Fires once when element enters viewport
│
├── components/
│   ├── WipeReveal.jsx        # Brand-green wipe animation (scroll + hero variants)
│   ├── DotGrid.jsx           # Anime.js interactive dot grid background
│   ├── Sidebar.jsx           # Fixed vertical nav sidebar
│   ├── SectionHeader.jsx     # Animated section title with decorative line
│   ├── SocialLinks.jsx       # Social icon row with drop-in animation
│   └── Chip.jsx              # Tech/skill badge chip
│
└── sections/
    ├── Hero.jsx              # Full-viewport hero with dot grid + copy
    ├── About.jsx             # Bio paragraphs + tech stack chips
    ├── Projects.jsx          # Project cards (image + copy, alternating layout)
    ├── Experience.jsx        # Work history entries
    └── Contact.jsx           # Email CTA
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Customisation

All content lives in **`src/data/constants.js`** — edit your name, bio, projects, experience, social links, and theme colors there. No other files need to change for content updates.
