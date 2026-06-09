import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Lock, Key, Shield, FileSearch, AlertTriangle, Fingerprint, Server, Database, Eye } from "lucide-react";

const features = [
  {
    icon: <Lock size={20} className="text-indigo-500 dark:text-indigo-400" />,
    title: "Encryption in transit and at rest",
    desc: "All traffic is served over TLS 1.2+. Data stored in MongoDB is encrypted at rest. WebSocket connections (used for agent event streaming) are TLS-terminated at the Nginx layer before reaching backend services.",
  },
  {
    icon: <Key size={20} className="text-amber-500 dark:text-amber-400" />,
    title: "Scoped API keys and JWT tokens",
    desc: "API keys are scoped to an organization and can be revoked individually without affecting other keys. JWT tokens are short-lived. Auth state is never persisted client-side beyond the token lifetime.",
  },
  {
    icon: <Shield size={20} className="text-emerald-500 dark:text-emerald-400" />,
    title: "Org-level data isolation",
    desc: "Every MongoDB query is filtered by org_id at the application layer. There are no shared collections across tenants. A bug in one org's session cannot surface data from another org by design.",
  },
  {
    icon: <Fingerprint size={20} className="text-purple-500 dark:text-purple-400" />,
    title: "OAuth2 and SSO support",
    desc: "OAuth2 flows are implemented for Anthropic and Google authentication. SSO integration is available for enterprise deployments. No passwords are stored — authentication is delegated to identity providers.",
  },
  {
    icon: <Eye size={20} className="text-sky-500 dark:text-sky-400" />,
    title: "Full audit logging",
    desc: "Every agent action, tool call, file diff, permission decision, and API request is logged with user ID, timestamp, org ID, and outcome. Logs are append-only and accessible to org admins.",
  },
  {
    icon: <Server size={20} className="text-rose-500 dark:text-rose-400" />,
    title: "Isolated execution containers",
    desc: "Each Lab session runs in an isolated Docker container as a non-root user. Containers have no access to other users' workspaces or the host filesystem outside the session directory.",
  },
  {
    icon: <Database size={20} className="text-orange-500 dark:text-orange-400" />,
    title: "Data stays within the deployment perimeter",
    desc: "In self-hosted deployments, no agent reasoning, file contents, or session data leaves the network. Only outbound traffic is to the operator-configured LLM endpoints. OhWise servers never proxy model calls in self-hosted mode.",
  },
  {
    icon: <AlertTriangle size={20} className="text-yellow-500 dark:text-yellow-400" />,
    title: "Human-in-the-loop tool approval",
    desc: "Admins can require manual approval for sensitive tool categories: file writes, shell commands, external API calls. Approval gates are configurable per org or per session without code changes.",
  },
  {
    icon: <FileSearch size={20} className="text-teal-500 dark:text-teal-400" />,
    title: "Least-privilege agent permissions",
    desc: "Lab agents run with a permission system that allows, denies, or requires approval for each tool invocation type. Agents cannot escalate their own permissions. Permission decisions are logged.",
  },
];

const Security = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-16">

        {/* Hero */}
        <section className="py-20 bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-sm text-indigo-600 dark:text-indigo-300 mb-6">
                <Shield size={14} className="text-indigo-500 dark:text-indigo-400" />
                Security architecture
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight tracking-tight">
                Security by design,<br />not by checkbox
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                Tenant isolation, scoped credentials, audit logging, and isolated execution containers are architectural properties of OhWise, not add-ons.
              </p>
            </div>
          </div>
        </section>

        {/* Feature grid */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((f) => (
                <div key={f.title} className="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-white/8 rounded-xl p-6 flex flex-col gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center flex-shrink-0">
                    {f.icon}
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-semibold text-sm leading-snug">{f.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Self-hosted callout */}
        <section className="py-16 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Self-hosted deployments</h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                The full OhWise stack runs on-premises in a fully containerized deployment. All services and agent containers stay within the operator's network. No telemetry is sent to external servers. LLM traffic goes only to the operator-configured model endpoints.
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                The open-source packages — graph2sql, docs2graph, codebase2graph, ai-relay, ohwise-mcp — can be used entirely standalone, with no dependency on the OhWise cloud or any external service.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Security;
