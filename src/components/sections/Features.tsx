import React from "react";
import { GitBranch, Network, Code2, FlaskConical, Plug, Shield, Users } from "lucide-react";

const features = [
  {
    id: 1,
    title: "DAG-based pipeline execution",
    description:
      "Define ML workflows as directed acyclic graphs with typed state. Parallel branches execute concurrently, conditional edges route based on output, and every node is independently replayable.",
    icon: <GitBranch className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Graph-native context retrieval",
    description:
      "Code, schema, and document knowledge graphs replace flat file embeddings. Personalized PageRank ranks the most structurally relevant nodes for each agent: call graphs, entity graphs, foreign-key graphs.",
    icon: <Network className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "AI coding agent integration",
    description:
      "Lab streams Claude Code, Codex, and Gemini CLI sessions over WebSocket. Every reasoning step, tool call, and file diff is visible in real time, shareable, reviewable, and logged.",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Structured evaluation loops",
    description:
      "Run eval passes as DAG nodes with judge agents. Compare model versions, score per-sample traces, and aggregate metrics without writing custom harness code for every experiment.",
    icon: <FlaskConical className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "Bring your own LLM",
    description:
      "OhWise is model-agnostic. Use GPT-4, Claude, Llama, Mistral, or any API-compatible model. Swap models per agent node: different tasks, different models, same pipeline.",
    icon: <Plug className="w-5 h-5" />,
  },
  {
    id: 6,
    title: "Self-host, fully private",
    description:
      "Deploy on any infrastructure. All orchestration, context management, and agent coordination runs locally. Only outbound traffic is to the chosen LLM endpoint.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    id: 7,
    title: "Team collaboration",
    description:
      "Invite teammates, assign roles, and share agents and knowledge across your account. Group chat lets multiple users work alongside agents in the same conversation — mention an agent to bring it in on demand.",
    icon: <Users className="w-5 h-5" />,
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Infrastructure for agentic AI systems
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Every layer an AI/ML engineer needs: orchestration, context, observability, and evaluation, in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 mb-4">
                {feature.icon}
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
