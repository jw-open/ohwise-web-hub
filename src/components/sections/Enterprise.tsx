
import React from "react";
import { Shield, Users, Key, BarChart2, Globe, CheckCircle, ArrowRight, MessageSquare } from "lucide-react";

const Enterprise: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-sm text-indigo-600 dark:text-indigo-300 mb-6">
            <Shield size={14} className="text-indigo-500 dark:text-indigo-400" />
            Enterprise &amp; Multi-tenant
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            Built for teams, designed for isolation
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            Every organization is a fully isolated tenant. RBAC, audit logs, scoped API keys, SSO, and per-user workspace persistence are enterprise-grade from day one.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {[
            {
              icon: <Users className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
              color: "border-purple-500/30 bg-purple-500/5",
              title: "Workspace & Tenant Isolation",
              items: [
                "Each organization is a fully isolated tenant with no data bleed",
                "Per-user isolated workspaces: Lab sessions, Studio agents, artifacts",
                "Session history and knowledge graphs persist per user",
                "Switching sessions never leaks state between users",
                "Tenant isolation enforced at both API and data layers",
              ],
            },
            {
              icon: <Shield className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
              color: "border-emerald-500/30 bg-emerald-500/5",
              title: "Security & Compliance",
              items: [
                "JWT-based authentication with short-lived tokens per user",
                "Scoped, revocable API keys per organization",
                "Full audit logs: agent actions, tool calls, file diffs, approvals",
                "Human-in-the-loop: designated reviewers approve/reject tool calls",
                "SSO/OAuth2 ready (OAuth2 flows implemented for Claude & Gemini)",
                "Isolated Docker containers for workspace data residency per user",
              ],
            },
            {
              icon: <Key className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />,
              color: "border-yellow-500/30 bg-yellow-500/5",
              title: "Agent & Resource Management",
              items: [
                "Per-org agent quotas and resource limits configurable per deployment",
                "Studio coordinator agents scoped to team or org level",
                "Lab sessions isolated per user with no state bleed between sessions",
                "Permission system: allow / deny / allow-for-session per tool category",
                "Multi-region capable: stateless agents with distributed event bus",
                "Bring your own model: Claude, GPT-4, Gemini, Cortex, configurable per org",
              ],
            },
            {
              icon: <Globe className="w-5 h-5 text-sky-500 dark:text-sky-400" />,
              color: "border-sky-500/30 bg-sky-500/5",
              title: "Enterprise Integrations",
              items: [
                "MCP server per session or org-wide for tool extensibility",
                "Snowflake Cortex integration for enterprise data warehouse context",
                "Model-agnostic: swap LLM per agent node within the same pipeline",
                "API-first: all capabilities accessible programmatically",
                "graph2sql for enterprise-scale text-to-SQL (100+ table schemas)",
                "Webhook support for external approval workflows",
              ],
            },
            {
              icon: <MessageSquare className="w-5 h-5 text-teal-500 dark:text-teal-400" />,
              color: "border-teal-500/30 bg-teal-500/5",
              title: "Team Collaboration & Group Chat",
              items: [
                "Group chat with multiple users and agents in the same conversation",
                "@mention an agent to trigger it on demand — silent otherwise",
                "Role-based access: admin, member, viewer per organization",
                "Shared agents, knowledge, and workspaces across team accounts",
                "Plan-gated features: group chat and member invites unlock on Team plan",
                "Per-plan quotas: agents, studios, lab sessions, and seats",
              ],
            },
            {
              icon: <BarChart2 className="w-5 h-5 text-rose-500 dark:text-rose-400" />,
              color: "border-rose-500/30 bg-rose-500/5",
              title: "Admin Dashboard",
              items: [
                "User management: invite, role assignment, deactivation within org",
                "Session and agent activity monitoring in real time",
                "Usage analytics: tokens consumed, tool calls, artifacts generated",
                "Billing and quota management per org",
                "Audit log export for compliance and security reviews",
                "API key lifecycle: create, scope, rotate, revoke",
              ],
            },
          ].map((card, i) => (
            <div key={i} className={`rounded-xl border ${card.color} p-6`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-gray-200/50 dark:bg-white/5 border border-gray-300 dark:border-white/10 flex items-center justify-center flex-shrink-0">
                  {card.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white leading-tight">{card.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="max-w-3xl mx-auto rounded-xl border border-indigo-500/30 bg-indigo-600/10 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-base font-semibold text-gray-900 dark:text-white mb-1">Ready to deploy for a team?</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Self-host on any infrastructure or reach out for a managed enterprise deployment.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="https://cloud.ohwise.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Get started <ArrowRight size={14} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-white/20 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-white/50 text-sm font-medium rounded-lg transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Enterprise;
