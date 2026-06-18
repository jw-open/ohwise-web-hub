import React from "react";
import { Link } from "react-router-dom";
import { Package, ArrowRight } from "lucide-react";

const PACKAGES = [
  { name: "ai-relay", reg: "PyPI", href: "https://pypi.org/project/ai-relay/", desc: "WebSocket relay for AI coding agent CLIs" },
  { name: "artifact-gateway", reg: "PyPI", href: "https://pypi.org/project/artifact-gateway/", desc: "Secure API proxy for AI-generated apps" },
  { name: "artifact-sdk", reg: "npm", href: "https://www.npmjs.com/package/artifact-sdk", desc: "Browser SDK for artifact apps" },
  { name: "graph2sql", reg: "PyPI", href: "https://pypi.org/project/graph2sql/", desc: "Schema graph ranking for text-to-SQL" },
  { name: "docs2graph", reg: "PyPI", href: "https://pypi.org/project/docs2graph/", desc: "Documents → knowledge graph" },
  { name: "codebase2graph", reg: "PyPI", href: "https://pypi.org/project/codebase2graph/", desc: "Code repository → knowledge graph" },
  { name: "ohwise-mcp", reg: "PyPI", href: "https://pypi.org/project/ohwise-mcp/", desc: "MCP server for graph context + agents" },
];

const OpenSourceStrip = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium mb-4">
            <Package size={14} />
            Built in the open
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
            7 open-source packages powering OhWise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            The core of OhWise is extracted into standalone libraries on PyPI and npm —
            graph-native context, AI coding agent integration, and a secure gateway for
            AI-generated apps. No lock-in, bring your own model.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {PACKAGES.map((pkg) => (
            <a
              key={pkg.name}
              href={pkg.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono font-semibold text-sm text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {pkg.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                  {pkg.reg}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{pkg.desc}</p>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/open-source"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:gap-3 transition-all"
          >
            Explore all open-source libraries
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceStrip;
