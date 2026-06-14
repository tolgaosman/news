"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Palette } from "lucide-react";
import { THEMES, useTheme, type Theme } from "@/components/ThemeProvider";
import { cn } from "@/lib/cn";

const THEME_META: Record<Theme, { label: string; swatch: string }> = {
  paper: { label: "Paper", swatch: "bg-[#FAF9F6] border-[#e0dbd0]" },
  sepia: { label: "Sepia", swatch: "bg-[#F4ECD8] border-[#decfb2]" },
  ink: { label: "Ink", swatch: "bg-[#161513] border-[#3a3732]" },
};

const panelSpring = { type: "spring", stiffness: 380, damping: 30 } as const;

export function ReaderSettings() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.94 }}
            transition={panelSpring}
            className="flex flex-col gap-1 rounded-2xl border border-line bg-surface p-2 shadow-[0_22px_60px_-30px_rgb(var(--ink)/0.5)]"
          >
            <p className="px-3 pb-1 pt-2 text-[0.68rem] uppercase tracking-[0.16em] text-faint">
              Reading theme
            </p>
            {THEMES.map((t) => {
              const isActive = t === theme;
              return (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                    isActive ? "bg-ink/5 text-ink" : "text-muted hover:bg-ink/5 hover:text-ink",
                  )}
                >
                  <span
                    className={cn(
                      "h-5 w-5 rounded-full border",
                      THEME_META[t].swatch,
                    )}
                  />
                  <span className="flex-1 text-left">{THEME_META[t].label}</span>
                  {isActive && <Check className="h-4 w-4 text-accent" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change reading theme"
        aria-expanded={open}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 420, damping: 18 }}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-[0_14px_40px_-18px_rgb(var(--ink)/0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
      >
        <Palette className="h-5 w-5" />
      </motion.button>
    </div>
  );
}
