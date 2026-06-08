import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTASection from "../components/sections/CTASection";
import { ChevronRight, FileText, Book, Lightbulb, Code, ExternalLink, ArrowLeft, Terminal, Network, Layers, GitBranch, Package } from "lucide-react";

const Documentation = () => {
  const categories = [
    {
      title: "Getting Started",
      icon: <Book className="text-blue-600" size={24} />,
      articles: [
        { title: "Introduction to OhWise", slug: "introduction" },
        { title: "Quick Start Guide", slug: "quick-start" },
        { title: "Core Concepts: DAGs, Agents, Lambdas", slug: "core-concepts" },
        { title: "System Requirements", slug: "system-requirements" },
      ]
    },
    {
      title: "Lab & AI Coding Agents",
      icon: <Terminal className="text-emerald-600" size={24} />,
      articles: [
        { title: "Lab — AI Coding Agent Integration", slug: "lab-overview" },
        { title: "ai-relay: WebSocket Relay Protocol", slug: "ai-relay-protocol" },
        { title: "Connecting Claude Code to Lab", slug: "lab-claude-code" },
        { title: "OAuth Authentication in Lab", slug: "lab-oauth" },
      ]
    },
    {
      title: "Studio & Multi-agent",
      icon: <Layers className="text-purple-600" size={24} />,
      articles: [
        { title: "Studio Overview", slug: "studio-overview" },
        { title: "Coordinator Loop: Planner → Executor → Evaluator", slug: "coordinator-loop" },
        { title: "Artifact Panel and [ARTIFACT] Syntax", slug: "artifact-panel" },
        { title: "Human-in-the-Loop Intervention", slug: "human-intervention" },
      ]
    },
    {
      title: "Graph Packages (OSS)",
      icon: <Network className="text-sky-600" size={24} />,
      articles: [
        { title: "graph2sql — Schema Graph for Text-to-SQL", slug: "graph2sql" },
        { title: "docs2graph — Document Knowledge Graphs", slug: "docs2graph" },
        { title: "codebase2graph — Code Repository Graphs", slug: "codebase2graph" },
        { title: "ohwise-mcp — MCP Server", slug: "ohwise-mcp" },
      ]
    },
    {
      title: "DAG Orchestration",
      icon: <GitBranch className="text-indigo-600" size={24} />,
      articles: [
        { title: "Defining Pipelines as DAGs", slug: "dag-pipelines" },
        { title: "Lambda Dispatch and Stateless Execution", slug: "lambda-dispatch" },
        { title: "State Propagation and Typed Contracts", slug: "state-propagation" },
        { title: "Observability: Traces, Token Usage, Latency", slug: "observability" },
      ]
    },
    {
      title: "API Reference",
      icon: <Code className="text-blue-600" size={24} />,
      articles: [
        { title: "Authentication", slug: "api-auth" },
        { title: "WebSocket Event Types", slug: "ws-events" },
        { title: "REST Endpoints", slug: "endpoints" },
        { title: "Rate Limits and Error Handling", slug: "errors" },
      ]
    },
  ];

  const articles: Record<string, React.ReactNode> = {
    "introduction": (
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <h1>Introduction to OhWise</h1>
        <p>
          <strong>OhWise</strong> is a multi-agent AI platform built around three core capabilities:
        </p>
        <ol>
          <li><strong>DAG-based orchestration</strong> — AI workflows modeled as directed acyclic graphs, with a planner → executor → evaluator coordinator loop, typed state propagation, and per-node observability.</li>
          <li><strong>Graph-native context retrieval</strong> — Code, schemas, and documents converted to knowledge graphs. Personalized PageRank surfaces structurally relevant context instead of flat vector similarity.</li>
          <li><strong>Lab and Studio interfaces</strong> — Lab provides a browser-based terminal for AI coding agents (Claude Code, Codex, Gemini CLI, Cortex). Studio orchestrates multi-agent collaboration with artifact generation and human-in-the-loop intervention.</li>
        </ol>
        <h2>Key components</h2>
        <ul>
          <li><strong>Backend</strong>: FastAPI + MongoDB + Redis (pub/sub + caching) + Docker</li>
          <li><strong>Frontend</strong>: Next.js 14 + TypeScript + WebSocket client</li>
          <li><strong>ai-relay</strong>: Open-source Python package (v0.4.32) that bridges AI coding agent CLIs to WebSocket frontends</li>
          <li><strong>graph2sql / docs2graph / codebase2graph</strong>: Pure-Python graph packages for schema, document, and code context retrieval</li>
          <li><strong>ohwise-mcp</strong>: MCP server exposing OhWise graph tools to Claude Code, Cursor, and any MCP client</li>
        </ul>
        <h2>Architecture overview</h2>
        <p>
          The OhWise backend exposes a FastAPI REST API and WebSocket endpoints. Redis pub/sub fans out real-time agent events to connected clients. MongoDB stores agents, sessions, DAG definitions, and artifact outputs. All agent execution — whether Lab sessions or Studio coordinator loops — produces structured JSON events that stream over WebSocket in real time.
        </p>
      </div>
    ),
    "core-concepts": (
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <h1>Core Concepts: DAGs, Agents, Lambdas</h1>
        <h2>DAG (Directed Acyclic Graph)</h2>
        <p>
          An OhWise pipeline is a DAG where each node represents a unit of work — an agent call, a Lambda function, a tool invocation, or a sub-pipeline. Edges define execution dependencies. Nodes with no unresolved dependencies execute in parallel.
        </p>
        <p>
          Each node has a typed input/output contract. The platform validates types at node boundaries, making pipelines debuggable: when a node fails, you know exactly what input it received.
        </p>
        <h2>Agents</h2>
        <p>
          Agents are LLM-backed nodes in a DAG. They receive context — from the DAG state, from knowledge graphs, from tool outputs — and produce structured output. OhWise is model-agnostic: agents can use Claude, GPT-4, Llama, Mistral, or any API-compatible model. Different nodes in the same pipeline can use different models.
        </p>
        <h2>Lambda functions</h2>
        <p>
          Lambdas are stateless function nodes — Python functions dispatched to AI agents for execution without maintaining session state. Lambda dispatch is the lightweight path for single-turn tasks that don't need a full agent session.
        </p>
        <h2>The coordinator loop</h2>
        <p>
          Studio's multi-agent coordinator runs a structured loop:
        </p>
        <ol>
          <li><strong>Planner</strong> — receives the user request and decomposes it into a subtask DAG</li>
          <li><strong>Executor</strong> — runs each subtask node, calling LLMs, tools, or Lambda functions</li>
          <li><strong>Evaluator</strong> — scores executor output; decides pass, retry, or escalate</li>
          <li><strong>Synthesizer</strong> — on pass, combines executor outputs into a final artifact</li>
        </ol>
        <p>Human-in-the-loop intervention can pause the loop at any node for review or redirection.</p>
      </div>
    ),
    "lab-overview": (
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <h1>Lab — AI Coding Agent Integration</h1>
        <p>
          <strong>Lab</strong> is OhWise's built-in terminal for running AI coding agent CLIs (Claude Code, Codex, Gemini CLI, Snowflake Cortex) directly from your browser. Sessions run on OhWise servers inside an isolated per-user workspace.
        </p>
        <h2>How It Works</h2>
        <ol>
          <li>Navigate to <strong>/lab</strong> in the OhWise app.</li>
          <li>Click <strong>+</strong> to create a new session — choose a name and agent (Claude Code, Codex, Gemini CLI, or Cortex).</li>
          <li>Click <strong>Connect</strong>. The server spawns the CLI via the <code>ai-relay</code> relay process in your isolated workspace.</li>
          <li>If it's your first time, an OAuth link appears in the stream — click it, authenticate, paste the code back.</li>
          <li>Start typing prompts. Use <code>/compact</code> or <code>/clear</code> buttons to manage context.</li>
        </ol>
        <h2>Features</h2>
        <ul>
          <li><strong>Real-time streaming</strong> — reasoning steps, tool calls, file diffs, quota warnings, context compaction events</li>
          <li><strong>File diff viewer</strong> — inline before/after display for every file edit</li>
          <li><strong>Permission system</strong> — allow / deny / allow-for-session for each tool invocation</li>
          <li><strong>Multi-panel split view</strong> — compare two agent sessions side by side</li>
          <li><strong>Voice input</strong> — Whisper-backed speech-to-text</li>
          <li><strong>TTS output</strong> — text-to-speech for agent responses</li>
          <li><strong>MCP server integration</strong> — attach an MCP server per session for graph context tools</li>
          <li><strong>Context management</strong> — streaming text coalescing, context compaction warnings at configurable thresholds</li>
          <li><strong>Model switching</strong> — change model mid-session with <code>/model sonnet</code></li>
        </ul>
        <h2>Security Model</h2>
        <ul>
          <li>JWT authentication required for every WebSocket connection</li>
          <li>Each user gets an isolated workspace at <code>/var/ohwise-lab-workspaces/&#123;user_id&#125;/</code></li>
          <li>CLIs run as a non-root <code>labuser</code> — no root access to the host</li>
          <li>Only whitelisted tools (claude, codex, gemini, cortex) can be spawned</li>
        </ul>
        <h2>Supported Agents</h2>
        <ul>
          <li><strong>Claude Code</strong> — Anthropic's AI coding assistant</li>
          <li><strong>Codex CLI</strong> — OpenAI's coding CLI</li>
          <li><strong>Gemini CLI</strong> — Google's Gemini coding assistant</li>
          <li><strong>Snowflake Cortex</strong> — enterprise LLM CLI</li>
        </ul>
      </div>
    ),
    "ai-relay-protocol": (
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <h1>ai-relay: WebSocket Relay Protocol</h1>
        <p>
          <a href="https://pypi.org/project/ai-relay/" target="_blank" rel="noopener noreferrer"><strong>ai-relay</strong></a> (v0.4.32) is an open-source Python package that bridges AI coding agent CLIs to any WebSocket-capable frontend. It spawns the CLI as a subprocess, speaks the native stream-json protocol, and emits structured events over WebSocket.
        </p>
        <h2>Install</h2>
        <pre><code>pip install ai-relay</code></pre>
        <h2>Start the relay</h2>
        <pre><code>{`# One-shot mode
ai-relay --port 8765

# Server / daemon mode (v0.4.32+)
ai-relay serve --port 9000`}</code></pre>
        <h2>Handshake</h2>
        <p>After connecting, send a JSON handshake:</p>
        <pre><code>{`{"tool": "claude", "folder": "/path/to/project", "model": "claude-sonnet-4-6"}`}</code></pre>
        <h2>Event Types</h2>
        <p>All events are JSON objects with <code>type</code>, <code>ts</code>, and <code>session_id</code> fields.</p>
        <table>
          <thead><tr><th>type</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>session_start</code></td><td>CLI process spawned</td></tr>
            <tr><td><code>session_end</code></td><td>Process exited, includes <code>exit_code</code></td></tr>
            <tr><td><code>stdout</code></td><td>Raw terminal output line</td></tr>
            <tr><td><code>tool_call</code></td><td>Tool invocation detected (Edit, Read, Bash, etc.)</td></tr>
            <tr><td><code>reasoning</code></td><td>Agent thinking / planning output</td></tr>
            <tr><td><code>url</code></td><td>URL detected (e.g. OAuth link)</td></tr>
            <tr><td><code>quota_warning</code></td><td>Rate limit / quota error</td></tr>
            <tr><td><code>context_warning</code></td><td>Context window fill percentage</td></tr>
            <tr><td><code>context_compacted</code></td><td>Context was compacted</td></tr>
            <tr><td><code>error</code></td><td>Fatal error line</td></tr>
            <tr><td><code>input_ack</code></td><td>Echoes user input back</td></tr>
          </tbody>
        </table>
        <h2>Send input</h2>
        <pre><code>{`// Send a prompt
{"text": "refactor this function to use async/await"}

// Send CLI commands
{"text": "/compact"}
{"text": "/clear"}
{"text": "/model sonnet"}`}</code></pre>
        <p>GitHub: <a href="https://github.com/jw-open/ai-relay" target="_blank" rel="noopener noreferrer">github.com/jw-open/ai-relay</a></p>
      </div>
    ),
    "lab-claude-code": (
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <h1>Connecting Claude Code to Lab</h1>
        <h2>On OhWise Cloud</h2>
        <p>Claude Code is pre-installed on the OhWise server. Just select <strong>Claude Code</strong> when creating a session — no setup needed.</p>
        <h2>First Connection</h2>
        <ol>
          <li>Create a session with Tool = <strong>Claude Code</strong>.</li>
          <li>Click <strong>Connect</strong>.</li>
          <li>Claude Code starts — the startup screen appears in the stream.</li>
          <li>The theme wizard is auto-confirmed (dark mode selected).</li>
          <li>An OAuth link appears — see <em>OAuth Authentication in Lab</em>.</li>
        </ol>
        <h2>Subsequent Sessions</h2>
        <p>After the first OAuth login, credentials are saved in your workspace (<code>.claude/</code> directory). Subsequent sessions start immediately without re-authentication.</p>
        <h2>Model Switching</h2>
        <p>Change the model mid-session by typing <code>/model sonnet</code> or <code>/model opus</code> in the Lab input. The model change takes effect on the next turn.</p>
        <h2>Context Management</h2>
        <p>When the context window approaches capacity, Lab shows a warning with the current fill percentage. Use <code>/compact</code> to compress the context or <code>/clear</code> to start fresh.</p>
        <h2>MCP Integration</h2>
        <p>Attach an MCP server to your Lab session via the session settings panel. With <code>ohwise-mcp</code> installed, you get direct access to OhWise knowledge graphs, agent pipelines, and code context tools from within the Claude Code session.</p>
      </div>
    ),
    "lab-oauth": (
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <h1>OAuth Authentication in Lab</h1>
        <p>
          Lab uses your existing Claude Pro/Max subscription via browser OAuth — no API key or per-token cost needed.
        </p>
        <h2>First-Time Auth Flow</h2>
        <ol>
          <li>Connect a Claude Code session in Lab.</li>
          <li>Claude Code outputs an authentication URL — it appears as a <strong>clickable blue link</strong> in the stream.</li>
          <li>Click the link — your browser opens <code>claude.ai</code>.</li>
          <li>Log in with your Anthropic account.</li>
          <li>Copy the authorization code shown on the page.</li>
          <li>Paste the code into the Lab input field → click <strong>Send</strong>.</li>
          <li>Claude Code saves the credentials and starts responding.</li>
        </ol>
        <h2>Credential Persistence</h2>
        <p>
          Credentials are stored in your isolated workspace (<code>/var/ohwise-lab-workspaces/&#123;user_id&#125;/.claude/</code>) on a Docker named volume. They persist across container restarts — you only authenticate once.
        </p>
      </div>
    ),
    "studio-overview": (
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <h1>Studio Overview</h1>
        <p>
          <strong>Studio</strong> is OhWise's multi-agent coordination environment. It runs the planner → executor → evaluator coordinator loop inside a structured UI with a split Chat/Artifact panel layout.
        </p>
        <h2>Key Concepts</h2>
        <ul>
          <li><strong>Group session</strong> — a Studio session is scoped to a <code>group_id</code>, isolating all agents, state, and artifacts for that session</li>
          <li><strong>Coordinator loop</strong> — the platform runs planner, executor, and evaluator agents in sequence, with typed state passed between nodes</li>
          <li><strong>Artifact panel</strong> — only content marked with <code>[ARTIFACT]</code> (the executor's final synthesis) appears here; planner/evaluator reasoning goes to the Chat log</li>
          <li><strong>Human intervention</strong> — pause the loop at any node, redirect the task, or approve/reject agent decisions</li>
        </ul>
        <h2>UI Layout</h2>
        <ul>
          <li><strong>Chat tab</strong> — real-time stream of all agent communications, reasoning traces, and coordinator messages</li>
          <li><strong>Artifact tab</strong> — rendered output of the current artifact (HTML, Markdown, code)</li>
          <li><strong>Session panel</strong> — list of active sessions with status indicators</li>
        </ul>
        <h2>Supported Artifact Types</h2>
        <ul>
          <li>HTML — rendered in an iframe with live preview</li>
          <li>Markdown — rendered with full syntax support</li>
          <li>Code — syntax-highlighted with language detection</li>
          <li>JSON — formatted with collapsible tree view</li>
        </ul>
        <h2>Lab → Studio Event Forwarding</h2>
        <p>
          Lab sessions can forward events into a Studio session. This means a Claude Code session running in Lab can contribute artifacts and tool call outputs to an active Studio coordinator loop — combining interactive coding agent sessions with structured multi-agent coordination.
        </p>
      </div>
    ),
    "coordinator-loop": (
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <h1>Coordinator Loop: Planner → Executor → Evaluator</h1>
        <p>
          The Studio coordinator loop is the execution model for multi-agent tasks. It runs as a DAG with three main agent roles and a synthesis step.
        </p>
        <h2>Planner</h2>
        <p>
          Receives the user request and decomposes it into a subtask DAG. Each subtask is a node with a defined scope, input context, and expected output type. The planner's output is a structured plan — not free text — that the executor can traverse deterministically.
        </p>
        <h2>Executor</h2>
        <p>
          Runs each subtask node from the planner's DAG. Subtasks may call LLMs, invoke tools, query knowledge graphs, call Lambda functions, or fan out to additional agent nodes. The executor emits typed output per node, logged to the Chat stream. The final synthesis step combines all executor outputs and marks the result with <code>[ARTIFACT]</code>.
        </p>
        <h2>Evaluator</h2>
        <p>
          Scores the executor's output against the planner's success criteria. Returns a score (0–1) and a pass/retry/escalate decision. On pass, the artifact is committed. On retry, the executor re-runs with evaluator feedback. On escalate, the loop pauses for human intervention.
        </p>
        <h2>State machine</h2>
        <p>
          The coordinator loop is implemented as a state machine. Long-running tasks — those spanning multiple turns, waiting for external events, or requiring human approval — serialize their state to MongoDB when suspended and resume exactly where they left off when triggered.
        </p>
        <pre><code>{`// Example coordinator state transitions
PLANNING → EXECUTING → EVALUATING → DONE
                ↓              ↓
             RETRY          ESCALATE → HUMAN_REVIEW → EXECUTING`}</code></pre>
      </div>
    ),
    "artifact-panel": (
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <h1>Artifact Panel and [ARTIFACT] Syntax</h1>
        <p>
          Studio separates agent communication from final output. The Chat tab shows all agent reasoning, planner output, evaluator scores, and coordinator messages. The Artifact tab shows only the final synthesized result.
        </p>
        <h2>The [ARTIFACT] marker</h2>
        <p>
          When the executor's synthesis step produces its final output, it wraps the content in an <code>[ARTIFACT]</code> block:
        </p>
        <pre><code>{`[ARTIFACT]
# Executive Summary

Based on the analysis of 847 data points...

## Key Findings
1. Revenue growth of 23% QoQ in the mid-market segment
2. Highest churn rate in the enterprise tier (4.2%)
[/ARTIFACT]`}</code></pre>
        <p>
          Only this content appears in the Artifact panel. Planner reasoning, evaluator scores, and intermediate executor steps are logged to Chat only — keeping the artifact panel clean and focused on the deliverable.
        </p>
        <h2>Artifact rendering</h2>
        <p>
          The platform auto-detects the artifact type from the content: HTML is rendered in a sandboxed iframe, Markdown is rendered with a full parser, code blocks are syntax-highlighted. The artifact is persisted to MongoDB and accessible after the session ends.
        </p>
      </div>
    ),
    "graph2sql": (
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <h1>graph2sql — Schema Graph for Text-to-SQL</h1>
        <p>
          <a href="https://pypi.org/project/graph2sql/" target="_blank" rel="noopener noreferrer"><strong>graph2sql</strong></a> (v0.2.0) builds a typed graph from your database schema — tables and columns as nodes, foreign keys and relationships as edges — and uses Personalized PageRank to rank the most relevant nodes for any natural language query.
        </p>
        <h2>Install</h2>
        <pre><code>pip install graph2sql</code></pre>
        <h2>Why graphs instead of embeddings?</h2>
        <p>
          Vector similarity retrieves semantically close table names but misses structural relationships. If a query asks about "total revenue by customer", the relevant tables are <code>orders</code>, <code>customers</code>, and <code>payments</code> — connected by foreign keys, not just semantically similar. PageRank traverses these connections, surfacing the right subgraph every time.
        </p>
        <h2>Usage</h2>
        <pre><code>{`from graph2sql import SchemaGraph

graph = SchemaGraph()
graph.add_node("orders",    "orders",    content="id, customer_id, total, date")
graph.add_node("customers", "customers", content="id, name, email, region")
graph.add_node("payments",  "payments",  content="id, order_id, amount, status")
graph.add_edge("orders", "customers", "belongs_to")
graph.add_edge("payments", "orders",  "for")

# Rank relevant nodes for a query
context = graph.rank("total revenue by customer last 30 days", k=3)
# → [orders, customers, payments] as structured context

# Pass to your LLM → SQL
sql = your_llm(f"Generate SQL given schema: {context}")`}</code></pre>
        <h2>Key features</h2>
        <ul>
          <li>No LLM dependency — pure Python + numpy</li>
          <li>Personalized PageRank seeded from query-matched nodes</li>
          <li>Alias matching via node attributes (handles column abbreviations)</li>
          <li>Fully typed, pip installable</li>
          <li>Works with any LLM — bring your own model</li>
        </ul>
        <p>GitHub: <a href="https://github.com/jw-open/graph2sql" target="_blank" rel="noopener noreferrer">github.com/jw-open/graph2sql</a></p>
      </div>
    ),
    "docs2graph": (
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <h1>docs2graph — Document Knowledge Graphs</h1>
        <p>
          <a href="https://pypi.org/project/docs2graph/" target="_blank" rel="noopener noreferrer"><strong>docs2graph</strong></a> (v0.3.2) extracts structured knowledge graphs from documents. Feed it PDFs, Word docs, Markdown, HTML, CSV, and 10+ other formats — get back a typed graph of entities, sections, and relationships.
        </p>
        <h2>Install</h2>
        <pre><code>pip install docs2graph</code></pre>
        <h2>Usage</h2>
        <pre><code>{`from docs2graph import build_graph, rank_nodes

graph = build_graph("annual_report.pdf", graph_type="knowledge")
# graph.nodes — entities, sections, concepts, tables
# graph.edges — relates_to, mentions, cites, contains

# Rank relevant nodes for a query
ranked = rank_nodes(graph, "quarterly revenue growth", k=5)
# Pass ranked context to your LLM for accurate answers`}</code></pre>
        <h2>Supported formats</h2>
        <p>PDF, DOCX, XLSX, PPTX, HTML, Markdown, CSV, JSON, XML, EPUB, RTF, TXT, images (with OCR)</p>
        <h2>Key features</h2>
        <ul>
          <li>15+ file formats including OCR for scanned documents</li>
          <li>Personalized PageRank for relevance ranking</li>
          <li>No LLM dependency — pure Python extraction</li>
          <li>Entity-relationship graph with typed edges</li>
        </ul>
        <p>GitHub: <a href="https://github.com/jw-open/doc2graph" target="_blank" rel="noopener noreferrer">github.com/jw-open/doc2graph</a></p>
      </div>
    ),
    "codebase2graph": (
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <h1>codebase2graph — Code Repository Graphs</h1>
        <p>
          <a href="https://pypi.org/project/codebase2graph/" target="_blank" rel="noopener noreferrer"><strong>codebase2graph</strong></a> (v0.1.0) statically extracts the full structure of any codebase as a typed graph — files, modules, functions, classes, call chains, schemas, infrastructure, CI/CD — then ranks the most relevant nodes for any query.
        </p>
        <h2>Install</h2>
        <pre><code>pip install codebase2graph</code></pre>
        <h2>Usage</h2>
        <pre><code>{`from code2graph import build_graph

graph = build_graph("/path/to/repo", graph_type="all")
# graph.nodes — files, functions, classes, tables, routes, env vars
# graph.edges — calls, imports, defines, depends_on, decorates

# CLI
codebase2graph /repo --graph call --output call_graph.json`}</code></pre>
        <h2>Graph types</h2>
        <ul>
          <li><strong>call</strong> — function call graph (Python AST + JS/TS)</li>
          <li><strong>entity</strong> — class/function/variable definitions</li>
          <li><strong>schema</strong> — database models and migrations</li>
          <li><strong>infra</strong> — Docker, nginx, env vars, cloud config</li>
          <li><strong>security</strong> — auth decorators, secrets, permissions</li>
          <li><strong>web</strong> — API routes and HTTP methods</li>
          <li><strong>all</strong> — combined graph of all types</li>
        </ul>
        <p>GitHub: <a href="https://github.com/jw-open/code2graph" target="_blank" rel="noopener noreferrer">github.com/jw-open/code2graph</a></p>
      </div>
    ),
    "ohwise-mcp": (
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <h1>ohwise-mcp — MCP Server</h1>
        <p>
          <a href="https://pypi.org/project/ohwise-mcp/" target="_blank" rel="noopener noreferrer"><strong>ohwise-mcp</strong></a> (v0.2.0) is an MCP (Model Context Protocol) server that gives Claude Code, Cursor, Windsurf, and any MCP-compatible tool direct access to OhWise knowledge graphs, agent pipelines, code graph tools, document retrieval, and schema ranking.
        </p>
        <h2>Install</h2>
        <pre><code>{`pip install ohwise-mcp
# Or with all graph extras:
pip install "ohwise-mcp[all]"`}</code></pre>
        <h2>Configure</h2>
        <pre><code>{`// claude_desktop_config.json
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
}`}</code></pre>
        <h2>Available MCP tools</h2>
        <ul>
          <li><strong>Knowledge graphs</strong> — list, get, query, add/delete nodes and edges</li>
          <li><strong>Agent pipelines</strong> — list agents, run tasks, poll results</li>
          <li><strong>Code context</strong> — build graph, rank nodes, trace call path, find impact</li>
          <li><strong>Schema ranking</strong> — graph2sql for SQL generation context</li>
          <li><strong>Document retrieval</strong> — docs2graph for document knowledge graphs</li>
        </ul>
        <p>GitHub: <a href="https://github.com/jw-open/ohwise-mcp" target="_blank" rel="noopener noreferrer">github.com/jw-open/ohwise-mcp</a></p>
      </div>
    ),
  };

  const [selectedArticle, setSelectedArticle] = useState<null | { title: string; slug: string; content: React.ReactNode }>(null);

  const showArticle = (categoryTitle: string, article: { title: string; slug: string }) => {
    const content = articles[article.slug];
    setSelectedArticle({
      title: article.title,
      slug: article.slug,
      content: content ?? (
        <div className="prose dark:prose-invert prose-lg max-w-none">
          <h1>{article.title}</h1>
          <p>Detailed documentation for <strong>{article.title}</strong> is coming soon.</p>
          <p>In the meantime, see the <a href="/open-source">Open Source</a> page for package documentation and code examples.</p>
        </div>
      )
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Documentation
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Architecture, APIs, open-source packages, and integration guides for OhWise.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "Lab & ai-relay", href: "#" },
                  { label: "Studio & coordinator loop", href: "#" },
                  { label: "Graph packages", href: "/open-source" },
                  { label: "API reference", href: "#" },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Content */}
        <section className="py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {selectedArticle ? (
              /* ── Sidebar + Article layout ────────────────────────────── */
              <div className="flex gap-8 items-start">
                {/* Sticky sidebar */}
                <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pb-8">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="flex items-center gap-1 text-xs text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6 font-medium"
                  >
                    <ArrowLeft size={13} /> All docs
                  </button>
                  <nav className="space-y-6">
                    {categories.map((category, cidx) => (
                      <div key={cidx}>
                        <div className="flex items-center gap-2 mb-2 px-2">
                          <span className="opacity-70">{category.icon}</span>
                          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                            {category.title}
                          </span>
                        </div>
                        <ul className="space-y-0.5">
                          {category.articles.map((article, aidx) => {
                            const isActive = selectedArticle?.slug === article.slug;
                            return (
                              <li key={aidx}>
                                <button
                                  onClick={() => showArticle(category.title, article)}
                                  className={`w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors ${
                                    isActive
                                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium"
                                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                                  }`}
                                >
                                  {article.title}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </nav>
                </aside>

                {/* Article content */}
                <div className="flex-1 min-w-0">
                  {/* Mobile back button */}
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="lg:hidden flex items-center text-blue-600 hover:text-blue-800 mb-6 text-sm font-medium"
                  >
                    <ArrowLeft size={15} className="mr-1" />
                    Back to Documentation
                  </button>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-8 lg:p-12 max-w-3xl">
                    {selectedArticle.content}
                  </div>
                </div>
              </div>
            ) : (
              /* ── Category card grid ──────────────────────────────────── */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4 gap-2">
                      {category.icon}
                      <h2 className="text-base font-bold text-gray-900 dark:text-white">{category.title}</h2>
                    </div>
                    <ul className="space-y-2">
                      {category.articles.map((article, idx) => (
                        <li key={idx}>
                          <button
                            onClick={() => showArticle(category.title, article)}
                            className="flex items-start gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 w-full text-left text-sm py-0.5 transition-colors group"
                          >
                            <ChevronRight size={14} className="mt-0.5 flex-shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 transition-colors" />
                            <span className="leading-snug">{article.title}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Recent Updates */}
        {!selectedArticle && (
          <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8 text-center">Recent Updates</h2>
              <div className="max-w-3xl mx-auto">
                <div className="space-y-6">
                  {[
                    {
                      title: "ai-relay v0.4.32 — server mode and PerTurnRuntime",
                      tag: "Updated",
                      tagColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
                      desc: "ai-relay now ships a server mode (ai-relay serve) for persistent daemon deployments and a PerTurnRuntime for multi-turn conversations with --resume support. Structured events include reasoning, tool_call, file diffs, quota_warning, context_warning, and context_compacted.",
                      date: "June 2026",
                    },
                    {
                      title: "ohwise-mcp v0.2.0 — all graph extras",
                      tag: "New",
                      tagColor: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
                      desc: "ohwise-mcp now exposes knowledge graph CRUD, agent pipeline management, code context tools (codebase2graph), document retrieval (docs2graph), and schema ranking (graph2sql) as MCP tools for Claude Code, Cursor, and any MCP client.",
                      date: "June 2026",
                    },
                    {
                      title: "Studio artifact panel — [ARTIFACT] syntax",
                      tag: "Updated",
                      tagColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300",
                      desc: "Only content wrapped in [ARTIFACT] blocks (executor final synthesis) appears in the artifact panel. Planner and evaluator output is now logged to the COMMS stream only, keeping the artifact panel clean.",
                      date: "May 2026",
                    },
                  ].map((update, i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                            <FileText className="text-blue-600" size={18} />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-base font-semibold">{update.title}</h3>
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${update.tagColor}`}>
                              {update.tag}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{update.desc}</p>
                          <span className="text-xs text-gray-400">{update.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Additional resources */}
        {!selectedArticle && (
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8 text-center">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <a
                  href="/open-source"
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex flex-col items-center text-center hover:border-indigo-200 dark:hover:border-indigo-700 border border-transparent transition-colors"
                >
                  <Package className="text-indigo-600 mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-2">Open Source Packages</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    Install guides, code examples, and API docs for all 5 PyPI packages.
                  </p>
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm flex items-center">
                    Browse packages <ExternalLink size={14} className="ml-1" />
                  </span>
                </a>

                <a
                  href="https://github.com/jw-open"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex flex-col items-center text-center hover:border-gray-300 border border-transparent transition-colors"
                >
                  <Code className="text-gray-700 mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-2">GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    Source code, issues, and contribution guides for all open-source repos.
                  </p>
                  <span className="text-blue-600 dark:text-blue-400 font-medium text-sm flex items-center">
                    View on GitHub <ExternalLink size={14} className="ml-1" />
                  </span>
                </a>

                <a
                  href="/blog"
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex flex-col items-center text-center hover:border-blue-200 dark:hover:border-blue-700 border border-transparent transition-colors"
                >
                  <Lightbulb className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-2">Engineering Blog</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    Deep dives on DAG orchestration, graph retrieval, and multi-agent systems.
                  </p>
                  <span className="text-blue-600 dark:text-blue-400 font-medium text-sm flex items-center">
                    Read articles <ExternalLink size={14} className="ml-1" />
                  </span>
                </a>
              </div>
            </div>
          </section>
        )}

        <CTASection
          title="Ready to get started with OhWise?"
          subtitle="Try the platform, install an open-source package, or connect your AI coding agent today."
          primaryButtonText="Get Started"
          primaryButtonLink="https://cloud.ohwise.com/"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;
