import React from "react";
import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gray-950 text-white">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open source · Self-hosted · Bring your own LLM
          </div>

          {/* Headline */}
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight mb-6">
            Your AI platform.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Your infrastructure.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            OhWise orchestrates AI agents as DAGs — coordinate specialized
            agents, connect your databases and documents, and run everything
            on your own server. No data leaves your infrastructure.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://cloud.ohwise.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-2 w-full sm:w-auto"
              >
                Get started
                <ArrowRight size={16} />
              </Button>
            </a>
            <a
              href="https://github.com/jw-open/graph2sql"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-gray-300 hover:bg-white/5 flex items-center gap-2 w-full sm:w-auto"
              >
                <Github size={16} />
                View on GitHub
              </Button>
            </a>
          </div>
        </div>

        {/* Code snippet preview */}
        <div className="mt-16 md:mt-20 max-w-2xl mx-auto">
          <div className="rounded-xl border border-white/10 bg-gray-900 overflow-hidden">
            {/* Terminal bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-gray-950/60">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-gray-500 font-mono">graph2sql · schema context</span>
            </div>
            <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto">
              <code>
                <span className="text-gray-500"># Build a schema graph — no LLM needed</span>{"\n"}
                <span className="text-indigo-400">from</span>{" "}
                <span className="text-white">graph2sql</span>{" "}
                <span className="text-indigo-400">import</span>{" "}
                <span className="text-white">SchemaGraph</span>{"\n\n"}
                <span className="text-white">graph</span>{" "}
                <span className="text-gray-400">=</span>{" "}
                <span className="text-emerald-400">SchemaGraph</span>
                <span className="text-gray-400">()</span>{"\n"}
                <span className="text-white">graph</span>
                <span className="text-gray-400">.</span>
                <span className="text-yellow-300">add_node</span>
                <span className="text-gray-400">(</span>
                <span className="text-orange-300">"orders"</span>
                <span className="text-gray-400">,</span>{" "}
                <span className="text-orange-300">"orders"</span>
                <span className="text-gray-400">,</span>{" "}
                <span className="text-white">content</span>
                <span className="text-gray-400">=</span>
                <span className="text-orange-300">"id, customer_id, total"</span>
                <span className="text-gray-400">)</span>{"\n"}
                <span className="text-white">graph</span>
                <span className="text-gray-400">.</span>
                <span className="text-yellow-300">add_node</span>
                <span className="text-gray-400">(</span>
                <span className="text-orange-300">"customers"</span>
                <span className="text-gray-400">,</span>{" "}
                <span className="text-orange-300">"customers"</span>
                <span className="text-gray-400">,</span>{" "}
                <span className="text-white">content</span>
                <span className="text-gray-400">=</span>
                <span className="text-orange-300">"id, name, email"</span>
                <span className="text-gray-400">)</span>{"\n\n"}
                <span className="text-gray-500"># Rank relevant tables for this query</span>{"\n"}
                <span className="text-white">context</span>{" "}
                <span className="text-gray-400">=</span>{" "}
                <span className="text-white">graph</span>
                <span className="text-gray-400">.</span>
                <span className="text-yellow-300">rank</span>
                <span className="text-gray-400">(</span>
                <span className="text-orange-300">"total revenue by customer"</span>
                <span className="text-gray-400">, </span>
                <span className="text-white">k</span>
                <span className="text-gray-400">=</span>
                <span className="text-purple-300">3</span>
                <span className="text-gray-400">)</span>
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Fade to white transition */}
      <div className="h-24 bg-gradient-to-b from-gray-950 to-white dark:to-gray-900" />
    </div>
  );
};

export default Hero;
