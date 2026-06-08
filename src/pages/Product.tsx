
import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTASection from "../components/sections/CTASection";
import Infrastructure from "../components/sections/Infrastructure";
import { CheckCircle, Zap, Database, Users, Brain, GitBranch, Code2, Terminal, Layers, Network, FlaskConical, Shield, ArrowRight, Cpu, Globe, Lock, Key, BarChart2 } from "lucide-react";

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-16">

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Multi-agent AI platform — production-ready
              </div>
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight mb-6">
                The architecture behind
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  production multi-agent AI
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                OhWise ships every layer a production AI system needs: DAG orchestration, structured agent coordination, real-time streaming, graph-native context retrieval, and a browser-based AI coding agent terminal.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href="https://cloud.ohwise.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors"
                >
                  Get started <ArrowRight size={16} />
                </a>
                <a
                  href="/open-source"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-gray-300 hover:text-white hover:border-white/50 rounded-lg font-medium transition-colors"
                >
                  Open-source packages
                </a>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { value: "5", label: "AI agents supported" },
                { value: "5", label: "Open-source PyPI packages" },
                { value: "DAG", label: "Execution model" },
                { value: "WebSocket", label: "Real-time streaming" },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/5">
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DAG + Coordinator Architecture */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll">
                <div className="mb-4 inline-block p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                  <GitBranch className="w-8 h-8 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  DAG-based multi-agent orchestration
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  OhWise models AI workflows as directed acyclic graphs. Each node is an independent agent or Lambda function with typed input/output contracts. Parallel branches execute concurrently, conditional edges route based on agent output, and every step is independently replayable.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Planner → Executor → Evaluator coordinator loop",
                    "Stateless Lambda dispatch to AI agents",
                    "Typed state propagation across nodes",
                    "Parallel branch execution where graph permits",
                    "Per-node observability: inputs, outputs, token usage, latency",
                    "Resume from any checkpoint — no lost context on restart",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-on-scroll rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-8">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Coordinator loop</p>
                <div className="space-y-3">
                  {[
                    { label: "Planner", color: "bg-indigo-500", desc: "Decomposes task → subtask DAG" },
                    { label: "Executor", color: "bg-purple-500", desc: "Runs each node, emits structured output" },
                    { label: "Evaluator", color: "bg-emerald-500", desc: "Scores output, decides pass/retry/escalate" },
                    { label: "Artifact", color: "bg-sky-500", desc: "Synthesizes final result for user" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600">
                      <div className={`w-2 h-8 rounded-full ${step.color}`} />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{step.label}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lab — AI Coding Agent Terminal */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 animate-on-scroll rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-900 overflow-hidden">
                {/* Terminal mockup */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
                  <span className="ml-2 text-xs text-gray-400">Lab — claude-code session</span>
                </div>
                <div className="p-5 font-mono text-xs space-y-2 text-gray-300">
                  <div className="text-emerald-400">● Connected · claude-sonnet-4-6 · /workspace/project</div>
                  <div className="text-gray-400 mt-3">You: refactor the auth middleware to use JWT validation</div>
                  <div className="text-blue-400 mt-2">⟳ Reasoning...</div>
                  <div className="text-gray-300 mt-1 pl-2 border-l border-gray-600 text-gray-400">I'll read the current middleware first, then update the validation logic to use python-jose for JWT verification.</div>
                  <div className="text-yellow-400 mt-2">▶ tool_call: Read · src/middleware/auth.py</div>
                  <div className="text-yellow-400">▶ tool_call: Edit · src/middleware/auth.py</div>
                  <div className="text-gray-300 mt-2 pl-2 border-l-2 border-indigo-500 text-xs">
                    <span className="text-red-400">- verify_token(token: str) -&gt; dict:</span><br />
                    <span className="text-green-400">+ verify_jwt(token: str, secret: str) -&gt; JWTPayload:</span>
                  </div>
                  <div className="text-emerald-400 mt-2">✓ Done · 2 files modified · 847ms</div>
                </div>
              </div>
              <div className="order-1 md:order-2 animate-on-scroll">
                <div className="mb-4 inline-block p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Terminal className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Lab: browser-based AI coding agent terminal
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Lab connects Claude Code, OpenAI Codex, Gemini CLI, and Snowflake Cortex to a live web interface via the open-source <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">ai-relay</code> package. Every reasoning step, tool call, file diff, and quota warning streams in real time.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "5 AI coding agents: Claude Code, Codex, Gemini CLI, Cortex, and more",
                    "Real-time WebSocket streaming of agent reasoning and tool calls",
                    "File diff viewer with inline before/after display",
                    "Permission system: allow / deny / allow-for-session",
                    "Multi-panel split view for side-by-side session comparison",
                    "Context compaction, /compact and /clear commands",
                    "Voice input (Whisper) and TTS output",
                    "MCP server integration per session",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="/documentation" className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:underline">
                  Read the Lab docs <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Studio — multi-agent coordination */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll">
                <div className="mb-4 inline-block p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Layers className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Studio: multi-agent coordination with artifact panel
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Studio runs the full planner → executor → evaluator coordinator loop inside a structured UI. Agents collaborate across a shared group session, generating artifacts that appear in a dedicated panel. Human-in-the-loop intervention at any step.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Chat + Artifact tab UI — keep conversations and outputs separate",
                    "Only [ARTIFACT]-marked synthesized output shown in artifact panel",
                    "Group-scoped session isolation via group_id",
                    "Human intervention: pause, redirect, or approve agent decisions",
                    "Per-session file workspace with HTML, code, and Markdown rendering",
                    "Real-time event forwarding from Lab sessions into Studio",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-on-scroll rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 overflow-hidden">
                {/* Studio UI mockup */}
                <div className="flex border-b border-gray-200 dark:border-gray-700">
                  <button className="flex-1 py-3 text-xs font-semibold text-purple-600 border-b-2 border-purple-600">Artifact</button>
                  <button className="flex-1 py-3 text-xs text-gray-400">Chat</button>
                </div>
                <div className="p-5 space-y-3">
                  <div className="p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600">
                    <p className="text-xs text-purple-500 font-semibold mb-1">ARTIFACT · executive-summary.md</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      ## Market Analysis Summary<br />
                      Based on analysis of 847 data points across 12 sectors, the highest-ROI opportunity is in the mid-market SaaS segment (ARR $1M–$10M)...
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">P</div>
                    <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-xs text-gray-600 dark:text-gray-300 flex-1">
                      Planner: Breaking down into 4 subtasks — data fetch, analysis, synthesis, validation.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">E</div>
                    <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-xs text-gray-600 dark:text-gray-300 flex-1">
                      Evaluator: Synthesis scored 0.91/1.0 — meets quality threshold. Approving artifact.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Graph-native context */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 animate-on-scroll rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-700 p-8">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">graph2sql · schema graph</p>
                <svg width="100%" height="180" viewBox="0 0 360 180">
                  {/* Edges */}
                  <line x1="180" y1="90" x2="80" y2="45" stroke="#6366f1" strokeWidth="1.5" opacity="0.6" />
                  <line x1="180" y1="90" x2="280" y2="45" stroke="#6366f1" strokeWidth="1.5" opacity="0.6" />
                  <line x1="180" y1="90" x2="60" y2="145" stroke="#6366f1" strokeWidth="1.5" opacity="0.4" />
                  <line x1="180" y1="90" x2="300" y2="145" stroke="#6366f1" strokeWidth="1.5" opacity="0.4" />
                  <line x1="180" y1="90" x2="180" y2="160" stroke="#6366f1" strokeWidth="1.5" opacity="0.4" />
                  <line x1="80" y1="45" x2="280" y2="45" stroke="#6366f1" strokeWidth="1" opacity="0.2" />
                  {/* Nodes */}
                  <circle cx="180" cy="90" r="22" fill="#6366f1" />
                  <circle cx="80" cy="45" r="16" fill="#8b5cf6" opacity="0.9" />
                  <circle cx="280" cy="45" r="16" fill="#8b5cf6" opacity="0.9" />
                  <circle cx="60" cy="145" r="14" fill="#a78bfa" opacity="0.7" />
                  <circle cx="300" cy="145" r="14" fill="#a78bfa" opacity="0.7" />
                  <circle cx="180" cy="160" r="14" fill="#a78bfa" opacity="0.7" />
                  {/* Labels */}
                  <text x="180" y="94" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">orders</text>
                  <text x="80" y="49" textAnchor="middle" fill="white" fontSize="8">customers</text>
                  <text x="280" y="49" textAnchor="middle" fill="white" fontSize="8">products</text>
                  <text x="60" y="149" textAnchor="middle" fill="white" fontSize="7">addresses</text>
                  <text x="300" y="149" textAnchor="middle" fill="white" fontSize="7">inventory</text>
                  <text x="180" y="164" textAnchor="middle" fill="white" fontSize="7">payments</text>
                </svg>
                <div className="mt-4 bg-gray-900 rounded-lg p-3 font-mono text-xs text-gray-300">
                  <span className="text-gray-500"># PageRank → relevant subgraph for query:</span><br />
                  <span className="text-gray-400"># "total revenue by customer last 30 days"</span><br />
                  <span className="text-emerald-400">ranked = graph.rank(query, k=3)</span><br />
                  <span className="text-gray-400"># → [orders, customers, payments]</span>
                </div>
              </div>
              <div className="order-1 md:order-2 animate-on-scroll">
                <div className="mb-4 inline-block p-3 bg-sky-100 dark:bg-sky-900/30 rounded-lg">
                  <Network className="w-8 h-8 text-sky-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Graph-native context retrieval
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  OhWise replaces flat embedding retrieval with structured knowledge graphs. Code, schemas, and documents become typed graphs of nodes and edges. Personalized PageRank ranks the most structurally relevant nodes for each query — agents get precise, relationship-aware context.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "graph2sql: schema graph for accurate text-to-SQL across 100+ table databases",
                    "codebase2graph: call graphs, entity graphs, dependency graphs from any repo",
                    "docs2graph: 15+ file formats — PDF, DOCX, HTML, Markdown, CSV, JSON",
                    "Personalized PageRank for relevance ranking — no vector similarity",
                    "Context size reduced without losing structural signal",
                    "No LLM dependency — pure Python, bring your own model",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="/open-source" className="inline-flex items-center gap-1 text-sm font-semibold text-sky-600 hover:underline">
                  Explore open-source packages <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Real-time streaming + WebSocket */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="mb-4 inline-block p-3 bg-rose-100 dark:bg-rose-900/30 rounded-lg">
                <Zap className="w-8 h-8 text-rose-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Real-time WebSocket streaming
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Every agent step — reasoning traces, tool calls, file diffs, quota warnings, context compaction events — streams over WebSocket to the frontend in structured JSON. No polling. No opaque black boxes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { type: "reasoning", color: "bg-blue-500", desc: "Agent thinking and planning steps", example: '{"type":"reasoning","text":"I need to check the schema first..."}' },
                { type: "tool_call", color: "bg-yellow-500", desc: "Tool invocations with file/param info", example: '{"type":"tool_call","tool":"Edit","file":"auth.py"}' },
                { type: "context_warning", color: "bg-orange-500", desc: "Context window fill percentage", example: '{"type":"context_warning","context_pct":82}' },
                { type: "session_end", color: "bg-emerald-500", desc: "Exit code and session summary", example: '{"type":"session_end","exit_code":0}' },
              ].map((event, i) => (
                <div key={i} className="animate-on-scroll p-5 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                  <div className={`w-2 h-2 rounded-full ${event.color} mb-3`} />
                  <p className="text-xs font-mono font-semibold text-gray-800 dark:text-gray-200 mb-1">{event.type}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{event.desc}</p>
                  <pre className="text-xs bg-gray-900 text-gray-400 rounded p-2 overflow-x-auto leading-relaxed">{event.example}</pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="mb-4 inline-block p-3 bg-gray-200 dark:bg-gray-700 rounded-lg">
                <Cpu className="w-8 h-8 text-gray-600 dark:text-gray-300" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Built on production-grade infrastructure
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                No magic abstractions. Every layer is a battle-tested component you can reason about.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Backend",
                  icon: <Database className="w-5 h-5 text-indigo-600" />,
                  items: ["FastAPI — async Python API server", "MongoDB — document store for agents/sessions", "Redis — pub/sub event bus + caching layer", "Docker Compose — containerized services", "Nginx — TLS termination + routing"],
                },
                {
                  title: "Frontend",
                  icon: <Globe className="w-5 h-5 text-blue-600" />,
                  items: ["Next.js 14 + TypeScript", "SCSS + Tailwind CSS", "WebSocket client for agent streaming", "Split-panel session comparison view", "Voice input via Whisper API"],
                },
                {
                  title: "AI & Agents",
                  icon: <Brain className="w-5 h-5 text-purple-600" />,
                  items: ["Claude (Anthropic) — primary reasoning model", "OpenAI Codex CLI — code generation", "Gemini CLI — Google's coding assistant", "Snowflake Cortex — enterprise LLM", "Model-agnostic: swap per agent node"],
                },
              ].map((stack, i) => (
                <div key={i} className="animate-on-scroll bg-white dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {stack.icon}
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">{stack.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {stack.items.map((item, j) => (
                      <li key={j} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Source section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                5 open-source packages on PyPI
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                The graph context layer powering OhWise is fully open source. No LLM dependency, no lock-in.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { name: "ai-relay", version: "0.4.32", desc: "WebSocket relay for AI coding agent CLIs", install: "pip install ai-relay" },
                { name: "graph2sql", version: "0.2.0", desc: "Graph-based schema ranking for text-to-SQL", install: "pip install graph2sql" },
                { name: "docs2graph", version: "0.3.2", desc: "Document → knowledge graph extraction", install: "pip install docs2graph" },
                { name: "codebase2graph", version: "0.1.0", desc: "Code repository → queryable knowledge graph", install: "pip install codebase2graph" },
                { name: "ohwise-mcp", version: "0.2.0", desc: "MCP server for graph context + agent tools", install: "pip install ohwise-mcp" },
              ].map((pkg, i) => (
                <div key={i} className="animate-on-scroll p-5 rounded-xl border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50 dark:bg-indigo-900/10 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-gray-900 dark:text-white font-mono">{pkg.name}</span>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">v{pkg.version}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{pkg.desc}</p>
                  <code className="text-xs bg-gray-900 text-gray-300 rounded px-3 py-1.5 block">{pkg.install}</code>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a href="/open-source" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:underline">
                View all packages with code examples <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* Enterprise & Multi-tenant */}
        <section className="py-24 bg-gray-950 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-sm text-indigo-300 mb-6">
                <Shield size={14} className="text-indigo-400" />
                Enterprise &amp; Multi-tenant
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                Isolated tenants. RBAC. Audit logs.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Enterprise-grade from day one.
                </span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Every organization is a fully isolated tenant. Users, roles, sessions, agents, and data are scoped at the MongoDB <code className="text-indigo-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">org_id</code> level — no cross-tenant data paths exist by design.
              </p>
            </div>

            {/* Org hierarchy */}
            <div className="max-w-3xl mx-auto mb-16 animate-on-scroll">
              <div className="rounded-xl border border-white/10 bg-white/5 p-8">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-6 text-center">Organization hierarchy &amp; namespacing</p>
                <div className="flex flex-col items-center gap-3 font-mono text-sm">
                  <div className="w-full max-w-md bg-indigo-600/20 border border-indigo-500/40 rounded-lg px-5 py-3 text-center">
                    <span className="text-indigo-300 font-semibold">Organization</span>
                    <span className="text-gray-500 ml-2 text-xs">org_id: acme-corp</span>
                  </div>
                  <div className="flex gap-6 items-start flex-wrap justify-center">
                    {[
                      { label: "Admin", color: "text-purple-300 border-purple-500/40 bg-purple-600/20", desc: "Users · Keys · Quotas · Audit" },
                      { label: "Member", color: "text-emerald-300 border-emerald-500/40 bg-emerald-600/20", desc: "Sessions · Workflows · Agents" },
                      { label: "Viewer", color: "text-gray-300 border-gray-600/40 bg-gray-700/50", desc: "Read-only: artifacts · logs" },
                    ].map((role) => (
                      <div key={role.label} className="flex flex-col items-center gap-1">
                        <div className="w-px h-5 bg-white/20" />
                        <div className={`border rounded-lg px-4 py-2 text-center min-w-[130px] ${role.color}`}>
                          <p className="font-semibold text-xs">{role.label}</p>
                          <p className="text-gray-500 text-xs mt-0.5">{role.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-px h-5 bg-white/20" />
                  <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-lg px-5 py-3 text-center">
                    <span className="text-gray-300 font-semibold text-xs">Per-user isolated workspace</span>
                    <p className="text-gray-500 text-xs mt-1">Lab sessions · Studio agents · Knowledge graphs · Artifacts · File diffs</p>
                  </div>
                  <div className="w-px h-4 bg-white/10" />
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Lock size={12} />
                    MongoDB queries always filtered by <code className="text-indigo-400 bg-white/5 px-1.5 py-0.5 rounded">org_id</code> — no cross-tenant data paths
                  </div>
                </div>
              </div>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
              {[
                {
                  icon: <Users className="w-5 h-5 text-purple-400" />,
                  border: "border-purple-500/30 bg-purple-500/5",
                  title: "Workspace & Tenant Isolation",
                  items: [
                    "Each org is a fully isolated tenant — org_id scoping at DB layer",
                    "Multiple users per org with Admin / Member / Viewer roles",
                    "Per-user isolated workspaces: Lab sessions, Studio agents, artifacts",
                    "No cross-tenant data bleed — enforced at API and database level",
                    "Session history, knowledge graphs, and file diffs persist per user",
                    "Switching sessions or users never leaks state",
                  ],
                },
                {
                  icon: <Shield className="w-5 h-5 text-emerald-400" />,
                  border: "border-emerald-500/30 bg-emerald-500/5",
                  title: "Security & Compliance",
                  items: [
                    "JWT-based authentication — short-lived tokens per user",
                    "Scoped, individually revocable API keys per organization",
                    "Full audit logs: agent actions, tool calls, file diffs, approval decisions",
                    "Human-in-the-loop: designated reviewers approve/reject tool calls",
                    "SSO/OAuth2 ready (OAuth2 already implemented for Claude & Gemini)",
                    "Isolated Docker containers — workspace data residency per user",
                  ],
                },
                {
                  icon: <Key className="w-5 h-5 text-yellow-400" />,
                  border: "border-yellow-500/30 bg-yellow-500/5",
                  title: "Agent & Resource Management",
                  items: [
                    "Per-org agent quotas and resource limits configurable by admin",
                    "Studio coordinator agents scoped to group_id (org/team level)",
                    "Lab sessions isolated per user — no state bleed between sessions",
                    "Tool permission system: allow / deny / allow-for-session per category",
                    "Multi-region deployment: stateless FastAPI + Redis pub/sub fanout",
                    "Bring your own model: Claude, GPT-4, Gemini, Cortex — per org",
                  ],
                },
                {
                  icon: <BarChart2 className="w-5 h-5 text-rose-400" />,
                  border: "border-rose-500/30 bg-rose-500/5",
                  title: "Admin Dashboard",
                  items: [
                    "User management: invite, role assignment, deactivation within org",
                    "Session and agent activity monitoring in real time",
                    "Usage analytics: tokens consumed, tool calls, artifacts generated",
                    "Billing and quota management per organization",
                    "Audit log export for compliance and security review",
                    "API key lifecycle: create, scope, rotate, revoke",
                  ],
                },
              ].map((card, i) => (
                <div key={i} className={`animate-on-scroll rounded-xl border ${card.border} p-6`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      {card.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-400 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* RBAC table */}
            <div className="max-w-3xl mx-auto mb-16 animate-on-scroll">
              <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10">
                  <p className="text-sm font-semibold text-white">Role permissions at a glance</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left px-6 py-3 text-gray-400 font-medium">Capability</th>
                        <th className="text-center px-4 py-3 text-purple-300 font-medium">Admin</th>
                        <th className="text-center px-4 py-3 text-emerald-300 font-medium">Member</th>
                        <th className="text-center px-4 py-3 text-gray-400 font-medium">Viewer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Manage users &amp; roles", true, false, false],
                        ["Rotate &amp; revoke API keys", true, false, false],
                        ["Configure agent quotas", true, false, false],
                        ["Approve tool calls org-wide", true, false, false],
                        ["Export audit logs", true, false, false],
                        ["Create &amp; run Lab sessions", true, true, false],
                        ["Run Studio workflows", true, true, false],
                        ["View artifacts &amp; session logs", true, true, true],
                        ["Read knowledge graphs", true, true, true],
                      ].map(([cap, admin, member, viewer], i) => (
                        <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                          <td className="px-6 py-3 text-gray-300" dangerouslySetInnerHTML={{ __html: cap as string }} />
                          <td className="text-center px-4 py-3">{admin ? <span className="text-emerald-400">✓</span> : <span className="text-gray-700">—</span>}</td>
                          <td className="text-center px-4 py-3">{member ? <span className="text-emerald-400">✓</span> : <span className="text-gray-700">—</span>}</td>
                          <td className="text-center px-4 py-3">{viewer ? <span className="text-emerald-400">✓</span> : <span className="text-gray-700">—</span>}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Enterprise integrations strip */}
            <div className="max-w-5xl mx-auto animate-on-scroll">
              <p className="text-xs text-gray-500 uppercase tracking-widest text-center mb-6">Enterprise integrations</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "MCP Server", desc: "Per-session or org-wide context tools" },
                  { label: "Snowflake Cortex", desc: "Enterprise LLM for data warehouse context" },
                  { label: "OAuth2 / SSO", desc: "Claude, Gemini OAuth flows; SSO ready" },
                  { label: "REST API", desc: "All capabilities available for automation" },
                ].map((intg, i) => (
                  <div key={i} className="rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-center">
                    <p className="text-sm font-semibold text-white mb-1">{intg.label}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{intg.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Infrastructure / Deployment */}
        <Infrastructure />

        {/* CTA */}
        <CTASection
          title="Built by engineers, for engineers"
          subtitle="OhWise is open-source at the core. Start with the PyPI packages, or connect your AI coding agents to Lab today."
          primaryButtonText="Get Started"
          primaryButtonLink="https://cloud.ohwise.com/"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Product;
