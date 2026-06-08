import React from "react";
import { ArrowRight, GitBranch, Layers, BarChart2, Terminal, Package } from "lucide-react";
import { Button } from "../ui/button";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gray-950 text-white">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Multi-agent AI platform — production-ready
          </div>

          {/* Headline */}
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight mb-6">
            Orchestrate AI agents
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              with graph-native context.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            OhWise is a DAG-based multi-agent execution engine — Lab for browser-based AI coding agent sessions, Studio for coordinated multi-agent workflows, and open-source graph packages for structured context retrieval.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-16">
            <a
              href="https://cloud.ohwise.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-2 w-full"
              >
                Get started
                <ArrowRight size={16} />
              </Button>
            </a>
            <a
              href="/open-source"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/50 flex items-center justify-center gap-2 w-full"
              >
                <Package size={16} />
                5 PyPI packages
              </Button>
            </a>
          </div>

          {/* Stat pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {[
              "Claude Code · Codex · Gemini CLI · Cortex",
              "DAG + Lambda execution",
              "Real-time WebSocket streaming",
              "Personalized PageRank context",
            ].map((stat, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>

        {/* Platform visual */}
        <div className="mt-4 max-w-4xl mx-auto">
          <div className="rounded-xl border border-white/10 bg-gray-900/60 backdrop-blur p-8">
            <p className="text-xs text-gray-500 uppercase tracking-widest text-center mb-8">
              Platform capabilities
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">DAG orchestration</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Parallel branches, typed state, planner → executor → evaluator loop
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Graph context</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Code, schema, and document graphs with Personalized PageRank ranking
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Lab terminal</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Browser-based AI coding agent sessions with real-time diff streaming
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-rose-600/20 border border-rose-500/30 flex items-center justify-center">
                  <BarChart2 className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Full observability</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Every step logged — reasoning traces, tool calls, token usage, latency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-24 bg-gradient-to-b from-gray-950 to-white dark:to-gray-900" />
    </div>
  );
};

export default Hero;
