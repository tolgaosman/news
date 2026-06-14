import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-faint">Error 404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
        This page has gone quiet.
      </h1>
      <p className="mt-4 max-w-sm text-muted">
        The story you were looking for isn&apos;t here. It may have moved, or
        never existed at all.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      >
        Back to all stories
      </Link>
    </main>
  );
}
