import React from "react";

const steps = [
  {
    number: "01",
    title: "Connect your data sources",
    description:
      "Point OhWise at your databases, document stores, or APIs. No data pipeline setup required — agents discover structure automatically.",
  },
  {
    number: "02",
    title: "Agents coordinate in parallel",
    description:
      "A coordinator agent breaks your request into subtasks and dispatches specialized agents — one for SQL generation, one for document search, one for synthesis. They run in parallel and share context.",
  },
  {
    number: "03",
    title: "Get a complete, accurate answer",
    description:
      "Results are assembled, verified, and returned in structured form — SQL queries, summaries, reports, or actions. No hallucinations, no stitching together multiple tools yourself.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            How OhWise works
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            From question to answer — without the manual overhead.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-12">
          {steps.map((step, idx) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-2 border-indigo-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-indigo-600">{step.number}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-px flex-1 bg-gray-200 dark:bg-gray-800 mt-3" />
                )}
              </div>

              <div className="pb-12 flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
