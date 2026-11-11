"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => null;

export function YearTrack({ years, label }: { years: number[]; label: string }) {
  const currentYear = useSyncExternalStore(subscribe, getYear, getServerYear);

  return (
    <ol className="flex items-start" aria-label={label}>
      {years.map((year, index) => {
        const isPast = currentYear !== null && year < currentYear;
        const isNow = year === currentYear;
        const isLast = index === years.length - 1;
        return (
          <li key={year} className="relative flex-1">
            {!isLast && (
              <span
                aria-hidden
                className={cn(
                  "absolute top-[7px] left-4 h-0.5 w-[calc(100%-1rem)] transition-colors duration-700",
                  isPast ? "bg-electric/70" : "bg-white/10",
                )}
              />
            )}
            <span
              aria-hidden
              className={cn(
                "relative block size-4 rounded-full border-2 transition-colors duration-700",
                isPast && "border-electric bg-electric",
                isNow && "border-electric bg-ink shadow-[0_0_0_5px_rgb(77_141_255/0.18)]",
                !isPast && !isNow && "border-white/20 bg-ink",
              )}
            />
            <span className={cn("mt-3 block text-sm", isNow ? "font-medium text-white" : "text-muted")}>
              {year}
              {isNow && <span className="block text-xs font-normal text-electric-soft">Now</span>}
              {isLast && !isNow && <span className="block text-xs">Expected</span>}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
