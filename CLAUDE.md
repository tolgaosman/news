# CLAUDE.md - Project Rules & AI Master Skills

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Status

Active. The front-end of an editorial news site for Northern Cyprus (KKTC) is
built and rendering with mock content. Keep the sections below in sync as the
project grows — do not invent details that aren't yet true.

## Project Overview

`news` ("The Levant Review") is a slow-journalism editorial site focused on
Northern Cyprus (KKTC) — long-form reporting on the economy/real estate,
culture, and environment of the island, for readers who want depth over feed.

## Tech Stack

- **Framework:** Next.js 14 (App Router) + React 18, TypeScript (strict).
- **Styling:** Tailwind CSS with theme tokens driven by CSS variables.
- **Animation:** `framer-motion` (spring physics, `layout`, `useScroll`).
- **Icons:** `lucide-react`. **Fonts:** `next/font/google` (Playfair Display +
  Source Serif 4 for editorial type, Inter for UI).
- **Package manager:** npm. Node 18+.

## 🛠️ Build and Commands

- Build command: `npm run build` (or your specific build command)
- Dev command: `npm run dev`
- Code quality check: `npm run lint`

## Architecture

- **Content** is a single typed source of truth in `lib/articles.ts` (`Article`
  type, `ARTICLES`, `getAllArticles`, `getArticle`). Both the homepage and the
  article route read from it — no fetching layer yet.
- **Routing:** `app/page.tsx` is the homepage (a client component, because it
  owns the category-filter state and Framer Motion `layout` grid).
  `app/article/[slug]/page.tsx` is a server component that resolves an article
  via `getArticle` and calls `notFound()` for unknown slugs; it is statically
  generated via `generateStaticParams`. `loading.tsx` provides the skeleton.
- **Theming:** `components/ThemeProvider.tsx` (client context) persists the
  chosen theme to `localStorage` and sets `data-theme` on `<html>`. A tiny
  inline script in `app/layout.tsx` applies it before paint to avoid a flash.
  `app/globals.css` defines Paper/Sepia/Ink palettes as CSS variables; Tailwind
  colors (`canvas`, `ink`, `line`, `accent`…) reference them, so a theme swap is
  one smooth CSS transition. `components/ReaderSettings.tsx` is the floating
  switcher, mounted globally in the layout.

## Conventions

- Strict TypeScript; no `any`. Import via the `@/*` path alias.
- Mark a file `'use client'` only when it needs state/effects/Framer Motion;
  keep route entry points as server components where possible.
- Use theme tokens (`bg-canvas`, `text-ink`, `border-line`, `text-accent`) —
  never hard-coded raw colors in components — so all three themes stay correct.
- Defensive UI is required: `line-clamp` on variable-length titles/deks, empty
  states for filters, skeletons for loading, `notFound()` for missing data.

## 🧠 AI Master Skills & Behavioral Constraints
You must strictly adhere to the following 5 Master Skills in every single file edit, component creation, and refactoring task.

### 1. The "Taste" Skill (Aesthetic Supremacy)
- **Whitespace & Padding:** Prioritize generous, minimalist spacing. Never use cramped or chaotic layouts.
- **Color Palettes:** Never use raw, default, or oversaturated primary colors. Use carefully curated, organic pastel tones, sophisticated neutrals, and subtle contrasts.
- **Typography:** Enforce crisp typographical hierarchy. Ensure clear line heights, distinct weights for headings vs. body text, and avoid inconsistent text casings.

### 2. Aesthetic Animations (Micro-interactions)
- **Transitions:** Implement fluid, organic spring-physics-based animations instead of stiff, linear transitions.
- **Interactions:** Add delightful entrance animations for new elements and active/press states for touchable components.
- **Feel:** Integrate subtle haptic feedback patterns or visual feedback (like scale pops) on successful actions.

### 3. Impeccable Execution (Technical Perfection)
- **Edge Cases:** Always design and code for edge cases, including empty states, error boundaries, and loading indicators.
- **Performance:** Maintain 60fps rendering performance. Avoid heavy, unnecessary re-renders.
- **Layout Safety:** Ensure the layout never breaks under arbitrary content length or long dynamic text input.

### 4. Vercel & Anthropic UI/UX Design Language
- **Esthetics:** Merge the clean, high-contrast, monochrome minimalism of Vercel with the human-centric, warm, and highly functional simplicity of Anthropic.
- **Clutter-free:** Strip away all visual noise, unnecessary watermark icons, and redundant helper texts. Let the content breathe.

### 5. React & Component Best Practices
- **Architecture:** Write modular, highly reusable, and strictly typed React/React Native components.
- **State Management:** Keep state local whenever possible, use clean custom hooks, and avoid bloated global state.
- **Code Hygiene:** Ensure zero linter warnings, clean imports, and descriptive variable naming.
