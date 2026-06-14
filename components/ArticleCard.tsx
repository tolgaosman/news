"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Article } from "@/lib/articles";
import { cn } from "@/lib/cn";

interface ArticleCardProps {
  article: Article;
  /** "hero" renders a large lead story; "standard" a column card. */
  variant?: "hero" | "standard";
}

const cardSpring = { type: "spring", stiffness: 260, damping: 30 } as const;

export function ArticleCard({ article, variant = "standard" }: ArticleCardProps) {
  const isHero = variant === "hero";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={cardSpring}
      className={cn(isHero && "col-span-full")}
    >
      <Link
        href={`/article/${article.slug}`}
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface",
          "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-28px_rgb(var(--ink)/0.4)]",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
          isHero && "sm:flex-row",
        )}
      >
        {/* CSS-only minimalist cover. */}
        <div
          className={cn(
            "relative shrink-0 overflow-hidden bg-gradient-to-br",
            article.cover,
            isHero ? "aspect-[16/10] sm:aspect-auto sm:w-1/2" : "aspect-[16/10]",
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-canvas/85 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-ink backdrop-blur-sm">
            {article.category}
          </span>
        </div>

        <div
          className={cn(
            "flex flex-1 flex-col p-5 sm:p-6",
            isHero && "sm:justify-center sm:p-10",
          )}
        >
          <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-faint">
            <span>{article.location}</span>
            <span className="h-1 w-1 rounded-full bg-faint/70" />
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readMinutes} min read
            </span>
          </div>

          <h2
            className={cn(
              "font-display font-semibold leading-tight text-ink line-clamp-3",
              isHero ? "text-2xl sm:text-[2.4rem] sm:leading-[1.08]" : "text-xl",
            )}
          >
            {article.title}
          </h2>

          <p
            className={cn(
              "mt-3 text-muted",
              isHero ? "text-base line-clamp-3 sm:text-lg" : "text-sm line-clamp-2",
            )}
          >
            {article.dek}
          </p>

          <div className="mt-auto flex items-center justify-between pt-6">
            <span className="text-sm text-faint">By {article.author}</span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
              Read
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
