import React from "react";
import { MessageSquare, Database, FileText, GitBranch, Plug, Shield } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Ask questions across your data",
    description:
      "Query databases, documents, and APIs in plain language. OhWise figures out which sources are relevant and assembles the answer — without you writing a single line of SQL.",
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Multi-agent task execution",
    description:
      "Complex workflows are broken into parallel agent tasks — each agent specialized for a subtask, coordinated by a central orchestrator. Faster, more accurate than a single prompt.",
    icon: <GitBranch className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Database-aware SQL generation",
    description:
      "Agents understand your schema — not just table names, but relationships and cardinality. Generates accurate SQL even across large, complex databases.",
    icon: <Database className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Document intelligence",
    description:
      "Upload reports, contracts, or knowledge bases. Agents extract structure, build knowledge graphs, and answer questions with traceable citations — not hallucinations.",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "Connect your existing tools",
    description:
      "OhWise integrates with your databases, APIs, and internal systems. Bring your own LLM — GPT-4, Claude, Llama, or any API-compatible model.",
    icon: <Plug className="w-5 h-5" />,
  },
  {
    id: 6,
    title: "Private and secure",
    description:
      "Self-host on your own infrastructure. All orchestration and context management runs locally. Only outbound call is to your chosen LLM — which you control.",
    icon: <Shield className="w-5 h-5" />,
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            One platform. Many agents. Real results.
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            OhWise replaces the patchwork of AI tools with a single platform
            where specialized agents collaborate on your behalf.
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
