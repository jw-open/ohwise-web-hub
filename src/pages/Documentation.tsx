import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTASection from "../components/sections/CTASection";
import { ChevronRight, FileText, Book, Lightbulb, Code, Video, ExternalLink, ArrowLeft } from "lucide-react";

const Documentation = () => {
  // Sample documentation categories and articles
  const categories = [
    {
      title: "Getting Started",
      icon: <Book className="text-blue-600" size={24} />,
      articles: [
        { title: "Introduction to OhWise", slug: "introduction" },
        { title: "Quick Start Guide", slug: "quick-start" },
        { title: "Core Concepts", slug: "core-concepts" },
        { title: "System Requirements", slug: "system-requirements" },
      ]
    },
    {
      title: "User Guides",
      icon: <FileText className="text-blue-600" size={24} />,
      articles: [
        { title: "Dashboard Overview", slug: "dashboard" },
        { title: "Creating AI Workflows", slug: "workflows" },
        { title: "Agent Configuration", slug: "agents" },
        { title: "Monitoring & Analytics", slug: "monitoring" },
      ]
    },
    {
      title: "API Reference",
      icon: <Code className="text-blue-600" size={24} />,
      articles: [
        { title: "Authentication", slug: "api-auth" },
        { title: "Endpoints", slug: "endpoints" },
        { title: "Error Handling", slug: "errors" },
        { title: "Rate Limits", slug: "rate-limits" },
      ]
    },
    {
      title: "Best Practices",
      icon: <Lightbulb className="text-blue-600" size={24} />,
      articles: [
        { title: "Security Guidelines", slug: "security" },
        { title: "Performance Optimization", slug: "performance" },
        { title: "Compliance Framework", slug: "compliance" },
        { title: "Scaling Strategies", slug: "scaling" },
      ]
    },
    {
      title: "Lab & Open Source",
      icon: <Code className="text-blue-600" size={24} />,
      articles: [
        { title: "Lab — AI Coding Agent Integration", slug: "lab-overview" },
        { title: "ai-relay: WebSocket Relay Protocol", slug: "ai-relay-protocol" },
        { title: "Connecting Claude Code to Lab", slug: "lab-claude-code" },
        { title: "OAuth Authentication in Lab", slug: "lab-oauth" },
      ]
    },
  ];

  const labArticles: Record<string, React.ReactNode> = {
    "lab-overview": (
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <h1>Lab — AI Coding Agent Integration</h1>
        <p>
          <strong>Lab</strong> is OhWise's built-in terminal for running AI coding agent CLIs (Claude Code, Codex, Gemini CLI) directly from your browser. Sessions run securely on OhWise servers inside an isolated per-user workspace.
        </p>
        <h2>How It Works</h2>
        <ol>
          <li>Navigate to <strong>/lab</strong> in the OhWise app.</li>
          <li>Click <strong>+</strong> to create a new session — choose a name and tool (Claude Code, Codex, or Gemini CLI).</li>
          <li>Click <strong>Connect</strong>. The server spawns the CLI inside a PTY (pseudo-terminal) in your isolated workspace.</li>
          <li>If it's your first time, an <strong>OAuth link</strong> appears in the stream — click it, authenticate with your provider account, paste the code back.</li>
          <li>Start typing prompts. Use <code>/compact</code> or <code>/clear</code> buttons to manage context.</li>
        </ol>
        <h2>Security Model</h2>
        <ul>
          <li>JWT authentication required for every WebSocket connection.</li>
          <li>Each user gets an isolated workspace at <code>/var/ohwise-lab-workspaces/&#123;user_id&#125;/</code>.</li>
          <li>CLIs run as a non-root <code>labuser</code> — no root access to the host.</li>
          <li>Only whitelisted tools (claude, codex, gemini, cortex) can be spawned.</li>
        </ul>
        <h2>Supported Tools</h2>
        <ul>
          <li><strong>Claude Code</strong> — Anthropic's AI coding assistant</li>
          <li><strong>Codex</strong> — OpenAI's coding CLI</li>
          <li><strong>Gemini CLI</strong> — Google's Gemini coding assistant</li>
        </ul>
      </div>
    ),
    "ai-relay-protocol": (
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <h1>ai-relay: WebSocket Relay Protocol</h1>
        <p>
          <a href="https://pypi.org/project/ai-relay/" target="_blank" rel="noopener noreferrer"><strong>ai-relay</strong></a> (v0.2.9) is an open-source Python package that bridges AI coding agent CLIs to any WebSocket-capable frontend.
        </p>
        <h2>Install</h2>
        <pre><code>pip install ai-relay</code></pre>
        <h2>Start the relay</h2>
        <pre><code>ai-relay --port 8765</code></pre>
        <h2>Event Types</h2>
        <p>All events are JSON objects with <code>type</code>, <code>ts</code>, and <code>session_id</code> fields.</p>
        <table>
          <thead><tr><th>type</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>session_start</code></td><td>CLI process spawned</td></tr>
            <tr><td><code>session_end</code></td><td>Process exited, includes <code>exit_code</code></td></tr>
            <tr><td><code>stdout</code></td><td>Raw terminal output line</td></tr>
            <tr><td><code>tool_call</code></td><td>Claude Code tool use detected</td></tr>
            <tr><td><code>reasoning</code></td><td>Thinking / planning output</td></tr>
            <tr><td><code>url</code></td><td>URL detected (e.g. OAuth link)</td></tr>
            <tr><td><code>quota_warning</code></td><td>Rate limit / quota error</td></tr>
            <tr><td><code>context_warning</code></td><td>Context window filling up</td></tr>
            <tr><td><code>context_compacted</code></td><td>Context was compacted</td></tr>
            <tr><td><code>error</code></td><td>Fatal error line</td></tr>
            <tr><td><code>input_ack</code></td><td>Echoes user input back</td></tr>
          </tbody>
        </table>
        <h2>Send input</h2>
        <pre><code>{`// Send a prompt
{"text": "refactor this function to use async/await"}

// Send CLI commands
{"text": "/compact"}
{"text": "/clear"}`}</code></pre>
        <p>GitHub: <a href="https://github.com/jw-open/ai-relay" target="_blank" rel="noopener noreferrer">github.com/jw-open/ai-relay</a></p>
      </div>
    ),
    "lab-claude-code": (
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <h1>Connecting Claude Code to Lab</h1>
        <h2>On OhWise Cloud</h2>
        <p>Claude Code is pre-installed on the OhWise server. Just select <strong>Claude Code</strong> when creating a session — no setup needed.</p>
        <h2>First Connection</h2>
        <ol>
          <li>Create a session with Tool = <strong>Claude Code</strong>.</li>
          <li>Click <strong>Connect</strong>.</li>
          <li>Claude Code starts and the startup screen appears in the stream.</li>
          <li>The theme wizard is auto-confirmed (dark mode selected).</li>
          <li>An OAuth link appears — see <em>OAuth Authentication in Lab</em>.</li>
        </ol>
        <h2>Subsequent Sessions</h2>
        <p>After the first OAuth login, credentials are saved in your workspace (<code>.claude/</code> directory). Subsequent sessions start immediately without re-authentication.</p>
        <h2>Using /model</h2>
        <p>Change the model mid-session by typing <code>/model sonnet</code> or <code>/model opus</code> in the Lab input.</p>
      </div>
    ),
    "lab-oauth": (
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <h1>OAuth Authentication in Lab</h1>
        <p>
          Lab uses your existing Claude Pro/Max subscription via browser OAuth — no API key or per-token cost needed.
        </p>
        <h2>First-Time Auth Flow</h2>
        <ol>
          <li>Connect a Claude Code session in Lab.</li>
          <li>Claude Code outputs an authentication URL — it appears as a <strong>clickable blue link</strong> in the stream.</li>
          <li>Click the link → your browser opens <code>claude.ai</code>.</li>
          <li>Log in with your Anthropic account.</li>
          <li>Copy the authorization code shown on the page.</li>
          <li>Paste the code into the Lab input field → click <strong>Send</strong>.</li>
          <li>Claude Code saves the credentials and starts responding.</li>
        </ol>
        <h2>Credential Persistence</h2>
        <p>
          Credentials are stored in your isolated workspace (<code>/var/ohwise-lab-workspaces/&#123;user_id&#125;/.claude/</code>) on a Docker named volume. They persist across container restarts — you only authenticate once.
        </p>
      </div>
    ),
  };

  // State to manage which article is currently being viewed
  const [selectedArticle, setSelectedArticle] = useState<null | { title: string; content: React.ReactNode }>(null);

  // Function to show article content
  const showArticle = (categoryTitle: string, article: { title: string; slug: string }) => {
    const labContent = labArticles[article.slug];
    setSelectedArticle({
      title: article.title,
      content: labContent ?? (
        <div className="prose dark:prose-invert prose-lg max-w-none">
          <h1>{article.title}</h1>
          <p>This is sample content for the "{article.title}" article in the {categoryTitle} category.</p>
          <p>In a production environment, this content would be loaded from a database or CMS system.</p>
          <p>Visit the admin dashboard to manage documentation content.</p>
        </div>
      )
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Documentation
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Everything you need to know about using OhWise effectively
              </p>
              <div className="relative mx-auto max-w-md">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
                <button className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {selectedArticle ? (
              <div className="max-w-4xl mx-auto">
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Documentation
                </button>
                {selectedArticle.content}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((category, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                    <div className="flex items-center mb-4">
                      {category.icon}
                      <h2 className="text-xl font-bold ml-2">{category.title}</h2>
                    </div>
                    <ul className="space-y-3">
                      {category.articles.map((article, idx) => (
                        <li key={idx}>
                          <button 
                            onClick={() => showArticle(category.title, article)}
                            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 w-full text-left"
                          >
                            <ChevronRight size={16} className="mr-1 flex-shrink-0" />
                            <span>{article.title}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                    <button 
                      className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      onClick={() => {}}
                    >
                      View all <ChevronRight size={14} className="inline" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Recent Updates - only show on main page, not article view */}
        {!selectedArticle && (
          <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8 text-center">Recent Updates</h2>
              <div className="max-w-3xl mx-auto">
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                          <FileText className="text-blue-600" size={18} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h3 className="text-lg font-medium">API Authentication Changes</h3>
                          <span className="ml-2 text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                            Updated
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          We've updated our API authentication process to support multiple authentication methods including OAuth 2.0 and API keys.
                        </p>
                        <div className="mt-2 text-sm">
                          <span className="text-gray-500 dark:text-gray-500">Updated on May 15, 2023</span>
                          <button className="ml-4 text-blue-600 dark:text-blue-400 hover:underline">
                            View changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                          <FileText className="text-green-600" size={18} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h3 className="text-lg font-medium">New Agent Configuration Guide</h3>
                          <span className="ml-2 text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                            New
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          A comprehensive guide on configuring multi-agent systems for various industry use cases.
                        </p>
                        <div className="mt-2 text-sm">
                          <span className="text-gray-500 dark:text-gray-500">Published on May 10, 2023</span>
                          <button className="ml-4 text-blue-600 dark:text-blue-400 hover:underline">
                            Read guide
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Resources Section - only show on main page, not article view */}
        {!selectedArticle && (
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8 text-center">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                  <Video className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-2">Video Tutorials</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Step-by-step video guides for visual learners.
                  </p>
                  <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium mt-auto flex items-center">
                    Watch now <ExternalLink size={14} className="ml-1" />
                  </button>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                  <Code className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-2">Code Samples</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Ready-to-use code examples for common scenarios.
                  </p>
                  <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium mt-auto flex items-center">
                    Browse samples <ExternalLink size={14} className="ml-1" />
                  </button>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                  <Lightbulb className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-2">Use Cases</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Real-world examples of OhWise in action.
                  </p>
                  <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium mt-auto flex items-center">
                    Explore cases <ExternalLink size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <CTASection 
          title="Ready to get started with OhWise?"
          subtitle="Explore our platform and discover how it can transform your operations."
          primaryButtonText="Get Started"
          primaryButtonLink="https://cloud.ohwise.com/"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
