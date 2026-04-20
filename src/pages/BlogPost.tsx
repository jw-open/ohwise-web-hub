
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Calendar, Clock, ChevronLeft, Share2, Bookmark, ThumbsUp, MessageSquare, Tag } from "lucide-react";
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
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      const foundPost = BLOG_POSTS.find(p => p.id === Number(id));
      setPost(foundPost || null);
      setLoading(false);
    }, 500);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id]);
  
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto">
              <div className="animate-pulse">
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md mb-4 w-3/4"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md mb-8 w-1/2"></div>
                <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-md mb-8"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                The blog post you're looking for doesn't exist or has been removed.
              </p>
              <Link to="/blog">
                <Button>
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <article className="pb-16">
          {/* Hero */}
          <div className="h-96 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10"></div>
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center text-white">
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                      {post.category}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    {post.title}
                  </h1>
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <div className="prose prose-lg dark:prose-invert max-w-none mb-8" 
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
                
                {/* Tags */}
                <div className="mb-8">
                  <div className="flex items-center flex-wrap gap-2">
                    <Tag className="h-4 w-4 text-gray-500" />
                    {post.tags.map((tag, index) => (
                      <Link 
                        key={index} 
                        to={`/blog?tag=${tag}`}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Engagement */}
                <div className="flex justify-between items-center border-t border-b py-4 mb-8 border-gray-200 dark:border-gray-700">
                  <div className="flex gap-4">
                    <button className="flex items-center text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
                      <ThumbsUp className="h-5 w-5 mr-1" />
                      <span>Like</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
                      <MessageSquare className="h-5 w-5 mr-1" />
                      <span>Comment</span>
                    </button>
                  </div>
                  <div className="flex gap-3">
                    <button className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
                      <Bookmark className="h-5 w-5" />
                    </button>
                    <button className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                {/* Author */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                  <div className="flex items-start sm:items-center flex-col sm:flex-row gap-4">
                    <img 
                      src={post.authorAvatar} 
                      alt={post.author} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{post.author}</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-2">{post.authorTitle}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Passionate about building tools that make AI operations more accessible and efficient for organizations of all sizes.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <Link to="/blog">
                    <Button variant="outline">
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Back to Blog
                    </Button>
                  </Link>
                  <div className="flex gap-2">
                    {/* Previous/Next post navigation could go here */}
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/3 space-y-8">
                {/* Related Posts */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {RELATED_POSTS.map(relatedPost => (
                      <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="block group">
                        <div className="flex gap-3">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title} 
                            className="w-20 h-16 object-cover rounded"
                          />
                          <div>
                            <h4 className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {relatedPost.date}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Categories */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Categories</h3>
                    <div className="space-y-2">
                      {["Announcements", "Technical", "Best Practices", "Case Studies", "Tutorials"].map((category, index) => (
                        <Link 
                          key={index} 
                          to={`/blog?category=${category}`} 
                          className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Subscribe Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Subscribe</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Get the latest posts delivered straight to your inbox.
                    </p>
                    <SubscribeForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
