import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-2xl font-semibold tracking-tight text-ink transition-opacity hover:opacity-70 sm:text-[1.7rem]"
        >
          Artun&nbsp;Çağa
        </Link>

        <span className="hidden text-xs uppercase tracking-[0.18em] text-faint sm:block">
          Lefkoşa · Kıbrıs
        </span>
      </div>
    </header>
  );
}
