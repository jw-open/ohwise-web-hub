import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTASection from "../components/sections/CTASection";
import { ChevronRight, FileText, Book, Lightbulb, Code, ExternalLink, ArrowLeft, Terminal, Network, Layers, GitBranch, Package } from "lucide-react";

const docStyles = `
  .doc-content h1 { font-size: 2rem; font-weight: 800; letter-spacing: -0.03em; line-height: 1.2; margin-bottom: 1rem; color: inherit; }
  .doc-content h2 { font-size: 1.35rem; font-weight: 700; letter-spacing: -0.02em; margin-top: 2.5rem; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid #e5e7eb; color: inherit; }
  .dark .doc-content h2 { border-bottom-color: #374151; }
  .doc-content h3 { font-size: 1.1rem; font-weight: 600; margin-top: 1.75rem; margin-bottom: 0.5rem; color: inherit; }
  .doc-content p { font-size: 0.9375rem; line-height: 1.8; color: #4b5563; margin-bottom: 1.1rem; }
  .dark .doc-content p { color: #9ca3af; }
  .doc-content a { color: #4f46e5; text-decoration: none; font-weight: 500; }
  .doc-content a:hover { text-decoration: underline; }
  .dark .doc-content a { color: #818cf8; }
  .doc-content ul, .doc-content ol { margin: 0.75rem 0 1.25rem 1.25rem; display: flex; flex-direction: column; gap: 0.4rem; }
  .doc-content li { font-size: 0.9375rem; line-height: 1.7; color: #4b5563; }
  .dark .doc-content li { color: #9ca3af; }
  .doc-content code { font-family: 'JetBrains Mono', 'Fira Code', 'Menlo', monospace; font-size: 0.8125rem; background: #f1f5f9; color: #4f46e5; padding: 0.15em 0.45em; border-radius: 4px; }
  .dark .doc-content code { background: #1e293b; color: #a5b4fc; }
  .doc-content pre { background: #0f172a; border-radius: 10px; padding: 1.25rem 1.5rem; overflow-x: auto; margin: 1.25rem 0; border: 1px solid #1e293b; }
  .doc-content pre code { background: transparent; color: #e2e8f0; padding: 0; font-size: 0.8125rem; line-height: 1.75; }
  .doc-content table { width: 100%; border-collapse: collapse; margin: 1.25rem 0; font-size: 0.875rem; }
  .doc-content th { text-align: left; padding: 0.6rem 1rem; background: #f8fafc; border-bottom: 2px solid #e2e8f0; font-weight: 600; color: #374151; }
  .dark .doc-content th { background: #1e293b; border-bottom-color: #334155; color: #e2e8f0; }
  .doc-content td { padding: 0.55rem 1rem; border-bottom: 1px solid #f1f5f9; color: #4b5563; }
  .dark .doc-content td { border-bottom-color: #1e293b; color: #94a3b8; }
  .doc-content tr:last-child td { border-bottom: none; }
  .doc-content blockquote { border-left: 3px solid #6366f1; background: #f5f3ff; padding: 0.75rem 1.25rem; border-radius: 0 8px 8px 0; margin: 1.25rem 0; }
  .dark .doc-content blockquote { background: #1e1b4b; border-left-color: #818cf8; }
  .doc-content blockquote p { margin: 0; color: #4338ca; }
  .dark .doc-content blockquote p { color: #a5b4fc; }
  .doc-callout { display: flex; gap: 0.75rem; align-items: flex-start; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 0.875rem 1rem; margin: 1.25rem 0; font-size: 0.875rem; color: #166534; }
  .dark .doc-callout { background: #052e16; border-color: #14532d; color: #86efac; }
  .doc-callout-tip { background: #eff6ff; border-color: #bfdbfe; color: #1e40af; }
  .dark .doc-callout-tip { background: #0c1a3a; border-color: #1e3a8a; color: #93c5fd; }
`;

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
        { title: "Lab: AI Coding Agent Integration", slug: "lab-overview" },
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
        { title: "graph2sql: Schema Graph for Text-to-SQL", slug: "graph2sql" },
        { title: "docs2graph: Document Knowledge Graphs", slug: "docs2graph" },
        { title: "codebase2graph: Code Repository Graphs", slug: "codebase2graph" },
        { title: "ohwise-mcp: MCP Server", slug: "ohwise-mcp" },
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
      <div>
        <h1>Introduction to OhWise</h1>
        <p>
          <strong>OhWise</strong> is a multi-agent AI platform built around three core capabilities:
        </p>
        <ol>
          <li><strong>DAG-based orchestration</strong>: AI workflows modeled as directed acyclic graphs, with a planner → executor → evaluator coordinator loop, typed state propagation, and per-node observability.</li>
          <li><strong>Graph-native context retrieval</strong>: code, schemas, and documents converted to knowledge graphs. Personalized PageRank surfaces structurally relevant context instead of flat vector similarity.</li>
          <li><strong>Lab and Studio interfaces</strong>: Lab provides a browser-based terminal for AI coding agents (Claude Code, Codex, Gemini CLI, Cortex). Studio orchestrates multi-agent collaboration with artifact generation and human-in-the-loop intervention.</li>
        </ol>
        <h2>Key components</h2>
        <ul>
          <li><strong>ai-relay</strong>: Open-source Python package (v0.4.33) that bridges AI coding agent CLIs to the OhWise web interface via real-time streaming</li>
          <li><strong>graph2sql / docs2graph / codebase2graph</strong>: Pure-Python graph packages for schema, document, and code context retrieval. No LLM required.</li>
          <li><strong>ohwise-mcp</strong>: MCP server exposing OhWise graph tools to Claude Code, Cursor, and any MCP client</li>
        </ul>
        <h2>How agents communicate</h2>
        <p>
          All agent execution — whether Lab sessions or Studio coordinator loops — produces structured JSON events that stream to the browser in real time. Every reasoning step, tool call, file diff, and quota warning is visible as it happens.
        </p>
        <div className="doc-callout doc-callout-tip">💡 <strong>New here?</strong> Start with the Quick Start Guide, then try connecting Claude Code to Lab.</div>
      </div>
    ),
    "core-concepts": (
      <div>
        <h1>Core Concepts: DAGs, Agents, Lambdas</h1>
        <h2>DAG (Directed Acyclic Graph)</h2>
        <p>
          An OhWise pipeline is a DAG where each node represents a unit of work: an agent call, a Lambda function, a tool invocation, or a sub-pipeline. Edges define execution dependencies. Nodes with no unresolved dependencies execute in parallel.
        </p>
        <p>
          Each node has a typed input/output contract. The platform validates types at node boundaries, making pipelines debuggable: when a node fails, you know exactly what input it received.
        </p>
        <h2>Agents</h2>
        <p>
          Agents are LLM-backed nodes in a DAG. They receive context (from the DAG state, from knowledge graphs, from tool outputs) and produce structured output. OhWise is model-agnostic: agents can use Claude, GPT-4, Llama, Mistral, or any API-compatible model. Different nodes in the same pipeline can use different models.
        </p>
        <h2>Lambda functions</h2>
        <p>
          Lambdas are stateless function nodes: Python functions dispatched to AI agents for execution without maintaining session state. Lambda dispatch is the lightweight path for single-turn tasks that don't need a full agent session.
        </p>
        <h2>The coordinator loop</h2>
        <p>
          Studio's multi-agent coordinator runs a structured loop:
        </p>
        <ol>
          <li><strong>Planner</strong>: receives the user request and decomposes it into a subtask DAG</li>
          <li><strong>Executor</strong>: runs each subtask node, calling LLMs, tools, or Lambda functions</li>
          <li><strong>Evaluator</strong>: scores executor output; decides pass, retry, or escalate</li>
          <li><strong>Synthesizer</strong>: on pass, combines executor outputs into a final artifact</li>
        </ol>
        <p>Human-in-the-loop intervention can pause the loop at any node for review or redirection.</p>
      </div>
    ),
    "lab-overview": (
      <div>
        <h1>Lab: AI Coding Agent Integration</h1>
        <p>
          <strong>Lab</strong> is OhWise's built-in terminal for running AI coding agent CLIs (Claude Code, Codex, Gemini CLI, Snowflake Cortex) directly from your browser. Sessions run on OhWise servers inside an isolated per-user workspace.
        </p>
        <h2>How It Works</h2>
        <ol>
          <li>Navigate to <strong>/lab</strong> in the OhWise app.</li>
          <li>Click <strong>+</strong> to create a new session. Choose a name and agent (Claude Code, Codex, Gemini CLI, or Cortex).</li>
          <li>Click <strong>Connect</strong>. The server spawns the CLI via the <code>ai-relay</code> relay process in your isolated workspace.</li>
          <li>If it's your first time, an OAuth link appears in the stream. Click it, authenticate, and paste the code back.</li>
          <li>Start typing prompts. Use <code>/compact</code> or <code>/clear</code> buttons to manage context.</li>
        </ol>
        <h2>Features</h2>
        <ul>
          <li><strong>Real-time streaming</strong>: reasoning steps, tool calls, file diffs, quota warnings, context compaction events</li>
          <li><strong>File diff viewer</strong>: inline before/after display for every file edit</li>
          <li><strong>Permission system</strong>: allow / deny / allow-for-session for each tool invocation</li>
          <li><strong>Multi-panel split view</strong>: compare two agent sessions side by side</li>
          <li><strong>Voice input</strong>: Whisper-backed speech-to-text</li>
          <li><strong>TTS output</strong>: text-to-speech for agent responses</li>
          <li><strong>MCP server integration</strong>: attach an MCP server per session for graph context tools</li>
          <li><strong>Context management</strong>: streaming text coalescing, context compaction warnings at configurable thresholds</li>
          <li><strong>Model switching</strong>: change model mid-session with <code>/model sonnet</code></li>
        </ul>
        <h2>Security Model</h2>
        <ul>
          <li>Authentication required for every session connection</li>
          <li>Each user gets a fully isolated workspace — no access to other users' files</li>
          <li>CLIs run as a non-root process with no host filesystem access outside the workspace</li>
          <li>Only approved AI coding agent tools can be spawned per session</li>
        </ul>
        <h2>Supported Agents</h2>
        <ul>
          <li><strong>Claude Code</strong>: Anthropic's AI coding assistant</li>
          <li><strong>Codex CLI</strong>: OpenAI's coding CLI</li>
          <li><strong>Gemini CLI</strong>: Google's Gemini coding assistant</li>
          <li><strong>Snowflake Cortex</strong>: enterprise LLM CLI</li>
        </ul>
      </div>
    ),
    "ai-relay-protocol": (
      <div>
        <h1>ai-relay: WebSocket Relay Protocol</h1>
        <p>
          <a href="https://pypi.org/project/ai-relay/" target="_blank" rel="noopener noreferrer"><strong>ai-relay</strong></a> (v0.4.33) is an open-source Python package that bridges AI coding agent CLIs to any WebSocket-capable frontend. It spawns the CLI as a subprocess, speaks the native stream-json protocol, and emits structured events over WebSocket.
        </p>
        <h2>Install</h2>
        <pre><code>pip install ai-relay</code></pre>
        <h2>Start the relay</h2>
        <pre><code>{`# One-shot mode
ai-relay --port 8765

# Server / daemon mode (v0.4.33+)
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
      <div>
        <h1>Connecting Claude Code to Lab</h1>
        <h2>On OhWise Cloud</h2>
        <p>Claude Code is pre-installed on the OhWise server. Just select <strong>Claude Code</strong> when creating a session. No setup needed.</p>
        <h2>First Connection</h2>
        <ol>
          <li>Create a session with Tool = <strong>Claude Code</strong>.</li>
          <li>Click <strong>Connect</strong>.</li>
          <li>Claude Code starts. The startup screen appears in the stream.</li>
          <li>The theme wizard is auto-confirmed (dark mode selected).</li>
          <li>An OAuth link appears. See <em>OAuth Authentication in Lab</em>.</li>
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
      <div>
        <h1>OAuth Authentication in Lab</h1>
        <p>
          Lab uses your existing Claude Pro/Max subscription via browser OAuth. No API key or per-token cost needed.
        </p>
        <h2>First-Time Auth Flow</h2>
        <ol>
          <li>Connect a Claude Code session in Lab.</li>
          <li>Claude Code outputs an authentication URL. It appears as a <strong>clickable blue link</strong> in the stream.</li>
          <li>Click the link. Your browser opens <code>claude.ai</code>.</li>
          <li>Log in with your Anthropic account.</li>
          <li>Copy the authorization code shown on the page.</li>
          <li>Paste the code into the Lab input field → click <strong>Send</strong>.</li>
          <li>Claude Code saves the credentials and starts responding.</li>
        </ol>
        <h2>Credential Persistence</h2>
        <p>
          Credentials are stored in your isolated workspace (<code>/var/ohwise-lab-workspaces/&#123;user_id&#125;/.claude/</code>) on a Docker named volume. They persist across container restarts so you only authenticate once.
        </p>
      </div>
    ),
    "studio-overview": (
      <div>
        <h1>Studio Overview</h1>
        <p>
          <strong>Studio</strong> is OhWise's multi-agent coordination environment. It runs the planner → executor → evaluator coordinator loop inside a structured UI with a split Chat/Artifact panel layout.
        </p>
        <h2>Key Concepts</h2>
        <ul>
          <li><strong>Group session</strong>: a Studio session is scoped to a <code>group_id</code>, isolating all agents, state, and artifacts for that session</li>
          <li><strong>Coordinator loop</strong>: the platform runs planner, executor, and evaluator agents in sequence, with typed state passed between nodes</li>
          <li><strong>Artifact panel</strong>: only content marked with <code>[ARTIFACT]</code> (the executor's final synthesis) appears here; planner/evaluator reasoning goes to the Chat log</li>
          <li><strong>Human intervention</strong>: pause the loop at any node, redirect the task, or approve/reject agent decisions</li>
        </ul>
        <h2>UI Layout</h2>
        <ul>
          <li><strong>Chat tab</strong>: real-time stream of all agent communications, reasoning traces, and coordinator messages</li>
          <li><strong>Artifact tab</strong>: rendered output of the current artifact (HTML, Markdown, code)</li>
          <li><strong>Session panel</strong>: list of active sessions with status indicators</li>
        </ul>
        <h2>Supported Artifact Types</h2>
        <ul>
          <li>HTML: rendered in an iframe with live preview</li>
          <li>Markdown: rendered with full syntax support</li>
          <li>Code: syntax-highlighted with language detection</li>
          <li>JSON: formatted with collapsible tree view</li>
        </ul>
        <h2>Lab → Studio Event Forwarding</h2>
        <p>
          Lab sessions can forward events into a Studio session. This means a Claude Code session running in Lab can contribute artifacts and tool call outputs to an active Studio coordinator loop, combining interactive coding agent sessions with structured multi-agent coordination.
        </p>
      </div>
    ),
    "coordinator-loop": (
      <div>
        <h1>Coordinator Loop: Planner → Executor → Evaluator</h1>
        <p>
          The Studio coordinator loop is the execution model for multi-agent tasks. It runs as a DAG with three main agent roles and a synthesis step.
        </p>
        <h2>Planner</h2>
        <p>
          Receives the user request and decomposes it into a subtask DAG. Each subtask is a node with a defined scope, input context, and expected output type. The planner's output is a structured plan, not free text, that the executor can traverse deterministically.
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
          The coordinator loop is implemented as a state machine. Long-running tasks that span multiple turns, wait for external events, or require human approval serialize their state to MongoDB when suspended and resume exactly where they left off when triggered.
        </p>
        <pre><code>{`// Example coordinator state transitions
PLANNING → EXECUTING → EVALUATING → DONE
                ↓              ↓
             RETRY          ESCALATE → HUMAN_REVIEW → EXECUTING`}</code></pre>
      </div>
    ),
    "artifact-panel": (
      <div>
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
          Only this content appears in the Artifact panel. Planner reasoning, evaluator scores, and intermediate executor steps are logged to Chat only, keeping the artifact panel clean and focused on the deliverable.
        </p>
        <h2>Artifact rendering</h2>
        <p>
          The platform auto-detects the artifact type from the content: HTML is rendered in a sandboxed iframe, Markdown is rendered with a full parser, code blocks are syntax-highlighted. Artifacts are persisted and accessible after the session ends.
        </p>
      </div>
    ),
    "graph2sql": (
      <div>
        <h1>graph2sql: Schema Graph for Text-to-SQL</h1>
        <p>
          <a href="https://pypi.org/project/graph2sql/" target="_blank" rel="noopener noreferrer"><strong>graph2sql</strong></a> (v0.2.0) builds a typed graph from your database schema (tables and columns as nodes, foreign keys and relationships as edges) and uses Personalized PageRank to rank the most relevant nodes for any natural language query.
        </p>
        <h2>Install</h2>
        <pre><code>pip install graph2sql</code></pre>
        <h2>Why graphs instead of embeddings?</h2>
        <p>
          Vector similarity retrieves semantically close table names but misses structural relationships. If a query asks about "total revenue by customer", the relevant tables are <code>orders</code>, <code>customers</code>, and <code>payments</code>, connected by foreign keys rather than just semantic similarity. PageRank traverses these connections, surfacing the right subgraph every time.
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
          <li>No LLM dependency: pure Python + numpy</li>
          <li>Personalized PageRank seeded from query-matched nodes</li>
          <li>Alias matching via node attributes (handles column abbreviations)</li>
          <li>Fully typed, pip installable</li>
          <li>Works with any LLM; bring your own model</li>
        </ul>
        <p>GitHub: <a href="https://github.com/jw-open/graph2sql" target="_blank" rel="noopener noreferrer">github.com/jw-open/graph2sql</a></p>
      </div>
    ),
    "docs2graph": (
      <div>
        <h1>docs2graph: Document Knowledge Graphs</h1>
        <p>
          <a href="https://pypi.org/project/docs2graph/" target="_blank" rel="noopener noreferrer"><strong>docs2graph</strong></a> (v0.3.2) extracts structured knowledge graphs from documents. Feed it PDFs, Word docs, Markdown, HTML, CSV, and 10+ other formats and get back a typed graph of entities, sections, and relationships.
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
          <li>No LLM dependency: pure Python extraction</li>
          <li>Entity-relationship graph with typed edges</li>
        </ul>
        <p>GitHub: <a href="https://github.com/jw-open/doc2graph" target="_blank" rel="noopener noreferrer">github.com/jw-open/doc2graph</a></p>
      </div>
    ),
    "codebase2graph": (
      <div>
        <h1>codebase2graph: Code Repository Graphs</h1>
        <p>
          <a href="https://pypi.org/project/codebase2graph/" target="_blank" rel="noopener noreferrer"><strong>codebase2graph</strong></a> (v0.2.0) statically extracts the full structure of any codebase as a typed graph (files, modules, functions, classes, call chains, schemas, infrastructure, CI/CD) and ranks the most relevant nodes for any query.
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
          <li><strong>call</strong>: function call graph (Python AST + JS/TS)</li>
          <li><strong>entity</strong>: class/function/variable definitions</li>
          <li><strong>schema</strong>: database models and migrations</li>
          <li><strong>infra</strong>: Docker, nginx, env vars, cloud config</li>
          <li><strong>security</strong>: auth decorators, secrets, permissions</li>
          <li><strong>web</strong>: API routes and HTTP methods</li>
          <li><strong>all</strong>: combined graph of all types</li>
        </ul>
        <p>GitHub: <a href="https://github.com/jw-open/code2graph" target="_blank" rel="noopener noreferrer">github.com/jw-open/code2graph</a></p>
      </div>
    ),
    "ohwise-mcp": (
      <div>
        <h1>ohwise-mcp: MCP Server</h1>
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
          <li><strong>Knowledge graphs</strong>: list, get, query, add/delete nodes and edges</li>
          <li><strong>Agent pipelines</strong>: list agents, run tasks, poll results</li>
          <li><strong>Code context</strong>: build graph, rank nodes, trace call path, find impact</li>
          <li><strong>Schema ranking</strong>: graph2sql for SQL generation context</li>
          <li><strong>Document retrieval</strong>: docs2graph for document knowledge graphs</li>
        </ul>
        <p>GitHub: <a href="https://github.com/jw-open/ohwise-mcp" target="_blank" rel="noopener noreferrer">github.com/jw-open/ohwise-mcp</a></p>
      </div>
    ),
    "quick-start": (
      <div>
        <h1>Quick Start Guide</h1>
        <p>This guide walks you through connecting your first AI agent session and running your first multi-agent task in OhWise.</p>
        <h2>Step 1: Create an Account</h2>
        <p>Sign up at <a href="https://cloud.ohwise.com" target="_blank" rel="noopener noreferrer">cloud.ohwise.com</a>. Your account comes with an isolated workspace and a free-tier allocation for Lab sessions and agents.</p>
        <h2>Step 2: Connect an AI Coding Agent (Lab)</h2>
        <ol>
          <li>Navigate to <strong>Lab</strong> in the sidebar.</li>
          <li>Click <strong>+ New Session</strong>. Give it a name and select an agent (Claude Code is recommended to start).</li>
          <li>Click <strong>Connect</strong>. The session starts inside your isolated workspace.</li>
          <li>If prompted, follow the OAuth link in the stream to authenticate with your Anthropic account.</li>
          <li>Type your first prompt — for example: <em>"Summarize the files in this workspace."</em></li>
        </ol>
        <h2>Step 3: Create Your First Agent (Studio)</h2>
        <ol>
          <li>Navigate to <strong>Agents</strong> in the sidebar.</li>
          <li>Click <strong>Add Agent</strong>. Fill in a name, description, and a system prompt that defines the agent's role.</li>
          <li>Save the agent. It's now available as a node in any Studio coordinator loop.</li>
        </ol>
        <h2>Step 4: Run a Multi-Agent Task (Studio)</h2>
        <ol>
          <li>Navigate to <strong>Studio</strong> and open or create a group session.</li>
          <li>Type a task in the chat: for example, <em>"Research the top three competitors in the enterprise AI market and summarize their positioning."</em></li>
          <li>The coordinator loop starts: Planner decomposes the task, Executor runs subtasks, Evaluator scores the output.</li>
          <li>The final result appears in the <strong>Artifact</strong> tab.</li>
        </ol>
        <h2>Step 5: Build a Knowledge Graph</h2>
        <ol>
          <li>Navigate to <strong>Knowledge</strong> in the sidebar.</li>
          <li>Click <strong>Add Knowledge</strong> and choose a type (graph, document, schema).</li>
          <li>Upload your documents or connect a data source.</li>
          <li>The graph is available immediately to agents as retrieval context.</li>
        </ol>
        <div className="doc-callout doc-callout-tip">💡 Once you have a knowledge graph, agents can use it to answer domain-specific questions accurately instead of relying on general training data.</div>
      </div>
    ),
    "system-requirements": (
      <div>
        <h1>System Requirements</h1>
        <p>OhWise is a fully managed cloud platform. For most users, there is nothing to install and no server to run.</p>
        <h2>OhWise Cloud (Recommended)</h2>
        <p>Access OhWise at <a href="https://cloud.ohwise.com" target="_blank" rel="noopener noreferrer">cloud.ohwise.com</a> from any modern browser. No local setup required. The platform handles compute, storage, and all AI agent runtime environments.</p>
        <table>
          <thead><tr><th>Requirement</th><th>Minimum</th></tr></thead>
          <tbody>
            <tr><td>Browser</td><td>Chrome 110+, Firefox 115+, Safari 16+, Edge 110+</td></tr>
            <tr><td>Network</td><td>Stable broadband (WebSocket connections required for live streaming)</td></tr>
            <tr><td>Account</td><td>OhWise account at cloud.ohwise.com</td></tr>
            <tr><td>For Lab (Claude Code)</td><td>Anthropic account with Claude Pro or Max subscription</td></tr>
          </tbody>
        </table>
        <h2>Open-Source Packages (Local Use)</h2>
        <p>If you're using graph packages (<strong>graph2sql</strong>, <strong>docs2graph</strong>, <strong>codebase2graph</strong>) or <strong>ai-relay</strong> locally:</p>
        <table>
          <thead><tr><th>Requirement</th><th>Version</th></tr></thead>
          <tbody>
            <tr><td>Python</td><td>3.9 or higher</td></tr>
            <tr><td>pip</td><td>Latest recommended</td></tr>
            <tr><td>Disk space</td><td>200MB+ for dependencies</td></tr>
          </tbody>
        </table>
        <h2>Self-Hosted Deployment</h2>
        <p>For organizations deploying OhWise on private infrastructure, the recommended baseline is:</p>
        <ul>
          <li>Container orchestration environment (any modern container runtime)</li>
          <li>A shared message broker for pub/sub between services</li>
          <li>A document store (MongoDB-compatible) for agent state persistence</li>
          <li>Reverse proxy for TLS termination</li>
          <li>Minimum 4 vCPU / 8 GB RAM for a single-tenant deployment</li>
        </ul>
        <p>Contact us at <a href="mailto:hello@ohwise.com">hello@ohwise.com</a> for enterprise deployment sizing and support.</p>
      </div>
    ),
    "human-intervention": (
      <div>
        <h1>Human-in-the-Loop Intervention</h1>
        <p>OhWise is built around a principle: AI does the work, humans make the calls. The human-in-the-loop system gives you meaningful control over agent execution without slowing down the majority of tasks that proceed smoothly.</p>
        <h2>When Intervention Triggers</h2>
        <p>The coordinator loop surfaces a human review stage in three situations:</p>
        <ul>
          <li><strong>Evaluator escalation</strong>: the evaluator scores the executor's output below threshold and marks it as requiring human judgment before proceeding</li>
          <li><strong>Sensitive tool calls</strong>: any agent action in a "require approval" category (configurable per workspace) pauses and waits for explicit sign-off</li>
          <li><strong>Manual pause</strong>: a team member can pause the loop at any time from the Studio interface</li>
        </ul>
        <h2>The Review Interface</h2>
        <p>When a task reaches a human review stage, the Studio chat displays:</p>
        <ul>
          <li>The current state of the task and what the agent has done so far</li>
          <li>The specific action or output waiting for review</li>
          <li>The agent's reasoning for the proposed next step</li>
        </ul>
        <p>From here, a reviewer can:</p>
        <ul>
          <li><strong>Approve</strong>: the loop continues from where it paused</li>
          <li><strong>Reject with feedback</strong>: the executor re-runs with the reviewer's correction injected</li>
          <li><strong>Redirect</strong>: change the task scope or goal mid-execution</li>
          <li><strong>Terminate</strong>: end the loop and archive the partial result</li>
        </ul>
        <h2>Audit and Accountability</h2>
        <p>Every intervention is logged: who reviewed, what decision was made, at what timestamp, and what the agent did next. This audit trail is permanent and accessible from the session history.</p>
        <h2>Configuring Approval Requirements</h2>
        <p>Workspace administrators can configure which categories of actions require human approval by default. Common categories include: external API calls, file writes, data exports, and communications (email, Slack, webhook). Actions below the threshold run without pausing.</p>
        <div className="doc-callout">✅ The goal is to keep approval friction proportional to consequence — high for irreversible actions, low or zero for read-only operations.</div>
      </div>
    ),
    "dag-pipelines": (
      <div>
        <h1>Defining Pipelines as DAGs</h1>
        <p>In OhWise, every multi-step workflow is represented as a directed acyclic graph (DAG). Each node is a unit of work. Edges define the order of execution and the data flow between nodes.</p>
        <h2>Why DAGs?</h2>
        <p>DAGs make multi-step workflows explicit and debuggable. Instead of a sequence of calls buried in application code, you have a visible structure where:</p>
        <ul>
          <li>Every step has a defined input and output type</li>
          <li>Dependencies are declared, not assumed</li>
          <li>Independent nodes execute in parallel automatically</li>
          <li>Failures are isolated — a failed node doesn't silently corrupt downstream state</li>
          <li>The full execution trace is recorded and inspectable</li>
        </ul>
        <h2>Node Types</h2>
        <table>
          <thead><tr><th>Type</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>Agent</td><td>An LLM-backed node. Receives context, produces structured output.</td></tr>
            <tr><td>Lambda</td><td>A stateless function node. Executes a discrete operation without maintaining session state.</td></tr>
            <tr><td>Tool</td><td>An external service call (API, database query, file operation).</td></tr>
            <tr><td>Sub-pipeline</td><td>A nested DAG, enabling reusable workflow components.</td></tr>
            <tr><td>Human</td><td>A pause node requiring manual input or approval before proceeding.</td></tr>
          </tbody>
        </table>
        <h2>Execution Model</h2>
        <p>The platform resolves the DAG topologically. Nodes with no unresolved dependencies are eligible to run. When a node completes, its output is stored in the shared DAG state and any newly unblocked nodes become eligible. This means parallelism is automatic — you don't schedule it explicitly.</p>
        <h2>Typed State</h2>
        <p>Each node declares the fields it reads from and writes to the shared state. The platform validates these contracts at execution time. If a node receives unexpected input, it fails clearly at the boundary rather than producing silent garbage output downstream.</p>
        <h2>Error Handling</h2>
        <p>Failed nodes can be configured with retry policies (max attempts, backoff, timeout) per node. If a node exhausts its retries, the DAG moves it to a terminal error state and the coordinator can escalate to human review or halt cleanly.</p>
      </div>
    ),
    "lambda-dispatch": (
      <div>
        <h1>Lambda Dispatch and Stateless Execution</h1>
        <p>Lambda dispatch is the lightweight execution path in OhWise — designed for tasks that are discrete, well-defined, and don't require a full multi-turn agent session.</p>
        <h2>What Is a Lambda?</h2>
        <p>A Lambda is a stateless function node in the DAG. It receives a typed input, executes a specific operation, and returns a typed output — without maintaining any session context between calls. Lambdas are the right tool when:</p>
        <ul>
          <li>The task can be described completely in a single prompt or function call</li>
          <li>No back-and-forth with the model is needed</li>
          <li>The operation needs to run at high throughput or be easily parallelized</li>
          <li>You want lightweight cost characteristics (no multi-turn context to maintain)</li>
        </ul>
        <h2>Dispatch Flow</h2>
        <p>When a DAG node is marked as Lambda-type, the coordinator:</p>
        <ol>
          <li>Assembles the input context from DAG state</li>
          <li>Dispatches the request to the target model or tool with the assembled context</li>
          <li>Receives the structured response</li>
          <li>Writes the typed output back to DAG state</li>
          <li>Marks the node complete and unblocks downstream dependencies</li>
        </ol>
        <h2>When to Use Lambda vs Agent</h2>
        <table>
          <thead><tr><th>Use Lambda when…</th><th>Use Agent when…</th></tr></thead>
          <tbody>
            <tr><td>Task is single-turn</td><td>Task requires multi-turn reasoning</td></tr>
            <tr><td>Input/output is well-defined</td><td>Task requires tool use or web browsing</td></tr>
            <tr><td>High throughput needed</td><td>Task benefits from iterative refinement</td></tr>
            <tr><td>Cost sensitivity is high</td><td>Full session context is valuable</td></tr>
          </tbody>
        </table>
        <h2>Parallelism</h2>
        <p>Lambda nodes are stateless, which means they're trivially parallelizable. A DAG with ten independent Lambda nodes executes all ten concurrently. This is the primary pattern for fan-out/fan-in workflows: spread the work across parallel Lambdas, then collect and synthesize results in a single downstream node.</p>
      </div>
    ),
    "state-propagation": (
      <div>
        <h1>State Propagation and Typed Contracts</h1>
        <p>OhWise pipelines maintain a shared state object that flows through the DAG. Each node reads from and writes to this shared state using declared, typed contracts.</p>
        <h2>The Shared State Object</h2>
        <p>When a DAG starts executing, an empty state object is created for that run. As nodes complete, they write their outputs into the state. Downstream nodes read from the state when they start executing. The state accumulates the full history of the run.</p>
        <h2>Typed Contracts</h2>
        <p>Every node declares:</p>
        <ul>
          <li><strong>Inputs</strong>: the fields from the shared state it will read, with their expected types</li>
          <li><strong>Outputs</strong>: the fields it will write back to the shared state, with their declared types</li>
        </ul>
        <p>The platform validates these contracts at execution boundaries. If a node receives a field of the wrong type, or writes a field that wasn't declared, the failure is caught immediately and reported clearly — not buried in a downstream node's error log.</p>
        <h2>Why Types Matter for Multi-Agent Systems</h2>
        <p>In multi-agent pipelines, the handoff between nodes is where most bugs occur. Untyped handoffs — where one agent produces free text and the next agent tries to parse it — are fragile. Typed contracts make these handoffs explicit and verifiable, turning runtime surprises into configuration-time errors.</p>
        <h2>State Persistence</h2>
        <p>For long-running workflows that span multiple turns or pause for human review, the state object is serialized to persistent storage between steps. When the workflow resumes — whether seconds or hours later — it picks up exactly where it left off with full state intact. No state is lost on restarts or failures.</p>
        <h2>Observability</h2>
        <p>Every state write is logged with its node of origin, timestamp, and the full value written. The state history for any run is inspectable from the Studio interface, making it possible to trace exactly where a value came from and how it changed as it flowed through the pipeline.</p>
      </div>
    ),
    "observability": (
      <div>
        <h1>Observability: Traces, Token Usage, Latency</h1>
        <p>OhWise records a complete execution trace for every pipeline run. You can inspect what happened, when, and at what cost — for any run, any node, any agent call.</p>
        <h2>What Gets Recorded</h2>
        <p>For every DAG execution, the platform records:</p>
        <ul>
          <li><strong>Node traces</strong>: start time, end time, status (success / retry / failed / escalated), input state snapshot, output state snapshot</li>
          <li><strong>Agent calls</strong>: model used, prompt tokens, completion tokens, latency, response</li>
          <li><strong>Tool calls</strong>: tool name, arguments, response, duration</li>
          <li><strong>Human interventions</strong>: reviewer, decision, timestamp, feedback provided</li>
          <li><strong>Evaluator scores</strong>: score value, pass/retry/escalate decision, criteria evaluated against</li>
        </ul>
        <h2>Token Usage and Cost Visibility</h2>
        <p>Every model call records prompt and completion token counts. The Studio interface shows cumulative token usage per run and per session, so you always know what a workflow is costing before you scale it. Usage aggregates are available per agent, per pipeline, per user, and per organization.</p>
        <h2>Latency Breakdown</h2>
        <p>The trace view shows a waterfall of node execution times, making it easy to identify which nodes are bottlenecks. For parallel DAGs, you can see which nodes ran concurrently and where the critical path fell.</p>
        <h2>Audit Log</h2>
        <p>Beyond performance observability, every action taken in OhWise — by agents or humans — is logged to a tamper-evident audit trail. This covers agent actions, tool calls, file writes, human approvals, and access events. The audit log is available for export and is the authoritative record for compliance and security reviews.</p>
        <h2>Real-Time Streaming</h2>
        <p>In Lab and Studio, all of this information streams to the browser in real time. You don't wait for a run to complete to see what's happening. Reasoning steps, tool calls, token consumption, and status changes appear as they occur.</p>
      </div>
    ),
    "api-auth": (
      <div>
        <h1>Authentication</h1>
        <p>All OhWise API requests are authenticated using short-lived JWT tokens issued at login. Tokens are scoped to an organization and carry the user's role and permissions.</p>
        <h2>Getting a Token</h2>
        <p>Authenticate via the login endpoint with your credentials. The response includes an access token and a refresh token.</p>
        <pre><code>{`POST /api/auth/login
Content-Type: application/json

{
  "email": "you@example.com",
  "password": "your-password"
}

// Response
{
  "access_token": "eyJ...",
  "refresh_token": "eyJ...",
  "token_type": "bearer",
  "expires_in": 3600
}`}</code></pre>
        <h2>Using the Token</h2>
        <p>Include the access token as a Bearer token in the Authorization header for all API requests:</p>
        <pre><code>{`GET /api/agent
Authorization: Bearer eyJ...`}</code></pre>
        <h2>Refreshing Tokens</h2>
        <p>Access tokens expire after 1 hour. Use the refresh token to get a new access token without re-entering credentials:</p>
        <pre><code>{`POST /api/auth/refresh
Authorization: Bearer <refresh_token>

// Response includes new access_token`}</code></pre>
        <h2>API Keys</h2>
        <p>For server-to-server integrations, organization administrators can issue scoped API keys from the Settings → API Keys panel. API keys do not expire automatically but can be revoked at any time. Use them the same way as JWT tokens in the Authorization header.</p>
        <h2>Scopes</h2>
        <p>API keys and JWT tokens carry permission scopes. Common scopes: <code>agent:read</code>, <code>agent:write</code>, <code>knowledge:read</code>, <code>knowledge:write</code>, <code>lab:session</code>, <code>studio:run</code>. Requests for a resource outside the token's scope return <code>403 Forbidden</code>.</p>
      </div>
    ),
    "ws-events": (
      <div>
        <h1>WebSocket Event Types</h1>
        <p>Lab sessions, Studio coordinator loops, and agent task execution all stream structured JSON events over WebSocket. Connect to the relevant WebSocket endpoint and handle events by <code>type</code>.</p>
        <h2>Connection</h2>
        <pre><code>{`// Lab session WebSocket
wss://cloud.ohwise.com/ws/lab/{session_id}?token={access_token}

// Studio coordinator WebSocket
wss://cloud.ohwise.com/ws/studio/{group_id}?token={access_token}`}</code></pre>
        <h2>Event Envelope</h2>
        <p>All events share a common envelope:</p>
        <pre><code>{`{
  "type": "tool_call",
  "ts": 1749600000.123,
  "session_id": "sess_abc123",
  "data": { ... }   // type-specific payload
}`}</code></pre>
        <h2>Lab Event Types</h2>
        <table>
          <thead><tr><th>type</th><th>Description</th><th>Key data fields</th></tr></thead>
          <tbody>
            <tr><td><code>session_start</code></td><td>Agent CLI process spawned</td><td><code>agent</code>, <code>folder</code></td></tr>
            <tr><td><code>session_end</code></td><td>Process exited</td><td><code>exit_code</code></td></tr>
            <tr><td><code>reasoning</code></td><td>Agent thinking/planning text</td><td><code>text</code></td></tr>
            <tr><td><code>tool_call</code></td><td>Tool invocation detected</td><td><code>tool</code>, <code>input</code></td></tr>
            <tr><td><code>tool_progress</code></td><td>Tool running update</td><td><code>tool</code>, <code>status</code></td></tr>
            <tr><td><code>streaming_text</code></td><td>Partial assistant response</td><td><code>text</code></td></tr>
            <tr><td><code>assistant_message</code></td><td>Complete assistant turn</td><td><code>text</code></td></tr>
            <tr><td><code>input_ack</code></td><td>User input echoed back</td><td><code>text</code></td></tr>
            <tr><td><code>url</code></td><td>URL in output (e.g. OAuth link)</td><td><code>url</code></td></tr>
            <tr><td><code>quota_warning</code></td><td>Rate limit hit</td><td><code>message</code>, <code>retry_after</code></td></tr>
            <tr><td><code>context_warning</code></td><td>Context window fill %</td><td><code>pct</code></td></tr>
            <tr><td><code>context_compacted</code></td><td>Context was compacted</td><td><code>summary</code></td></tr>
            <tr><td><code>error</code></td><td>Fatal error</td><td><code>message</code></td></tr>
          </tbody>
        </table>
        <h2>Studio Event Types</h2>
        <table>
          <thead><tr><th>type</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>coordinator_start</code></td><td>Coordinator loop started for a task</td></tr>
            <tr><td><code>planning</code></td><td>Planner output — task decomposition</td></tr>
            <tr><td><code>executing</code></td><td>Executor working on a subtask</td></tr>
            <tr><td><code>evaluating</code></td><td>Evaluator scoring output</td></tr>
            <tr><td><code>artifact</code></td><td>Final synthesized artifact ready</td></tr>
            <tr><td><code>human_review</code></td><td>Loop paused, waiting for human input</td></tr>
            <tr><td><code>coordinator_end</code></td><td>Loop completed or terminated</td></tr>
          </tbody>
        </table>
      </div>
    ),
    "endpoints": (
      <div>
        <h1>REST Endpoints</h1>
        <p>Base URL: <code>https://cloud.ohwise.com/api</code> (or your self-hosted domain).</p>
        <p>All requests require <code>Authorization: Bearer &lt;token&gt;</code>. All responses are JSON.</p>
        <h2>Agents</h2>
        <table>
          <thead><tr><th>Method</th><th>Path</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>GET</td><td>/api/agent</td><td>List agents in your organization</td></tr>
            <tr><td>POST</td><td>/api/agent</td><td>Create a new agent</td></tr>
            <tr><td>GET</td><td>/api/agent/&#123;id&#125;</td><td>Get agent details</td></tr>
            <tr><td>PUT</td><td>/api/agent/&#123;id&#125;</td><td>Update agent configuration</td></tr>
            <tr><td>DELETE</td><td>/api/agent/&#123;id&#125;</td><td>Delete an agent</td></tr>
          </tbody>
        </table>
        <h2>Knowledge Graphs</h2>
        <table>
          <thead><tr><th>Method</th><th>Path</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>GET</td><td>/api/knowledge</td><td>List knowledge bases</td></tr>
            <tr><td>POST</td><td>/api/knowledge</td><td>Create a knowledge base</td></tr>
            <tr><td>GET</td><td>/api/knowledge/&#123;id&#125;/graph</td><td>Get graph nodes and edges</td></tr>
            <tr><td>POST</td><td>/api/knowledge/&#123;id&#125;/query</td><td>Query the knowledge graph</td></tr>
          </tbody>
        </table>
        <h2>Lab Sessions</h2>
        <table>
          <thead><tr><th>Method</th><th>Path</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>GET</td><td>/api/lab/sessions</td><td>List Lab sessions</td></tr>
            <tr><td>POST</td><td>/api/lab/sessions</td><td>Create a new Lab session</td></tr>
            <tr><td>DELETE</td><td>/api/lab/sessions/&#123;id&#125;</td><td>Terminate a session</td></tr>
          </tbody>
        </table>
        <h2>Studio / Group Chat</h2>
        <table>
          <thead><tr><th>Method</th><th>Path</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>GET</td><td>/api/chat/group</td><td>List group sessions</td></tr>
            <tr><td>POST</td><td>/api/chat/group</td><td>Create a group session (Team plan)</td></tr>
            <tr><td>POST</td><td>/api/chat/group/&#123;id&#125;/message</td><td>Send a message to the coordinator</td></tr>
          </tbody>
        </table>
        <h2>Account &amp; Usage</h2>
        <table>
          <thead><tr><th>Method</th><th>Path</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>GET</td><td>/api/account/usage</td><td>Current plan, limits, and usage counts</td></tr>
            <tr><td>GET</td><td>/api/account/members</td><td>List organization members</td></tr>
            <tr><td>POST</td><td>/api/account/members/invite</td><td>Invite a member (Team plan)</td></tr>
          </tbody>
        </table>
      </div>
    ),
    "errors": (
      <div>
        <h1>Rate Limits and Error Handling</h1>
        <h2>HTTP Status Codes</h2>
        <table>
          <thead><tr><th>Status</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td>200 OK</td><td>Request succeeded</td></tr>
            <tr><td>201 Created</td><td>Resource created successfully</td></tr>
            <tr><td>400 Bad Request</td><td>Invalid request body or parameters</td></tr>
            <tr><td>401 Unauthorized</td><td>Missing or invalid token</td></tr>
            <tr><td>403 Forbidden</td><td>Valid token but insufficient permissions or plan limit reached</td></tr>
            <tr><td>404 Not Found</td><td>Resource does not exist or is not accessible to your account</td></tr>
            <tr><td>429 Too Many Requests</td><td>Rate limit exceeded</td></tr>
            <tr><td>500 Internal Server Error</td><td>Unexpected server error</td></tr>
          </tbody>
        </table>
        <h2>Error Response Shape</h2>
        <p>All error responses return a JSON body:</p>
        <pre><code>{`{
  "detail": "Human-readable error message",
  "error": "machine_readable_error_code",   // for structured errors
  "feature": "agents",                      // for plan limit errors
  "current": 5,
  "limit": 5
}`}</code></pre>
        <h2>Plan Limit Errors (403)</h2>
        <p>When a request is blocked by a plan limit (e.g. agent count at maximum), the response includes:</p>
        <pre><code>{`{
  "detail": "Agent limit reached for your plan",
  "error": "plan_limit",
  "feature": "agents",
  "current": 5,
  "limit": 5
}`}</code></pre>
        <p>The OhWise frontend handles these automatically by showing an upgrade prompt. If you're integrating via API, check for <code>error === "plan_limit"</code> and prompt your users accordingly.</p>
        <h2>Rate Limits</h2>
        <p>API rate limits are applied per organization. When a limit is exceeded, the response is <code>429 Too Many Requests</code> with a <code>Retry-After</code> header indicating when to retry (in seconds).</p>
        <table>
          <thead><tr><th>Endpoint category</th><th>Default limit</th></tr></thead>
          <tbody>
            <tr><td>Authentication</td><td>20 requests / minute</td></tr>
            <tr><td>Read endpoints (GET)</td><td>300 requests / minute</td></tr>
            <tr><td>Write endpoints (POST/PUT/DELETE)</td><td>60 requests / minute</td></tr>
            <tr><td>Agent task execution</td><td>Based on plan tier</td></tr>
          </tbody>
        </table>
        <h2>Retrying Safely</h2>
        <p>For <code>429</code> responses, wait for the <code>Retry-After</code> duration before retrying. For <code>500</code> responses, use exponential backoff with a maximum of 3 retries. Do not retry <code>400</code>, <code>401</code>, or <code>403</code> responses — these indicate client errors that won't resolve by retrying.</p>
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
        <div>
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
                    <style>{docStyles}</style>
                    <div className="doc-content">
                      {selectedArticle.content}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ── Category card grid ──────────────────────────────────── */
              <div className="max-w-5xl mx-auto">
                {/* Beginner start path */}
                <div className="mb-8 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                    <Book className="text-emerald-600 dark:text-emerald-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-0.5">New to OhWise?</p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400">Start with the introduction, then follow the Quick Start Guide to connect your first AI agent.</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0 flex-wrap">
                    <button
                      onClick={() => showArticle("Getting Started", { title: "Introduction to OhWise", slug: "introduction" })}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors"
                    >
                      Introduction
                    </button>
                    <button
                      onClick={() => showArticle("Getting Started", { title: "Quick Start Guide", slug: "quick-start" })}
                      className="px-3 py-1.5 rounded-lg border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-xs font-medium transition-colors"
                    >
                      Quick Start
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {categories.map((category, index) => (
                    <div key={index} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-5 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                      <div className="flex items-center mb-4 gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center flex-shrink-0">
                          {React.cloneElement(category.icon as React.ReactElement, { size: 16 })}
                        </div>
                        <h2 className="text-sm font-bold text-gray-900 dark:text-white">{category.title}</h2>
                      </div>
                      <ul className="space-y-1">
                        {category.articles.map((article, idx) => (
                          <li key={idx}>
                            <button
                              onClick={() => showArticle(category.title, article)}
                              className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 w-full text-left text-sm py-1 px-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors group"
                            >
                              <ChevronRight size={13} className="flex-shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 transition-colors" />
                              <span className="leading-snug">{article.title}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
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
                      title: "ai-relay v0.4.33: server mode and PerTurnRuntime",
                      tag: "Updated",
                      tagColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
                      desc: "ai-relay now ships a server mode (ai-relay serve) for persistent daemon deployments and a PerTurnRuntime for multi-turn conversations with --resume support. Structured events include reasoning, tool_call, file diffs, quota_warning, context_warning, and context_compacted.",
                      date: "June 2026",
                    },
                    {
                      title: "ohwise-mcp v0.2.0: all graph extras",
                      tag: "New",
                      tagColor: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
                      desc: "ohwise-mcp now exposes knowledge graph CRUD, agent pipeline management, code context tools (codebase2graph), document retrieval (docs2graph), and schema ranking (graph2sql) as MCP tools for Claude Code, Cursor, and any MCP client.",
                      date: "June 2026",
                    },
                    {
                      title: "Studio artifact panel: [ARTIFACT] syntax",
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
