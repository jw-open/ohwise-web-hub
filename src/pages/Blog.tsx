
import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Search, Clock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SubscribeForm from "../components/blog/SubscribeForm";

const BLOG_POSTS = [
  {
    id: 17,
    title: "DeepSeek Is Now Available on OhWise",
    excerpt: "OhWise is model-agnostic — bring your models, we handle the orchestration. Now DeepSeek joins the lineup: run deepseek-chat and deepseek-reasoner in your agents and workflows alongside OpenAI, Anthropic, and the rest. Add your key in Settings in under a minute; it's stored encrypted and scoped to your account. Route the cheap, high-volume steps to DeepSeek and reserve a frontier model for the parts that need it — node by node.",
    author: "OhWise Team",
    date: "August 19, 2026",
    readTime: "2 min",
    category: "Announcements",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 16,
    title: "FIFA Intelligence: Watch an AI Agent Predict the 2026 World Cup Champion — Live",
    excerpt: "We gave an AI agent one prompt and watched it pull live FIFA data off the internet, score every team across 5 dimensions (Elo, attack, defense, form, fixtures), run a Monte Carlo simulation of the bracket, and render an interactive forecast dashboard in the browser — start to finish, no human in the loop. A fun, concrete look at what agentic workflows on OhWise can do.",
    author: "OhWise Team",
    date: "June 21, 2026",
    readTime: "4 min",
    category: "Use Cases",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 15,
    title: "artifact-gateway + artifact-sdk: Give AI-Generated Apps a Safe Backend",
    excerpt: "AI can write a working web app in seconds — but the moment it needs to call an API, store data, or use a secret, you hit a wall: sandboxed apps can't be trusted with raw access. Our two new open-source packages, artifact-gateway (Python) and artifact-sdk (JavaScript), give generated apps a controlled door to real APIs and isolated data — no secrets in the code, no cross-tenant access.",
    author: "OhWise Engineering",
    date: "June 17, 2026",
    readTime: "6 min",
    category: "Announcements",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 1,
    title: "When Your Team's Knowledge Becomes Your Competitive Advantage",
    excerpt: "Organizations that connect institutional knowledge to their AI workflows consistently outperform teams that treat AI as a standalone tool. Here's why the knowledge layer is the real differentiator.",
    author: "OhWise Team",
    date: "June 2026",
    readTime: "6 min",
    category: "Use Cases",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "The Hidden Cost of Every Hour an Incident Goes Unresolved",
    excerpt: "Downtime costs money. The real damage is compounding. Here's how AI-coordinated response changes the economics of reliability for operations teams.",
    author: "OhWise Team",
    date: "June 2026",
    readTime: "5 min",
    category: "Use Cases",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Your Most Productive Team Member Doesn't Take Breaks",
    excerpt: "AI agents that work through complex multi-step tasks around the clock — and hand off clearly to humans when judgment is required. A look at how teams are redesigning their workflows.",
    author: "OhWise Team",
    date: "June 2026",
    readTime: "6 min",
    category: "Use Cases",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    title: "Why Security Teams Trust AI With More, Not Less",
    excerpt: "Counterintuitive but true: organizations that deploy AI in security workflows surface more threats, faster, with less analyst burnout. Here's what that looks like in practice.",
    author: "OhWise Team",
    date: "June 2026",
    readTime: "7 min",
    category: "Use Cases",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    title: "What Happens When Every Decision Has the Right Context",
    excerpt: "The difference between a good AI assistant and a great one is context. When AI understands your domain, your data, and your goals, answers stop being generic and start being useful.",
    author: "OhWise Team",
    date: "June 2026",
    readTime: "5 min",
    category: "Best Practices",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    title: "Collaboration at the Speed of Thought: Teams, Agents, and Shared Goals",
    excerpt: "When your team can delegate to AI agents mid-conversation and pick up the results moments later, work stops waiting and starts flowing. A look at how group workspaces change team dynamics.",
    author: "OhWise Team",
    date: "June 2026",
    readTime: "6 min",
    category: "Use Cases",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 7,
    title: "Beyond Harness Engineering: How OhWise Automates the Scaffolding at Scale",
    excerpt: "Every serious AI team eventually hits the same wall: the harness grows faster than the product. OhWise eliminates it by making harness engineering a first-class automated concern, deployable across thousands of tenants.",
    author: "OhWise Engineering",
    date: "April 20, 2026",
    readTime: "9 min",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 8,
    title: "ohwise-mcp 0.2.0: Graph-Native Context for Claude Code and Any MCP Client",
    excerpt: "ohwise-mcp 0.2.0 is now on PyPI. It is a single MCP server that gives Claude Code, Cursor, and any MCP-compatible tool direct access to OhWise knowledge graphs, agent pipelines, and code context tools. One pip install. One config block. Full graph-native context in any AI coding environment.",
    author: "OhWise Engineering",
    date: "June 8, 2026",
    readTime: "5 min",
    category: "Announcements",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 9,
    title: "Personalized PageRank vs Vector Similarity: Why Graph Algorithms Win for Structured Context",
    excerpt: "Vector similarity search is the default for retrieval in AI systems, but for structured data (database schemas, code repositories, document hierarchies), it systematically misses the most important relationships. Three open-source packages built on Personalized PageRank address this gap, delivering significantly better context with smaller token budgets.",
    author: "OhWise Engineering",
    date: "June 8, 2026",
    readTime: "12 min",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 10,
    title: "How OhWise Turns Your Sales Data Into Decisions, Automatically",
    excerpt: "Multi-agent pipelines that analyze compensation data, build dashboards, and surface revenue insights without a data team.",
    author: "OhWise Team",
    date: "June 2025",
    readTime: "6 min",
    category: "Use Cases",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 11,
    title: "From Literature Review to Publication: How Researchers Use OhWise",
    excerpt: "AI-assisted research workflows covering paper discovery, summarization, experiment tracking, and code generation, all in one platform.",
    author: "OhWise Team",
    date: "June 2025",
    readTime: "7 min",
    category: "Use Cases",
    image: "https://images.unsplash.com/photo-1532094349884-543559be2c9f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 12,
    title: "Why AI Teams Are Replacing Scattered Toolchains with OhWise",
    excerpt: "Orchestrate model training pipelines, monitor deployments, and manage experiments through a unified multi-agent platform built for AI teams.",
    author: "OhWise Team",
    date: "June 2025",
    readTime: "5 min",
    category: "Use Cases",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 13,
    title: "What Makes an AI Answer Trustworthy?",
    excerpt: "Not all AI answers are created equal. The difference between a useful answer and a dangerous one is whether it's grounded in what's actually true for your organization.",
    author: "OhWise Team",
    date: "June 9, 2026",
    readTime: "6 min",
    category: "Best Practices",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 14,
    title: "The Intelligent Assistant Your Whole Team Can Use",
    excerpt: "OhWise isn't just for AI engineers. Any team member can ask a question, start a workflow, or collaborate with agents — no technical background required.",
    author: "OhWise Team",
    date: "June 7, 2026",
    readTime: "5 min",
    category: "Use Cases",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
];

const CATEGORIES = ["All", "Announcements", "Technical", "Best Practices", "Case Studies", "Use Cases", "Security"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(BLOG_POSTS);

  useEffect(() => {
    let result = BLOG_POSTS;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
      );
    }
    if (activeCategory !== "All") {
      result = result.filter(p => p.category === activeCategory);
    }
    setFilteredPosts(result);
  }, [searchQuery, activeCategory]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const featured = BLOG_POSTS[BLOG_POSTS.length - 1]; // post id 9, newest technical article

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <main className="flex-grow pt-20">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-4">
              OhWise Blog
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight mb-6">
              Ideas worth building on.
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10">
              Engineering insights, product thinking, and research on multi-agent AI systems.
            </p>
            <div className="relative max-w-sm mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <Input
                type="text"
                placeholder="Search articles…"
                className="pl-10 h-12 rounded-full border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* ── Featured post ─────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Link to={`/blog/${featured.id}`} className="group block">
            <div className="relative rounded-3xl overflow-hidden bg-gray-900 aspect-[21/9]">
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white mb-4">
                  {featured.category}
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-3 max-w-3xl">
                  {featured.title}
                </h2>
                <p className="text-gray-300 text-sm md:text-base max-w-2xl line-clamp-2 mb-4">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock size={13} />{featured.readTime}</span>
                </div>
              </div>
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={18} className="text-white" />
              </div>
            </div>
          </Link>
        </section>

        {/* ── Category pills ────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ── Article grid ──────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <Link
                  to={`/blog/${post.id}`}
                  key={post.id}
                  className="group flex flex-col rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all duration-200"
                >
                  {/* Thumbnail */}
                  <div className="overflow-hidden aspect-[16/9] bg-gray-100 dark:bg-gray-800">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col flex-grow p-5">
                    {/* Category + read time */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                        <Clock size={11} />{post.readTime}
                      </span>
                    </div>
                    {/* Title */}
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    {/* Excerpt */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    {/* Author / date */}
                    <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 pt-3 border-t border-gray-100 dark:border-gray-800">
                      <span className="font-medium text-gray-600 dark:text-gray-400">{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-gray-400 dark:text-gray-500 mb-4">No articles match your search.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        {/* ── Subscribe ─────────────────────────────────────────────────── */}
        <section className="bg-gray-50 dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Stay in the loop.
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              New articles delivered by email. No spam, unsubscribe any time.
            </p>
            <SubscribeForm />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Blog;
