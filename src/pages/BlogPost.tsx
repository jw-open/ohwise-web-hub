
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Clock, ChevronLeft, ArrowUpRight } from "lucide-react";
import SubscribeForm from "../components/blog/SubscribeForm";

// Mock blog post data
const BLOG_POSTS = [
  {
    id: 1,
    title: "Introducing OhWise 2.0: The Next Generation of AI Operations",
    content: `
      <p class="lead">Today, we're thrilled to announce the release of OhWise 2.0, our most significant platform update yet. This new version brings enhanced multi-agent capabilities, improved knowledge graph integration, and a completely redesigned user interface.</p>
      
      <h2>Revolutionizing AI Operations</h2>
      <p>Since launching OhWise, our mission has been clear: to make complex AI operations simple, efficient, and accessible to businesses of all sizes. With OhWise 2.0, we're taking a major step forward in realizing that vision.</p>
      
      <p>Our customers have been using OhWise to automate complex workflows, reduce operational overhead, and extract valuable insights from their data. Now, with version 2.0, we're introducing features that make these capabilities even more powerful and easier to implement.</p>
      
      <h2>Key Features in OhWise 2.0</h2>
      
      <h3>Enhanced Multi-Agent Orchestration</h3>
      <p>OhWise 2.0 introduces a completely redesigned agent orchestration system that enables more complex interactions between specialized AI agents. This means your agents can collaborate more effectively, share context, and solve problems that would be impossible for a single agent to handle.</p>
      
      <h3>Advanced Knowledge Graph Integration</h3>
      <p>Our knowledge graph capabilities have been significantly expanded, allowing for more nuanced relationships between data points and improved reasoning capabilities. This translates to better insights, more accurate predictions, and more effective automation.</p>
      
      <h3>Redesigned User Interface</h3>
      <p>We've completely rebuilt our user interface from the ground up, focusing on simplicity, usability, and power. The new UI makes it easier than ever to design workflows, monitor agent performance, and analyze results.</p>
      
      <h3>Expanded Integration Ecosystem</h3>
      <p>OhWise 2.0 now connects with over 50 popular tools and platforms out of the box, making it simpler to integrate into your existing technology stack. From CRMs to data warehouses, we've got you covered.</p>
      
      <h2>Customer Success Stories</h2>
      <p>During our beta testing period, several customers have already experienced the benefits of OhWise 2.0:</p>
      
      <blockquote>
        "OhWise 2.0 has transformed how we handle customer support incidents. What used to take hours now happens automatically in minutes, and with greater accuracy than ever before."
        <cite>— Sarah Johnson, CTO at TechSolutions Inc.</cite>
      </blockquote>
      
      <h2>Getting Started with OhWise 2.0</h2>
      <p>For existing customers, upgrading to OhWise 2.0 is simple and non-disruptive. Your current configurations will be automatically migrated, and our team is standing by to help with any questions.</p>
      
      <p>New to OhWise? There's never been a better time to start. Our onboarding process has been streamlined, and we offer comprehensive documentation and support to get you up and running quickly.</p>
      
      <h2>Looking Ahead</h2>
      <p>OhWise 2.0 represents a major milestone in our journey, but we're just getting started. Our roadmap for the coming year includes even more exciting features, including enhanced natural language processing capabilities, deeper analytics, and expanded customization options.</p>
      
      <p>We're incredibly grateful to our customers and partners who have provided valuable feedback and support throughout this development process. Together, we're building the future of intelligent operations.</p>
    `,
    author: "Sarah Johnson",
    authorTitle: "Chief Product Officer",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces",
    date: "August 15, 2023",
    readTime: "5 min read",
    category: "Announcements",
    tags: ["Product Update", "AI Operations", "Multi-agent Systems"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 7,
    title: "Beyond Harness Engineering: How OhWise Automates the Scaffolding at Scale",
    content: `
      <p class="lead">Every serious AI team eventually hits the same wall. You start with a prompt. Then you need retry logic. Then routing to different models. Then context injection. Then evals. Then tool-use scaffolding. Then multi-step chains. Before long, you have thousands of lines of bespoke "harness" code that has nothing to do with your actual product — and it's fragile, hard to test, and impossible to hand off.</p>

      <p>This is harness engineering: the invisible tax every team pays to make LLMs production-ready. OhWise was built to eliminate it.</p>

      <h2>What Is Harness Engineering?</h2>

      <p>Harness engineering is the practice of building the scaffolding around an LLM to make it useful in a real system. It includes:</p>

      <ul>
        <li><strong>Prompt chaining</strong> — sequencing multiple LLM calls where each output feeds the next input</li>
        <li><strong>Context management</strong> — deciding what information to include, truncate, summarize, or retrieve</li>
        <li><strong>Retry and fallback logic</strong> — handling rate limits, timeouts, hallucinations, and partial failures</li>
        <li><strong>Tool use scaffolding</strong> — routing the model to APIs, databases, or other services and parsing the results</li>
        <li><strong>Evaluation and guardrails</strong> — detecting when an output is wrong, toxic, or off-policy before it reaches a user</li>
        <li><strong>State management</strong> — persisting intermediate results across a multi-step workflow</li>
      </ul>

      <p>Each of these is a solved problem in isolation. The trouble is that they compound. A six-step agent workflow with fallbacks, evals, and tool use at each step doesn't have six problems — it has combinatorial ones. Teams end up building custom state machines, writing bespoke orchestration code, and reinventing patterns that every other AI team is also reinventing in parallel.</p>

      <h2>Why Harness Engineering Doesn't Scale</h2>

      <p>The deeper problem isn't the complexity — it's the ownership model. Harness code is typically written by the same engineers building the product feature. That means:</p>

      <ul>
        <li>Every new agent or workflow requires a new harness from scratch</li>
        <li>Changes to one agent's logic can silently break another's</li>
        <li>There is no standard interface — each harness is idiosyncratic</li>
        <li>Deploying the same agent for a second customer or team means duplicating or carefully parameterizing the entire harness</li>
        <li>Observability is an afterthought; you have to instrument each harness individually</li>
      </ul>

      <p>At one agent, this is manageable. At ten agents across five teams in a multi-tenant SaaS product, it becomes the primary source of engineering debt.</p>

      <h2>OhWise: The Harness Becomes the Platform</h2>

      <p>OhWise inverts the model. Instead of each team building its own harness, the harness is the platform — declared once, executed consistently, and extended through configuration rather than code.</p>

      <h3>DAG-Based Execution</h3>

      <p>In OhWise, a multi-step agent workflow is modeled as a directed acyclic graph (DAG). Each node is a task with a defined input/output contract. The platform handles execution order, parallelism where possible, and dependency resolution automatically. Engineers define <em>what</em> needs to happen and in what order — the platform handles <em>how</em>.</p>

      <p>This means adding a new step to a workflow is a configuration change, not a code change. The retry logic, timeout handling, and state persistence are inherited, not written again.</p>

      <h3>State Machine Coordination</h3>

      <p>Long-running agent workflows — ones that span multiple user turns, wait for external events, or require human approval — are managed by OhWise's state machine layer. When a workflow suspends (waiting for user input, an API response, or a scheduled trigger), its state is serialized and stored. When the trigger fires, execution resumes exactly where it left off, with full context restored.</p>

      <p>This is the piece that most hand-rolled harnesses never properly implement. Teams either block a thread, poll a database, or lose state on restart. OhWise treats resumable execution as a primitive.</p>

      <h3>Knowledge Graph Context Injection</h3>

      <p>Rather than manually constructing prompts with relevant context at each step, OhWise agents draw from a structured knowledge graph. The platform traverses relationships, ranks relevance, and injects the right context at the right step — without the developer writing context-retrieval code for every node.</p>

      <p>This is what separates intelligent retrieval from naive RAG. The knowledge graph knows that a customer's billing history is relevant to a refund agent but not a technical support agent, and applies that distinction automatically based on the agent's declared scope.</p>

      <h2>Automated Harness Engineering at Multi-Tenant Scale</h2>

      <p>The single-tenant version of this is already valuable. The multi-tenant version is where OhWise's architectural choices pay the largest dividend.</p>

      <p>In a multi-tenant deployment, every customer organization needs:</p>
      <ul>
        <li>Isolated agent configurations (their agents, their prompts, their tools)</li>
        <li>Isolated execution contexts (their data, their conversation history, their knowledge graph)</li>
        <li>Shared infrastructure (the DAG runner, the state machine, the Redis pub/sub layer, the Lambda execution environment)</li>
        <li>Per-tenant observability (logs and traces scoped to their organization)</li>
      </ul>

      <p>In a traditional harness-engineering world, multi-tenancy means either running one harness instance per tenant (expensive and operationally heavy) or carefully threading tenant IDs through every piece of custom logic (fragile and hard to audit).</p>

      <p>OhWise handles this at the platform level. The group_id and tenant identity flow through every layer — from the WebSocket connection through Redis pub/sub to Lambda execution — without the application developer touching it. A new tenant getting their own isolated agent workspace is not a deployment event; it's a data event.</p>

      <h3>Configuration, Not Code</h3>

      <p>When a new agent is created in OhWise, the developer specifies the DAG topology, the task definitions, the model and tool bindings, and the knowledge sources. The platform generates the harness. There is no orchestration code to write, no retry logic to implement, no state serialization to design.</p>

      <p>This means a team that would previously spend two engineering weeks building the scaffolding for a new agent can instead spend two hours on the agent's actual logic. The harness is infrastructure — it should be boring and reliable, not novel and hand-crafted every time.</p>

      <h2>Observability Across All Agents</h2>

      <p>Because every agent runs through the same platform, observability is uniform. Every task execution, every LLM call, every tool invocation, and every state transition is captured in the same format. Debugging an agent failure doesn't require reading bespoke harness code to understand what happened — the execution trace is in the platform, structured the same way for every agent across every tenant.</p>

      <p>This also makes evals tractable at scale. When the underlying execution model is consistent, you can run automated quality checks across your entire agent fleet, not just the one you happened to instrument this sprint.</p>

      <h2>The Trajectory</h2>

      <p>Harness engineering is what every AI-first team has to do today. It's the necessary friction between raw LLM capabilities and production-grade systems. But friction that is universal is friction that should be abstracted.</p>

      <p>The teams that will move fastest in the next two years are not the ones that build the best harnesses. They are the ones that stop building harnesses at all — because they have a platform that builds them automatically, consistently, and at any scale.</p>

      <p>That is what OhWise is for.</p>
    `,
    author: "OhWise Engineering",
    authorTitle: "Platform Engineering Team",
    authorAvatar: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=150&h=150&fit=crop&crop=faces",
    date: "April 20, 2026",
    readTime: "9 min read",
    category: "Technical",
    tags: ["Harness Engineering", "Multi-agent", "Platform", "Multi-tenant", "LLM Infrastructure"],
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
];

// Mock related posts
const RELATED_POSTS = [
  {
    id: 2,
    title: "How AI is Transforming DevOps: The OhWise Approach",
    excerpt: "The integration of AI into DevOps processes is no longer a future trend—it's happening now.",
    date: "August 10, 2023",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    title: "OhWise Product Roadmap: What's Coming in Q4 2023",
    excerpt: "Our product team has been hard at work planning exciting new features for the OhWise platform.",
    date: "July 15, 2023",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Building Responsible AI Systems with OhWise",
    excerpt: "As AI systems become more prevalent, ensuring they operate ethically and responsibly is paramount.",
    date: "August 5, 2023",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<typeof BLOG_POSTS[0] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const found = BLOG_POSTS.find(p => p.id === Number(id));
    setPost(found || null);
    setLoading(false);
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="max-w-2xl mx-auto px-4 py-24 animate-pulse space-y-6">
            <div className="h-6 bg-gray-100 dark:bg-gray-800 rounded-full w-24" />
            <div className="h-10 bg-gray-100 dark:bg-gray-800 rounded-xl w-3/4" />
            <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded-xl w-1/2" />
            <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-2xl" />
            <div className="space-y-3">
              {[1,2,3,4].map(i => <div key={i} className="h-4 bg-gray-100 dark:bg-gray-800 rounded" />)}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
        <Navbar />
        <main className="flex-grow pt-20 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-6xl mb-6">📄</p>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Article not found</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-8">This post may have moved or been removed.</p>
            <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline">
              <ChevronLeft size={16} /> Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <main className="flex-grow pt-20">
        <article>
          {/* ── Hero image ──────────────────────────────────────────────── */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
            {/* Back link */}
            <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mb-8">
              <ChevronLeft size={15} /> All articles
            </Link>

            {/* Category + title */}
            <span className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              {post.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight mt-3 mb-5 max-w-3xl">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 dark:text-gray-500 mb-10">
              <span className="font-medium text-gray-700 dark:text-gray-300">{post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock size={13} />{post.readTime}</span>
            </div>

            {/* Hero image */}
            <div className="rounded-3xl overflow-hidden aspect-[21/9] mb-14">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* ── Body ────────────────────────────────────────────────────── */}
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div
              className="prose prose-lg prose-gray dark:prose-invert max-w-none
                prose-headings:font-semibold prose-headings:tracking-tight
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300
                prose-li:text-gray-700 dark:prose-li:text-gray-300
                prose-strong:text-gray-900 dark:prose-strong:text-white
                prose-blockquote:border-blue-500 prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400
                prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-gray-50 dark:prose-code:bg-gray-900 prose-code:rounded prose-code:px-1"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
              {post.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  {tag}
                </span>
              ))}
            </div>

            {/* Author card */}
            <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900">
              <img
                src={post.authorAvatar}
                alt={post.author}
                className="w-14 h-14 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{post.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{post.authorTitle}</p>
              </div>
            </div>
          </div>

          {/* ── Related articles ────────────────────────────────────────── */}
          <div className="border-t border-gray-100 dark:border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">More articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {RELATED_POSTS.map(rel => (
                  <Link key={rel.id} to={`/blog/${rel.id}`} className="group flex flex-col gap-3">
                    <div className="rounded-xl overflow-hidden aspect-[16/9] bg-gray-100 dark:bg-gray-800">
                      <img src={rel.image} alt={rel.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                    <span className="text-xs text-gray-400">{rel.date}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ── Subscribe ───────────────────────────────────────────────── */}
          <div className="bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Stay in the loop.</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">New articles, direct to your inbox.</p>
              <SubscribeForm />
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
