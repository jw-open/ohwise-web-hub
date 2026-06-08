import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTASection from "../components/sections/CTASection";
import { GitBranch, Terminal, Network, Package, Cpu, Shield, ExternalLink } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-gray-950 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Open Source
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">OhWise</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
                A multi-agent AI platform built from first principles — DAG orchestration, graph-native context retrieval, and open-source tooling for AI engineers.
              </p>
            </div>
          </div>
          <div className="h-16 bg-gradient-to-b from-gray-950 to-white dark:to-gray-900" />
        </section>

        {/* What we built */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">What we built and why</h2>
              <div className="prose dark:prose-invert prose-lg mx-auto text-gray-600 dark:text-gray-300 leading-relaxed space-y-5">
                <p>
                  OhWise started from a concrete problem: every serious AI team eventually builds the same scaffolding. Prompt chaining, retry logic, context injection, state management, tool-use orchestration, evaluation loops. The scaffolding grows faster than the product — and it is never generic enough to reuse across agents.
                </p>
                <p>
                  We built OhWise to make the harness a platform primitive, not a per-team artifact. The core abstraction is a <strong>DAG</strong> — directed acyclic graph — where each node is an agent, Lambda function, or tool call with a typed input/output contract. The platform handles execution order, parallelism, retry, and state serialization. Engineers define what needs to happen and in what order; OhWise handles how.
                </p>
                <p>
                  The second insight was about context. Most teams use flat vector search to retrieve relevant chunks before an LLM call. But real-world data has structure — foreign keys between database tables, call chains between functions, entity co-occurrences in documents. Vector similarity misses these relationships. We built a graph-native retrieval layer using Personalized PageRank on typed knowledge graphs, and extracted it as three standalone open-source packages: <strong>graph2sql</strong>, <strong>docs2graph</strong>, and <strong>codebase2graph</strong>.
                </p>
                <p>
                  The third piece was observability of AI coding agents. Developers run Claude Code, Codex, and Gemini CLI locally — powerful tools, but isolated to a terminal. <strong>Lab</strong> connects these agents to a web interface via the open-source <strong>ai-relay</strong> package, streaming every reasoning step, tool call, file diff, and quota warning in real time. Teams can run long coding sessions from any device, share agent outputs, and inspect exactly what the agent did.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering highlights */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Engineering highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <GitBranch className="w-5 h-5 text-indigo-600" />,
                    title: "DAG-based multi-agent execution",
                    description: "Pipelines modeled as directed acyclic graphs with parallel branch execution, typed state propagation, and per-node replay. The planner → executor → evaluator coordinator loop handles complex multi-step tasks with human-in-the-loop intervention.",
                  },
                  {
                    icon: <Network className="w-5 h-5 text-sky-600" />,
                    title: "Personalized PageRank context retrieval",
                    description: "Graph algorithms replace vector similarity for context retrieval. Schema graphs, code call graphs, and document knowledge graphs are traversed with Personalized PageRank to surface structurally relevant context agents actually need.",
                  },
                  {
                    icon: <Terminal className="w-5 h-5 text-emerald-600" />,
                    title: "Real-time WebSocket streaming",
                    description: "Redis pub/sub fans out structured agent events — reasoning traces, tool calls, file diffs, quota warnings — to connected WebSocket clients. The ai-relay open-source package handles the CLI subprocess protocol and event parsing.",
                  },
                  {
                    icon: <Cpu className="w-5 h-5 text-purple-600" />,
                    title: "FastAPI + MongoDB + Redis backend",
                    description: "Async Python API server backed by MongoDB for document storage and Redis for pub/sub event bussing and caching. All services containerized with Docker Compose, served behind Nginx with TLS termination.",
                  },
                  {
                    icon: <Package className="w-5 h-5 text-rose-600" />,
                    title: "5 open-source PyPI packages",
                    description: "The graph context layer is fully open source: ai-relay (v0.4.32), graph2sql (v0.2.0), docs2graph (v0.3.2), codebase2graph (v0.1.0), ohwise-mcp (v0.2.0). All pure Python with no LLM dependency.",
                  },
                  {
                    icon: <Shield className="w-5 h-5 text-gray-600" />,
                    title: "Self-hosted, fully private",
                    description: "Deploy on bare-metal or any cloud VM. MongoDB and Redis run as shared infrastructure. Agent reasoning and data never leave your network. Only outbound calls are to your chosen LLM endpoints.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-600 rounded-lg">
                        {item.icon}
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open source */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Open source at the core</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                The graph context layer powering OhWise is extracted into standalone packages so any team can use graph-native retrieval without adopting the full platform. All packages ship to PyPI with zero LLM dependencies.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left mb-10">
                {[
                  { name: "ai-relay", link: "https://github.com/jw-open/ai-relay", desc: "WebSocket relay for AI coding agent CLIs" },
                  { name: "graph2sql", link: "https://github.com/jw-open/graph2sql", desc: "Schema graph ranking for text-to-SQL" },
                  { name: "docs2graph", link: "https://github.com/jw-open/doc2graph", desc: "Document → knowledge graph" },
                  { name: "codebase2graph", link: "https://github.com/jw-open/code2graph", desc: "Code repository → knowledge graph" },
                  { name: "ohwise-mcp", link: "https://github.com/jw-open/ohwise-mcp", desc: "MCP server for graph context + agents" },
                ].map((pkg, i) => (
                  <a
                    key={i}
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-700 transition-colors group"
                  >
                    <Package className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white font-mono group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{pkg.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{pkg.desc}</p>
                    </div>
                    <ExternalLink size={12} className="text-gray-400 mt-0.5 ml-auto flex-shrink-0" />
                  </a>
                ))}
              </div>
              <a
                href="/open-source"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:underline"
              >
                View packages with install instructions and code examples
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Built for engineers who care about correctness"
          subtitle="Start with the open-source packages or try the full platform today."
          primaryButtonText="Get Started"
          primaryButtonLink="https://cloud.ohwise.com/"
        />
      </main>

      <Footer />
    </div>
  );
};

export default About;
