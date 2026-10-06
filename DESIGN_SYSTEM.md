# Dar Al Ghuraba - Design System & Documentation

This document serves as the foundational reference for the UI architecture, adhering to Section 37 of the project plan.

## 1. Brand Identity
**Meaning:** "Home of the Strangers"
**Values:** Knowledge, Authenticity, Heritage, Craft, Trust
**Impression:** Scholarly. Timeless. Refined. Calm. Warm. Authentic. Premium. Contemporary.

## 2. Color System
Our color tokens map seamlessly between Light and Dark mode to preserve the "quiet library" aesthetic.

| Token | Light Mode | Dark Mode | Role |
| --- | --- | --- | --- |
| `--background` | `#FAF8F2` (Warm Ivory) | `#0D1210` | Base page background |
| `--surface` | `#F3EEE3` (Soft Parchment) | `#131A17` | Cards, drawers, and secondary containers |
| `--ink` | `#101815` (Deep near-black green) | `#F5F2E9` | Primary typography and strong borders |
| `--primary` | `#183C32` (Deep Forest Green) | `#2B6151` | Primary CTAs and emphasis |
| `--accent` | `#B49A62` (Antique Brass) | `#B49A62` | Subtle rules, active states, micro-details |
| `--muted` | `#8A877D` (Warm Stone) | `#A3A095` | Secondary text, placeholders |

## 3. Typography Hierarchy
Typography provides the majority of our premium feel.

- **English Headings:** `Cormorant Garamond` (`font-serif`) — Used for H1/H2, Editorial Intros, and Product Titles.
- **Arabic Script:** `Amiri` (`font-arabic`) — High-contrast, elegant classic Arabic representation.
- **Body & UI:** `Inter` (`font-sans`) — Used for body copy, buttons (uppercase, tracking-widest), and small labels.

## 4. Layout & Spacing
- **Grids:** Asymmetrical layouts for editorial storytelling, standard 1-2-3-4 responsive grids for catalogues.
- **Whitespace:** Extremely generous padding/margins (e.g., `py-24`, `gap-16`) to let content breathe.
- **Borders:** Thin lines (`border border-ink/5`) instead of drop shadows for a catalogue-feel. 
- **Corners:** Sharp, unrounded edges to mirror physical book binding.

## 5. Motion Guidelines
- **Lenis:** Smooth scrolling applied globally for a frictionless reading experience.
- **GSAP:** Used only for subtle `transform` and `opacity` reveals on initial load (Hero).
- **Micro-interactions:** 500ms+ color transitions on hover; slow, deliberate image scaling (`scale-105 duration-700`).

## 6. Component Architecture
- `src/app/`: Next.js 14 App Router handling all routing.
- `src/components/layout/`: Header, Footer, and page wrappers.
- `src/components/ecommerce/`: Product Cards, Cart Drawer, Product Detail components.
- `src/components/editorial/`: Text blocks, Hero sections, and storytelling layouts.
- `src/context/`: `CartContext.tsx` handling global cart state.

## 7. Accessibility
- All interactive elements possess explicit aria-labels.
- Focus rings are applied globally to inputs and navigation elements (`focus-visible:ring-accent`).
- Dark mode provides sufficient contrast matching WCAG guidelines.
