"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import type { Article } from "@/lib/articles";

export function ArticleView({ article }: { article: Article }) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Scroll-linked progress line. */}
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-accent"
        style={{ scaleX: progress }}
        aria-hidden
      />

      <article className="mx-auto max-w-prose px-6 pb-28 pt-10 sm:pt-14">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          <ArrowLeft className="h-4 w-4" />
          All stories
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em] text-faint">
          <span className="text-accent">{article.category}</span>
          <span className="h-1 w-1 rounded-full bg-faint/70" />
          <span>{article.location}</span>
          <span className="h-1 w-1 rounded-full bg-faint/70" />
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readMinutes} min read
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 240, damping: 28 }}
          className="mt-4 font-display text-3xl font-semibold leading-[1.1] text-ink sm:text-[2.7rem]"
        >
          {article.title}
        </motion.h1>

        <p className="mt-5 font-serif text-lg italic leading-relaxed text-muted sm:text-xl">
          {article.dek}
        </p>

        <div className="mt-6 flex items-center gap-3 border-y border-line py-4 text-sm text-faint">
          <span className="text-ink">{article.author}</span>
          <span className="h-1 w-1 rounded-full bg-faint/70" />
          <span>{article.date}</span>
        </div>

        {/* Decorative lead image placeholder. */}
        <div
          className={`mt-8 aspect-[16/8] w-full rounded-2xl bg-gradient-to-br ${article.cover}`}
          aria-hidden
        />

        <div className="mt-10 space-y-6 font-serif text-[1.075rem] leading-[1.85] text-ink/90">
          {article.body.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ type: "spring", stiffness: 200, damping: 28 }}
              className="first-letter:font-display first-of-type:first-letter:float-left first-of-type:first-letter:mr-3 first-of-type:first-letter:text-6xl first-of-type:first-letter:font-semibold first-of-type:first-letter:leading-[0.8] first-of-type:first-letter:text-accent"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </article>
    </>
  );
}
