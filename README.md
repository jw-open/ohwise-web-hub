# ohwise-web-hub

Official website for [OhWise](https://ohwise.com) — the multi-agent AI platform.

Landing page, documentation, blog, and open-source showcase.

**Stack:** Vite · React · TypeScript · Tailwind CSS · shadcn/ui

---

## What OhWise is

OhWise coordinates specialized AI agents across your data, documents, and workflows. Instead of stitching together a dozen tools, you ask a question and agents handle the analysis — in parallel, across your databases and knowledge bases.

**Use cases featured on the landing page:**
- Sales Copilot — churn risk, renewal prioritization
- Marketing Copilot — segmentation, lead scoring, campaign automation
- Customer Support — ticket resolution from knowledge base
- Healthcare & Insurance — claims intake and policy validation
- Research — knowledge graph synthesis across papers and reports

---

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Rebuilt and deployed via Docker from `local-container-orchestration`:

```bash
cd local-container-orchestration
docker compose up -d --build ohwise-hub
```

No remote image — container builds from local source on every deploy.

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page — hero, use cases, features, CTA |
| `/product` | Product detail |
| `/documentation` | Docs (with nested `/documentation/:id`) |
| `/blog` | Blog (with nested `/blog/:id`, `/blog/post/:id`) |
| `/open-source` | graph2sql + doc2graph showcase |
| `/about` | About |
| `/contact` | Contact |
| `/security` | Security policy |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

---

## Project structure

```
src/
├── pages/               # Route-level components
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx   # Navigation + unified logo
│   │   ├── Footer.tsx
│   │   └── Logo.tsx     # SVG logo — matches favicon exactly
│   ├── sections/        # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── UseCases.tsx # Interactive industry tabs
│   │   ├── Features.tsx
│   │   ├── FAQ.tsx
│   │   └── CTASection.tsx
│   └── ui/              # shadcn/ui primitives
├── App.tsx              # Routes
└── main.tsx             # Entry point
```

---

## Related repos

| Repo | Description |
|---|---|
| [ohwise_backend](https://github.com/jw-open) | FastAPI backend — DAG execution, multi-agent orchestration |
| [graph2sql](https://github.com/jw-open/graph2sql) | Open source — schema graph + PPR for text-to-SQL |
| [doc2graph](https://github.com/jw-open/doc2graph) | Open source — knowledge graph extraction from documents |
