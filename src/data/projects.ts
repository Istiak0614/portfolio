import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "studiospace",
    name: "StudioSpace",
    tagline: "Book creative studios by the hour",
    description:
      "A peer-to-peer marketplace where hosts list professional creative spaces (photo studios, film and sound stages, podcast lounges, music suites and art workshops) and creators book them by the hour.",
    image: "/images/projects/studiospace.jpg",
    featured: true,
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Motion",
      "Better Auth",
      "Express API",
      "Recharts",
      "jsPDF",
    ],
    highlights: [
      "Search, category, price-range and sort filters stored in the URL",
      "Calendar booking with live availability and price breakdown",
      "Host dashboard with earnings chart and booking-request inbox",
      "Booking lifecycle with downloadable PDF invoices",
    ],
    facts: { role: "Solo developer", type: "Full-stack (Next.js client + Express API)", built: "5–7 Nov 2026", commits: 22 },
    challenges: [
      {
        title: "Auth that survives reloads",
        detail:
          "Private routes are checked on the server before rendering, and the API uses a JWT in an HTTPOnly cookie. All /api requests go through a Next.js rewrite so cookies stay first-party.",
      },
      {
        title: "Preventing double bookings",
        detail:
          "A request can't overlap a confirmed booking, and confirming a slot automatically declines any overlapping pending requests.",
      },
      {
        title: "A consistent theme system",
        detail:
          "Built a glassmorphism “Midnight Studio” design that works in both light and dark themes across every page.",
      },
    ],
    futurePlans: [
      "Online payment for booking deposits",
      "Real-time notifications for new and confirmed bookings",
      "Automated tests for the double-booking logic",
    ],
    liveUrl: "https://studiospace-client-lovat.vercel.app/",
    clientRepo: "https://github.com/Istiak0614/studiospace-client",
  },
  {
    slug: "bazardor",
    name: "Bazardor",
    tagline: "Daily market prices in Bengali",
    description:
      "A responsive Bengali market-price app for exploring daily product prices, comparing price changes, browsing categories and viewing market-level prices after signing in.",
    image: "/images/projects/bazardor.jpg",
    featured: true,
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Better Auth",
      "MongoDB",
      "Zod",
    ],
    highlights: [
      "Infinite-scrolling price ticker with top risers and fallers",
      "Category filtering with ascending and descending price sorting",
      "Protected details showing minimum, maximum and average market prices",
      "Email/password, Google and GitHub sign-in",
    ],
    facts: { role: "Solo developer", type: "Full-stack Next.js app with MongoDB", built: "8–12 Oct 2026", commits: 15 },
    challenges: [
      {
        title: "An unreliable price API",
        detail:
          "Product prices come from an external API that could be slow or unavailable. I fetch on the server with timeouts, fall back to a second API, and revalidate every 60 seconds.",
      },
      {
        title: "Trusting outside data",
        detail:
          "API responses are validated with Zod before they reach the interface, so malformed or changed data can't break the page.",
      },
      {
        title: "OAuth across environments",
        detail:
          "Configured Google and GitHub sign-in with Better Auth and MongoDB so callback URLs work in both local development and production.",
      },
    ],
    futurePlans: [
      "Price-history charts for each product",
      "Price alerts for chosen items",
      "A Bengali and English language toggle",
    ],
    liveUrl: "https://bazar-dor-tau-eight.vercel.app/",
    clientRepo: "https://github.com/Istiak0614/bazar_dor",
  },
  {
    slug: "fitlog",
    name: "FitLog",
    tagline: "Workout library and daily planner",
    description:
      "A responsive workout library where users browse workouts, open detailed exercise pages, build a five-workout daily plan, save workouts for later and keep their plan across reloads.",
    image: "/images/projects/fitlog.jpg",
    featured: true,
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "DaisyUI",
      "React Context",
      "localStorage",
    ],
    highlights: [
      "Shared Context state for the plan, saved list, counters and metrics",
      "Five-workout daily cap with duplicate protection",
      "Sorting by duration, calories or rating, plus search by name, tag or equipment",
      "Plan and saved data persist across page reloads",
    ],
    facts: { role: "Solo developer", type: "Frontend app (Next.js + React Context)", built: "24–26 Sep 2026", commits: 13 },
    challenges: [
      {
        title: "Shared state across pages",
        detail:
          "Today's plan, the saved list and the navbar counters all read from one React Context, so every part of the app stays in sync.",
      },
      {
        title: "Enforcing plan rules",
        detail:
          "The daily plan is capped at five workouts and blocks duplicates, with toast messages that explain why an action didn't happen.",
      },
      {
        title: "Persistence without flicker",
        detail:
          "Plan and saved data are kept in localStorage and restored on load without a flash of empty content or a server/client mismatch.",
      },
    ],
    futurePlans: [
      "User accounts with cloud sync",
      "A weekly progress history",
      "Custom workouts and a rest timer",
    ],
    liveUrl: "https://fitlog-blond-xi.vercel.app/",
    clientRepo: "https://github.com/Istiak0614/fitlog",
  },
  {
    slug: "iot-fruit-detection",
    name: "IoT Fruit Detection",
    tagline: "ESP32-CAM and YOLO computer vision",
    description:
      "A low-cost real-time fruit detection system. An ESP32-CAM captures images and sends them over Wi-Fi to a laptop, where Python and OpenCV run a YOLO model and draw bounding boxes, labels and confidence scores.",
    image: "/images/projects/iot-fruit-detection.jpg",
    featured: false,
    stack: ["Python", "OpenCV", "YOLOv8", "ESP32-CAM", "Arduino IDE", "Google Colab"],
    highlights: [
      "Wireless frame transfer from ESP32-CAM over HTTP",
      "Inference offloaded to a laptop because of ESP32-CAM hardware limits",
      "YOLOv8 model trained on a custom fruit dataset",
    ],
    facts: { role: "Solo developer (course project)", type: "IoT + computer vision", built: "Sep 2026", commits: 5 },
    challenges: [
      {
        title: "Limited hardware",
        detail:
          "The ESP32-CAM can't run a YOLO model, so it only captures and serves frames while inference runs on a laptop over Wi-Fi.",
      },
      {
        title: "Latency over Wi-Fi",
        detail:
          "Frames travel over a mobile hotspot, so I balanced image size, detection accuracy and frame rate to keep results close to real time.",
      },
      {
        title: "Training a custom model",
        detail:
          "Prepared a custom fruit dataset and trained a YOLOv8 model on Google Colab.",
      },
    ],
    futurePlans: [
      "A lightweight model that runs on the device itself",
      "A web dashboard for the results",
      "More fruit classes",
    ],
    clientRepo: "https://github.com/Istiak0614/fruits-detection-esp32-yolov8",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}