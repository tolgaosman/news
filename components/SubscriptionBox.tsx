"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Mail } from "lucide-react";

export function SubscriptionBox() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setStatus("error");
      return;
    }
    setStatus("success");
  }

  return (
    <section className="mx-auto mt-20 max-w-6xl px-6 sm:px-8">
      <div className="overflow-hidden rounded-3xl border border-line bg-surface px-6 py-12 sm:px-14 sm:py-16">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.14em] text-faint">
            <Mail className="h-3.5 w-3.5" />
            The Weekly Dispatch
          </span>

          <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
            Northern Cyprus, considered slowly.
          </h2>
          <p className="mt-3 text-muted">
            One thoughtful edition each week — on the island&apos;s economy,
            culture, and coastline. No noise, ever.
          </p>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 360, damping: 18 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-canvas"
              >
                <Check className="h-4 w-4" />
                You&apos;re on the list — welcome aboard.
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-8 flex flex-col gap-3 sm:mx-auto sm:max-w-md sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  inputMode="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  aria-invalid={status === "error"}
                  className="flex-1 rounded-full border border-line bg-canvas px-5 py-3 text-sm text-ink placeholder:text-faint transition-shadow focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-surface"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  Subscribe
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 text-sm text-accent"
              >
                Please enter a valid email address.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
