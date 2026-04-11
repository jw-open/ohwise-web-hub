import React, { useState } from "react";
import { TrendingUp, Headphones, Megaphone, Heart, ArrowRight } from "lucide-react";

const useCases = [
  {
    id: "sales",
    icon: <TrendingUp className="w-5 h-5" />,
    industry: "Sales Operations",
    problem: "Accounts slip through renewal without warning.",
    description:
      "OhWise monitors contract dates, usage signals, and support history across your CRM — surfacing at-risk accounts before renewal day, so your team can act before it's too late.",
    outcomes: ["Churn risk ranked daily", "Renewal pipeline auto-prioritized", "No manual report pulling"],
    color: "indigo",
  },
  {
    id: "support",
    icon: <Headphones className="w-5 h-5" />,
    industry: "Customer Support",
    problem: "Tickets pile up while agents hunt for the right answer.",
    description:
      "Agents search your knowledge base, past cases, and product docs simultaneously — drafting accurate responses in seconds. Your team reviews and sends. Volume handled, quality maintained.",
    outcomes: ["First response time cut dramatically", "Consistent answers across agents", "Escalations reserved for complex cases"],
    color: "purple",
  },
  {
    id: "marketing",
    icon: <Megaphone className="w-5 h-5" />,
    industry: "Marketing Operations",
    problem: "Customer data sits in silos. Campaigns go to the wrong people.",
    description:
      "OhWise agents cross-reference purchase history, engagement data, and firmographics to build precise segments — triggering personalized outreach without anyone writing a query.",
    outcomes: ["Segments built from natural language", "Lead scoring updated continuously", "Campaign performance tracked automatically"],
    color: "emerald",
  },
  {
    id: "healthcare",
    icon: <Heart className="w-5 h-5" />,
    industry: "Healthcare & Insurance",
    problem: "Claims processing is slow, manual, and error-prone.",
    description:
      "Agents extract policy terms from documents, cross-check claim details against coverage rules, and flag exceptions — reducing processing time and catching discrepancies before they cost you.",
    outcomes: ["Policy terms extracted from PDFs", "Claim validation automated", "Exception reports generated instantly"],
    color: "rose",
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
};

const UseCases = () => {
  const [active, setActive] = useState("sales");
  const current = useCases.find((u) => u.id === active)!;
  const colors = colorMap[current.color];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Built for teams that run on data
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            OhWise handles the analysis and automation. Your team handles the decisions.
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
