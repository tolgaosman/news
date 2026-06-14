"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-2xl font-semibold tracking-tight text-ink transition-opacity hover:opacity-70 sm:text-[1.7rem]"
        >
          Tolga&nbsp;Osman&nbsp;Falay
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <span className="hidden text-xs uppercase tracking-[0.18em] text-faint sm:block">
            Lefkoşa · Kıbrıs
          </span>
          <motion.button
            onClick={() => setTheme(theme === "ink" ? "sepia" : "ink")}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:bg-ink/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            {theme === "ink" ? (
              <Sun className="h-[1.125rem] w-[1.125rem]" />
            ) : (
              <Moon className="h-[1.125rem] w-[1.125rem]" />
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
}
