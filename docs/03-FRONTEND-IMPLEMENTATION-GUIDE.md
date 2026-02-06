# Frontend Implementation Guide — Ohwise Web Hub (Blog First)

This guide walks you through turning **ohwise-web-hub** into a production-ready static site with **blog first**, using **heunify-frontend** as the reference. **Work directly in the ohwise-web-hub repo** (https://github.com/jw-open/ohwise-web-hub). Add static generation and sitemap so the project builds and outputs `out/`. **heunify-frontend** (https://github.com/jw-open/heunify-frontend) is read-only — copy features such as static HTML generation and sitemaps from it. **The project owner will build the GitHub Actions to deploy** ohwise-web-hub (and ohwise-cms); you do not need to set up CI/CD.

**Tip:** You can use Cursor, Claude Code, or any AI coding tool. Keep the frontend maintainable: reuse components and helpers instead of copying large blocks everywhere; keep the data layer (Strapi service, types) clear and consistent; avoid unnecessary state or heavy client bundles for static content. The goal is code that’s easy to change and extend later.

---

## 1. Stack and Build Output

- **Framework:** Next.js (App Router).
- **Build:** Static export only — no server at runtime for pages. Use `output: 'export'` in `next.config.js`.
- **Build command:** Run `next build`, then a script that generates `sitemap.xml` (and optionally search data) and writes into `out/`. So the full build is: **build → sitemap script**.

**Environment at build time:**

- `NEXT_PUBLIC_STRAPI_API_URL` — **Required.** Use **https://strapi.ohwise.com** for production (or `http://localhost:1337` for local).
- `NEXT_PUBLIC_STRAPI_TOKEN` — Optional. Use only if you need to fetch draft content at build (e.g. for preview). For production, build only from published content.

---

## 2. Design direction

Aim for **simple, official, industrial, Apple-style** frontend design. The site should feel clean, trustworthy, and product-grade — not playful or noisy.

**Principles:**

- **Simple:** Few elements per screen. One clear message per section. No decorative clutter. Every element should have a purpose.
- **Official:** Typography and layout should feel professional and consistent. Use a clear hierarchy (one primary headline, restrained subtext). Neutral, confident tone in copy and visuals.
- **Industrial:** Slightly technical, precise. Clean lines, clear structure, grid-aligned. Avoid rounded or cartoonish UI; prefer subtle radius and sharp, readable type.
- **Apple-style:** Generous whitespace. Light backgrounds (or a restrained dark mode) with high contrast for text. Subtle shadows and borders; avoid heavy gradients or busy patterns. System-like typography (e.g. SF Pro, Inter, or similar — clean sans-serif). Buttons and links are understated; hover states are subtle. Hero sections are spacious with one strong headline and minimal supporting text. Content-first: let type and spacing carry the design.

**Concrete tips:**

- **Typography:** Single primary font family (sans-serif). Use a small scale (e.g. 2–3 sizes for body/headings) and consistent line-height. Prefer rem/em for scalability.
- **Color:** Limited palette. Prefer neutral grays and one accent (e.g. a single blue or brand color for links/CTAs). Ensure text has strong contrast (WCAG AA).
- **Spacing:** Use a consistent spacing scale (e.g. 4/8/16/24/32/48/64). Plenty of padding around sections and between blocks.
- **Components:** Minimal borders and shadows. Flat or very subtle depth. Forms: clean inputs, clear labels, one primary button style.
- **Navigation:** Simple top nav or header. Clear, few items. Footer: structured but light (links in columns or a single row).

Reference Apple’s marketing and product pages, **Design references — study these for landing page and overall UI:**

- **[Claude Code](https://claude.com/product/claude-code)** — Clean product page: hero with one strong value prop, "Use Claude Code where you work" (Terminal / IDE / Web / Slack), clear feature blocks, pricing, FAQ. Good for sectioning, CTAs, and a calm, professional tone.
- **[Manus](https://manus.im/)** — "What can I do for you?" style landing: card-based options, minimal chrome, focus on capabilities. Useful for presenting product capabilities or video tutorials in a scannable, card-driven way.
- **[OpenAI](https://openai.com/)** — **Most Apple-like:** very restrained, lots of whitespace, subtle typography and one-accent color. Hero-led, minimal nav, content-first. Best reference for the official, industrial, Apple-style look — calm, premium, trustworthy.

Study these for landing page structure, hero treatment, section rhythm, and component restraint. Also reference Apple marketing, Linear, or Vercel for tone and layout. When copying from heunify-frontend, strip any busy or off-brand styling and apply this direction so the site feels cohesive and professional.

---

## 3. What to Copy from heunify-frontend

Use heunify-frontend as the **reference only**. Copy or adapt the following **into ohwise-web-hub**.

### 2.1 Next.js config

In `next.config.js` (or `next.config.mjs`) in **ohwise-web-hub**:

- Set `output: 'export'` so `next build` produces static files in `out/`.
- If you use Strapi or S3 image URLs: `images: { unoptimized: true }` and add allowed `domains` or `remotePatterns` if needed (or keep unoptimized and use external URLs as-is).

Example:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'strapi.ohwise.com', pathname: '/uploads/**' },
      { protocol: 'https', hostname: '*.s3.*.amazonaws.com', pathname: '/**' },
    ],
  },
};
module.exports = nextConfig;
```

### 3.2 Build script

In **ohwise-web-hub** `package.json`, make the build script:

1. Clean `.next` and `out`.
2. Run `next build`.
3. Run the sitemap (and optional search) script so it writes into `out/`.

Example (same idea as heunify-frontend):

```json
"scripts": {
  "build": "rm -rf .next out && next build && ts-node --transpile-only src/scripts/generate-sitemap.ts",
  "dev": "next dev",
  "serve": "npx serve out"
}
```

On Windows you may need a cross-platform clean (e.g. `rimraf .next out` or a small script) instead of `rm -rf`.

### 2.3 Data layer and Strapi client

- Copy **`src/lib/get-static-data.ts`** from heunify-frontend into ohwise-web-hub — used by layout and home page to fetch site settings, nav, hero, about, featured content at build time. Point it to **https://strapi.ohwise.com** (same API as in 02-BACKEND-BUILD-GUIDE).
- Copy **`src/services/strapi.tsx`** — all API calls (contents, about, site-setting, navigation, contact, newsletter, comments, OAuth). Set the default `STRAPI_API_URL` to **https://strapi.ohwise.com** so it works even if env is missing in dev.
- Copy **`src/types/index.tsx`** (or the types you need): `ContentItem`, `SiteSettings`, `NavigationItem`, `AboutData`, `ContentComment`, etc. Trim any types you don't use.

Ensure every place that uses Strapi reads `process.env.NEXT_PUBLIC_STRAPI_API_URL` (and optionally `NEXT_PUBLIC_STRAPI_TOKEN` for build).

### 3.4 Layout and static pages

- **Root layout** (`src/app/layout.tsx`): Fetch navbar and site settings in the layout (using `get-static-data` or the Strapi service) and render Navbar + Footer. Use `generateMetadata()` with site settings for default title/description.
- **Social links section:** Use **site-setting.social** (and optionally **about.social**) to show Ohwise’s social links (Twitter, GitHub, LinkedIn, YouTube) in the **footer** (or header). Render them as icon + link; only show keys that have a URL. This gives visitors a clear way to follow the brand.
- **Home** (`src/app/page.tsx`): Fetch hero and featured content at build time; render static content. Optionally add a **Video tutorials** section (see below).
- **About** (`src/app/about/page.tsx`): Fetch about data at build; render static page. You can also show social links here from `about.social`.
- **Contact** (`src/app/contact/page.tsx`): Static form; **on submit** call Strapi `POST /contacts` from the client (this is one of the few client-side API calls).
- **Privacy** (`src/app/privacy/page.tsx`) and **Terms** (`src/app/terms/page.tsx`): Static pages (or from Strapi later). Include in nav and sitemap. **Pricing** (`/pricing`) can be added later.

Copy the corresponding components (Navbar, Footer, etc.) from heunify-frontend and adapt styling/branding for Ohwise.

**Landing page: Video tutorials section (optional)**  
Video tutorials can be uploaded in the CMS and published on the landing page. If the backend exposes video tutorials (e.g. **GET** `/video-tutorials` or `/tutorials` — see 02-BACKEND-BUILD-GUIDE §2.9), fetch them at build time on the home page and render a “Video tutorials” or “Tutorials” section: title, optional thumbnail, description, and link (or embed) to the video URL. Keep the design consistent with the rest of the site (simple, official, Apple-style).

---

## 3. Blog: Routes and Static Generation (single level only)

Use **only** `/blog` (list) and `/blog/[slug]` (post). No extra hierarchy (no `/content/thought`, `/content/product`, or other content-by-type routes).

### 4.1 URL design

- **List:** `src/app/blog/page.tsx` → `/blog`
- **Post:** `src/app/blog/[slug]/page.tsx` → `/blog/[slug]`
- In Strapi, use a single content type: **contents** with **`type = 'post'`** for all blog posts. Do not use thoughts, product, or other types for navigation.

### 3.2 Blog list page — `src/app/blog/page.tsx`

- In the page (server component), call your Strapi service to get the list of posts:  
  `getContentItems('post', 1, 50)`.
- Render links to `/blog/[slug]` for each post (use the `slug` from each item).
- Set `generateMetadata()` from site settings for title/description.
- No `generateStaticParams` needed for a single list page; the page is built once.

### 4.3 Blog post page — `src/app/blog/[slug]/page.tsx`

- **generateStaticParams:**  
  Fetch all published blog posts from Strapi: `getContentItems('post', 1, 100)` (or iterate by page) and return `params: { slug: item.slug }` for each. This pre-renders every post at build.
- **generateMetadata({ params }):**  
  Fetch the post by slug: `getContentItemBySlug('post', params.slug)`. Use `content.seo.title`, `content.seo.description`, `content.title`, `content.description` for meta tags.
- **Page component:**  
  Fetch the same post again (or pass from metadata if you prefer) and render title, date, body (markdown/richtext). Use a markdown renderer (e.g. `react-markdown`) if your Strapi stores markdown.

### 3.4 Navigation

In Strapi, create **navigation-items** for: **Home** (`/`), **Blog** (`/blog`), **About** (`/about`), **Contact** (`/contact`), **Privacy** (`/privacy`), **Terms** (`/terms`). Do **not** add thoughts, product, or content-by-type items. **Pricing** (`/pricing`) can be added later. Your layout reads navigation from Strapi, so these will appear in the header/footer once configured.

---

## 5. Sitemap Script

Copy **`src/scripts/generate-sitemap.ts`** from heunify-frontend into ohwise-web-hub and adapt:

1. **Base URL:** Use **https://ohwise.com** for the site. Strapi is at **https://strapi.ohwise.com** (only for API calls, not for sitemap URLs).
2. **Static pages:** Include `/`, `/blog`, `/about`, `/contact`, `/privacy`, `/terms`.
3. **Blog URLs:** Fetch all posts from `.../api/contents?filters[type][$eq]=post&filters[publishedAt][$notNull]=true&pagination[pageSize]=100` and add `https://ohwise.com/blog/<slug>` for each.
4. **Output:** Write `sitemap.xml` into `out/sitemap.xml` (the script runs **after** `next build`, so `out/` already exists).
5. **Search data (optional):** If the script also generates a `search-data.ts` or JSON file for client-side search, write it under `src/lib/` or into `public/` so the client can load it. Keep search static (no server).

Add `minimatch` (or equivalent) to **ohwise-web-hub** `package.json` if the script uses it for scanning page files. The script must run in Node with env vars set (same as build): `NEXT_PUBLIC_STRAPI_API_URL` and optionally `NEXT_PUBLIC_STRAPI_TOKEN`.

---

## 5. Client-Only Features

These are the only parts that run in the browser and call your backend:

- **Contact form:** Form submits to Strapi `POST /contacts` (see `strapi.tsx` → `submitContactForm`). Show a success/error message after submit.
- **Newsletter:** Subscribe / resubscribe / unsubscribe — use the endpoints from 02-BACKEND-BUILD-GUIDE. Call them from the client (e.g. in a footer or modal). Unsubscribe link in emails should point to your site with `?token=...` and a page that calls `GET .../newsletter-subscribers/unsubscribe?token=...`.
- **Comments (optional):** If you enable comments, list is fetched client-side by content id; submit comment with optional JWT (see 02). You can copy heunify's comment components.
- **OAuth (optional):** If you want "Sign in with Google/GitHub" for comments, the frontend redirects to your Strapi `/api/connect/:provider` and then handles callback with access_token and stores JWT (e.g. in a cookie). Implement as in heunify-frontend.

All other pages (home, blog list, blog post, about, contact page shell) are static HTML from the CDN.

---

## 7. CI/CD (Not Your Responsibility)

**CI/CD will be built by the project owner** for both **ohwise-cms** and **ohwise-web-hub**. Your job is to ensure **ohwise-web-hub** **builds successfully** and produces the `out/` folder (static export + sitemap). You do not need to add or configure any deploy workflow.

For reference only: the frontend deploy will typically be checkout → `npm ci` + `npm run build` (with `NEXT_PUBLIC_STRAPI_API_URL` set) → sync `out/` to S3 → CloudFront invalidation. The workflow in heunify-frontend (`.github/workflows/deploy.yml`) is the kind of pattern the owner will adapt for ohwise-web-hub.

---

## 7. SEO Checklist

- **Default meta:** In root layout, set title and description from site settings (from Strapi). Use `generateMetadata()` in layout and in each page that has custom meta.
- **Per-post meta:** In blog post page, use `generateMetadata()` with `content.seo` (title, description, keywords) or fallback to `content.title` and `content.description`.
- **Sitemap:** Ensure `out/sitemap.xml` is generated and uploaded. Homepage or layout can link to `https://ohwise.com/sitemap.xml`.
- **robots.txt:** Put a `robots.txt` in `public/` that allows crawlers and points to sitemap, e.g.  
  `Sitemap: https://ohwise.com/sitemap.xml`  
  It will be copied to `out/` during build.

---

## 9. Static pages: Privacy, Terms, Pricing (later)

- **Privacy** and **Terms:** Implement as static pages at `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`. Add them to the sitemap script's static list and to Strapi navigation (paths `/privacy`, `/terms`).
- **About** and **Contact:** Already covered above; keep them.
- **Pricing:** Add later if needed (same idea: static page and nav item `/pricing`).
- **Documentation:** If added later, use the same pattern as blog (e.g. `/docs`, `/docs/[slug]`) and add to sitemap.

---

## 10. Order of Work (Suggested)

1. In **ohwise-cms**: set up the CMS (copy heunify-backend/Strapi v5 or use another CMS) and implement the API from **02-BACKEND-BUILD-GUIDE** (at least site-setting, navigation-items, about, contents for blog). Use **local MySQL** for dev; production DB (MySQL on EC2) is already set up.
2. In **ohwise-web-hub**: add Next.js config with `output: 'export'`, copy data layer and Strapi service from heunify-frontend, then layout + home + about + contact.
3. Add blog list and blog post pages; wire navigation and Strapi content type.
4. Add and adapt the sitemap script; run it after `next build` and confirm `out/sitemap.xml` and blog HTML files.
5. Add contact form and newsletter (and optionally comments/OAuth) and test against your Strapi. Ensure `npm run build` completes and produces `out/` — CI/CD will be added by the project owner afterward.

If you hit API mismatches, compare with **02-BACKEND-BUILD-GUIDE** and with `src/services/strapi.tsx` and `src/types/index.tsx` in heunify-frontend (reference only; do not change heunify-frontend).
