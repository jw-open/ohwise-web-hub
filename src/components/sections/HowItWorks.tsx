import React from "react";

const steps = [
  {
    number: "01",
    title: "Define your schema or documents",
    description:
      "Point graph2sql at your database schema or doc2graph at your files. The library builds a knowledge graph — tables, columns, and relationships as nodes and edges.",
    code: `graph = SchemaGraph()
graph.add_node("orders", "orders", content="id, customer_id, total")
graph.add_edge("orders", "customers", "belongs_to")`,
  },
  {
    number: "02",
    title: "Rank relevant context",
    description:
      "Ask a question. Personalized PageRank scores every node against your query and returns only the relevant subgraph — not the whole schema.",
    code: `context = graph.rank("revenue by customer last month", k=3)
# Returns {"nodes": [...], "edges": [...]}
# Only the tables that matter. Fewer tokens. Better SQL.`,
  },
  {
    number: "03",
    title: "Plug into your LLM",
    description:
      "Pass the ranked context to any model. OhWise handles agent coordination, state, and retry logic — you choose which LLM runs each step.",
    code: `# context["nodes"] + context["edges"] → your prompt
# Works with GPT-4, Claude, Llama, Qwen, Mistral...
# No model bundled. No vendor lock-in.`,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            How it works
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Three steps from schema to SQL-ready context — no black boxes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step, idx) => (
            <div key={step.number} className="flex gap-6">
              {/* Step number + connector */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-2 border-indigo-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-indigo-600">{step.number}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-px flex-1 bg-gray-200 dark:bg-gray-800 mt-3" />
                )}
              </div>

              {/* Content */}
              <div className="pb-12 flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="rounded-lg bg-gray-900 dark:bg-gray-800 border border-gray-800 dark:border-gray-700 p-4">
                  <pre className="text-sm font-mono text-gray-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
