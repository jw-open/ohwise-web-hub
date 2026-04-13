import React from "react";
import { ArrowRight, Sparkles, GitBranch, Zap } from "lucide-react";
import { Button } from "../ui/button";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gray-950 text-white">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Multi-agent AI platform
          </div>

          {/* Headline */}
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight mb-6">
            AI agents that work
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              together for your business.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            OhWise coordinates specialized AI agents across your data, documents,
            and workflows — so you get answers, automation, and intelligence
            without stitching together a dozen tools.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://cloud.ohwise.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-2 w-full"
              >
                Get started
                <ArrowRight size={16} />
              </Button>
            </a>
            <a
              href="/product"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/50 text-gray-200 hover:bg-white/10 hover:text-white hover:border-white/80 flex items-center justify-center gap-2 w-full"
              >
                See how it works
              </Button>
            </a>
          </div>
        </div>

        {/* Agent flow visual */}
        <div className="mt-16 md:mt-20 max-w-3xl mx-auto">
          <div className="rounded-xl border border-white/10 bg-gray-900/60 backdrop-blur p-8">
            <p className="text-xs text-gray-500 uppercase tracking-widest text-center mb-8">
              How OhWise works
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Your question</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Ask in plain language — no SQL, no code required
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Agents coordinate</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Specialized agents run in parallel across your data sources
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Results delivered</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Answers, reports, and actions — ready to use
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-24 bg-gradient-to-b from-gray-950 to-white dark:to-gray-900" />
    </div>
  );
};

export default Hero;
