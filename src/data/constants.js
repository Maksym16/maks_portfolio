import cmsImg from "./Project_1-Content_management_system.png";
import coffeeImg from "./Project_2-Coffee_Shop.png";
import skyGearImg from "./Project_3-SkyGear.png";
import burzhuyka from "./Project_4-Burzhuyka.png";

// ─── Theme ────────────────────────────────────────────────────────────────────
export const BRAND   = "#26D0CE";
export const BG      = "rgb(17,17,17)";
export const BG_DARK = "rgb(8,8,8)";
export const BG_LIGHT= "rgb(35,35,35)";
export const TEXT    = "rgb(235,236,243)";

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = ["about", "projects", "experience", "contact"];

// ─── About / Skills ───────────────────────────────────────────────────────────
export const TECH_WORK = [
  "JavaScript","TypeScript","React","Next.js","React Native",
  "Vue.js","NodeJS","Redux","MobX","GraphQL","Apollo",
  "PostgreSQL","MongoDB","HTML5","TailwindCSS","CSS3","SASS","Jest","Git","Webpack","Agile/Scrum",
];

export const TECH_FUN = [
  "Go", "Docker","Figma","Postman","JIRA","A/B Testing","QA",
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: "CMS Dashboard",
    tech:  "Next.js - React - TailwindCSS - Prisma - MySQL - Clerk - Stripe - Cloudinary",
    desc:  "A full-stack e-commerce platform with an integrated admin dashboard and CMS. Features product management, order processing with Stripe, image hosting via Cloudinary, and authentication via Clerk.",
    image:  cmsImg,
    github: "https://github.com/Maksym16/CMS_dashboard",
    live:   "https://shop-cms-dashboard.vercel.app",
    details: {
      fullDesc: "A full-stack, multi-tenant CMS and admin dashboard for managing a coffee e-commerce storefront. Built to handle the full back-office lifecycle — from product and content management to payment processing and sales analytics — while serving as the API backend for a separate customer-facing storefront.",
      stack: [
        ["Framework",  "Next.js 13 (App Router)"],
        ["Language",   "TypeScript"],
        ["Styling",    "Tailwind CSS, Radix UI"],
        ["Forms",      "React Hook Form + Zod"],
        ["State",      "Zustand"],
        ["ORM",        "Prisma"],
        ["Database",   "PostgreSQL (Neon)"],
        ["Auth",       "Clerk"],
        ["Payments",   "Stripe"],
        ["Media",      "Cloudinary"],
        ["Charts",     "Recharts"],
        ["Tables",     "TanStack React Table"],
      ],
      features: [
        "Multi-store support — create and switch between independent projects, each with isolated data",
        "Product management — full CRUD with images (Cloudinary), categories, sizes, roast types, regions, and coffee types",
        "Content management — promotional billboards, categories, and product attributes",
        "Payments — Stripe checkout integration with webhook handling and automatic order tracking",
        "Analytics — revenue overview, sales count, and stock metrics with chart visualization",
        "Authentication — full sign-in/sign-up flow with route protection via Clerk",
      ],
      architecture: [
        "REST API with dynamic [projectId]-scoped routes",
        "Server-side data fetching via Next.js App Router",
        "Stripe webhook handler for real-time order tracking",
        "Shared component library built on Radix UI primitives",
      ],
    },
  },
  {
    title: "Coffee Shop",
    tech:  "Next.js - React - TypeScript - TailwindCSS",
    desc:  "An e-commerce shop powered by the CMS Dashboard. Built with Next.js and TypeScript, featuring a clean storefront UI with full product browsing and checkout flow.",
    image:  coffeeImg,
    github: "https://github.com/Maksym16/shop",
    live:   "https://roastery.vercel.app",
    details: {
      fullDesc: "A full-stack e-commerce storefront for a coffee shop, built with Next.js 14 App Router. The store is powered by a custom headless CMS/admin dashboard and includes product browsing, filtering, cart management, and Stripe checkout.",
      stack: [
        ["Framework",        "Next.js 14 (App Router)"],
        ["Language",         "TypeScript 5"],
        ["Styling",          "Tailwind CSS"],
        ["State Management", "Zustand (cart + modal, persisted to localStorage)"],
        ["UI Primitives",    "Headless UI"],
        ["Icons",            "Lucide React"],
        ["HTTP Client",      "Axios"],
        ["Image Hosting",    "Cloudinary"],
        ["Payments",         "Stripe"],
        ["Notifications",    "React Hot Toast"],
        ["Deployment",       "Vercel"],
      ],
      features: [
        "Product catalog — browse by category, filter by roast type and size via URL query params",
        "Product detail pages — image gallery, description, region/origin, add to cart",
        "Quick preview modal — view product without leaving the current page",
        "Shopping cart — add/remove items, persistent across sessions via localStorage",
        "Stripe checkout — redirects to Stripe, handles success/cancel callbacks",
        "Dynamic navigation — categories pulled live from CMS",
        "Responsive — mobile filters via slide-in dialog, desktop filters inline",
        "Billboard banners — CMS-managed hero images per category",
      ],
      architecture: [
        "Server Components for data fetching (products, categories, billboards)",
        "Client Components for interactivity (cart, filters, modals)",
        "Headless CMS backend — custom-built admin dashboard at a separate Vercel deployment serves a REST API",
        "Zustand stores for cart and preview modal state",
        "Revalidation set to 0 for always-fresh data",
      ],
    },
  },
  {
    title: "Буржуйка",
    tech:  "React - Vite - TailwindCSS - React Router - TanStack Query - GSAP - Node.js - Express - PostgreSQL - Cloudinary - JWT",
    desc:  "Full-stack business website built for a real client — a fireplace & sauna stove sales and installation company based in Kyiv, Ukraine. Features an animated public storefront, filterable product catalog, lightbox gallery, and a JWT-protected admin dashboard.",
    image:  burzhuyka,
    github: "https://github.com/Maksym16/burzhuyka",
    live:   "https://burzhuyka.com/",
    details: {
      fullDesc: "A full-stack business website for a fireplace and sauna stove sales and installation company based in Kyiv, Ukraine. Built to cover both the customer-facing storefront and a complete back-office admin panel — from product and gallery management to SEO and structured data.",
      stack: [
        ["Frontend",    "React 18, Vite"],
        ["Styling",     "Tailwind CSS"],
        ["Routing",     "React Router v6"],
        ["Data",        "TanStack React Query"],
        ["Animations",  "GSAP + ScrollTrigger"],
        ["Forms",       "React Hook Form"],
        ["Backend",     "Node.js + Express"],
        ["Database",    "Neon Serverless PostgreSQL"],
        ["Media",       "Cloudinary"],
        ["Auth",        "JWT"],
        ["Uploads",     "Multer"],
        ["Deployment",  "Hostinger Managed Node.js"],
      ],
      features: [
        "Animated hero carousel, services section, gallery preview, and product catalog categories on the home page",
        "Product catalog — filterable by category with individual detail pages at /catalog/:slug",
        "Full-page photo gallery with lightbox, arrow navigation, and keyboard support",
        "Contacts page with phone numbers, Telegram, Viber, and location info",
        "Fully responsive — mobile hamburger menu and adaptive layouts throughout",
        "Admin dashboard (/admin, JWT protected) — create, edit, delete products with multi-image Cloudinary upload",
        "Gallery management — bulk image upload, delete synced between Cloudinary and the database",
        "Product list with live search, column sorting, and pagination",
        "SEO — meta tags, Open Graph, JSON-LD LocalBusiness structured data",
      ],
      architecture: [
        "SPA with Express server-side fallback for direct URL access in production",
        "Cloudinary public_id tracking ensures clean deletes with no orphaned files",
        "REST API served by Express; frontend built by Vite into backend/dist/",
        "postinstall script installs backend dependencies automatically on each deploy",
      ],
    },
  },
  {
    title: "SkyGear",
    badge: "Under Development",
    tech:  "MongoDB - Express - React - Node.js - Redux Toolkit",
    desc:  "A fully functional MERN stack e-commerce shop for selling drones. Features product reviews, search, pagination, user profiles, order tracking, and PayPal/credit card payments.",
    image:  skyGearImg,
    github: "https://github.com/Maksym16/SkyGear",
    live:   "https://skygear.onrender.com",
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    company:  "BrandingBrand",
    companyUrl: "https://brandingbrand.com/",
    period:   "06/2021 - Present",
    role:     "Software Engineer ||",
    location: "Pittsburgh, PA",
    desc:     "Built mobile apps and websites for high-profile brands in retail and hospitality. Implemented analytics (Google Analytics, GTM, Tealium) driving a 20% increase in sales conversion. Optimized UI/UX in close collaboration with design, boosting app conversion by 10%. Mentored 2 junior engineers, reducing bug rates by 30%.",
    tags:     ["React","Next.js","React Native","TypeScript","TailwindCSS","GraphQL","Firebase","GTM"],
  },
  {
    company:  "Leadership Connect",
    companyUrl: "https://leadershipconnect.io/",
    period:   "12/2019 - 06/2021",
    role:     "Software Engineer",
    location: "New York, NY",
    desc:     "Built web and mobile applications used by top U.S. government agencies, federal and congressional leaders. Created dashboards displaying government expenditure data with customizable filters and alerts. Built reusable component libraries, reducing development time by 25%.",
    tags:     ["React","React Native","TypeScript","MobX","Redux","Lodash","Blueprint.js"],
  },
];

// ─── Social links ─────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href:  "https://www.linkedin.com/in/maksym-fedorenko/",
    path:  "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z",
  },
  {
    label: "GitHub",
    href:  "https://github.com/Maksym16",
    path:  "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z",
  },
];
