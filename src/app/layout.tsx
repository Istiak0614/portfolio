import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import { MotionProvider } from "@/components/motion-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
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
    { path: "../fonts/ibm-plex-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ibm-plex-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.designation}`,
    template: `%s — ${profile.shortName}`,
  },
  description: profile.summary,
  keywords: ["MERN Stack Developer", "Next.js", "React", "Node.js", "MongoDB", "Portfolio", profile.name],
  authors: [{ name: profile.name, url: profile.socials.github }],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.name} — ${profile.designation}`,
    description: profile.summary,
    type: "profile",
    siteName: `${profile.name} — Portfolio`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${profile.name}, ${profile.designation}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.designation}`,
    description: profile.summary,
    images: ["/og-image.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.designation,
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  alumniOf: "International University of Business Agriculture and Technology",
  sameAs: [profile.socials.github, profile.socials.linkedin],
};

export const viewport: Viewport = {
  themeColor: "#070b16",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${plex.variable}`}>
      <body className="min-h-dvh antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-electric focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <div id="main-content">{children}</div>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}