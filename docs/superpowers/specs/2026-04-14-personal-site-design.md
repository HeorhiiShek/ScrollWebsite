# Personal Photo Site — Design Spec
**Date:** 2026-04-14  
**Status:** Approved

---

## Overview

A minimalist personal website where visitors scroll through photos. Each photo is clickable and opens a story page that explains the context behind the image. Inspired by unveil.fr. Light, clean, photo-book aesthetic.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Vite + React 18 | App framework, fast dev server |
| TypeScript | Type safety, easier refactoring |
| Tailwind CSS | Styling (CDN not used — proper Tailwind install) |
| React Router v6 | Client-side routing for `/`, `/stories/:slug`, `/about` |
| framer-motion | Stacked scroll animation, page transitions |
| lenis / `lenis/react` | Smooth scroll behaviour |

---

## Pages & Routes

### `/` — Home (main scroll feed)

The entire homepage is an infinite stacked scroll using the `ImagesScrollingAnimation` component. Photos stack on top of each other like a card deck. Scrolling peels each card away to reveal the next.

**Infinite loop implementation:** The component doesn't loop natively. To fake infinite scroll, the `stories` array is triplicated (`[...stories, ...stories, ...stories]`) before being passed as props, giving enough scroll depth to feel endless for any reasonable collection size.

- Each card shows one photo, full-bleed, centered
- A subtle label (e.g. a short title or date) appears on hover
- Clicking any photo navigates to `/stories/:slug`
- No heavy UI chrome — just the photos

### `/stories/:slug` — Story Page

A long-form page for the story behind a single photo.

**Layout (top to bottom):**
1. Back arrow → returns to `/`
2. Hero image (the photo that was clicked)
3. Title + date
4. Body content — a mix of:
   - Text paragraphs
   - Additional photos (gallery strip or single)
   - Optional embedded video (YouTube/Vimeo iframe or local `<video>`)
   - Optional external links
5. Next story link at the bottom

### `/about` — About Page

One screen only. No scroll.

**Layout:**
- Name
- Portrait photo (circular or square, user's choice at implementation)
- 2–3 sentence bio
- Links row: Instagram, email, any other relevant links

### Navigation

Fixed top bar, minimal:
- Left: name initial (e.g. "G.") — links to `/`
- Right: "About" — links to `/about`
- Behaviour: hides on scroll down, reappears on scroll up (IntersectionObserver or scroll listener)
- Background: `rgba(247, 245, 242, 0.92)` with backdrop blur

---

## Data Model

All content lives in `src/data/stories.ts` — no backend, no CMS, no database.

```ts
export interface Story {
  slug: string           // URL key: /stories/nike-collab
  title: string          // "The Nike Story"
  date: string           // "March 2024"
  thumbnail: string      // URL shown in the scroll feed
  heroImage: string      // URL shown at top of story page
  body: BodyBlock[]      // ordered content blocks
}

export type BodyBlock =
  | { type: 'text';  content: string }
  | { type: 'image'; src: string; caption?: string }
  | { type: 'video'; src: string; poster?: string }   // local or embed URL
  | { type: 'link';  href: string; label: string }

export const stories: Story[] = [
  // user fills in entries here
]
```

Adding a new story = adding one object to this array. No coding knowledge required beyond copy-pasting the structure.

---

## Visual Design

| Token | Value |
|---|---|
| Background | `#f7f5f2` (warm off-white) |
| Text primary | `#1a1a1a` |
| Text muted | `#999` |
| Nav bg | `rgba(247,245,242,0.92)` + `backdrop-filter: blur(8px)` |
| Heading font | Serif (e.g. Cormorant Garamond or similar) |
| Body font | Clean sans-serif (e.g. DM Sans or Inter) |
| Card shadow | `0 8px 32px rgba(0,0,0,0.10)` |
| Border radius | `12px` on cards |

**Anti-generic rules (from CLAUDE.md):**
- No default Tailwind blue/indigo
- Layered shadows with colour tint
- Heading + body font pairing
- Every interactive element has hover, focus-visible, active states

---

## Component Structure

```
src/
  data/
    stories.ts              ← all content lives here
  components/
    ui/
      images-scrolling-animation.tsx   ← stacked scroll (from prompt, click handler added)
    Nav.tsx                 ← fixed top bar
    BodyRenderer.tsx        ← renders BodyBlock[] on story page
  pages/
    Home.tsx                ← wraps ImagesScrollingAnimation
    Story.tsx               ← /stories/:slug
    About.tsx               ← /about
  App.tsx                   ← React Router setup
  main.tsx                  ← Vite entry point
  index.css                 ← Tailwind directives
```

---

## Placeholder Content

All images use Unsplash URLs during development. User will swap in personal photos later by updating `src/data/stories.ts` image URLs.

---

## Out of Scope (this build)

- Separate work/serious website
- Backend, CMS, or database
- Authentication
- Comments or social features
- SEO optimisation (not needed — Vite SPA, no SSR)

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/gosha/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/gosha/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing
