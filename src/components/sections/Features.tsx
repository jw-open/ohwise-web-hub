import React from "react";
import { Database, GitBranch, Brain, Server, Package, Shield } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Text-to-SQL via graph2sql",
    description:
      "Schema-aware context selection using Personalized PageRank. Surfaces only the relevant tables — not the entire schema — before hitting your LLM.",
    icon: <Database className="w-5 h-5" />,
    tag: "open source",
  },
  {
    id: 2,
    title: "DAG-based agent orchestration",
    description:
      "Define multi-agent workflows as directed acyclic graphs. Each node is a specialized agent; edges are data dependencies. Parallel execution where possible.",
    icon: <GitBranch className="w-5 h-5" />,
    tag: "core",
  },
  {
    id: 3,
    title: "Knowledge graph (doc2graph)",
    description:
      "Extract structured knowledge graphs from documents, reports, and codebases. Query the graph instead of brute-force chunking.",
    icon: <Brain className="w-5 h-5" />,
    tag: "open source",
  },
  {
    id: 4,
    title: "Self-hosted, data stays private",
    description:
      "Runs entirely on your own server. MongoDB + Redis on bare metal. No vendor lock-in, no SaaS subscription required to process your private data.",
    icon: <Server className="w-5 h-5" />,
    tag: "infra",
  },
  {
    id: 5,
    title: "Bring your own LLM",
    description:
      "No model bundled. Connect GPT-4, Claude, Llama, Qwen, Mistral — or any API-compatible model. Swap models per agent or per task.",
    icon: <Package className="w-5 h-5" />,
    tag: "flexible",
  },
  {
    id: 6,
    title: "No data sent to the cloud",
    description:
      "All orchestration, state, and context management happens locally. Only outbound call is to your chosen LLM provider — which you control.",
    icon: <Shield className="w-5 h-5" />,
    tag: "privacy",
  },
];

const tagColors: Record<string, string> = {
  "open source": "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800",
  core: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-400 dark:border-indigo-800",
  infra: "bg-gray-50 text-gray-600 border-gray-200 dark:bg-gray-800/40 dark:text-gray-400 dark:border-gray-700",
  flexible: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800",
  privacy: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800",
};

const Features = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Built for engineers who want control
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            OhWise is infrastructure, not a SaaS product. You own the runtime,
            the data, and the model choices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
                  {feature.icon}
                </div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full border ${tagColors[feature.tag] ?? ""}`}
                >
                  {feature.tag}
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
