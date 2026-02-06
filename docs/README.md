# Documentation — Ohwise Web Hub & CMS

This folder contains the handover and implementation docs. **Your work is in two GitHub repos:** **ohwise-cms** (backend) and **ohwise-web-hub** (frontend). You have read-only access to **heunify-frontend** and **heunify-backend** as references.

**Repos:**

| Repo | URL | Role |
|------|-----|------|
| ohwise-cms (backend) | https://github.com/jw-open/ohwise-cms | **Work here.** Build the CMS (copy heunify-backend/Strapi v5 or use another CMS). |
| ohwise-web-hub (frontend) | https://github.com/jw-open/ohwise-web-hub | **Work here.** Build the site; copy static HTML/sitemap patterns from heunify-frontend. |
| heunify-frontend | https://github.com/jw-open/heunify-frontend | Reference only. Copy features (e.g. static HTML, sitemaps). |
| heunify-backend | https://github.com/jw-open/heunify-backend | Reference only. **Strapi v5** — copy to ohwise-cms or use another CMS. |

**Deploy:** The project owner will add GitHub Actions to deploy ohwise-cms and ohwise-web-hub; you focus on implementation.

**Start here:** Read the documents in order.

| # | Document | Purpose |
|---|----------|---------|
| 1 | [01-PROJECT-HANDOVER.md](01-PROJECT-HANDOVER.md) | Project context, architecture, the 4 repos, local setup, and where to find things in the reference frontend. |
| 2 | [02-BACKEND-BUILD-GUIDE.md](02-BACKEND-BUILD-GUIDE.md) | Full API contract and how to build the CMS in ohwise-cms (content types, endpoints, permissions). |
| 3 | [03-FRONTEND-IMPLEMENTATION-GUIDE.md](03-FRONTEND-IMPLEMENTATION-GUIDE.md) | Step-by-step: build the site in ohwise-web-hub (blog first, sitemap). Includes **design direction**: simple, official, industrial, Apple-style. |

**Scope:** Blog only at `/blog` and `/blog/[slug]` (single level; no thoughts/product/content-by-type). Include About, Contact, Privacy, Terms. Strapi backend: **strapi.ohwise.com**. Pricing and documentation can be added later. **Database:** Production **MySQL** is on AWS EC2 (already set up); use local MySQL for dev. **CI/CD:** Will be set up by the project owner after the backend and frontend backbone are done. Schema in doc 02 is **suggested** — add/remove/rename fields as you see fit; keep the API contract.

**Tips:** Use Cursor, Claude Code, or any AI coding tools as you like. Focus on **maintainability and reusability** — clear structure, no unnecessary duplication, and avoid code that will be hard to maintain later (see doc 01, “Tips: AI tools and code quality”).
