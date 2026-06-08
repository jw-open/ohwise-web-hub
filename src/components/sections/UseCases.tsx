
import React from "react";
import { ArrowRight } from "lucide-react";

const USE_CASES = [
  {
    emoji: "💰",
    title: "Sales Copilot",
    description:
      "Compensation analysis, pipeline forecasting, revenue dashboards, and sales ops automation, all without a dedicated data team.",
    color: "border-emerald-500/30 bg-emerald-500/5",
    badge: "text-emerald-400",
  },
  {
    emoji: "📣",
    title: "Marketing Copilot",
    description:
      "Email campaigns, social media management, funnel analytics, and lead generation workflows, orchestrated end-to-end.",
    color: "border-blue-500/30 bg-blue-500/5",
    badge: "text-blue-400",
  },
  {
    emoji: "👥",
    title: "People & HR",
    description:
      "Resume screening, onboarding automation, email drafting, and hiring workflows so HR can focus on people, not paperwork.",
    color: "border-purple-500/30 bg-purple-500/5",
    badge: "text-purple-400",
  },
  {
    emoji: "🔬",
    title: "Research Assistant",
    description:
      "Literature review, paper editing, experiment tracking, and code-assisted research, from first search to final draft.",
    color: "border-indigo-500/30 bg-indigo-500/5",
    badge: "text-indigo-400",
  },
  {
    emoji: "✨",
    title: "Personal Assistant",
    description:
      "Content management across Twitter, LinkedIn, and blogs; job search; interview prep; and travel planning, all in one place.",
    color: "border-yellow-500/30 bg-yellow-500/5",
    badge: "text-yellow-400",
  },
  {
    emoji: "🤖",
    title: "AI/ML Ops",
    description:
      "Pipeline orchestration, model monitoring, experiment management, and deployment automation built for AI-native teams.",
    color: "border-rose-500/30 bg-rose-500/5",
    badge: "text-rose-400",
  },
  {
    emoji: "🏥",
    title: "Healthcare Ops",
    description:
      "Insurance processing, clinical workflow automation, and patient data analysis under strict data isolation and audit controls.",
    color: "border-teal-500/30 bg-teal-500/5",
    badge: "text-teal-400",
  },
  {
    emoji: "⚙️",
    title: "DevOps & Observability",
    description:
      "Alert triage, incident response, root-cause analysis, and infrastructure automation for fewer pages and faster resolution.",
    color: "border-sky-500/30 bg-sky-500/5",
    badge: "text-sky-400",
  },
  {
    emoji: "📈",
    title: "Investment & Risk",
    description:
      "Portfolio analysis, risk modeling, and market research automation where structured data meets multi-agent intelligence.",
    color: "border-orange-500/30 bg-orange-500/5",
    badge: "text-orange-400",
  },
];

const UseCases: React.FC = () => {
  return (
    <section className="py-24 bg-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Built for every team
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            One platform, applicable across an entire organization.
          </p>
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-16">
          {USE_CASES.map((uc, i) => (
            <div
              key={i}
              className={`rounded-xl border ${uc.color} p-6 flex flex-col gap-3 hover:brightness-110 transition-all duration-200`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl leading-none">{uc.emoji}</span>
                <h3 className={`text-sm font-semibold leading-tight ${uc.badge}`}>
                  {uc.title}
                </h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                {uc.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="max-w-3xl mx-auto rounded-xl border border-white/10 bg-white/5 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-base font-semibold text-white mb-1">
              Use case not listed?
            </p>
            <p className="text-sm text-gray-400">
              OhWise is a general multi-agent platform. Any workflow involving steps, tools, and decisions can be automated.
            </p>
          </div>
          <a
            href="https://cloud.ohwise.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 hover:bg-gray-100 text-sm font-medium rounded-lg transition-colors flex-shrink-0"
          >
            Get started <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default UseCases;
