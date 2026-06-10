
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
    title: "When Your Team's Knowledge Becomes Your Competitive Advantage",
    content: `
      <p class="lead">Most teams have good people, good intentions, and enough AI tools to feel like they're keeping up. But the gap between teams that get real leverage from AI and teams that don't usually comes down to one thing: knowledge.</p>

      <p>Not knowledge as in expertise — your team already has that. Knowledge as in: can your AI systems actually access what your team knows, in a structured way, at the moment it's needed?</p>

      <h2>The Problem With Isolated AI</h2>

      <p>When AI is deployed as a standalone tool — a chat interface here, an automation script there — it operates on whatever context it's given in the moment. It doesn't know your product, your customers, your historical decisions, or the nuances of your domain. Every interaction starts from scratch.</p>

      <p>The result is answers that are technically correct but operationally useless. Generic summaries when you needed specific comparisons. Plausible reasoning when you needed reasoning grounded in your actual data.</p>

      <p>The teams that outperform don't have better AI. They have better context.</p>

      <h2>What Structured Knowledge Changes</h2>

      <p>When your institutional knowledge is organized into a structured graph — where concepts, relationships, and dependencies are explicit — AI stops guessing and starts reasoning. It can trace from a customer problem back to the relevant decision history. It can surface the right precedent from thousands of past cases. It can understand that two things that sound similar are actually different, and two things that sound different are actually the same.</p>

      <p>This changes what AI can do for your team in a fundamental way. Instead of answering the question you typed, it answers the question you meant.</p>

      <h2>Knowledge That Compounds</h2>

      <p>The compounding effect is what makes this strategic rather than tactical. Every interaction that touches your knowledge graph either uses existing knowledge or can contribute new knowledge. Over time, your AI systems become progressively more useful without requiring progressively more effort to maintain.</p>

      <p>Teams that invest in their knowledge layer early find that their AI capabilities improve continuously, while teams that skip this step find themselves rebuilding context from scratch every six months when they adopt a new tool.</p>

      <h2>From Retrieval to Reasoning</h2>

      <p>The shift from retrieval to reasoning is where the real productivity gains live. Retrieval answers "what do we know?" Reasoning answers "what should we do, given what we know?" The first is a search problem. The second is an intelligence problem.</p>

      <p>OhWise is built around the second problem. Knowledge graphs are the foundation — they give AI the structure to reason rather than just retrieve. Agents built on top of that foundation can run complex multi-step tasks, adapt to new information mid-workflow, and hand off to humans with full context intact.</p>

      <p>The teams that figure this out aren't just more productive. They're compounding an advantage that's genuinely hard to replicate.</p>
    `,
    author: "OhWise Team",
    authorTitle: "OhWise",
    authorAvatar: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop&crop=faces",
    date: "June 2026",
    readTime: "6 min read",
    category: "Use Cases",
    tags: ["Knowledge Graphs", "AI Strategy", "Productivity"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "The Hidden Cost of Every Hour an Incident Goes Unresolved",
    content: `
      <p class="lead">The visible cost of an incident is the downtime itself. Revenue stopped. Customers frustrated. SLAs breached. These numbers are real and they're usually the ones that end up in the post-mortem report.</p>

      <p>The invisible cost is harder to see but often larger: the engineer hours spent in war rooms, the decisions made on incomplete information, the follow-on incidents caused by rushed fixes, and the institutional knowledge that evaporates when the team finally catches their breath.</p>

      <h2>Why Response Feels Slower Than It Should</h2>

      <p>Modern systems fail in complex ways. A single incident might span three teams, a dozen services, and hundreds of log lines from the last fifteen minutes. The information is all there — it's just not assembled into anything a human can reason from quickly.</p>

      <p>So teams do what they've always done: they work the phones, they share dashboards, they make judgment calls under pressure. They're good at it. But they're also doing it manually, which means they're slow, inconsistent, and exhausted by the end.</p>

      <h2>What Coordination Changes</h2>

      <p>The bottleneck in most incident response isn't expertise — it's coordination and context assembly. Who knows what. Who's looking at which system. Who has the authority to make a change. Who needs to be notified.</p>

      <p>When you have AI agents handling the coordination layer — pulling together signals, drafting summaries, routing the right information to the right people — your experts can focus on the part only they can do: making the actual call.</p>

      <p>Response time compresses not because the humans got faster, but because they stopped doing work that didn't require them.</p>

      <h2>Reliability as a Competitive Moat</h2>

      <p>Customers don't remember the uptime. They remember the downtime. A single well-handled incident — fast acknowledgment, clear communication, quick resolution — can actually strengthen a customer relationship. A slow, opaque response erodes it permanently.</p>

      <p>Teams that invest in AI-coordinated incident response aren't just cutting costs. They're building reliability into their culture in a way that's visible to customers and defensible to competitors.</p>

      <h2>The Compounding Benefit</h2>

      <p>Each incident an AI-coordinated system handles builds a richer record: what happened, what was tried, what worked. Future incidents that look similar don't start from zero. The system surfaces relevant history. The human starts with context instead of building it from scratch.</p>

      <p>Over time, your team's collective response capability grows even when individuals turn over. The knowledge stays. The patterns persist. The hidden cost keeps shrinking.</p>
    `,
    author: "OhWise Team",
    authorTitle: "OhWise",
    authorAvatar: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&h=150&fit=crop&crop=faces",
    date: "June 2026",
    readTime: "5 min read",
    category: "Use Cases",
    tags: ["Reliability", "Incident Response", "Operations"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Your Most Productive Team Member Doesn't Take Breaks",
    content: `
      <p class="lead">If you could hire someone who never lost context between tasks, never forgot a detail from three months ago, could work on six things simultaneously, and handed off clearly documented work every single time — you would. That's what well-designed AI agents do for a team.</p>

      <p>But the analogy breaks down in one important way: agents aren't replacements for people. They're a different kind of collaborator, one that works best when humans are clear about what they're delegating and why.</p>

      <h2>What Gets Delegated Well</h2>

      <p>The tasks that AI agents handle best share a common shape: they're multi-step, they require pulling together information from multiple sources, they have a clear success condition, and they don't require live human judgment at every step — only at specific decision points.</p>

      <p>Research synthesis. First drafts with specific constraints. Data analysis across structured records. Monitoring for conditions and escalating when they're met. Running a workflow that requires coordination across three systems. These tasks take human hours. They take agent seconds.</p>

      <h2>The Handoff That Actually Works</h2>

      <p>The failure mode of AI-assisted work isn't usually the AI doing bad work. It's humans not knowing when to step back in. When should a human review? What does "done" look like? When is the agent's output a final answer versus a starting point?</p>

      <p>Teams that get the most from AI workflows are explicit about this. They design their workflows with clear handoff points — stages where a human reviews before the next step proceeds. They treat AI output as input to human judgment, not a replacement for it.</p>

      <p>OhWise supports this natively. Workflows can include designated review stages where a human must approve before execution continues. The agent does the work. The human makes the call.</p>

      <h2>Around the Clock, Not Around the Team</h2>

      <p>One of the underappreciated benefits of AI-coordinated workflows is that they're not bounded by business hours or time zones. A workflow kicked off at 5pm can run overnight, surface results at 8am, and hand off to a human with full context assembled. The person arriving in the morning doesn't catch up — they pick up exactly where things are.</p>

      <p>For globally distributed teams, this changes the collaboration dynamic entirely. Work moves continuously, not in time-zone-gated batches.</p>

      <h2>Productivity That Compounds</h2>

      <p>The teams that build effective AI workflows don't just get faster. They get better at knowing what to delegate. They develop clearer specifications. They build shared patterns for how work moves through their systems. The productivity gain isn't just in the agent work — it's in the quality of human work that the agents make possible.</p>
    `,
    author: "OhWise Team",
    authorTitle: "OhWise",
    authorAvatar: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=150&h=150&fit=crop&crop=faces",
    date: "June 2026",
    readTime: "6 min read",
    category: "Use Cases",
    tags: ["Productivity", "AI Agents", "Workflow Automation"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    title: "Why Security Teams Trust AI With More, Not Less",
    content: `
      <p class="lead">The instinct to keep AI out of security workflows is understandable. Security is high-stakes. Mistakes are costly. Automation in the wrong place can create exactly the vulnerabilities it's supposed to prevent.</p>

      <p>But the teams that have worked through this instinct have found something counterintuitive: AI doesn't just help security teams work faster. It helps them work more thoroughly — surfacing signals that would have been missed entirely under manual review.</p>

      <h2>The Volume Problem</h2>

      <p>Modern security environments generate more signals than any human team can review. Logs, alerts, access patterns, anomalies — the volume keeps growing while analyst headcount stays flat. Teams respond by tuning alerts aggressively to reduce noise, which inevitably means missing things. Or they triage by gut feel, which means what gets attention depends on who's on shift.</p>

      <p>Neither approach is defensible at scale. And both get worse as systems get more complex.</p>

      <h2>What AI Does Well in Security Contexts</h2>

      <p>AI agents excel at the parts of security work that are exhausting for humans: continuous monitoring across large surfaces, pattern matching against historical baselines, correlating signals across disconnected systems, and escalating only when something genuinely warrants human attention.</p>

      <p>This isn't replacing analysts — it's giving analysts a first pass that's already done. When a human looks at something, it's because the system has already determined it's worth a human's time. That changes how analysts spend their hours entirely.</p>

      <h2>Human Judgment Where It Counts</h2>

      <p>The key to trusting AI in security workflows is designing clear boundaries. AI handles detection and triage. Humans handle response decisions, especially ones with irreversible consequences. Every significant action — blocking access, isolating a system, notifying an external party — requires a human to confirm.</p>

      <p>OhWise supports this through its permission and approval model. Agents can run continuously and surface findings, but designated actions require explicit human sign-off before proceeding. The audit log captures everything: what the agent found, what it recommended, who approved, and when.</p>

      <h2>Security That Scales With Your Team</h2>

      <p>The math of manual security doesn't scale. Doubling your attack surface doesn't mean you can double your analyst headcount. But an AI-coordinated security workflow can cover more surface with the same team — and improve over time as the system learns what's normal for your specific environment.</p>

      <p>The teams that are winning on security right now aren't necessarily the ones with the biggest budgets. They're the ones that figured out how to make their analysts' judgment go further.</p>
    `,
    author: "OhWise Team",
    authorTitle: "OhWise",
    authorAvatar: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=150&h=150&fit=crop&crop=faces",
    date: "June 2026",
    readTime: "7 min read",
    category: "Use Cases",
    tags: ["Security", "AI Agents", "Reliability"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    title: "What Happens When Every Decision Has the Right Context",
    content: `
      <p class="lead">Ask a generic AI assistant a specific question and you'll usually get a generic answer. It's correct in the abstract. It just doesn't know your situation.</p>

      <p>This is the gap that limits AI usefulness in most organizations: not capability, but context. The model is powerful. It just doesn't know what you know.</p>

      <h2>Why Generic Answers Fall Short</h2>

      <p>Decisions aren't made in the abstract. They're made against a backdrop of constraints, history, relationships, and domain knowledge that took years to accumulate. A recommendation that ignores that backdrop isn't just incomplete — it can actively mislead by suggesting paths that would have worked in other contexts but don't fit yours.</p>

      <p>The teams that get the most from AI have solved this problem. They've built systems that give AI access to the right context before it answers — structured knowledge about their domain, their data, and their goals.</p>

      <h2>Context Is a System Design Problem</h2>

      <p>The reason most teams don't have good AI context isn't that they lack information. It's that their information isn't organized in a way that AI can use it. Documents in one system. Data in another. Decisions scattered across conversations, tickets, and email threads. The knowledge exists — it's just not accessible.</p>

      <p>Solving this is a system design problem, not a prompting problem. You can't write a prompt that compensates for missing structure. You have to build the structure.</p>

      <p>Knowledge graphs are the right structure for this. They make relationships explicit. They let the system trace from a question back through relevant history to find the most pertinent facts, not just the most recent ones.</p>

      <h2>What Changes When Context Is Right</h2>

      <p>The difference shows up in specificity. Instead of "here are five options to consider," you get "given your constraints and the decisions you've made before, here are two paths worth evaluating, and here's why the others don't apply." Instead of a literature review, you get an analysis against your specific situation.</p>

      <p>For teams making dozens of decisions a day — technical, commercial, operational — this compounds quickly. Better context at each decision point means fewer revisits, fewer wrong turns, and less time spent re-establishing shared understanding before a conversation can even start.</p>

      <h2>Intelligence That Reflects Your Work</h2>

      <p>The goal isn't AI that's smart in general. It's AI that's smart about your specific domain, your specific data, and your specific situation. That intelligence doesn't come from a bigger model. It comes from a better-organized knowledge layer that the model can reason against.</p>

      <p>When you build that layer, you stop asking AI for its opinion and start asking it for an informed perspective. That's a different kind of tool entirely.</p>
    `,
    author: "OhWise Team",
    authorTitle: "OhWise",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    date: "June 2026",
    readTime: "5 min read",
    category: "Best Practices",
    tags: ["Knowledge Graphs", "AI Context", "Decision Making"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    title: "Collaboration at the Speed of Thought: Teams, Agents, and Shared Goals",
    content: `
      <p class="lead">The traditional model of AI-assisted work is sequential: you ask, it answers, you act. This is useful. It's also slow, because it requires you to formulate the question perfectly before any work begins, and it produces one answer at a time in a single conversation thread.</p>

      <p>The teams that are pulling ahead have moved to something different: collaborative workspaces where humans and agents work alongside each other toward shared goals, in real time.</p>

      <h2>What Shared Workspaces Change</h2>

      <p>When a team can work in a shared space where both humans and agents participate, the bottleneck of "one conversation at a time" disappears. Multiple people can direct different agents toward different aspects of a problem simultaneously. Results get assembled in one place. Everyone sees the same context.</p>

      <p>More importantly, the conversation becomes the artifact. Instead of switching between a chat tool, a document, and a task tracker to piece together what happened and why, the workspace contains the full history: what was asked, what the agents found, what decisions were made, and by whom.</p>

      <h2>Agents as Active Participants</h2>

      <p>In a well-designed collaborative workspace, agents don't just respond when called. They can be configured to monitor ongoing conversations and act when the right conditions are met — surfacing a relevant piece of knowledge when a particular topic comes up, or flagging when a proposed decision conflicts with a policy the team has established.</p>

      <p>This is different from a chatbot. The agent is a participant with awareness of the ongoing context, not just the last message. It can be mentioned directly when you need it and stay quiet the rest of the time.</p>

      <h2>Accountability at Every Step</h2>

      <p>Collaboration at speed only works if accountability is clear. Who decided what. Which agent ran which task. What the output was. When a human reviewed it.</p>

      <p>OhWise keeps a complete audit trail for every action taken in a shared workspace: human messages, agent tasks, approvals, and outputs. When something needs to be revisited — whether it's a compliance review or a post-incident analysis — the record is there, complete and navigable.</p>

      <h2>The Org Chart Hasn't Changed. The Workflows Have.</h2>

      <p>Adopting collaborative AI workspaces doesn't require restructuring teams or changing reporting lines. It requires changing how work flows between the people and systems that already exist. The people who make decisions still make them. The agents handle the work that supports those decisions — faster, more thoroughly, and with full traceability.</p>

      <p>For teams that try it, the question quickly becomes: what were we doing with all that time before?</p>
    `,
    author: "OhWise Team",
    authorTitle: "OhWise",
    authorAvatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop&crop=faces",
    date: "June 2026",
    readTime: "6 min read",
    category: "Use Cases",
    tags: ["Team Collaboration", "Group Chat", "AI Agents"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 7,
    title: "Beyond Harness Engineering: How OhWise Automates the Scaffolding at Scale",
    content: `
      <p class="lead">Every serious AI team eventually hits the same wall. You start with a prompt. Then you need retry logic. Then routing to different models. Then context injection. Then evals. Then tool-use scaffolding. Then multi-step chains. Before long, you have thousands of lines of bespoke "harness" code that has nothing to do with your actual product, and it's fragile, hard to test, and impossible to hand off.</p>

      <p>This is harness engineering: the invisible tax every team pays to make LLMs reliable in production. OhWise was built to eliminate it.</p>

      <h2>What Is Harness Engineering?</h2>

      <p>Harness engineering is the practice of building the scaffolding around an LLM to make it useful in a real system. It includes:</p>

      <ul>
        <li><strong>Prompt chaining</strong>: sequencing multiple LLM calls where each output feeds the next input</li>
        <li><strong>Context management</strong>: deciding what information to include, truncate, summarize, or retrieve</li>
        <li><strong>Retry and fallback logic</strong>: handling rate limits, timeouts, hallucinations, and partial failures</li>
        <li><strong>Tool use scaffolding</strong>: routing the model to APIs, databases, or other services and parsing the results</li>
        <li><strong>Evaluation and guardrails</strong>: detecting when an output is wrong, toxic, or off-policy before it reaches a user</li>
        <li><strong>State management</strong>: persisting intermediate results across a multi-step workflow</li>
      </ul>

      <p>Each of these is a solved problem in isolation. The trouble is that they compound. A six-step agent workflow with fallbacks, evals, and tool use at each step doesn't have six problems; it has combinatorial ones. Teams end up building custom state machines, writing bespoke orchestration code, and reinventing patterns that every other AI team is also reinventing in parallel.</p>

      <h2>Why Harness Engineering Doesn't Scale</h2>

      <p>The deeper problem isn't the complexity. It's the ownership model. Harness code is typically written by the same engineers building the product feature. That means:</p>

      <ul>
        <li>Every new agent or workflow requires a new harness from scratch</li>
        <li>Changes to one agent's logic can silently break another's</li>
        <li>There is no standard interface; each harness is idiosyncratic</li>
        <li>Deploying the same agent for a second customer or team means duplicating or carefully parameterizing the entire harness</li>
        <li>Observability is an afterthought; you have to instrument each harness individually</li>
      </ul>

      <p>At one agent, this is manageable. At ten agents across five teams in a multi-tenant SaaS product, it becomes the primary source of engineering debt.</p>

      <h2>OhWise: The Harness Becomes the Platform</h2>

      <p>OhWise inverts the model. Instead of each team building its own harness, the harness is the platform: declared once, executed consistently, and extended through configuration rather than code.</p>

      <h3>DAG-Based Execution</h3>

      <p>In OhWise, a multi-step agent workflow is modeled as a directed acyclic graph (DAG). Each node is a task with a defined input/output contract. The platform handles execution order, parallelism where possible, and dependency resolution automatically. Engineers define <em>what</em> needs to happen and in what order; OhWise handles <em>how</em>.</p>

      <p>This means adding a new step to a workflow is a configuration change, not a code change. The retry logic, timeout handling, and state persistence are inherited, not written again.</p>

      <h3>State Machine Coordination</h3>

      <p>Long-running agent workflows that span multiple user turns, wait for external events, or require human approval are managed by OhWise's state machine layer. When a workflow suspends (waiting for user input, an API response, or a scheduled trigger), its state is serialized and stored. When the trigger fires, execution resumes exactly where it left off, with full context restored.</p>

      <p>This is the piece that most hand-rolled harnesses never properly implement. Teams either block a thread, poll a database, or lose state on restart. OhWise treats resumable execution as a primitive.</p>

      <h3>Knowledge Graph Context Injection</h3>

      <p>Rather than manually constructing prompts with relevant context at each step, OhWise agents draw from a structured knowledge graph. The platform traverses relationships, ranks relevance, and injects the right context at the right step, without the developer writing context-retrieval code for every node.</p>

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

      <p>OhWise handles this at the platform level. The group_id and tenant identity flow through every layer, from the WebSocket connection through Redis pub/sub to Lambda execution, without the application developer touching it. A new tenant getting their own isolated agent workspace is not a deployment event; it's a data event.</p>

      <h3>Configuration, Not Code</h3>

      <p>When a new agent is created in OhWise, the developer specifies the DAG topology, the task definitions, the model and tool bindings, and the knowledge sources. The platform generates the harness. There is no orchestration code to write, no retry logic to implement, no state serialization to design.</p>

      <p>This means a team that would previously spend two engineering weeks building the scaffolding for a new agent can instead spend two hours on the agent's actual logic. The harness is infrastructure. It should be boring and reliable, not novel and hand-crafted every time.</p>

      <h2>Observability Across All Agents</h2>

      <p>Because every agent runs through the same platform, observability is uniform. Every task execution, every LLM call, every tool invocation, and every state transition is captured in the same format. Debugging an agent failure doesn't require reading bespoke harness code to understand what happened. The execution trace is in the platform, structured the same way for every agent across every tenant.</p>

      <p>This also makes evals tractable at scale. When the underlying execution model is consistent, you can run automated quality checks across your entire agent fleet, not just the one you happened to instrument this sprint.</p>

      <h2>The Trajectory</h2>

      <p>Harness engineering is what every AI-first team has to do today. It's the necessary friction between raw LLM capabilities and production-grade systems. But friction that is universal is friction that should be abstracted.</p>

      <p>The teams that will move fastest in the next two years are not the ones that build the best harnesses. They are the ones that stop building harnesses at all, because they have a platform that builds them automatically, consistently, and at any scale.</p>

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
  {
    id: 9,
    title: "Personalized PageRank vs Vector Similarity: Why Graph Algorithms Win for Structured Context",
    content: `
      <p class="lead">Vector similarity search is the default retrieval mechanism for RAG (Retrieval-Augmented Generation) pipelines. Embed your documents, embed the query, take the top-k cosine similarities. It works well for unstructured text like articles, chat logs, and free-form documentation. But for structured data such as database schemas, code repositories, and document hierarchies, it systematically misses the most important relationships. We built three open-source packages using Personalized PageRank to fix this.</p>

      <h2>The core problem with vector similarity on structured data</h2>

      <p>Consider a database with 150 tables. A user asks: "Show me total revenue by customer for orders placed in the last 30 days, excluding cancelled orders." The relevant tables are <code>orders</code>, <code>customers</code>, <code>payments</code>, and <code>order_status</code>, connected by foreign keys: <code>orders.customer_id → customers.id</code>, <code>payments.order_id → orders.id</code>.</p>

      <p>Vector similarity retrieves tables whose names and column descriptions are semantically similar to the query. It will surface <code>orders</code> and <code>customers</code> reliably. But <code>payments</code> is semantically distant from "revenue" in most embedding spaces, so it might rank below <code>revenue_reports</code> (a summary table) or <code>invoice_items</code> (semantically close, structurally irrelevant). The foreign key relationship is invisible to the embedding.</p>

      <p>The LLM receives the wrong subgraph as context. It generates SQL that joins on non-existent relationships, or misses a table entirely, producing incorrect results.</p>

      <p>This isn't a limitation of the embedding model. It's a fundamental property of the problem. Structural relationships between entities are encoded in the topology of the graph, not in the semantic content of individual nodes. Vector similarity can only see the nodes; it cannot see the edges.</p>

      <h2>Personalized PageRank: graph traversal from query-relevant seeds</h2>

      <p>Personalized PageRank (PPR) is a variant of the original PageRank algorithm where, instead of starting a random walk from any node uniformly, you initialize the walk with a probability distribution concentrated on a set of seed nodes. The walk then propagates through the graph, decaying at each step by a teleportation factor α (typically 0.15). Nodes that are highly connected to the seeds, both directly and through multiple paths, accumulate high PPR scores.</p>

      <p>For structured context retrieval, the algorithm looks like this:</p>

      <ol>
        <li><strong>Build the graph</strong>: nodes are entities (tables, functions, document sections), edges are relationships (foreign keys, call chains, citations)</li>
        <li><strong>Identify seeds</strong>: find nodes that match the query through keyword matching, alias resolution, or a lightweight embedding lookup on node names only</li>
        <li><strong>Run PPR from seeds</strong>: propagate probability mass through the graph; nodes with multiple paths from seeds accumulate high scores</li>
        <li><strong>Extract top-k subgraph</strong>: take the highest-scoring nodes as context for the LLM</li>
      </ol>

      <p>For the query "total revenue by customer last 30 days", the seeds are <code>orders</code> and <code>customers</code> (matched by keyword). PPR propagates: <code>orders</code> is connected to <code>payments</code> (one hop), <code>order_status</code> (one hop), <code>customers</code> (one hop via FK). <code>payments</code> receives probability mass from both <code>orders</code> (directly) and as a downstream neighbor. It ranks consistently in the top-3 regardless of its semantic distance from "revenue".</p>

      <h2>graph2sql: schema graphs for text-to-SQL</h2>

      <p>The first package we built is <strong>graph2sql</strong> (v0.2.0, <code>pip install graph2sql</code>). It takes a database schema (tables, columns, foreign keys, aliases), builds a typed directed graph, and exposes a <code>rank()</code> method that runs Personalized PageRank from query-matched seed nodes.</p>

      <pre><code>from graph2sql import SchemaGraph

graph = SchemaGraph()
graph.add_node("orders",    content="id, customer_id, total, date, status_id")
graph.add_node("customers", content="id, name, email, region, signup_date")
graph.add_node("payments",  content="id, order_id, amount, payment_method, status")
graph.add_node("order_status", content="id, label")
graph.add_edge("orders", "customers", "belongs_to", weight=1.0)
graph.add_edge("payments", "orders",  "for",        weight=1.0)
graph.add_edge("orders", "order_status", "has_status", weight=0.8)

ranked = graph.rank("total revenue by customer last 30 days excluding cancelled", k=4)
# Returns: [orders, customers, payments, order_status]
# — structurally correct subgraph, regardless of embedding similarity</code></pre>

      <p>The ranked subgraph is passed as context to any LLM. No fine-tuning, no model dependency, no lock-in. The LLM generates SQL from a correct, minimal schema excerpt rather than from 150 tables of noise.</p>

      <p>The key design choice: <strong>no LLM dependency in the graph layer itself</strong>. The graph is built from DDL or ORM models. The ranking is pure linear algebra. The only LLM call is the final SQL generation, where the model already has the right context.</p>

      <h2>docs2graph: document knowledge graphs</h2>

      <p><strong>docs2graph</strong> (v0.3.2, <code>pip install docs2graph</code>) applies the same approach to documents. It processes PDFs, Word docs, Markdown, HTML, CSV, and 10+ other formats, extracts a knowledge graph of entities, sections, and relationships, then ranks relevant nodes for any query.</p>

      <p>The graph structure is richer for documents: nodes can be <em>sections</em>, <em>entities</em> (people, organizations, concepts), <em>tables</em>, or <em>cited sources</em>. Edges encode relationships: <em>contains</em> (section hierarchy), <em>mentions</em> (entity co-occurrence), <em>cites</em> (reference links), <em>relates_to</em> (semantic proximity).</p>

      <p>For a 200-page annual report, the relevant section for "quarterly revenue growth in APAC" is not simply the section with the highest embedding similarity to that string. It's the section that mentions revenue figures, is connected to the APAC regional breakdown table, and cites the prior-quarter comparison. PPR surfaces this through graph traversal; vector similarity surfaces the section whose prose most resembles the query string.</p>

      <h2>codebase2graph: code repository knowledge graphs</h2>

      <p><strong>codebase2graph</strong> (v0.1.0, <code>pip install codebase2graph</code>) extracts 10 typed graph types from any code repository: call graphs (which functions call which), entity graphs (class/function definitions), schema graphs (database models), infrastructure graphs (Docker, nginx, env vars), security graphs (auth decorators, permissions), and more.</p>

      <p>For a code understanding query like "how does authentication work for the /orders endpoint", PPR on the call graph identifies: the <code>/orders</code> route handler → the <code>require_auth</code> decorator → the <code>verify_jwt</code> function → the <code>load_user</code> database call → the <code>User</code> model. This call chain is the correct context for answering the question. Vector similarity on function docstrings would surface functions mentioning "authentication" or "orders", which may include unrelated auth utilities or order utilities that don't participate in the relevant call chain.</p>

      <h2>Empirical observations</h2>

      <p>Across the use cases we've tested, PPR on structured graphs produces smaller context with better relevance:</p>

      <ul>
        <li><strong>Text-to-SQL on large schemas</strong> (100+ tables): vector similarity at top-10 misses at least one required table in approximately 30% of multi-join queries. PPR at top-5 achieves near-complete recall on the same queries, with smaller context and fewer missed tables.</li>
        <li><strong>Document Q&amp;A</strong>: for hierarchical documents (legal contracts, technical specifications), PPR correctly retrieves sections connected by cross-references that vector similarity misses. The gap grows with document length and cross-reference density.</li>
        <li><strong>Code context</strong>: for call-chain questions, PPR produces 3–5x smaller context than embedding top-k at equivalent recall, because the relevant call chain is a sparse path through the graph rather than a cluster of semantically similar functions.</li>
      </ul>

      <h2>When vector similarity still wins</h2>

      <p>PPR on structured graphs is not universally better. For unstructured text corpora like support chat logs, product reviews, and news articles, where entities don't have well-defined typed relationships, vector similarity is the right tool. The graph structure would be arbitrary, and PPR would propagate through spurious edges.</p>

      <p>The right mental model: use vector similarity when your data is an unstructured collection of text chunks. Use graph-based PPR when your data has inherent structure that matters for answering queries, such as schemas, codebases, document hierarchies, or knowledge bases.</p>

      <h2>Implementation notes</h2>

      <p>All three packages implement PPR using sparse matrix operations on the adjacency matrix, making them efficient for graphs up to tens of thousands of nodes. The teleportation factor α is configurable (default 0.15). Edge weights influence propagation: stronger relationships (e.g., direct foreign keys) propagate more probability mass than weaker ones (e.g., indirect aliases).</p>

      <p>No LLM calls are made during graph construction or ranking. The packages are pure Python with numpy as the only non-stdlib dependency for the matrix operations. They work with any downstream LLM. Bring your own model, API key, and prompt template.</p>

      <h2>What we're building next</h2>

      <p>The graph packages are the retrieval layer for OhWise's broader multi-agent platform. The next step is integrating PPR-ranked context injection directly into DAG node execution so agents in a coordinator loop automatically receive graph-ranked context for their specific subtask, not a static slice of context from the pipeline entry point.</p>

      <p>All three packages are open source and actively maintained. Install them from PyPI, read the source, open issues, submit PRs. The graph retrieval layer should be a shared primitive, not something every team reinvents.</p>
    `,
    author: "OhWise Engineering",
    authorTitle: "Platform Engineering Team",
    authorAvatar: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=150&h=150&fit=crop&crop=faces",
    date: "June 8, 2026",
    readTime: "12 min read",
    category: "Technical",
    tags: ["Graph Algorithms", "PageRank", "Context Retrieval", "RAG", "Text-to-SQL", "Open Source"],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 10,
    title: "How OhWise Turns Your Sales Data Into Decisions, Automatically",
    content: `
      <p class="lead">Sales operations teams are drowning. Not in leads, but in spreadsheets. Quota attainment by rep, attainment by territory, variable compensation reconciliation, pipeline coverage ratios, forecast accuracy tracking. The data lives in Salesforce, in comp tools, in Excel files emailed on Friday afternoons. Turning it into insight requires hours of manual work. By the time the analysis lands on the sales leader's desk, the quarter is already over.</p>

      <p>This is the sales ops problem. It's not a data problem; the data exists. It's an automation problem: the steps between raw CRM data and a useful decision are repetitive, well-defined, and currently done by hand.</p>

      <h2>Why sales ops is a natural fit for multi-agent automation</h2>

      <p>Every sales analysis follows a recognizable pattern: pull data from one or more sources, apply a transformation (sum, rank, delta, ratio), format the result, and route it to the right person. That pattern is a workflow. And workflows are exactly what OhWise was built to automate.</p>

      <p>Sales compensation analysis, for example, is a DAG: pull quota data from the comp tool → pull closed-won data from Salesforce → join on rep ID → compute attainment percentage → flag reps above/below threshold → generate the compensation summary → send to finance. Each of those steps is a node. The platform handles execution order, error handling, and retry logic automatically.</p>

      <p>With OhWise, a sales ops lead defines the workflow once. After that, it runs on schedule or on demand without manual intervention.</p>

      <h2>What a Sales Copilot looks like in OhWise</h2>

      <h3>Lab: your AI coding agent for ad-hoc analysis</h3>

      <p>Lab is OhWise's interface for running AI coding agent CLI sessions (Claude Code, Codex, Gemini CLI) in a live web UI. For sales ops, Lab is the ad-hoc analysis layer. Need to write a Python script that joins three Salesforce exports and generates a compensation summary? Open a Lab session, describe what you need, and let the agent write and run the code while you watch every reasoning step and file diff in real time.</p>

      <p>Lab sessions are persistent. You can close the browser, come back tomorrow, and resume exactly where you left off. Every tool call, every file the agent touches, every output is captured in the session history. No lost work, no re-explaining context.</p>

      <h3>Studio: multi-step missions that run autonomously</h3>

      <p>Studio is OhWise's multi-agent orchestration layer. Where Lab is interactive, Studio is autonomous. You define a mission such as "Generate the weekly pipeline coverage report and post it to #sales-ops on Slack," and a coordinator agent breaks it into subtasks, routes them to specialized agents, and synthesizes the result.</p>

      <p>For recurring sales analysis workflows, Studio is the right layer. Configure it once: pull the data, run the analysis, format the output, deliver it. The platform handles the orchestration. Your team gets the output without touching a spreadsheet.</p>

      <h3>Specific capabilities</h3>

      <ul>
        <li><strong>Compensation analysis</strong>: automate variable comp reconciliation. Pull attainment data, apply comp plan rules, flag exceptions, generate the summary. What used to take a day takes minutes.</li>
        <li><strong>Pipeline forecasting</strong>: run weighted pipeline models on your CRM data. Surface deals at risk, identify coverage gaps by segment, and generate the forecast package automatically.</li>
        <li><strong>Dashboard generation</strong>: produce HTML or Markdown summaries of key metrics, ready to paste into a Notion doc or email. No Tableau license required.</li>
        <li><strong>Revenue optimization insights</strong>: identify which product lines, territories, or rep segments are over- or under-performing. Surface the data behind the insight automatically.</li>
      </ul>

      <h2>The real value: consistent, on-demand analysis without a data team</h2>

      <p>Most sales organizations at the 50–500 person stage don't have a dedicated data team. Analysis happens whenever someone has time. Reports are inconsistent. Decisions lag the data by weeks.</p>

      <p>OhWise closes that gap. The workflows are defined once and run reliably. The analysis is consistent because the steps are deterministic. The output is always fresh because it runs on your schedule, not on someone's bandwidth.</p>

      <p>Sales leaders get the data they need when they need it. Finance gets comp summaries on time. The ops team stops being the bottleneck.</p>

      <h2>Getting started</h2>

      <p>The fastest way to start is to open a Lab session and describe your most time-consuming recurring analysis. Let the agent write the first version of the script. Review the output. Refine it. Once it's working, move it to Studio as a scheduled mission.</p>

      <p>You don't need to integrate your CRM on day one. A CSV export is enough to get started. Add integrations incrementally as you build confidence in the workflows.</p>

      <p>If your sales team is making decisions from last week's data, that's a solvable problem. <a href="https://cloud.ohwise.com" target="_blank" rel="noopener noreferrer">Get started with OhWise</a> and run your first sales analysis today.</p>
    `,
    author: "OhWise Team",
    authorTitle: "Product Team",
    authorAvatar: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=150&h=150&fit=crop&crop=faces",
    date: "June 2025",
    readTime: "6 min read",
    category: "Use Cases",
    tags: ["Sales Ops", "Compensation Analysis", "Pipeline Forecasting", "Use Cases", "Studio"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 11,
    title: "From Literature Review to Publication: How Researchers Use OhWise",
    content: `
      <p class="lead">Academic research has a context-switching problem. A literature review might span 200 papers. Experiment tracking lives in a spreadsheet. Code for analysis is in a Jupyter notebook. Citations are in Zotero. Draft text is in a Google Doc. None of these tools talk to each other. The researcher becomes the integration layer, spending hours per week on mechanical tasks that have nothing to do with the actual research.</p>

      <p>OhWise addresses this not by replacing your existing tools, but by automating the transitions between them: finding papers, extracting key claims, connecting them to your research question, tracking what you've run, and generating draft text from your notes and results.</p>

      <h2>The researcher pain points OhWise addresses</h2>

      <h3>Manual literature review</h3>

      <p>A thorough literature review on a non-trivial topic requires reading 50–200+ papers. Identifying which papers are relevant, extracting the key findings from each, and building a synthesis of the state of the field is weeks of work. Most of that work is mechanical: reading abstracts, deciding relevance, noting key claims, organizing by theme.</p>

      <p>OhWise can automate the mechanical parts. Feed it a set of papers (PDFs, arXiv IDs, or URLs), define your research question, and let a multi-agent pipeline handle initial triage: reading each paper, extracting the central claims and methodology, flagging the most relevant ones, and generating a structured summary organized by theme. You focus on the papers that matter.</p>

      <h3>Context switching between tools</h3>

      <p>The average researcher switches between 6–10 tools in a single work session. Each switch costs 10–15 minutes of re-establishing context. OhWise doesn't eliminate your tools. It eliminates the manual transitions. You define the workflow once; the platform handles the routing.</p>

      <h2>How OhWise supports research workflows</h2>

      <h3>Lab: AI coding agent for analysis and experimentation</h3>

      <p>Lab connects Claude Code, Codex, and Gemini CLI to a live web interface. For researchers, this means running long coding sessions (data analysis, statistical modeling, visualization) from any device, with a complete trace of every step the agent took.</p>

      <p>This matters for research reproducibility. Every tool call, every file the agent touched, every code diff is logged. You can reconstruct exactly what the agent did to produce a result. When a reviewer asks "how did you generate Figure 3?", the answer is in the session history.</p>

      <h3>Studio: multi-step research pipelines</h3>

      <p>Studio is OhWise's multi-agent orchestration layer. A research pipeline might look like: retrieve the latest papers on topic X → extract key claims and methodologies → compare to your experimental results → identify gaps → draft a related work section. Each of those steps is a node in a Studio mission. The coordinator agent handles the sequencing and synthesizes the final output.</p>

      <p>For experiment tracking, Studio can be configured to: run your experiment, log the parameters and results, compare against prior runs, flag any anomalies, and update the results table in your draft. The repetitive parts of the scientific process become automated.</p>

      <h3>Knowledge graph integration: doc2graph and code2graph</h3>

      <p>OhWise's open-source packages provide graph-structured context for research workflows. <strong>doc2graph</strong> takes a set of documents (papers, notes, reports) and builds a knowledge graph: sections, entities, claims, and citations as nodes; relationships as edges. When an agent needs to answer a question about the literature, it draws from this graph rather than re-reading the raw documents. Personalized PageRank surfaces the most relevant sections for any query.</p>

      <p><strong>code2graph</strong> does the same for code repositories. For a research codebase with multiple experiments, it extracts the call graph, function dependencies, and data flow. An agent navigating your codebase for analysis tasks gets precise, relationship-aware context rather than a flat dump of files.</p>

      <p>The result: agents that understand the structure of your research, not just its surface text.</p>

      <h2>From first search to final draft</h2>

      <p>A typical research workflow in OhWise looks like this:</p>

      <ol>
        <li><strong>Paper discovery</strong>: define your research question. A Studio agent searches arXiv, Semantic Scholar, or a local paper collection, ranks by relevance using graph-based retrieval, and returns the top-k papers with structured summaries.</li>
        <li><strong>Synthesis</strong>: a second agent reads the top papers and generates a structured synthesis covering key claims by subfield, methodologies used, open questions, and how they connect to your work.</li>
        <li><strong>Experiment tracking</strong>: Lab runs your analysis code, logs every run with parameters and results, and flags regressions or anomalies compared to prior runs.</li>
        <li><strong>Draft generation</strong>: Studio combines your synthesis notes and experiment results into a draft related work section or results summary, ready for editing.</li>
      </ol>

      <p>Each of these steps used to require manual work across multiple tools. In OhWise, they're nodes in a pipeline that runs on demand.</p>

      <h2>For PhD students and research teams</h2>

      <p>The productivity gap between a researcher with good tooling and one without is large and growing. OhWise doesn't change what research is. It removes the friction that slows it down. Literature review that took two weeks takes two days. First drafts of related work sections appear in hours. Experiment results are tracked automatically.</p>

      <p>The time you save is time you can spend on the parts of research that actually require your expertise: forming hypotheses, designing experiments, interpreting results.</p>

      <p>If your research process involves any of these steps, OhWise can automate the mechanical parts. <a href="https://cloud.ohwise.com" target="_blank" rel="noopener noreferrer">Start a free session</a> and run your first research pipeline today.</p>
    `,
    author: "OhWise Team",
    authorTitle: "Product Team",
    authorAvatar: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=150&h=150&fit=crop&crop=faces",
    date: "June 2025",
    readTime: "7 min read",
    category: "Use Cases",
    tags: ["Research", "Literature Review", "Knowledge Graphs", "doc2graph", "Use Cases", "Lab"],
    image: "https://images.unsplash.com/photo-1532094349884-543559be2c9f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 12,
    title: "Why AI Teams Are Replacing Scattered Toolchains with OhWise",
    content: `
      <p class="lead">The average ML team runs experiments in notebooks, tracks them in MLflow, orchestrates pipelines in Airflow, monitors deployments in Prometheus, and communicates results in Slack. Each tool does its job. But the team becomes the integration layer, manually moving data between systems, re-establishing context at every handoff, and debugging failures across a stack with no unified view.</p>

      <p>This is the MLOps toolchain fragmentation problem. It's not a missing-feature problem; every individual tool is excellent. It's a coordination problem: the workflows that matter to an AI team span multiple tools, and nothing orchestrates the whole thing end-to-end.</p>

      <h2>The fragmented MLOps landscape</h2>

      <p>A typical model development cycle looks like this: a researcher opens a notebook, runs experiments, logs some metrics to MLflow, realizes the training data pipeline is broken, files an issue, waits for an infra engineer to fix it, re-runs the experiment, gets a better result, packages the model, opens a PR, waits for CI, deploys to staging, monitors for regressions, promotes to production. If anything goes wrong at any step, the debugging process crosses tool boundaries: Airflow logs for pipeline failures, Kubernetes events for deployment issues, custom dashboards for model quality.</p>

      <p>Each boundary costs time. More importantly, each boundary costs context. By the time a failure is diagnosed, the engineer has had to reconstruct the full picture from five different log sources.</p>

      <h2>How Studio missions map to ML pipelines</h2>

      <p>OhWise Studio models multi-step workflows as DAGs (directed acyclic graphs) where each node is a task with a defined input/output contract. This maps directly to how ML pipelines work. A training pipeline has stages: data validation → feature engineering → model training → evaluation → artifact packaging → deployment. Each stage is a node. The platform handles execution order, parallelism where the stages are independent, and state persistence across the full run.</p>

      <p>The practical benefit: when a pipeline fails, the failure is localized to a specific node. The platform captures the inputs, outputs, and error state for that node. Debugging is straightforward. You're not reconstructing context from five different log sources; you're looking at one structured execution trace.</p>

      <p>Studio missions can also include human-in-the-loop steps. Before promoting a model to production, route the evaluation summary to a designated reviewer. They approve or reject from the OhWise UI. The workflow resumes or halts based on their decision. This kind of approval gate is a single configuration option in Studio, not custom code to write and maintain.</p>

      <h2>Lab for iterative coding and debugging</h2>

      <p>Lab is OhWise's interface for running AI coding agent sessions (Claude Code, Codex, Gemini CLI) in a live web UI. For ML teams, Lab is the iterative experimentation layer. Debugging a training run, writing a feature engineering script, investigating a data quality issue: these are tasks that benefit from an AI coding agent with full context of your codebase.</p>

      <p>Lab sessions are persistent and fully traced. Every file the agent touches, every tool call it makes, and every code change it proposes is logged. When a colleague asks why a model's preprocessing pipeline changed, the Lab session history is the answer. When you need to reproduce a result from two weeks ago, the session state is there.</p>

      <p>For long-running debugging sessions that span multiple days, Lab handles the context preservation automatically. You don't need to re-explain the codebase every time you open a new session.</p>

      <h2>The open-source ecosystem</h2>

      <p>OhWise is built on a set of open-source packages that AI teams can use independently:</p>

      <ul>
        <li><strong>ai-relay</strong> (<code>pip install ai-relay</code>): the WebSocket relay that powers Lab. Spawn any AI coding agent CLI as a subprocess, capture its I/O, and stream structured events (reasoning, tool calls, file diffs, quota warnings) to any web frontend. Use it to build your own Lab interface, or connect to OhWise.</li>
        <li><strong>graph2sql</strong> (<code>pip install graph2sql</code>): schema graph analysis for text-to-SQL. Takes your database schema, builds a graph, and uses Personalized PageRank to extract the relevant subgraph for any SQL query. Useful for ML teams with complex feature stores or analytics databases.</li>
        <li><strong>code2graph</strong> (<code>pip install code2graph</code>): code repository knowledge graphs. Extracts call graphs, entity graphs, schema graphs, and infrastructure graphs from any codebase. Provides graph-structured context for code understanding tasks, useful for ML teams navigating large research codebases.</li>
      </ul>

      <p>All three are pure Python, no LLM dependency, MIT licensed. You bring your own model.</p>

      <h2>What AI teams actually get</h2>

      <p>The teams using OhWise aren't replacing their existing tools immediately. They're using OhWise as the orchestration layer on top of them. The notebooks stay. The MLflow experiments stay. The existing monitoring stays. OhWise coordinates the workflows that cross tool boundaries and provides a unified view of what's happening across the entire pipeline.</p>

      <p>Over time, the manual handoffs disappear. The debugging process gets faster because execution traces are structured and unified. New models go from experiment to production in less time because the steps between them are automated.</p>

      <p>If your ML team is spending more time on toolchain coordination than on model development, that's the problem OhWise solves. <a href="https://cloud.ohwise.com" target="_blank" rel="noopener noreferrer">Get started</a>, connect your first pipeline and run it end-to-end in a single session.</p>
    `,
    author: "OhWise Team",
    authorTitle: "Product Team",
    authorAvatar: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=150&h=150&fit=crop&crop=faces",
    date: "June 2025",
    readTime: "5 min read",
    category: "Use Cases",
    tags: ["MLOps", "AI Teams", "Pipeline Orchestration", "ai-relay", "code2graph", "Use Cases"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
];

// Mock related posts
const RELATED_POSTS = [
  {
    id: 1,
    title: "When Your Team's Knowledge Becomes Your Competitive Advantage",
    excerpt: "Organizations that connect institutional knowledge to their AI workflows consistently outperform teams that treat AI as a standalone tool.",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    title: "What Happens When Every Decision Has the Right Context",
    excerpt: "The difference between a good AI assistant and a great one is context. When AI understands your domain, answers stop being generic and start being useful.",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    title: "Collaboration at the Speed of Thought: Teams, Agents, and Shared Goals",
    excerpt: "When your team can delegate to AI agents mid-conversation, work stops waiting and starts flowing.",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
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
          <div className="max-w-[780px] mx-auto px-6 sm:px-10 pt-12 pb-8">
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
          <div className="max-w-[780px] mx-auto px-6 sm:px-10 pb-24">
            <style>{`
              .blog-body p.lead {
                font-size: 1.25rem;
                line-height: 1.75;
                color: #374151;
                margin-bottom: 2rem;
                font-weight: 400;
                letter-spacing: -0.01em;
              }
              .dark .blog-body p.lead { color: #d1d5db; }

              .blog-body p {
                font-size: 1.1rem;
                line-height: 1.85;
                color: #374151;
                margin-bottom: 1.6rem;
                letter-spacing: -0.003em;
              }
              .dark .blog-body p { color: #d1d5db; }

              .blog-body h2 {
                font-size: 1.75rem;
                font-weight: 700;
                letter-spacing: -0.03em;
                color: #111827;
                margin-top: 3.5rem;
                margin-bottom: 1rem;
                line-height: 1.25;
              }
              .dark .blog-body h2 { color: #f9fafb; }

              .blog-body h3 {
                font-size: 1.3rem;
                font-weight: 600;
                letter-spacing: -0.02em;
                color: #1f2937;
                margin-top: 2.5rem;
                margin-bottom: 0.75rem;
                line-height: 1.35;
              }
              .dark .blog-body h3 { color: #f3f4f6; }

              .blog-body ul, .blog-body ol {
                padding-left: 1.5rem;
                margin-bottom: 1.6rem;
              }
              .blog-body li {
                font-size: 1.05rem;
                line-height: 1.8;
                color: #374151;
                margin-bottom: 0.5rem;
              }
              .dark .blog-body li { color: #d1d5db; }

              .blog-body blockquote {
                border-left: 3px solid #6366f1;
                padding: 1rem 1.5rem;
                margin: 2.5rem 0;
                background: #f8f9ff;
                border-radius: 0 12px 12px 0;
                font-size: 1.15rem;
                font-style: italic;
                color: #4b5563;
                line-height: 1.7;
              }
              .dark .blog-body blockquote {
                background: rgba(99,102,241,0.07);
                color: #9ca3af;
              }
              .blog-body blockquote cite {
                display: block;
                margin-top: 0.75rem;
                font-size: 0.875rem;
                font-style: normal;
                font-weight: 500;
                color: #6b7280;
              }

              .blog-body strong { color: #111827; font-weight: 600; }
              .dark .blog-body strong { color: #f9fafb; }

              .blog-body code {
                font-size: 0.9rem;
                color: #4f46e5;
                background: #eef2ff;
                border-radius: 5px;
                padding: 0.15em 0.45em;
                font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
              }
              .dark .blog-body code {
                color: #818cf8;
                background: rgba(99,102,241,0.1);
              }

              .blog-body pre {
                background: #0f172a;
                color: #e2e8f0;
                border-radius: 14px;
                padding: 1.5rem 1.75rem;
                overflow-x: auto;
                margin: 2rem 0;
                font-size: 0.9rem;
                line-height: 1.65;
              }
              .blog-body pre code {
                background: none;
                color: inherit;
                padding: 0;
                font-size: inherit;
              }

              .blog-body hr {
                border: none;
                border-top: 1px solid #e5e7eb;
                margin: 3rem 0;
              }
              .dark .blog-body hr { border-color: #374151; }

              .blog-body a {
                color: #4f46e5;
                text-decoration: underline;
                text-underline-offset: 3px;
                text-decoration-thickness: 1px;
              }
              .dark .blog-body a { color: #818cf8; }
            `}</style>

            <div
              className="blog-body"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
              {post.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 tracking-wide">
                  {tag}
                </span>
              ))}
            </div>

            {/* Author card */}
            <div className="mt-10 flex items-center gap-5 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <img
                src={post.authorAvatar}
                alt={post.author}
                className="w-14 h-14 rounded-full object-cover flex-shrink-0 ring-2 ring-white dark:ring-gray-800"
              />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{post.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{post.authorTitle}</p>
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
