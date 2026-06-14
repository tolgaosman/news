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
  if (!article) return { title: "Yazı bulunamadı — Artun Çağa" };
  return {
    title: `${article.title} — Artun Çağa`,
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
