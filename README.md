# ohwise-web-hub

Official website for [OhWise](https://ohwise.com) — the multi-agent AI platform.

Landing page, product page, open-source showcase, documentation, and blog.

**Stack:** Vite · React · TypeScript · Tailwind CSS · shadcn/ui

---

## What OhWise is

OhWise is a multi-agent AI platform providing DAG-based orchestration, AI coding agent Lab, Studio coordinator pipelines, graph-native context retrieval, and enterprise multi-tenancy.

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

Rebuilt and deployed via Docker from `local-container-orchestration`. **Always rebuild — `restart` reuses the old image.**

```bash
cd local-container-orchestration
docker compose build ohwise-hub
docker compose up -d ohwise-hub
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page — hero, use cases, features, CTA |
| `/product` | Product detail — DAG architecture, Lab, Studio, Enterprise, Infrastructure |
| `/open-source` | Open-source packages showcase (ai-relay first, then ohwise-mcp, graph2sql, docs2graph, codebase2graph) |
| `/documentation` | Docs (with nested `/documentation/:id`) |
| `/blog` | Blog (with `/blog/:id`, `/blog/post/:id`) |
| `/about` | About |
| `/contact` | Contact |
| `/security` | Security policy |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

---

## Theme system

Uses Tailwind's `class` dark mode strategy (`darkMode: ["class"]`). Light/dark toggled by adding/removing the `dark` class on `<html>`.

**Rule:** Every section must use `dark:` variants for dark overrides. Never hardcode dark colors (e.g., `bg-gray-950`) without a light-mode equivalent.

Pattern:
```tsx
// Section background
className="bg-white dark:bg-gray-900"

// Text
className="text-gray-900 dark:text-white"

// Borders / subtle fills
className="border-gray-200 dark:border-white/10"
```

---

## Project structure

```
src/
├── pages/               # Route-level components
│   ├── Index.tsx        # Landing page
│   ├── Product.tsx      # Product detail (hero + DAG + Lab + Studio + Enterprise + Infra + CTA)
│   ├── OpenSource.tsx   # Open-source packages (projects array — order matters)
│   └── ...
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Logo.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── UseCases.tsx
│   │   ├── Features.tsx
│   │   ├── FAQ.tsx
│   │   ├── Infrastructure.tsx   # Deploy targets + design principles
│   │   └── CTASection.tsx
│   └── ui/              # shadcn/ui primitives
├── App.tsx              # Routes
└── main.tsx
```

---

## Open-source page order

The `projects` array in `OpenSource.tsx` determines display order:
1. `ai-relay` — WebSocket relay for AI coding agent CLIs
2. `ohwise-mcp` — MCP server for graph tools + Studio pipelines
3. `graph2sql` — schema graph + PPR for text-to-SQL
4. `docs2graph` — document knowledge graph extraction
5. `codebase2graph` — code repository knowledge graph extraction

---

## Related repos

| Repo | Description |
|---|---|
| [ohwise_frontend](https://github.com/jw-open) | Next.js app frontend — Lab, Studio, knowledge management |
| [ai-relay](https://github.com/jw-open/ai-relay) | AI coding agent CLI relay — powers Lab |
| [ohwise-mcp](https://github.com/jw-open/ohwise-mcp) | MCP server — graph tools + Studio pipelines |
| [graph2sql](https://github.com/jw-open/graph2sql) | Open source — schema graph + PPR for text-to-SQL |
| [doc2graph](https://github.com/jw-open/doc2graph) | Open source — knowledge graph from documents |
| [code2graph](https://github.com/jw-open/code2graph) | Open source — knowledge graph from code |
