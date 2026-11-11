import type { Project } from "@/types";

// Future plans are filled in during Milestone 6, once confirmed.
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
    futurePlans: [],
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
    challenges: [],
    futurePlans: [],
    liveUrl: "https://bazar-dor-seven-pied.vercel.app/",
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
    challenges: [],
    futurePlans: [],
    liveUrl: "https://fitlog-blond-xi.vercel.app/",
    clientRepo: "https://github.com/Istiak0614/fitlog",
  },
  {
    slug: "iot-fruit-detection",
    name: "IoT Fruit Detection",
    tagline: "ESP32-CAM and YOLO computer vision",
    description:
      "A low-cost real-time fruit detection system. An ESP32-CAM captures images and sends them over Wi-Fi to a laptop, where Python and OpenCV run a YOLO model and draw bounding boxes, labels and confidence scores.",
    image: "/images/projects/iot-fruit-detection.png",
    featured: false,
    stack: ["Python", "OpenCV", "YOLOv8", "ESP32-CAM", "Arduino IDE", "Google Colab"],
    highlights: [
      "Wireless frame transfer from ESP32-CAM over HTTP",
      "Inference offloaded to a laptop because of ESP32-CAM hardware limits",
      "YOLOv8 model trained on a custom fruit dataset",
    ],
    challenges: [],
    futurePlans: [],
    clientRepo: "https://github.com/Istiak0614/fruits-detection-esp32-yolov8",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
