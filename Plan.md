# Prompt: Full Website Revamp for Dar Al Ghuraba

## 0. Core Creative Direction

### **Modern Islamic Publishing House**

Redesign the website as a **premium Islamic publishing house + curated bookstore + heritage brand + modern ecommerce experience**.

The visual identity should combine:

* Islamic heritage
* Editorial luxury
* Contemporary ecommerce
* Scholarly credibility
* Warmth and authenticity
* Minimal, refined composition
* Premium physical-product presentation

The website should **not** look like a generic Islamic website, generic Shopify store, SaaS landing page, or template-based ecommerce site.

The overall impression should be:

> **Scholarly. Timeless. Refined. Calm. Warm. Authentic. Premium. Contemporary.**

Think of the experience as a cross between a **high-end publishing house, curated bookstore, cultural institution, and premium lifestyle brand**.

Islamic identity should come through **typography, Arabic/English composition, photography, materiality, subtle geometry, editorial storytelling, and content** rather than excessive green, gold, arches, patterns, or ornamental decoration.

---

# 1. Project Goal

Perform a **complete frontend redesign and rebuild** of Dar Al Ghuraba.

The objective is to create a website that feels significantly more valuable, trustworthy, memorable, and professionally designed while maintaining excellent ecommerce usability and performance.

The redesign must prioritize:

1. Premium visual identity
2. Strong brand perception
3. Excellent typography
4. Editorial-quality layouts
5. Clear ecommerce UX
6. Mobile-first responsiveness
7. SEO
8. Core Web Vitals
9. Accessibility
10. Fast loading
11. Smooth but restrained motion
12. Maintainable architecture

The website should feel like a **$100,000-quality professional redesign**, without becoming visually excessive or impractical.

This phase focuses on frontend design and implementation only. Backend/cart integration will use the existing system with minimal changes; deeper backend work is out of scope for this phase.

---

# 2. Brand Context

## Brand

**Dar Al Ghuraba**

Meaning:

> **“Home of the Strangers”**

## Positioning

> **Your trusted Home of the Strangers — authentic Islamic books, premium Islamic-themed notebooks, and modest clothing.**

## Core Brand Values

* Knowledge
* Authenticity
* Heritage
* Craft
* Trust
* Faith
* Modesty
* Quality

## Existing Proof Points

* **500+ Books Available**
* **6 Categories**
* **100% Authentic Sources**

Use these as supporting credibility signals, but do **not** turn them into oversized colorful statistic cards.

## Target Audience

Muslims in Pakistan and beyond who are interested in:

* Authentic Islamic books
* Islamic scholarship
* Islamic literature
* Islamic stationery
* Premium notebooks
* Modest clothing
* Faith-inspired products
* Gifts related to Islamic knowledge and culture

## Brand Tone

The website should feel:

* Trustworthy
* Scholarly
* Modest
* Warm
* Premium
* Faith-centered
* Calm
* Authentic
* Sophisticated

Avoid:

* Overly commercial language
* Aggressive sales language
* Excessive animations
* Generic ecommerce copy
* Cheap-looking gradients
* Excessive badges
* Visual clutter

---

# 3. Creative Philosophy

The design should communicate:

> **Knowledge → Authenticity → Heritage → Craft → Trust**

Every major design decision should reinforce one or more of these ideas.

Do not simply decorate the website with Islamic motifs.

Instead, create a sophisticated visual language where Islamic identity is naturally embedded into:

* Typography
* Arabic calligraphy
* Editorial layouts
* Book photography
* Material textures
* Geometric details
* Color
* Spacing
* Content hierarchy
* Product presentation

The website should feel **quietly luxurious rather than obviously luxurious**.

---

# 4. Technology Stack

Use a modern production-ready frontend stack.

Preferred options:

* **Next.js App Router + React**
* Or **Astro + React** if it provides a meaningful performance advantage

Use:

* Tailwind CSS or a clean modular CSS architecture
* Component-based architecture
* TypeScript where appropriate
* GSAP
* GSAP ScrollTrigger
* Lenis
* Google `<model-viewer>` where appropriate

Integrate with the existing ecommerce backend/cart system.

If the existing backend is Shopify, WooCommerce, or another headless ecommerce system, preserve existing functionality while improving the frontend experience.

Do not unnecessarily rewrite backend functionality.

---

# 5. Performance Requirements

Performance is a first-class requirement.

Target:

* **Lighthouse Performance: 90+**
* **Lighthouse Accessibility: 90+**
* **Lighthouse SEO: 95+**
* **LCP: < 2.5s**
* **CLS: < 0.1**
* **INP: < 200ms**

The visual quality must never come at the cost of performance.

## Required Optimizations

Implement:

* Next/Image or equivalent optimized images
* Responsive image sizes
* Modern image formats
* Lazy loading below-the-fold images
* Priority loading for the primary hero image
* Proper image dimensions to prevent layout shift
* Font optimization
* Font subsetting where appropriate
* Code splitting
* Tree shaking
* Dynamic imports for heavy components
* CDN-friendly assets
* Browser caching
* Minimal JavaScript
* Avoid unnecessary third-party scripts
* Avoid layout thrashing
* Animate primarily `transform` and `opacity`
* Avoid expensive continuous animations
* Defer non-critical JavaScript

Do not load GSAP, 3D, or other heavy libraries unnecessarily on pages that do not require them.

---

# 6. Website Information Architecture

Create the following primary pages.

## Homepage

Sections:

1. Navigation
2. Editorial Hero
3. Trust / credibility strip
4. Category discovery
5. Featured collection
6. Brand story
7. Editorial/content section if appropriate
8. Newsletter or community CTA if appropriate
9. Footer

---

## Books Category

Include:

* H1
* Editorial introduction
* Category description
* Filters
* Sorting
* Product grid
* Pagination or infinite loading
* Breadcrumbs
* SEO metadata
* Product structured data

The page should feel like an **editorial catalogue**, not a generic ecommerce listing.

---

## Notebooks Category

Same principles as Books.

Emphasize:

* Materiality
* Craft
* Product photography
* Premium presentation
* Islamic-inspired design details

---

## Clothing Category

Same principles as Books and Notebooks.

Maintain:

* Modesty
* Premium photography
* Clear sizing/product information
* Clean ecommerce interaction
* Minimal visual clutter

---

# 7. Product Detail Page

The product detail page should feel like a **premium physical product presentation**.

For books especially, the product should feel like a carefully curated object.

Include:

* Large product imagery
* Product title
* Price
* Availability
* Author
* Publisher where applicable
* Description
* Product metadata
* Authenticity information
* Quantity selector
* Add-to-cart CTA
* Related products
* Breadcrumbs
* Reviews if available
* Structured data

Use generous whitespace.

Avoid cramming information into small cards.

The primary product imagery should be visually dominant.

Consider an editorial composition such as:

**Large product image + carefully typeset product information + restrained CTA**

rather than a conventional ecommerce layout.

---

# 8. About Page

The About page should feel like a **publishing-house profile** rather than a generic corporate About page.

Focus on:

* Brand story
* Meaning of Dar Al Ghuraba
* Mission
* Commitment to authentic Islamic knowledge
* Philosophy
* Product curation
* Community
* Heritage

Use editorial storytelling, photography, typography, and whitespace.

---

# 9. Contact / Support

Include:

* Contact form
* WhatsApp contact
* Email
* FAQ
* Customer support information
* Shipping information where relevant
* Returns information where relevant

Keep the layout simple and trustworthy.

---

# 10. Homepage Creative Direction

The homepage must **not** feel like a conventional:

> Hero → Features → Categories → Products → Footer

template.

Instead, create an **editorial narrative**.

## Hero Concept

Potential headline:

### English

> **THE KNOWLEDGE THAT REMAINS.**

### Arabic

> **العلم الذي يبقى**

Possible CTA:

> **Explore the Collection**

Secondary CTA:

> **Discover Our Story**

The exact copy can be refined based on the existing brand content.

The hero should use:

* Strong editorial typography
* Large photography
* Elegant Arabic/English composition
* Generous whitespace
* Subtle motion
* Strong visual hierarchy

Avoid a generic split-screen ecommerce hero with text on one side and a product grid on the other.

---

# 11. Category Discovery

The main categories should be presented as **large editorial visual compositions**.

Categories:

* Books
* Notebooks
* Clothing

Avoid generic rounded rectangular cards.

Instead, consider:

* Large image compositions
* Asymmetrical layouts
* Editorial labels
* Large typography
* Subtle hover transitions
* Image cropping
* Layered typography

Each category should feel like entering a different section of a curated collection.

---

# 12. Featured Collection

The featured product section should feel like a **premium catalogue**.

Use:

* Large product photography
* Generous spacing
* Elegant typography
* Thin borders
* Minimal shadows
* Restrained hover effects
* Clear pricing
* Minimal CTAs

Avoid:

* Excessive rounded cards
* Huge shadows
* Bright sale badges
* Excessive buttons
* Generic ecommerce card templates

Product cards should feel closer to a **luxury catalogue** than a conventional marketplace.

---

# 13. Design System

## 13.1 Primary Palette

Use the following palette as the foundation:

| Role          | Color                 | Hex       |
| ------------- | --------------------- | --------- |
| Ink / Darkest | Deep near-black green | `#101815` |
| Primary       | Deep Forest Green     | `#183C32` |
| Background    | Warm Ivory            | `#FAF8F2` |
| Surface       | Soft Parchment        | `#F3EEE3` |
| Accent        | Antique Brass         | `#B49A62` |
| Muted         | Warm Stone            | `#8A877D` |
| Text          | Deep Ink              | `#252321` |

The exact implementation can be refined slightly if required for accessibility or contrast.

---

## 13.2 Color Distribution

Approximately:

* **65–70%** warm ivory / neutral
* **20–25%** deep green / ink
* **~5%** brass
* Remaining colors from photography, imagery, and subtle supporting tones

The design should breathe.

Do not make the entire site green.

---

# 14. Brass / Gold Usage

Brass is an **accent**, not a dominant color.

Use it for:

* Thin rules
* Small icons
* Selected states
* Subtle borders
* Micro-details
* Geometric accents
* Occasional hover states
* Small decorative details

Avoid:

* Large gold backgrounds
* Shiny gradients
* Metallic effects
* Gold everywhere
* Large gold buttons
* Excessive ornamental decoration

The brass should feel like **antique book detailing**, not luxury-template gold.

---

# 15. Typography

Typography is one of the most important parts of the redesign.

Use a sophisticated combination of:

### English Headings

Consider:

* Cormorant Garamond
* Libre Baskerville
* Or another high-quality editorial serif

### Arabic

Consider:

* Amiri
* Noto Serif Arabic
* Or another elegant Arabic serif

### Body / UI

Consider:

* Inter
* Manrope
* Or another clean modern sans-serif

The visual contrast should be:

> **Classical editorial serif + refined Arabic typography + modern sans-serif**

Typography should create much of the premium feeling.

---

# 16. Typography Rules

Use:

* Large editorial headlines
* Comfortable line-height
* Controlled measure
* Strong hierarchy
* Generous whitespace
* Carefully chosen font weights
* Elegant Arabic/English pairing

Avoid:

* Too many font families
* Excessive font weights
* Oversized UI text
* Generic geometric sans-serif everywhere
* Tight line spacing
* Poor Arabic/English alignment

---

# 17. Layout & Composition

Use:

* Generous whitespace
* Large margins
* Editorial grids
* Asymmetrical compositions
* Strong vertical rhythm
* Thin dividers
* Large imagery
* Controlled alignment
* Intentional negative space

Do not make every section symmetrical.

Use asymmetry where it improves the editorial feeling.

The site should feel **art-directed**, not automatically generated from cards and grids.

---

# 18. Islamic Visual Language

Use Islamic visual references with restraint.

Possible elements:

* Subtle geometric geometry
* Fine-line patterns
* Arabic typographic details
* Book-page inspired dividers
* Arch-inspired framing used sparingly
* Traditional material references
* Subtle Islamic geometric motifs

Do **not** use:

* Large repetitive Islamic patterns
* Decorative mosque imagery everywhere
* Excessive arches
* Generic crescent/star motifs
* Ornamental borders around every section
* Heavy gold decoration

The Islamic identity should feel **authentic and sophisticated**, not stereotypical.

---

# 19. Photography & Imagery

Photography should feel:

* Art-directed
* Natural
* Cinematic
* Warm
* Authentic
* Editorial

Books should be treated as physical objects.

Possible environments:

* Walnut
* Parchment
* Stone
* Linen
* Natural textiles
* Quiet study environments
* Bookshelves
* Soft daylight
* Controlled shadows

Maintain consistency across product photography.

Avoid inconsistent stock imagery.

Product images should feel like part of one premium visual system.

---

# 20. Product Card Design

Product cards should include:

* Product image
* Product title
* Author/details where relevant
* Price
* Availability if needed
* Minimal CTA

Design characteristics:

* Large image area
* Thin borders
* Minimal shadows
* Elegant typography
* Generous spacing
* Subtle hover effects
* Clean information hierarchy

Avoid overly rounded cards unless there is a strong design reason.

---

# 21. Navigation

Create a refined navigation system.

Desktop navigation should prioritize:

* Brand identity
* Books
* Notebooks
* Clothing
* About
* Contact
* Search
* Cart

The navigation should feel premium and lightweight.

Consider:

* Transparent/overlay navigation on the hero
* Transitioning to a solid background on scroll
* Subtle typography changes
* Minimal icons
* Smooth state transitions

Avoid oversized navigation bars.

---

# 22. Dark Mode

Implement a premium dark theme.

Suggested colors:

| Role       | Color     |
| ---------- | --------- |
| Background | `#0D1210` |
| Text       | `#EDE8DC` |
| Green      | `#183C32` |
| Brass      | `#B49A62` |
| Muted      | `#8A877D` |

Dark mode should feel like:

> **A quiet library / reading room / premium publishing environment.**

Do not simply invert the light theme.

Adjust:

* Contrast
* Borders
* Image treatment
* Surface colors
* Shadows
* Typography
* Accent intensity

to create a genuinely considered dark experience.

---

# 23. Motion Design

Use animation intentionally.

Required technologies:

* GSAP
* ScrollTrigger
* Lenis

Motion should feel:

> **Subtle. Cinematic. Slow enough to feel intentional.**

Do not make the website look like a motion-design demo.

---

# 24. GSAP / ScrollTrigger Guidelines

Use animations primarily for:

* Hero entrances
* Image reveals
* Typography reveals
* Section transitions
* Product image movement
* Editorial parallax
* Navigation transitions
* Hover interactions
* Scroll-linked storytelling

Prefer:

* `transform`
* `opacity`
* GPU-friendly properties

Avoid animating expensive layout properties whenever possible.

Do not create dozens of independent ScrollTriggers unnecessarily.

Use reusable animation utilities/components where appropriate.

Limit scroll linked animations to the hero, key editorial sections, and product reveals; avoid animating every component on every page.

---

# 25. Lenis Smooth Scrolling

Implement Lenis carefully.

Requirements:

* Smooth scrolling
* ScrollTrigger synchronization
* Single efficient animation loop
* No duplicated RAF loops
* No scroll-jank
* Mobile-friendly behavior

Respect:

```css
prefers-reduced-motion
```

When reduced motion is enabled:

* Disable unnecessary animations
* Disable parallax
* Simplify transitions
* Preserve usability

---

# 26. 3D / Model Viewer

Optionally use Google `<model-viewer>` for a premium product presentation.

Potential use cases:

* Featured book
* Notebook
* Product packaging
* Special collection item

The 3D element should feel:

> **Editorial and tactile**

not:

> **Gimmicky or game-like**

Use it selectively.

Do not place 3D elements everywhere.

Optimize the model:

* Compress assets
* Lazy-load the component
* Load only when needed
* Avoid blocking initial render
* Provide fallback imagery
* Ensure mobile performance remains strong

---

# 27. Editorial Micro-Interactions

Add small details that communicate quality.

Examples:

* Elegant link underlines
* Image reveal animations
* Subtle image zoom
* Brass micro-accents
* Refined button transitions
* Navigation state transitions
* Product image hover movement
* Thin line animations
* Subtle geometric motif movement

These should reward exploration without distracting from content.

---

# 28. Responsive Design

Design mobile intentionally rather than simply shrinking desktop layouts.

Test at:

* 320px
* 375px
* 390px
* 430px
* 768px
* 1024px
* 1280px
* 1440px
* 1920px+

Pay particular attention to:

* Arabic typography
* Hero composition
* Product grids
* Navigation
* Touch targets
* Typography scaling
* Image cropping
* Sticky elements
* Checkout/cart interactions

Mobile should retain the premium editorial character.

---

# 29. Accessibility

Meet strong accessibility standards.

Implement:

* Semantic HTML
* Keyboard navigation
* Visible focus states
* Proper heading hierarchy
* Alt text
* Accessible buttons
* Accessible forms
* Sufficient color contrast
* Reduced motion support
* Screen-reader-friendly navigation
* Proper ARIA only where necessary

Do not sacrifice accessibility for visual aesthetics.

---

# 30. SEO

Implement technical SEO thoroughly.

Include:

* Unique page titles
* Meta descriptions
* Canonical URLs
* Open Graph metadata
* Social metadata
* XML sitemap
* Robots.txt
* Breadcrumbs
* Semantic HTML
* Structured data

Use structured data where appropriate:

* `Organization`
* `Product`
* `Offer`
* `BreadcrumbList`
* `WebSite`
* `SearchAction` where appropriate

Product pages should contain accurate product structured data.

---

# 31. SEO Content Strategy

Research relevant search intent around:

* Islamic books Pakistan
* Islamic books online Pakistan
* Authentic Islamic books
* Islamic literature
* Islamic notebooks
* Islamic stationery
* Modest clothing Pakistan
* Islamic gifts
* Quran books
* Hadith books
* Islamic scholars/books
* Islamic bookstore Pakistan

Do not keyword-stuff.

SEO copy should remain natural and editorial.

---

# 32. Ecommerce UX

The shopping experience should be extremely clear.

Users should be able to:

* Browse categories
* Search
* Filter
* Sort
* View products
* View product details
* Add to cart
* Update cart
* Continue shopping
* Proceed to checkout

Maintain clear feedback for:

* Add to cart
* Loading
* Errors
* Stock availability
* Cart updates

Do not sacrifice usability for aesthetics.

---

# 33. Trust & Authenticity

Authenticity should be a major differentiator.

Communicate trust through:

* Authenticity messaging
* Curated collections
* Publisher/author information
* Clear product metadata
* Transparent policies
* Customer support
* Reviews if available
* Professional photography
* Editorial presentation

Trust should be communicated visually as well as through copy.

---

# 34. Footer

Create a sophisticated footer containing:

* Brand
* Short brand statement
* Navigation
* Categories
* Customer support
* Contact
* WhatsApp
* Social links
* Newsletter if appropriate
* Legal links
* Copyright

The footer should feel like the final page of a premium publication.

---

# 35. Component Architecture

Build reusable components.

Potential component structure:

```text
components/
├── layout/
│   ├── Header
│   ├── Footer
│   ├── Container
│   └── Navigation
│
├── ui/
│   ├── Button
│   ├── Link
│   ├── Divider
│   ├── Badge
│   └── Icon
│
├── editorial/
│   ├── EditorialHero
│   ├── EditorialSection
│   ├── ImageReveal
│   └── QuoteBlock
│
├── ecommerce/
│   ├── ProductCard
│   ├── ProductGrid
│   ├── ProductGallery
│   ├── ProductInfo
│   ├── AddToCart
│   └── Cart
│
├── motion/
│   ├── FadeIn
│   ├── Reveal
│   ├── Parallax
│   └── ScrollSection
│
└── 3d/
    └── ProductViewer
```

Keep components reusable without overengineering.

---

# 36. Design Tokens

Create centralized design tokens for:

* Colors
* Typography
* Font sizes
* Spacing
* Border radius
* Borders
* Shadows
* Transitions
* Breakpoints
* Z-index
* Container widths

Do not scatter arbitrary values throughout the codebase.

---

# 37. Design System Documentation

Document the final design system.

Include:

* Color tokens
* Typography
* Arabic typography
* Spacing system
* Buttons
* Links
* Cards
* Product cards
* Navigation
* Forms
* Inputs
* Product detail layouts
* Editorial sections
* Motion principles
* Responsive behavior
* Light mode
* Dark mode

The design system should make future expansion easy.

---

# 38. Analytics & Search Console

Prepare the site for:

* Google Analytics
* Google Search Console
* Ecommerce event tracking

Track important events such as:

* Product views
* Add to cart
* Cart updates
* Checkout initiation
* Purchases
* Search
* Category interactions

Do not allow analytics scripts to significantly hurt performance.

---

# 39. Code Quality

The codebase should be:

* Clean
* Modular
* Maintainable
* Documented
* Production-ready
* Responsive
* Accessible
* Performant

Avoid:

* Duplicated components
* Huge monolithic components
* Unnecessary dependencies
* Dead code
* Excessive client-side rendering
* Excessive JavaScript
* Hard-coded repeated values

Prefer server rendering where appropriate.

Migrate existing products, categories, and core pages (Home, About, Contact, key policies). New editorial pages or blog content can be added in a future phase.

---

# 40. Visual Quality Benchmark

Before implementing the entire website, establish the visual system first.

Create a polished visual benchmark containing:

1. Homepage hero
2. Navigation
3. Typography system
4. Color system
5. One premium product card
6. One product detail composition
7. One editorial section
8. Light mode
9. Dark mode
10. Core responsive behavior

Once this benchmark is established, derive the rest of the website from it.

**Do not introduce unrelated visual styles on individual pages.**

The entire website should feel like one coherent brand system.

---

# 41. What to Avoid

Absolutely avoid falling back to:

* Generic Tailwind ecommerce templates
* Generic Shopify themes
* SaaS-style cards
* Excessive rounded corners
* Huge shadows
* Excessive gradients
* Bright green buttons everywhere
* Excessive gold
* Generic Islamic patterns
* Excessive mosque imagery
* Stock-photo-heavy layouts
* Overly dense product grids
* Excessive animations
* Gimmicky 3D
* Giant text everywhere without hierarchy
* Random decorative elements
* Inconsistent spacing
* Inconsistent photography
* Unnecessary popups
* Poor mobile layouts

The website must feel **art-directed and intentional**.

---

# 42. Overall Experience

The visitor should feel:

### First impression

> “This feels premium and trustworthy.”

### After exploring

> “This feels like a serious Islamic publishing and cultural brand.”

### When viewing a product

> “This product has been carefully curated and presented.”

### When browsing

> “This is calm, easy, and enjoyable to explore.”

### Before purchasing

> “I trust this store.”

---

# 43. Final Acceptance Criteria

The project is successful when:

## Brand

* The website feels unmistakably Dar Al Ghuraba.
* It feels premium without feeling flashy.
* Islamic identity is sophisticated and authentic.
* The design communicates knowledge, heritage, craft, and trust.

## Design

* Strong editorial typography
* Excellent Arabic/English typography
* Generous whitespace
* Refined color system
* Restrained brass accents
* High-quality photography
* Consistent design system
* Strong visual hierarchy
* Excellent light and dark modes

## Ecommerce

* Product discovery is intuitive.
* Product cards feel premium.
* Product pages feel editorial.
* Cart and purchase interactions remain obvious and easy.

## Motion

* Motion is smooth and intentional.
* GSAP/ScrollTrigger are used appropriately.
* Lenis does not introduce scroll-jank.
* Reduced-motion users receive an accessible experience.

## Performance

* Lighthouse Performance target of 90+.
* LCP < 2.5s.
* CLS < 0.1.
* INP < 200ms.
* 3D and animations do not significantly hurt performance.

## SEO

* Strong metadata
* Structured data
* Sitemap
* Robots configuration
* Canonicals
* Semantic HTML
* Search-friendly category/product pages

## Accessibility

* Keyboard accessible
* Screen-reader friendly
* Strong contrast
* Accessible forms
* Proper focus states
* Reduced-motion support

## Engineering

* Clean component architecture
* Reusable design system
* Maintainable code
* Responsive across devices
* Production-ready implementation
* Documentation included

---

# 44. Most Important Instruction

**Do not optimize for “more design.” Optimize for better design.**

The website should not try to impress through excessive effects.

It should impress through:

> **Typography + spacing + photography + composition + materiality + subtle motion + consistency + performance.**

The final result should feel like a **premium Islamic publishing house that happens to have an excellent ecommerce experience**, rather than an ecommerce store decorated with Islamic elements.

Before implementing the full site, establish the visual system first. Create the homepage hero, navigation, typography system, color system, one product card, one product detail composition, and one editorial section as the visual benchmark. All remaining pages and components must derive from this system rather than introducing unrelated styles. Do not fall back to generic SaaS/ecommerce UI patterns.

**Build with restraint. Build with intention. Build for long-term brand value.**
