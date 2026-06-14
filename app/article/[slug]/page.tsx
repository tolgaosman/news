import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/ArticleView";
import { getAllArticles, getArticle } from "@/lib/articles";

interface ArticlePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticle(params.slug);
  if (!article) return { title: "Story not found — The Levant Review" };
  return {
    title: `${article.title} — The Levant Review`,
    description: article.dek,
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen">
      <ArticleView article={article} />
    </main>
  );
}
