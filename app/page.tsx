"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/Header";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ArticleCard } from "@/components/ArticleCard";
import { SubscriptionBox } from "@/components/SubscriptionBox";
import { getAllArticles, type Category } from "@/lib/articles";

const ARTICLES = getAllArticles();

export default function HomePage() {
  const [category, setCategory] = useState<Category>("All");

  const filtered = useMemo(
    () =>
      category === "All"
        ? ARTICLES
        : ARTICLES.filter((a) => a.category === category),
    [category],
  );

  const [hero, ...rest] = filtered;

  return (
    <main className="min-h-screen pb-10">
      <Header />

      {/* Masthead intro */}
      <section className="mx-auto max-w-6xl px-6 pt-12 sm:px-8 sm:pt-16">
        <p className="text-xs uppercase tracking-[0.2em] text-faint">
          Yazılar &amp; düşünceler · Kuzey Kıbrıs
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
          Adadan notlar.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Kuzey Kıbrıs&apos;ın ekonomisi, kültürü ve doğası üzerine yazdıklarım —
          Girne sahilinden Karpaz&apos;ın sessizliğine, kendi gözümden.
        </p>

        <div className="mt-9">
          <CategoryFilter active={category} onChange={setCategory} />
        </div>
      </section>

      {/* Editorial grid */}
      <section className="mx-auto mt-10 max-w-6xl px-6 sm:px-8">
        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {hero && (
                <ArticleCard key={hero.slug} article={hero} variant="hero" />
              )}
              {rest.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      <SubscriptionBox />

      <footer className="mx-auto mt-20 max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-8 text-sm text-faint sm:flex-row">
          <span className="font-display text-base text-ink">Tolga Osman Falay</span>
          <span>© {new Date().getFullYear()} · Lefkoşa, Kıbrıs</span>
        </div>
      </footer>
    </main>
  );
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-line py-24 text-center"
    >
      <p className="font-display text-xl text-ink">Henüz bir şey yok</p>
      <p className="mt-2 max-w-sm text-muted">
        Bu başlıkta şimdilik yazı yok. Başka bir kategoriye göz at — yenileri
        yolda.
      </p>
    </motion.div>
  );
}
