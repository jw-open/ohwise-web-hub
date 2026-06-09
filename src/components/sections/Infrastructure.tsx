
import React from "react";
import { Server, Cloud, Globe, CheckCircle, Layers, Zap } from "lucide-react";

const deployTargets = [
  {
    icon: <Server size={22} className="text-emerald-500 dark:text-emerald-400" />,
    title: "Bare Metal",
    subtitle: "Full control, zero overhead",
    description:
      "Run OhWise directly on bare-metal hardware with containerized services. Keeps all compute on-prem. Ideal for air-gapped environments or data-sovereignty requirements.",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
  },
  {
    icon: <Cloud size={22} className="text-indigo-500 dark:text-indigo-400" />,
    title: "Public Cloud",
    subtitle: "Elastic, cloud-native scale",
    description:
      "Deploy on any major cloud provider for auto-scaling multi-agent workloads. Integrates natively with cloud IAM, storage, logging, and secrets management.",
    border: "border-indigo-500/30",
    bg: "bg-indigo-500/5",
  },
  {
    icon: <Zap size={22} className="text-amber-500 dark:text-amber-400" />,
    title: "Serverless",
    subtitle: "Pay-per-use, infinite scale",
    description:
      "Individual agent nodes execute in isolation as serverless functions. Infinite horizontal scale, zero idle cost, and event-driven pipeline triggers.",
    border: "border-amber-500/30",
    bg: "bg-amber-500/5",
  },
  {
    icon: <Globe size={22} className="text-purple-500 dark:text-purple-400" />,
    title: "OhWise Cloud",
    subtitle: "Managed, zero-ops",
    description:
      "Fully managed SaaS on cloud.ohwise.com. Infrastructure, scaling, upgrades, and observability handled end-to-end. Migrate to self-hosted any time — data is always exportable.",
    border: "border-purple-500/30",
    bg: "bg-purple-500/5",
  },
];

const principles = [
  { label: "Cloud-native from day one", desc: "Stateless agents, container-first design, 12-factor app principles throughout." },
  { label: "No vendor lock-in", desc: "Open standards throughout. Runs on any cloud or bare metal equally." },
  { label: "Bring your own LLM", desc: "Works with any model endpoint: Anthropic, OpenAI, Gemini, self-hosted, or a private endpoint." },
  { label: "Horizontal scale by design", desc: "Every agent and session scales independently. No shared state bottlenecks." },
  { label: "Secrets stay on-prem", desc: "API keys, credentials, and model tokens stay in the operator's infra in self-hosted mode." },
  { label: "Observability built in", desc: "Structured logs, distributed traces, and metrics exported to any standard observability sink." },
];

const Infrastructure: React.FC = () => {
  return (
    <section className="py-24 bg-white text-gray-900 dark:bg-gray-950 dark:text-white border-t border-gray-100 dark:border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-sm text-emerald-600 dark:text-emerald-300 mb-6">
            <Layers size={14} className="text-emerald-500 dark:text-emerald-400" />
            Cloud-native infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            Deploy anywhere.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500 dark:from-emerald-400 dark:to-indigo-400">
              Any infra. Full control.
            </span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            OhWise was designed cloud-native from day one: stateless agents, container-first,
            no vendor lock-in. Run on bare metal, any cloud provider, serverless, or use the
            fully managed offering.
          </p>
        </div>

        {/* Deployment target cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {deployTargets.map((t) => (
            <div
              key={t.title}
              className={`rounded-xl border ${t.border} ${t.bg} p-6 flex flex-col gap-4`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center flex-shrink-0">
                  {t.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{t.title}</p>
                  <p className="text-xs text-gray-400">{t.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>

        {/* Design principles grid */}
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest text-center mb-8">Design principles</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((p) => (
              <div key={p.label} className="flex gap-3">
                <CheckCircle size={16} className="text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 dark:text-white text-sm font-medium mb-1">{p.label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Infrastructure;
