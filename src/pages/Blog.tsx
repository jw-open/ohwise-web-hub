
import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Search, Clock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SubscribeForm from "../components/blog/SubscribeForm";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Introducing OhWise 2.0: The Next Generation of AI Operations",
    excerpt: "Today, we're thrilled to announce the release of OhWise 2.0 — enhanced multi-agent capabilities, improved knowledge graph integration, and a completely redesigned user interface.",
    author: "Sarah Johnson",
    date: "August 15, 2023",
    readTime: "5 min",
    category: "Announcements",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "How AI is Transforming DevOps: The OhWise Approach",
    excerpt: "The integration of AI into DevOps processes is no longer a future trend — it's happening now. Here's how organizations are using OhWise to automate complex workflows.",
    author: "Michael Chen",
    date: "August 10, 2023",
    readTime: "7 min",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Building Responsible AI Systems with OhWise",
    excerpt: "As AI systems become more prevalent, ensuring they operate ethically and responsibly is paramount. OhWise's governance features help organizations implement AI transparently.",
    author: "Elena Patel",
    date: "August 5, 2023",
    readTime: "6 min",
    category: "Best Practices",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    title: "Case Study: How FinTech Leader Reduced Incident Response Time by 75%",
    excerpt: "A leading financial technology company was struggling with lengthy incident resolution times. Learn how OhWise's multi-agent system transformed their operations.",
    author: "James Wilson",
    date: "July 28, 2023",
    readTime: "8 min",
    category: "Case Studies",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    title: "Understanding Knowledge Graphs: The Foundation of Intelligent Operations",
    excerpt: "Knowledge graphs are at the heart of OhWise's intelligent decision-making capabilities. A technical deep dive into how the platform builds and leverages them.",
    author: "Rebecca Lee",
    date: "July 20, 2023",
    readTime: "10 min",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    title: "OhWise Product Roadmap: What's Coming in Q4 2023",
    excerpt: "Our product team shares the vision for the upcoming quarter: enhanced ML capabilities, new integration options, and expanded analytics.",
    author: "David Thompson",
    date: "July 15, 2023",
    readTime: "4 min",
    category: "Announcements",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2774&auto=format&fit=crop&ixlib=rb-4.0.3"
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
    excerpt: "We just released ohwise-mcp 0.2.0 on PyPI — a single MCP server that gives Claude Code, Cursor, and any MCP-compatible tool direct access to OhWise knowledge graphs, agent pipelines, and code context tools. One pip install. One config block. Full graph-native context in your AI coding environment.",
    author: "OhWise Engineering",
    date: "June 8, 2026",
    readTime: "5 min",
    category: "Announcements",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 9,
    title: "Personalized PageRank vs Vector Similarity: Why Graph Algorithms Win for Structured Context",
    excerpt: "Vector similarity search is the default for retrieval in AI systems — but for structured data (database schemas, code repositories, document hierarchies), it systematically misses the most important relationships. We built three open-source packages using Personalized PageRank to fix this, and the results are significantly better context with smaller token budgets.",
    author: "OhWise Engineering",
    date: "June 8, 2026",
    readTime: "12 min",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
];

const CATEGORIES = ["All", "Announcements", "Technical", "Best Practices", "Case Studies"];

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

  const featured = BLOG_POSTS[BLOG_POSTS.length - 1]; // post id 9 — newest technical article

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
              Engineering insights, product thinking, and research from the team building the future of multi-agent AI.
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
              Get new articles in your inbox. No spam, unsubscribe any time.
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
