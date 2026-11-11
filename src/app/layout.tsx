import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { profile } from "@/data/profile";
import "./globals.css";

const bricolage = localFont({
  src: "../fonts/bricolage-grotesque-latin-wght-normal.woff2",
  variable: "--font-bricolage",
  weight: "200 800",
  display: "swap",
});

const plex = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-sans-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/ibm-plex-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ibm-plex-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex",
  display: "swap",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.designation}`,
    template: `%s — ${profile.shortName}`,
  },
  description: profile.summary,
  authors: [{ name: profile.name, url: profile.socials.github }],
  openGraph: {
    title: `${profile.name} — ${profile.designation}`,
    description: profile.summary,
    type: "website",
    images: ["/images/profile.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#070b16",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${plex.variable}`}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
