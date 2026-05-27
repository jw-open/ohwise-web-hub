import React, { useState } from "react";
import { GitBranch, BookOpen, Code2, FlaskConical, Database, ArrowRight } from "lucide-react";

const useCases = [
  {
    id: "pipelines",
    icon: <GitBranch className="w-5 h-5" />,
    industry: "Pipeline Orchestration",
    problem: "ML pipelines are brittle, unobservable, and hard to debug.",
    description:
      "OhWise executes ML workflows as typed DAGs — preprocessing, inference, evaluation, and post-processing run as coordinated agent nodes. Parallel branches execute concurrently. Every step is logged with inputs, outputs, latency, and token usage.",
    outcomes: ["DAG-based execution with typed state", "Parallel branches run concurrently", "Full step-level observability and replay"],
    color: "indigo",
  },
  {
    id: "context",
    icon: <BookOpen className="w-5 h-5" />,
    industry: "Context Engineering",
    problem: "LLMs get poor context — flat file chunks miss relationships.",
    description:
      "OhWise uses graph-structured retrieval via its open source layer (codebase2graph, docs2graph, graph2sql). Code, documents, and schemas become knowledge graphs. Personalized PageRank ranks the most relevant nodes for any query — so agents get precise, relationship-aware context.",
    outcomes: ["Graph nodes ranked by Personalized PageRank", "Call graphs, entity graphs, schema graphs", "Context size reduced without losing signal"],
    color: "purple",
  },
  {
    id: "lab",
    icon: <Code2 className="w-5 h-5" />,
    industry: "AI Coding Agent Lab",
    problem: "AI coding CLIs run in terminals, invisible to your team.",
    description:
      "Lab connects Claude Code, Codex, and Gemini CLI to a live web interface via ai-relay. Every reasoning step, tool call, file diff, and quota warning streams in real time. Run long coding sessions from any device, share agent outputs with your team, and inspect exactly what the agent did.",
    outcomes: ["Claude Code, Codex, Gemini CLI supported", "Streaming reasoning + tool call trace", "File diff viewer and session history"],
    color: "emerald",
  },
  {
    id: "evaluation",
    icon: <FlaskConical className="w-5 h-5" />,
    industry: "Model Evaluation",
    problem: "Eval loops are manual, inconsistent, and slow to iterate.",
    description:
      "Define evaluation criteria as DAG nodes. OhWise runs structured eval loops across your dataset — each sample routed through your pipeline, scored by judge agents, and aggregated into metrics. Iterate on prompts and compare runs side by side.",
    outcomes: ["Structured eval DAGs with judge agents", "Per-sample traces and failure analysis", "Run comparison and metric tracking"],
    color: "rose",
  },
  {
    id: "sql",
    icon: <Database className="w-5 h-5" />,
    industry: "Graph-to-SQL",
    problem: "Text-to-SQL fails on large, complex schemas.",
    description:
      "OhWise uses graph2sql to build a schema graph from your database — tables and columns as nodes, foreign keys as edges. Personalized PageRank extracts a relevant subgraph for each query. The LLM sees only what it needs to generate accurate SQL — even across hundreds of tables.",
    outcomes: ["Schema graph built from DDL or ORM models", "Relevant subgraph ranked per query", "Bring your own LLM — no lock-in"],
    color: "sky",
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; badge: string; dot: string }> = {
  indigo: {
    bg: "bg-indigo-50 dark:bg-indigo-950/20",
    border: "border-indigo-200 dark:border-indigo-800",
    icon: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400",
    badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
    dot: "bg-indigo-500",
  },
  purple: {
    bg: "bg-purple-50 dark:bg-purple-950/20",
    border: "border-purple-200 dark:border-purple-800",
    icon: "bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400",
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    dot: "bg-purple-500",
  },
  emerald: {
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    border: "border-emerald-200 dark:border-emerald-800",
    icon: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    dot: "bg-emerald-500",
  },
  rose: {
    bg: "bg-rose-50 dark:bg-rose-950/20",
    border: "border-rose-200 dark:border-rose-800",
    icon: "bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    dot: "bg-rose-500",
  },
  sky: {
    bg: "bg-sky-50 dark:bg-sky-950/20",
    border: "border-sky-200 dark:border-sky-800",
    icon: "bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400",
    badge: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
    dot: "bg-sky-500",
  },
};

const UseCases = () => {
  const [active, setActive] = useState("pipelines");
  const current = useCases.find((u) => u.id === active)!;
  const colors = colorMap[current.color];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Built for AI/ML engineers
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            OhWise handles orchestration, context, and observability — so you focus on the model.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {useCases.map((u) => {
            const c = colorMap[u.color];
            return (
              <button
                key={u.id}
                onClick={() => setActive(u.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 ${
                  active === u.id
                    ? `${c.badge} ${c.border}`
                    : "border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600"
                }`}
              >
                {u.industry}
              </button>
            );
          })}
        </div>

        {/* Active use case card */}
        <div className="max-w-3xl mx-auto">
          <div className={`rounded-2xl border p-8 transition-all duration-200 ${colors.bg} ${colors.border}`}>
            <div className="flex items-start gap-4 mb-6">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${colors.icon}`}>
                {current.icon}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                  {current.industry}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {current.problem}
                </h3>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {current.description}
            </p>

            <div className="space-y-2 mb-8">
              {current.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-center gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{outcome}</span>
                </div>
              ))}
            </div>

            <a
              href="https://cloud.ohwise.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white hover:underline"
            >
              Get started
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
