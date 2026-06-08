
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What is OhWise?",
    answer: "OhWise is a multi-agent AI platform built on DAG-based orchestration. It ships a planner → executor → evaluator coordinator loop, a browser-based AI coding agent terminal (Lab), Studio for multi-agent coordination with artifact generation, and a graph-native context retrieval layer. The platform runs on FastAPI + MongoDB + Redis and supports Claude, Codex, Gemini CLI, and Snowflake Cortex as agent backends."
  },
  {
    id: 2,
    question: "What is Lab and how does it work?",
    answer: "Lab is OhWise's browser-based terminal for AI coding agents. It connects Claude Code, OpenAI Codex, Gemini CLI, and Snowflake Cortex to a live web interface using the open-source ai-relay package (pip install ai-relay). Every reasoning step, tool call, file diff, quota warning, and context compaction event streams over WebSocket in real time. Lab supports multi-panel split view, voice input via Whisper, MCP server integration per session, and a permission system for tool approval."
  },
  {
    id: 3,
    question: "How does the graph-based context retrieval work?",
    answer: "OhWise uses Personalized PageRank on typed knowledge graphs instead of flat vector similarity search. The open-source packages — graph2sql (schema graphs), docs2graph (document graphs), and codebase2graph (code call/entity graphs) — extract structured graphs from connected data sources. For any query, PageRank traverses the graph starting from query-relevant seed nodes and ranks the most structurally connected nodes as context. This surfaces relationship-aware context that vector retrieval misses — foreign keys, call chains, entity co-occurrences."
  },
  {
    id: 4,
    question: "What open-source packages does OhWise publish?",
    answer: "OhWise maintains 5 active PyPI packages: ai-relay (v0.4.32) — WebSocket relay for AI coding agent CLIs; graph2sql (v0.2.0) — schema graph for text-to-SQL; docs2graph (v0.3.2) — document-to-knowledge-graph extraction; codebase2graph (v0.1.0) — code repository knowledge graph; ohwise-mcp (v0.2.0) — MCP server exposing graph context and agent tools to Claude Code, Cursor, Windsurf, and any MCP client. All packages are pure Python with no LLM dependency — model-agnostic by design."
  },
  {
    id: 5,
    question: "What AI models and agents are supported?",
    answer: "OhWise is model-agnostic and supports 20+ AI vendors. Lab integrates AI coding agent CLIs including Claude Code (Anthropic), Codex CLI (OpenAI), Gemini CLI (Google), and Snowflake Cortex. The DAG orchestration layer works with any API-compatible LLM endpoint: Anthropic, OpenAI, Google, Mistral, Cohere, Meta Llama via Groq or Ollama, AWS Bedrock, Azure OpenAI, DeepSeek, xAI, Perplexity, and more. Different nodes in the same pipeline can use different models and vendors."
  },
  {
    id: 6,
    question: "How does the multi-agent coordinator loop work?",
    answer: "OhWise's Studio runs a planner → executor → evaluator loop. The Planner decomposes a task into a subtask DAG. Each Executor node runs its task — calling LLMs, tools, or Lambda functions — and emits typed output. The Evaluator scores the output, deciding whether to pass, retry, or escalate. When the full DAG completes, a synthesis step produces the final artifact. Every step is logged with inputs, outputs, token usage, and latency. Human-in-the-loop intervention can pause, redirect, or approve agent decisions at any node."
  },
  {
    id: 7,
    question: "What is the tech stack?",
    answer: "Backend: FastAPI (async Python), MongoDB (document store), Redis (pub/sub + caching), Docker Compose, Nginx. Frontend: Next.js 14 + TypeScript + SCSS. Infrastructure: bare-metal Ubuntu 22.04, systemd, Docker. The WebSocket layer uses Redis pub/sub to fan out agent events to connected clients in real time. All services are containerized and orchestrated via Docker Compose with Nginx for TLS termination and routing."
  },
  {
    id: 8,
    question: "Can I self-host OhWise?",
    answer: "Yes. OhWise is designed for self-hosting on bare-metal or cloud VMs. The full stack runs via Docker Compose. MongoDB and Redis are shared infrastructure. Only outbound traffic is to the chosen LLM endpoints — no agent reasoning or data leaves the deployment infrastructure. The open-source PyPI packages (graph2sql, docs2graph, codebase2graph, ai-relay, ohwise-mcp) can also be used standalone without the OhWise platform."
  },
  {
    id: 9,
    question: "How does OhWise handle multi-tenancy and tenant isolation?",
    answer: "Every enterprise account maps to an organization (org) in OhWise. All data — sessions, missions, agents, knowledge graphs, artifacts, audit logs — is scoped to an org_id at the MongoDB document level. There is no cross-tenant data access by design: queries are always filtered by org_id, and namespacing is enforced at the API and database layers. Each user within an org gets isolated workspaces: their Lab sessions, Studio agents, and file diffs are private to them unless explicitly shared. Studio coordinator agents are scoped to a group_id, which maps to an org or team within an org. Switching between sessions or users never bleeds state."
  },
  {
    id: 10,
    question: "What does the role-based access control (RBAC) system cover?",
    answer: "OhWise supports three built-in roles per organization: Admin, Member, and Viewer. Admins can manage users, set org-wide agent quotas, approve or deny tool calls platform-wide, rotate API keys, and view full audit logs. Members can create and run Lab sessions and Studio workflows within their workspace. Viewers have read-only access to artifacts and session logs. In addition to org-level roles, a granular permission system lets admins require human-in-the-loop approval for specific tool categories (e.g., file writes, shell commands, external API calls) — either org-wide or on a per-session basis. API keys are scoped per org and can be revoked individually without affecting other keys."
  },
  {
    id: 11,
    question: "What security and compliance features are available for enterprise deployments?",
    answer: "OhWise is built with enterprise security as a first-class concern: JWT-based authentication per user with short-lived tokens; API keys scoped to an org and individually revocable; full audit logs capturing every agent action, tool call, file diff, and approval decision with user ID and timestamp; SSO/OAuth2 support (OAuth2 flows already implemented for Claude and Gemini); isolated Docker containers per user session for workspace data residency; and no cross-tenant data paths at the database layer (org_id scoping on every query). For self-hosted deployments, all LLM traffic stays within the deployment infrastructure — agent reasoning and file contents never leave the network perimeter. Multi-region deployment is supported via stateless FastAPI workers and Redis pub/sub for event fanout."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(id)
        ? prevOpenItems.filter(itemId => itemId !== id)
        : [...prevOpenItems, id]
    );
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Technical answers for engineers evaluating the platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="mb-4 border-b border-gray-200 dark:border-gray-700 pb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.includes(item.id)}
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {item.question}
                </h3>
                <span className="flex-shrink-0 ml-2">
                  {openItems.includes(item.id) ? (
                    <Minus size={20} className="text-blue-600" />
                  ) : (
                    <Plus size={20} className="text-blue-600" />
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(item.id)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="py-4 text-gray-600 dark:text-gray-400">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
