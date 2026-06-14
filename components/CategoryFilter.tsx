"use client";

import { motion } from "framer-motion";
import { CATEGORIES, type Category } from "@/lib/articles";
import { cn } from "@/lib/cn";

interface CategoryFilterProps {
  active: Category;
  onChange: (category: Category) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter articles by category"
      className="flex flex-wrap items-center gap-2"
    >
      {CATEGORIES.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className={cn(
              "relative rounded-full px-4 py-1.5 text-sm transition-colors duration-300",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
              isActive ? "text-canvas" : "text-muted hover:text-ink",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="category-pill"
                className="absolute inset-0 -z-10 rounded-full bg-ink"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative whitespace-nowrap">{category}</span>
          </button>
        );
      })}
    </div>
  );
}
