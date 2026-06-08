
import React from "react";
import { Shield, Users, Lock, Key, BarChart2, Globe, CheckCircle, ArrowRight } from "lucide-react";

const Enterprise: React.FC = () => {
  return (
    <section className="py-24 bg-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-sm text-indigo-300 mb-6">
            <Shield size={14} className="text-indigo-400" />
            Enterprise &amp; Multi-tenant
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            Built for teams, designed for isolation
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Every organization is a fully isolated tenant. RBAC, audit logs, scoped API keys, SSO, and per-user workspace persistence are enterprise-grade from day one.
          </p>
        </div>

        {/* Org hierarchy diagram */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-6 text-center">Organization hierarchy</p>
            <div className="flex flex-col items-center gap-3 font-mono text-sm">
              {/* Org */}
              <div className="w-full max-w-md bg-indigo-600/20 border border-indigo-500/40 rounded-lg px-5 py-3 text-center">
                <span className="text-indigo-300 font-semibold">Organization</span>
                <span className="text-gray-500 ml-2 text-xs">org_id: acme-corp</span>
              </div>
              {/* Connector */}
              <div className="flex gap-8 items-start">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-px h-5 bg-white/20" />
                  <div className="bg-purple-600/20 border border-purple-500/40 rounded-lg px-4 py-2 text-center min-w-[130px]">
                    <p className="text-purple-300 font-semibold text-xs">Admin</p>
                    <p className="text-gray-500 text-xs mt-0.5">Manage users, keys, quotas</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-px h-5 bg-white/20" />
                  <div className="bg-emerald-600/20 border border-emerald-500/40 rounded-lg px-4 py-2 text-center min-w-[130px]">
                    <p className="text-emerald-300 font-semibold text-xs">Member</p>
                    <p className="text-gray-500 text-xs mt-0.5">Run sessions &amp; workflows</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-px h-5 bg-white/20" />
                  <div className="bg-gray-700/50 border border-gray-600/40 rounded-lg px-4 py-2 text-center min-w-[130px]">
                    <p className="text-gray-300 font-semibold text-xs">Viewer</p>
                    <p className="text-gray-500 text-xs mt-0.5">Read-only artifacts &amp; logs</p>
                  </div>
                </div>
              </div>
              {/* User workspace */}
              <div className="w-px h-5 bg-white/20" />
              <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-lg px-5 py-3 text-center">
                <span className="text-gray-300 font-semibold text-xs">Per-user isolated workspace</span>
                <p className="text-gray-500 text-xs mt-1">Lab sessions · Studio agents · Knowledge graphs · Artifacts</p>
              </div>
              {/* DB scoping note */}
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Lock size={12} className="text-gray-500" />
                MongoDB queries always filtered by <code className="text-indigo-400 bg-white/5 px-1.5 py-0.5 rounded">org_id</code> with no cross-tenant data paths
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {[
            {
              icon: <Users className="w-5 h-5 text-purple-400" />,
              color: "border-purple-500/30 bg-purple-500/5",
              title: "Workspace & Tenant Isolation",
              items: [
                "Each org is a fully isolated tenant (org_id scoping at DB layer)",
                "Multiple users per org with Admin, Member, and Viewer roles",
                "Per-user isolated workspaces: Lab sessions, Studio agents, artifacts",
                "No cross-tenant data bleed, enforced at API and database level",
                "Session history and knowledge graphs persist per user",
                "Switching sessions never leaks state between users",
              ],
            },
            {
              icon: <Shield className="w-5 h-5 text-emerald-400" />,
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
              icon: <Key className="w-5 h-5 text-yellow-400" />,
              color: "border-yellow-500/30 bg-yellow-500/5",
              title: "Agent & Resource Management",
              items: [
                "Per-org agent quotas and resource limits configurable by admin",
                "Studio coordinator agents scoped to group_id (org/team level)",
                "Lab sessions isolated per user with no state bleed between sessions",
                "Permission system: allow / deny / allow-for-session per tool category",
                "Multi-region deployment: stateless FastAPI + Redis pub/sub fanout",
                "Bring your own model: Claude, GPT-4, Gemini, Cortex, configurable per org",
              ],
            },
            {
              icon: <Globe className="w-5 h-5 text-sky-400" />,
              color: "border-sky-500/30 bg-sky-500/5",
              title: "Enterprise Integrations",
              items: [
                "MCP server per session or org-wide for tool extensibility",
                "Snowflake Cortex integration for enterprise data warehouse context",
                "Model-agnostic: swap LLM per agent node within the same pipeline",
                "API-first: all capabilities available via REST API for automation",
                "graph2sql for enterprise-scale text-to-SQL (100+ table schemas)",
                "Webhook support for external approval workflows",
              ],
            },
            {
              icon: <BarChart2 className="w-5 h-5 text-rose-400" />,
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
            {
              icon: <Lock className="w-5 h-5 text-indigo-400" />,
              color: "border-indigo-500/30 bg-indigo-500/5",
              title: "RBAC Permission System",
              items: [
                "Admin: full org management, key rotation, quota configuration",
                "Member: create/run Lab sessions and Studio workflows",
                "Viewer: read-only access to artifacts, logs, and session replays",
                "Granular tool approval: require review for shell, file write, API calls",
                "Approval scope: org-wide policy or per-session override",
                "Permission audit trail: every approve/deny recorded with actor + timestamp",
              ],
            },
          ].map((card, i) => (
            <div key={i} className={`rounded-xl border ${card.color} p-6`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  {card.icon}
                </div>
                <h3 className="text-sm font-semibold text-white leading-tight">{card.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="max-w-3xl mx-auto rounded-xl border border-indigo-500/30 bg-indigo-600/10 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-base font-semibold text-white mb-1">Ready to deploy for a team?</p>
            <p className="text-sm text-gray-400">Self-host on any infrastructure or reach out for a managed enterprise deployment.</p>
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
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-gray-300 hover:text-white hover:border-white/50 text-sm font-medium rounded-lg transition-colors"
            >
              Contact us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Enterprise;
