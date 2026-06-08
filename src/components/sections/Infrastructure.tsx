
import React from "react";
import { Server, Cloud, Cpu, Globe, CheckCircle, ArrowRight, Layers, Zap } from "lucide-react";

const deployTargets = [
  {
    icon: <Server size={22} className="text-emerald-400" />,
    title: "Bare Metal",
    subtitle: "Full control, zero overhead",
    description:
      "Run OhWise directly on your own hardware. Docker Compose or Kubernetes — deploy in minutes, keep all compute on-prem. Ideal for air-gapped environments or data-sovereignty requirements.",
    tags: ["Docker Compose", "K8s", "On-prem", "Air-gapped"],
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    tagColor: "bg-emerald-500/10 text-emerald-300",
  },
  {
    icon: <Cloud size={22} className="text-indigo-400" />,
    title: "AWS — EKS / EC2",
    subtitle: "Elastic, cloud-native scale",
    description:
      "Deploy on Amazon EKS for auto-scaling multi-agent workloads, or EC2 for predictable reserved capacity. Integrates natively with IAM, VPC, S3, CloudWatch, and Secrets Manager.",
    tags: ["EKS", "EC2", "IAM", "CloudWatch", "S3"],
    border: "border-indigo-500/30",
    bg: "bg-indigo-500/5",
    tagColor: "bg-indigo-500/10 text-indigo-300",
  },
  {
    icon: <Zap size={22} className="text-amber-400" />,
    title: "AWS Lambda / Durable Functions",
    subtitle: "Serverless, pay-per-use",
    description:
      "Individual Lambda nodes execute in isolation — each agent step is a durable function invocation. Infinite horizontal scale with zero idle cost. Combine with SQS/EventBridge for event-driven pipelines.",
    tags: ["Lambda", "Durable Functions", "SQS", "EventBridge", "Serverless"],
    border: "border-amber-500/30",
    bg: "bg-amber-500/5",
    tagColor: "bg-amber-500/10 text-amber-300",
  },
  {
    icon: <Globe size={22} className="text-purple-400" />,
    title: "OhWise Cloud",
    subtitle: "Managed, zero-ops",
    description:
      "Fully managed SaaS on cloud.ohwise.com. We handle infrastructure, scaling, upgrades, and observability. Start in seconds — migrate to self-hosted any time, data is always yours.",
    tags: ["SaaS", "Managed", "Zero-ops", "Data portability"],
    border: "border-purple-500/30",
    bg: "bg-purple-500/5",
    tagColor: "bg-purple-500/10 text-purple-300",
  },
];

const principles = [
  { label: "Cloud-native from day one", desc: "Stateless agents, container-first design, 12-factor app principles throughout." },
  { label: "No vendor lock-in", desc: "Open standards (WebSocket, REST, OpenAPI). Runs on any cloud or bare metal equally." },
  { label: "Bring your own LLM", desc: "Works with any model endpoint — Anthropic, OpenAI, Gemini, self-hosted Llama, or your private endpoint." },
  { label: "Horizontal scale by design", desc: "Every agent, session, and Lambda node scales independently. No shared state bottlenecks." },
  { label: "Secrets never leave your perimeter", desc: "API keys, DB credentials, and model tokens stay in your infra — never transited through OhWise servers in self-hosted mode." },
  { label: "Observability built in", desc: "Structured logs, distributed traces, and metrics exported to CloudWatch, Datadog, Prometheus, or any OTLP sink." },
];

const Infrastructure: React.FC = () => {
  return (
    <section className="py-24 bg-gray-950 text-white border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-sm text-emerald-300 mb-6">
            <Layers size={14} className="text-emerald-400" />
            Cloud-native infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            Deploy anywhere.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
              Your infra, your rules.
            </span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            OhWise was designed cloud-native from day one — stateless agents, container-first,
            no vendor lock-in. Run it on bare metal, on AWS with EKS or Lambda, or let us
            manage it for you.
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
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  {t.icon}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.title}</p>
                  <p className="text-xs text-gray-500">{t.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{t.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {t.tags.map((tag) => (
                  <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${t.tagColor}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture diagram strip */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="rounded-xl border border-white/10 bg-white/3 p-8">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-8 text-center">Deployment architecture</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 font-mono text-xs">
              {/* Client */}
              <div className="flex flex-col items-center gap-1">
                <div className="bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-center min-w-[110px]">
                  <p className="text-gray-300 font-semibold">Browser / API</p>
                  <p className="text-gray-600 mt-0.5">WebSocket / REST</p>
                </div>
              </div>
              <ArrowRight size={14} className="text-gray-600 rotate-90 sm:rotate-0" />
              {/* Gateway */}
              <div className="flex flex-col items-center gap-1">
                <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg px-4 py-2.5 text-center min-w-[110px]">
                  <p className="text-indigo-300 font-semibold">Gateway</p>
                  <p className="text-gray-600 mt-0.5">nginx / ALB</p>
                </div>
              </div>
              <ArrowRight size={14} className="text-gray-600 rotate-90 sm:rotate-0" />
              {/* Coordinator */}
              <div className="flex flex-col items-center gap-1">
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2.5 text-center min-w-[110px]">
                  <p className="text-purple-300 font-semibold">Coordinator</p>
                  <p className="text-gray-600 mt-0.5">FastAPI / ECS</p>
                </div>
              </div>
              <ArrowRight size={14} className="text-gray-600 rotate-90 sm:rotate-0" />
              {/* Lambdas */}
              <div className="flex flex-col items-center gap-1">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg px-4 py-2.5 text-center min-w-[140px]">
                  <p className="text-amber-300 font-semibold">Agent Lambdas</p>
                  <p className="text-gray-600 mt-0.5">Lambda / K8s Jobs</p>
                </div>
              </div>
              <ArrowRight size={14} className="text-gray-600 rotate-90 sm:rotate-0" />
              {/* Storage */}
              <div className="flex flex-col items-center gap-1">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2.5 text-center min-w-[110px]">
                  <p className="text-emerald-300 font-semibold">Storage</p>
                  <p className="text-gray-600 mt-0.5">MongoDB / S3</p>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-gray-600 mt-6">
              Same topology runs on bare metal, AWS EKS, or serverless Lambda — swap the runtime, keep the architecture.
            </p>
          </div>
        </div>

        {/* Design principles grid */}
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest text-center mb-8">Design principles</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((p) => (
              <div key={p.label} className="flex gap-3">
                <CheckCircle size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium mb-1">{p.label}</p>
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
