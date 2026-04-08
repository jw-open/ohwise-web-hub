# ohwise-web-hub

Official website for [OhWise](https://ohwise.com) — landing page, docs, and open-source showcase.

**Stack:** Vite + React + TypeScript + Tailwind CSS + shadcn/ui

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

Deployed via Docker through `local-container-orchestration`:

```bash
cd /path/to/local-container-orchestration
docker compose up -d ohwise-hub
```

The container builds from source — no remote image needed.

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page |
| `/open-source` | graph2sql + doc2graph showcase |

---

## Project structure

```
src/
├── pages/          # Route-level components (Home, OpenSource, ...)
├── components/
│   ├── layout/     # Navbar, Footer
│   └── ui/         # shadcn/ui primitives
├── App.tsx         # Routes
└── main.tsx        # Entry point
```
