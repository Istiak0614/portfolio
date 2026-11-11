import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative isolate grid min-h-dvh place-items-center px-5">
      <div aria-hidden className="blueprint-grid absolute inset-0 -z-10" />
      <div className="max-w-md text-center">
        <p className="font-display text-7xl font-semibold text-electric-soft">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">This page doesn&apos;t exist</h1>
        <p className="mt-3 text-muted">The link may be outdated or mistyped. Head back to the portfolio to keep browsing.</p>
        <Link href="/" className={`${buttonVariants()} mt-8`}>
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
