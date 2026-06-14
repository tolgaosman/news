/** Soft-pulsing placeholder block with zero layout shift. */
export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-soft-pulse rounded-md bg-line/60 ${className}`}
      aria-hidden
    />
  );
}

/** Full reader-view skeleton used as the article route's loading state. */
export function ArticleSkeleton() {
  return (
    <div className="mx-auto max-w-prose px-6 pb-28 pt-10 sm:pt-14">
      <Skeleton className="h-4 w-24" />
      <div className="mt-8 flex gap-3">
        <Skeleton className="h-3 w-28" />
        <Skeleton className="h-3 w-20" />
      </div>
      <Skeleton className="mt-4 h-10 w-full" />
      <Skeleton className="mt-3 h-10 w-4/5" />
      <Skeleton className="mt-6 h-5 w-full" />
      <Skeleton className="mt-8 aspect-[16/8] w-full rounded-2xl" />
      <div className="mt-10 space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-full" />
        ))}
      </div>
    </div>
  );
}
