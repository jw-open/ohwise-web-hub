import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { GitBranch, ExternalLink, Terminal, Star, Package, Box } from "lucide-react";

const projects = [
  {
    name: "artifact-gateway",
    version: "0.1.0",
    tagline: "Secure API proxy for AI-generated artifact web apps.",
    description:
      "Issue short-lived RBAC-scoped tokens (JWT) to AI-generated artifact web apps running in iframes, then route their API calls through a controlled gateway: external HTTPS APIs, internal OhWise APIs (path + method allowlist), user-isolated DuckDB files, or session-scoped MongoDB collections. Works as a drop-in library for any FastAPI service. Used by ohwise-lab-ctrl (Lab artifacts) and ohwise-backend (Studio artifacts).",
    status: "active",
    language: "Python",
    install: 'pip install "artifact-gateway[all]"',
    github: "https://github.com/jw-open/artifact-gateway",
    pypi: "https://pypi.org/project/artifact-gateway/",
    features: [
      "RBAC-scoped app tokens (JWT, 4 h TTL) with scope_from_role()",
      "External proxy: HTTPS-only, 4 MB cap, scope guard",
      "Internal proxy: path+method allowlist, read/write scope enforcement",
      "User-isolated DuckDB (per-user files) and MongoDB (namespaced collections)",
    ],
    snippet: `from artifact_gateway import issue_app_token, ExternalProxy, InternalProxy

# Issue a token scoped to the user's RBAC role
token = issue_app_token(user_id="u1", session_id="s1", role="member", secret="…")

# In your FastAPI route — proxy an external API call
proxy = ExternalProxy()
result = await proxy.call(token, url="https://api.example.com/data", method="GET")

# Or proxy an internal OhWise API call (allowlist-enforced)
internal = InternalProxy(backend_url="http://ohwise_backend:8000")
result = await internal.call(token, path="/api/agent", method="GET")`,
  },
  {
    name: "ai-relay",
    version: "0.4.33",
    tagline: "WebSocket relay that bridges AI coding agent CLIs to any web interface.",
    description:
      "Run ai-relay as a sidecar next to Claude Code, Codex, Gemini CLI, or Snowflake Cortex. It spawns the CLI as a subprocess, speaks the native stream-json protocol, and streams structured events (reasoning steps, tool calls, file diffs, permission requests, quota warnings) over WebSocket to any frontend in real time. Powers the Lab feature in OhWise.",
    status: "active",
    language: "Python",
    install: "pip install ai-relay",
    github: "https://github.com/jw-open/ai-relay",
    pypi: "https://pypi.org/project/ai-relay/",
    features: [
      "Claude Code, Codex, Gemini CLI, Cortex support",
      "Server mode: ai-relay serve with one connection per agent session",
      "PerTurnRuntime: multi-turn conversations with --resume support",
      "Structured events: reasoning, tool calls, file diffs, quota warnings",
    ],
    snippet: `# Local dev (one-shot)
ai-relay --port 8765

# Container / daemon mode (v0.4.33+)
ai-relay serve --port 9000

# Connect and send handshake:
{"tool": "claude", "folder": "/path/to/project", "model": "claude-sonnet-4-6"}

# Receive structured events:
{"type": "tool_call", "tool": "Edit", "text": "src/app.py"}
{"type": "context_warning", "context_pct": 82, "text": "..."}
{"type": "session_end", "exit_code": 0}`,
  },
  {
    name: "ohwise-mcp",
    version: "0.2.0",
    tagline: "MCP server exposing graph context, knowledge, and agent tools to any LLM.",
    description:
      "An MCP (Model Context Protocol) server that gives Claude Code, Cursor, Windsurf, and any MCP-compatible tool direct access to OhWise knowledge graphs, agent pipelines, code graph tools (codebase2graph), document retrieval (docs2graph), and schema ranking (graph2sql). One pip install, one config block, full graph-native context for your AI coding environment.",
    status: "active",
    language: "Python",
    install: "pip install ohwise-mcp",
    github: "https://github.com/jw-open/ohwise-mcp",
    pypi: "https://pypi.org/project/ohwise-mcp/",
    features: [
      "Knowledge graph CRUD: list, get, query, add/delete nodes and edges",
      "Agent pipeline: list agents, run, poll results",
      "Code context: build graph, rank nodes, trace call path, find impact",
      "Schema ranking via graph2sql for SQL generation context",
    ],
    snippet: `# claude_desktop_config.json (or any MCP client)
{
  "mcpServers": {
    "ohwise": {
      "command": "ohwise-mcp",
      "env": {
        "OHWISE_URL": "https://cloud.ohwise.com",
        "OHWISE_TOKEN": "<your-token>"
      }
    }
  }
}

# Or with all graph extras:
pip install "ohwise-mcp[all]"`,
  },
  {
    name: "graph2sql",
    version: "0.2.0",
    tagline: "Graph-based schema ranking for text-to-SQL. Bring your own LLM.",
    description:
      "Build a schema graph from your database (tables and columns as nodes, relationships as edges), then rank relevant nodes for any natural language question using Personalized PageRank. Feed the ranked subgraph as context to any LLM for accurate SQL generation.",
    status: "active",
    language: "Python",
    install: "pip install graph2sql",
    github: "https://github.com/jw-open/graph2sql",
    pypi: "https://pypi.org/project/graph2sql/",
    features: [
      "No LLM dependency: pure Python + numpy",
      "Personalized PageRank for schema-aware ranking",
      "Alias matching via node attributes",
      "Pip installable, fully typed",
    ],
    snippet: `from graph2sql import SchemaGraph

graph = SchemaGraph()
graph.add_node("orders",    "orders",    content="id, customer_id, total")
graph.add_node("customers", "customers", content="id, name, email")
graph.add_edge("orders", "customers", "belongs_to")

context = graph.rank("total revenue by customer", k=3)
# pass context to your LLM → SQL`,
  },
  {
    name: "docs2graph",
    version: "0.3.2",
    tagline: "Turn documents into knowledge graphs. No LLM required.",
    description:
      "Extract structured knowledge graphs from PDFs, Word docs, Markdown, HTML, CSV, and more. Build entity-relationship graphs for downstream retrieval and question answering, then rank relevant nodes with Personalized PageRank before passing context to your LLM.",
    status: "active",
    language: "Python",
    install: "pip install docs2graph",
    github: "https://github.com/jw-open/doc2graph",
    pypi: "https://pypi.org/project/docs2graph/",
    features: [
      "15+ file formats: PDF, DOCX, HTML, Markdown, CSV, JSON, PPTX",
      "Personalized PageRank for relevance ranking",
      "OCR support for scanned documents and images",
      "No LLM dependency: bring your own model",
    ],
    snippet: `from docs2graph import build_graph

graph = build_graph("report.pdf", graph_type="knowledge")
# graph.nodes — entities, sections, concepts
# graph.edges — relates_to, mentions, cites

# Rank relevant nodes for a query
from docs2graph import rank_nodes
ranked = rank_nodes(graph, "quarterly revenue", k=5)`,
  },
  {
    name: "codebase2graph",
    version: "0.2.0",
    tagline: "Turn a code repository into a queryable knowledge graph.",
    description:
      "Statically extract the full structure of any codebase (files, modules, functions, classes, call graphs, schemas, infrastructure, CI/CD pipelines) as a typed graph of nodes and edges. Rank the most relevant nodes for any query with Personalized PageRank and pass focused context to any LLM.",
    status: "active",
    language: "Python",
    install: "pip install codebase2graph",
    github: "https://github.com/jw-open/code2graph",
    pypi: "https://pypi.org/project/codebase2graph/",
    features: [
      "10 graph types: call, entity, schema, infra, security, web, and more",
      "Python AST + JS/TS call graph extraction",
      "Personalized PageRank for code context retrieval",
      "No LLM dependency: pure Python, standard library only",
    ],
    snippet: `from code2graph import build_graph

graph = build_graph("/path/to/repo", graph_type="all")
# graph.nodes — files, functions, classes, tables, routes
# graph.edges — calls, imports, defines, depends_on

# CLI: extract full graph to JSON
# codebase2graph /repo --graph all --output repo.json`,
  },
];

const OpenSource = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-16">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-6 leading-tight">
                Open Source Libraries
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Standalone Python libraries extracted from the OhWise platform.
                No LLM dependencies. No infra required. Bring your own model.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-12">
              {projects.map((project) => (
                <div
                  key={project.name}
                  className={`rounded-2xl border ${
                    project.status === "coming-soon"
                      ? "border-gray-200 dark:border-gray-700 opacity-70"
                      : "border-indigo-100 dark:border-indigo-900/50"
                  } bg-white dark:bg-gray-800 p-8 shadow-sm`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                        <Package className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h2 className="text-xl font-display font-bold text-gray-900 dark:text-white">
                          {project.name}
                        </h2>
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            project.status === "active"
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                          }`}
                        >
                          {project.status === "active" ? `v${project.version} · active` : "coming soon"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <Star size={14} />
                        GitHub
                        <ExternalLink size={12} />
                      </a>
                      {project.pypi && (
                        <a
                          href={project.pypi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          <Box size={14} />
                          PyPI
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-1 font-medium">
                    {project.tagline}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="text-indigo-500 mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Install + snippet */}
                  {project.install && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 bg-gray-900 dark:bg-gray-950 text-gray-100 rounded-lg px-4 py-2.5 text-sm font-mono">
                        <Terminal size={14} className="text-gray-500 flex-shrink-0" />
                        {project.install}
                      </div>
                      {project.snippet && (
                        <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 rounded-lg p-4 text-xs font-mono overflow-x-auto leading-relaxed">
                          {project.snippet}
                        </pre>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OpenSource;
