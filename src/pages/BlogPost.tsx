
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
  {
    id: 9,
    title: "Personalized PageRank vs Vector Similarity: Why Graph Algorithms Win for Structured Context",
    content: `
      <p class="lead">Vector similarity search is the default retrieval mechanism for RAG (Retrieval-Augmented Generation) pipelines. Embed your documents, embed the query, take the top-k cosine similarities. It works well for unstructured text — articles, chat logs, free-form documentation. But for structured data — database schemas, code repositories, document hierarchies — it systematically misses the most important relationships. We built three open-source packages using Personalized PageRank to fix this.</p>

      <h2>The core problem with vector similarity on structured data</h2>

      <p>Consider a database with 150 tables. A user asks: "Show me total revenue by customer for orders placed in the last 30 days, excluding cancelled orders." The relevant tables are <code>orders</code>, <code>customers</code>, <code>payments</code>, and <code>order_status</code> — connected by foreign keys: <code>orders.customer_id → customers.id</code>, <code>payments.order_id → orders.id</code>.</p>

      <p>Vector similarity retrieves tables whose names and column descriptions are semantically similar to the query. It will surface <code>orders</code> and <code>customers</code> reliably. But <code>payments</code> is semantically distant from "revenue" in most embedding spaces — it might rank below <code>revenue_reports</code> (a summary table) or <code>invoice_items</code> (semantically close, structurally irrelevant). The foreign key relationship is invisible to the embedding.</p>

      <p>The LLM receives the wrong subgraph as context. It generates SQL that joins on non-existent relationships, or misses a table entirely, producing incorrect results.</p>

      <p>This isn't a limitation of the embedding model — it's a fundamental property of the problem. Structural relationships between entities are encoded in the topology of the graph, not in the semantic content of individual nodes. Vector similarity can only see the nodes; it cannot see the edges.</p>

      <h2>Personalized PageRank: graph traversal from query-relevant seeds</h2>

      <p>Personalized PageRank (PPR) is a variant of the original PageRank algorithm where, instead of starting a random walk from any node uniformly, you initialize the walk with a probability distribution concentrated on a set of seed nodes. The walk then propagates through the graph, decaying at each step by a teleportation factor α (typically 0.15). Nodes that are highly connected to the seeds — both directly and through multiple paths — accumulate high PPR scores.</p>

      <p>For structured context retrieval, the algorithm looks like this:</p>

      <ol>
        <li><strong>Build the graph</strong> — nodes are entities (tables, functions, document sections), edges are relationships (foreign keys, call chains, citations)</li>
        <li><strong>Identify seeds</strong> — find nodes that match the query through keyword matching, alias resolution, or a lightweight embedding lookup on node names only</li>
        <li><strong>Run PPR from seeds</strong> — propagate probability mass through the graph; nodes with multiple paths from seeds accumulate high scores</li>
        <li><strong>Extract top-k subgraph</strong> — take the highest-scoring nodes as context for the LLM</li>
      </ol>

      <p>For the query "total revenue by customer last 30 days", the seeds are <code>orders</code> and <code>customers</code> (matched by keyword). PPR propagates: <code>orders</code> is connected to <code>payments</code> (one hop), <code>order_status</code> (one hop), <code>customers</code> (one hop via FK). <code>payments</code> receives probability mass from both <code>orders</code> (directly) and as a downstream neighbor. It ranks consistently in the top-3 — regardless of its semantic distance from "revenue".</p>

      <h2>graph2sql: schema graphs for text-to-SQL</h2>

      <p>The first package we built is <strong>graph2sql</strong> (v0.2.0, <code>pip install graph2sql</code>). It takes a database schema — tables, columns, foreign keys, aliases — builds a typed directed graph, and exposes a <code>rank()</code> method that runs Personalized PageRank from query-matched seed nodes.</p>

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

      <p>The ranked subgraph is passed as context to any LLM. No fine-tuning, no model dependency, no lock-in. The LLM generates SQL from a correct, minimal schema excerpt — not from 150 tables of noise.</p>

      <p>The key design choice: <strong>no LLM dependency in the graph layer itself</strong>. The graph is built from DDL or ORM models. The ranking is pure linear algebra. The only LLM call is the final SQL generation — where the model already has the right context.</p>

      <h2>docs2graph: document knowledge graphs</h2>

      <p><strong>docs2graph</strong> (v0.3.2, <code>pip install docs2graph</code>) applies the same approach to documents. It processes PDFs, Word docs, Markdown, HTML, CSV, and 10+ other formats, extracts a knowledge graph of entities, sections, and relationships, then ranks relevant nodes for any query.</p>

      <p>The graph structure is richer for documents: nodes can be <em>sections</em>, <em>entities</em> (people, organizations, concepts), <em>tables</em>, or <em>cited sources</em>. Edges encode relationships: <em>contains</em> (section hierarchy), <em>mentions</em> (entity co-occurrence), <em>cites</em> (reference links), <em>relates_to</em> (semantic proximity).</p>

      <p>For a 200-page annual report, the relevant section for "quarterly revenue growth in APAC" is not simply the section with the highest embedding similarity to that string. It's the section that mentions revenue figures, is connected to the APAC regional breakdown table, and cites the prior-quarter comparison. PPR surfaces this through graph traversal; vector similarity surfaces the section whose prose most resembles the query string.</p>

      <h2>codebase2graph: code repository knowledge graphs</h2>

      <p><strong>codebase2graph</strong> (v0.1.0, <code>pip install codebase2graph</code>) extracts 10 typed graph types from any code repository: call graphs (which functions call which), entity graphs (class/function definitions), schema graphs (database models), infrastructure graphs (Docker, nginx, env vars), security graphs (auth decorators, permissions), and more.</p>

      <p>For a code understanding query like "how does authentication work for the /orders endpoint", PPR on the call graph identifies: the <code>/orders</code> route handler → the <code>require_auth</code> decorator → the <code>verify_jwt</code> function → the <code>load_user</code> database call → the <code>User</code> model. This call chain is the correct context for answering the question. Vector similarity on function docstrings would surface functions mentioning "authentication" or "orders" — which may include unrelated auth utilities or order utilities that don't participate in the relevant call chain.</p>

      <h2>Empirical observations</h2>

      <p>Across the use cases we've tested, PPR on structured graphs produces smaller context with better relevance:</p>

      <ul>
        <li><strong>Text-to-SQL on large schemas</strong> (100+ tables): vector similarity at top-10 misses at least one required table in approximately 30% of multi-join queries. PPR at top-5 achieves near-complete recall on the same queries — smaller context, fewer missed tables.</li>
        <li><strong>Document Q&amp;A</strong>: for hierarchical documents (legal contracts, technical specifications), PPR correctly retrieves sections connected by cross-references that vector similarity misses. The gap grows with document length and cross-reference density.</li>
        <li><strong>Code context</strong>: for call-chain questions, PPR produces 3–5x smaller context than embedding top-k at equivalent recall — because the relevant call chain is a sparse path through the graph, not a cluster of semantically similar functions.</li>
      </ul>

      <h2>When vector similarity still wins</h2>

      <p>PPR on structured graphs is not universally better. For unstructured text corpora — support chat logs, product reviews, news articles — where entities don't have well-defined typed relationships, vector similarity is the right tool. The graph structure would be arbitrary, and PPR would propagate through spurious edges.</p>

      <p>The right mental model: use vector similarity when your data is an unstructured collection of text chunks. Use graph-based PPR when your data has inherent structure that matters for answering queries — schemas, codebases, document hierarchies, knowledge bases.</p>

      <h2>Implementation notes</h2>

      <p>All three packages implement PPR using sparse matrix operations on the adjacency matrix, making them efficient for graphs up to tens of thousands of nodes. The teleportation factor α is configurable (default 0.15). Edge weights influence propagation — stronger relationships (e.g., direct foreign keys) propagate more probability mass than weaker ones (e.g., indirect aliases).</p>

      <p>No LLM calls are made during graph construction or ranking. The packages are pure Python with numpy as the only non-stdlib dependency for the matrix operations. They work with any downstream LLM — bring your own model, API key, and prompt template.</p>

      <h2>What we're building next</h2>

      <p>The graph packages are the retrieval layer for OhWise's broader multi-agent platform. The next step is integrating PPR-ranked context injection directly into DAG node execution — so agents in a coordinator loop automatically receive graph-ranked context for their specific subtask, not a static slice of context from the pipeline entry point.</p>

      <p>All three packages are open source and actively maintained. Install them from PyPI, read the source, open issues, submit PRs. The graph retrieval layer should be a shared primitive — not something every team reinvents.</p>
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
    title: "How OhWise Turns Your Sales Data Into Decisions — Automatically",
    content: `
      <p class="lead">Sales operations teams are drowning. Not in leads — in spreadsheets. Quota attainment by rep, attainment by territory, variable compensation reconciliation, pipeline coverage ratios, forecast accuracy tracking. The data lives in Salesforce, in comp tools, in Excel files emailed on Friday afternoons. Turning it into insight requires hours of manual work. By the time the analysis lands on the sales leader's desk, the quarter is already over.</p>

      <p>This is the sales ops problem. It's not a data problem — the data exists. It's an automation problem: the steps between raw CRM data and a useful decision are repetitive, well-defined, and currently done by hand.</p>

      <h2>Why sales ops is a natural fit for multi-agent automation</h2>

      <p>Every sales analysis follows a recognizable pattern: pull data from one or more sources, apply a transformation (sum, rank, delta, ratio), format the result, and route it to the right person. That pattern is a workflow. And workflows are exactly what OhWise was built to automate.</p>

      <p>Sales compensation analysis, for example, is a DAG: pull quota data from the comp tool → pull closed-won data from Salesforce → join on rep ID → compute attainment percentage → flag reps above/below threshold → generate the compensation summary → send to finance. Each of those steps is a node. The platform handles execution order, error handling, and retry logic automatically.</p>

      <p>With OhWise, a sales ops lead defines the workflow once. After that, it runs on schedule — or on demand — without manual intervention.</p>

      <h2>What a Sales Copilot looks like in OhWise</h2>

      <h3>Lab: your AI coding agent for ad-hoc analysis</h3>

      <p>Lab is OhWise's interface for running AI coding agent CLI sessions — Claude Code, Codex, Gemini CLI — in a live web UI. For sales ops, Lab is the ad-hoc analysis layer. Need to write a Python script that joins three Salesforce exports and generates a compensation summary? Open a Lab session, describe what you need, and let the agent write and run the code while you watch every reasoning step and file diff in real time.</p>

      <p>Lab sessions are persistent. You can close the browser, come back tomorrow, and resume exactly where you left off. Every tool call, every file the agent touches, every output is captured in the session history. No lost work, no re-explaining context.</p>

      <h3>Studio: multi-step missions that run autonomously</h3>

      <p>Studio is OhWise's multi-agent orchestration layer. Where Lab is interactive, Studio is autonomous. You define a mission — "Generate the weekly pipeline coverage report and post it to #sales-ops on Slack" — and a coordinator agent breaks it into subtasks, routes them to specialized agents, and synthesizes the result.</p>

      <p>For recurring sales analysis workflows, Studio is the right layer. Configure it once: pull the data, run the analysis, format the output, deliver it. The platform handles the orchestration. Your team gets the output without touching a spreadsheet.</p>

      <h3>Specific capabilities</h3>

      <ul>
        <li><strong>Compensation analysis</strong> — Automate variable comp reconciliation. Pull attainment data, apply comp plan rules, flag exceptions, generate the summary. What used to take a day takes minutes.</li>
        <li><strong>Pipeline forecasting</strong> — Run weighted pipeline models on your CRM data. Surface deals at risk, identify coverage gaps by segment, and generate the forecast package automatically.</li>
        <li><strong>Dashboard generation</strong> — Produce HTML or Markdown summaries of key metrics, ready to paste into a Notion doc or email. No Tableau license required.</li>
        <li><strong>Revenue optimization insights</strong> — Identify which product lines, territories, or rep segments are over- or under-performing. Surface the data behind the insight automatically.</li>
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
      <p class="lead">Academic research has a context-switching problem. A literature review might span 200 papers. Experiment tracking lives in a spreadsheet. Code for analysis is in a Jupyter notebook. Citations are in Zotero. Draft text is in a Google Doc. None of these tools talk to each other. The researcher is the integration layer — spending hours per week on mechanical tasks that have nothing to do with the actual research.</p>

      <p>OhWise addresses this not by replacing your existing tools, but by automating the transitions between them: finding papers, extracting key claims, connecting them to your research question, tracking what you've run, and generating draft text from your notes and results.</p>

      <h2>The researcher pain points OhWise addresses</h2>

      <h3>Manual literature review</h3>

      <p>A thorough literature review on a non-trivial topic requires reading 50–200+ papers. Identifying which papers are relevant, extracting the key findings from each, and building a synthesis of the state of the field is weeks of work. Most of that work is mechanical: reading abstracts, deciding relevance, noting key claims, organizing by theme.</p>

      <p>OhWise can automate the mechanical parts. Feed it a set of papers (PDFs, arXiv IDs, or URLs), define your research question, and let a multi-agent pipeline handle initial triage: reading each paper, extracting the central claims and methodology, flagging the most relevant ones, and generating a structured summary organized by theme. You focus on the papers that matter.</p>

      <h3>Context switching between tools</h3>

      <p>The average researcher switches between 6–10 tools in a single work session. Each switch costs 10–15 minutes of re-establishing context. OhWise doesn't eliminate your tools — it eliminates the manual transitions. You define the workflow once; the platform handles the routing.</p>

      <h2>How OhWise supports research workflows</h2>

      <h3>Lab: AI coding agent for analysis and experimentation</h3>

      <p>Lab connects Claude Code, Codex, and Gemini CLI to a live web interface. For researchers, this means running long coding sessions — data analysis, statistical modeling, visualization — from any device, with a complete trace of every step the agent took.</p>

      <p>This matters for research reproducibility. Every tool call, every file the agent touched, every code diff is logged. You can reconstruct exactly what the agent did to produce a result. When a reviewer asks "how did you generate Figure 3?", the answer is in the session history.</p>

      <h3>Studio: multi-step research pipelines</h3>

      <p>Studio is OhWise's multi-agent orchestration layer. A research pipeline might look like: retrieve the latest papers on topic X → extract key claims and methodologies → compare to your experimental results → identify gaps → draft a related work section. Each of those steps is a node in a Studio mission. The coordinator agent handles the sequencing and synthesizes the final output.</p>

      <p>For experiment tracking, Studio can be configured to: run your experiment, log the parameters and results, compare against prior runs, flag any anomalies, and update the results table in your draft. The repetitive parts of the scientific process become automated.</p>

      <h3>Knowledge graph integration: doc2graph and code2graph</h3>

      <p>OhWise's open-source packages provide graph-structured context for research workflows. <strong>doc2graph</strong> takes a set of documents — papers, notes, reports — and builds a knowledge graph: sections, entities, claims, and citations as nodes; relationships as edges. When an agent needs to answer a question about the literature, it draws from this graph rather than re-reading the raw documents. Personalized PageRank surfaces the most relevant sections for any query.</p>

      <p><strong>code2graph</strong> does the same for code repositories. For a research codebase with multiple experiments, it extracts the call graph, function dependencies, and data flow. An agent navigating your codebase for analysis tasks gets precise, relationship-aware context rather than a flat dump of files.</p>

      <p>The result: agents that understand the structure of your research, not just its surface text.</p>

      <h2>From first search to final draft</h2>

      <p>A typical research workflow in OhWise looks like this:</p>

      <ol>
        <li><strong>Paper discovery</strong> — Define your research question. A Studio agent searches arXiv, Semantic Scholar, or a local paper collection, ranks by relevance using graph-based retrieval, and returns the top-k papers with structured summaries.</li>
        <li><strong>Synthesis</strong> — A second agent reads the top papers and generates a structured synthesis: key claims by subfield, methodologies used, open questions, and how they connect to your work.</li>
        <li><strong>Experiment tracking</strong> — Lab runs your analysis code, logs every run with parameters and results, and flags regressions or anomalies compared to prior runs.</li>
        <li><strong>Draft generation</strong> — Studio combines your synthesis notes and experiment results into a draft related work section or results summary, ready for editing.</li>
      </ol>

      <p>Each of these steps used to require manual work across multiple tools. In OhWise, they're nodes in a pipeline that runs on demand.</p>

      <h2>For PhD students and research teams</h2>

      <p>The productivity gap between a researcher with good tooling and one without is large and growing. OhWise doesn't change what research is — it removes the friction that slows it down. Literature review that took two weeks takes two days. First drafts of related work sections appear in hours. Experiment results are tracked automatically.</p>

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
      <p class="lead">The average ML team runs experiments in notebooks, tracks them in MLflow, orchestrates pipelines in Airflow, monitors deployments in Prometheus, and communicates results in Slack. Each tool does its job. But the team is the integration layer — manually moving data between systems, re-establishing context at every handoff, and debugging failures across a stack with no unified view.</p>

      <p>This is the MLOps toolchain fragmentation problem. It's not a missing-feature problem — every individual tool is excellent. It's a coordination problem: the workflows that matter to an AI team span multiple tools, and nothing orchestrates the whole thing end-to-end.</p>

      <h2>The fragmented MLOps landscape</h2>

      <p>A typical model development cycle looks like this: a researcher opens a notebook, runs experiments, logs some metrics to MLflow, realizes the training data pipeline is broken, files an issue, waits for an infra engineer to fix it, re-runs the experiment, gets a better result, packages the model, opens a PR, waits for CI, deploys to staging, monitors for regressions, promotes to production. If anything goes wrong at any step, the debugging process crosses tool boundaries: Airflow logs for pipeline failures, Kubernetes events for deployment issues, custom dashboards for model quality.</p>

      <p>Each boundary costs time. More importantly, each boundary costs context. By the time a failure is diagnosed, the engineer has had to reconstruct the full picture from five different log sources.</p>

      <h2>How Studio missions map to ML pipelines</h2>

      <p>OhWise Studio models multi-step workflows as DAGs — directed acyclic graphs where each node is a task with a defined input/output contract. This maps directly to how ML pipelines work. A training pipeline has stages: data validation → feature engineering → model training → evaluation → artifact packaging → deployment. Each stage is a node. The platform handles execution order, parallelism where the stages are independent, and state persistence across the full run.</p>

      <p>The practical benefit: when a pipeline fails, the failure is localized to a specific node. The platform captures the inputs, outputs, and error state for that node. Debugging is straightforward — you're not reconstructing context from five different log sources, you're looking at one structured execution trace.</p>

      <p>Studio missions can also include human-in-the-loop steps. Before promoting a model to production, route the evaluation summary to a designated reviewer. They approve or reject from the OhWise UI. The workflow resumes or halts based on their decision. This kind of approval gate is a single configuration option in Studio — not custom code to write and maintain.</p>

      <h2>Lab for iterative coding and debugging</h2>

      <p>Lab is OhWise's interface for running AI coding agent sessions — Claude Code, Codex, Gemini CLI — in a live web UI. For ML teams, Lab is the iterative experimentation layer. Debugging a training run, writing a feature engineering script, investigating a data quality issue: these are tasks that benefit from an AI coding agent with full context of your codebase.</p>

      <p>Lab sessions are persistent and fully traced. Every file the agent touches, every tool call it makes, every code change it proposes — all logged. When a colleague asks why a model's preprocessing pipeline changed, the Lab session history is the answer. When you need to reproduce a result from two weeks ago, the session state is there.</p>

      <p>For long-running debugging sessions that span multiple days, Lab handles the context preservation automatically. You don't need to re-explain the codebase every time you open a new session.</p>

      <h2>The open-source ecosystem</h2>

      <p>OhWise is built on a set of open-source packages that AI teams can use independently:</p>

      <ul>
        <li><strong>ai-relay</strong> (<code>pip install ai-relay</code>) — the WebSocket relay that powers Lab. Spawn any AI coding agent CLI as a subprocess, capture its I/O, and stream structured events (reasoning, tool calls, file diffs, quota warnings) to any web frontend. Use it to build your own Lab interface, or connect to OhWise.</li>
        <li><strong>graph2sql</strong> (<code>pip install graph2sql</code>) — schema graph analysis for text-to-SQL. Takes your database schema, builds a graph, and uses Personalized PageRank to extract the relevant subgraph for any SQL query. Useful for ML teams with complex feature stores or analytics databases.</li>
        <li><strong>code2graph</strong> (<code>pip install code2graph</code>) — code repository knowledge graphs. Extracts call graphs, entity graphs, schema graphs, and infrastructure graphs from any codebase. Provides graph-structured context for code understanding tasks — useful for ML teams navigating large research codebases.</li>
      </ul>

      <p>All three are pure Python, no LLM dependency, MIT licensed. You bring your own model.</p>

      <h2>What AI teams actually get</h2>

      <p>The teams using OhWise aren't replacing their existing tools immediately. They're using OhWise as the orchestration layer on top of them. The notebooks stay. The MLflow experiments stay. The existing monitoring stays. OhWise coordinates the workflows that cross tool boundaries — and provides a unified view of what's happening across the entire pipeline.</p>

      <p>Over time, the manual handoffs disappear. The debugging process gets faster because execution traces are structured and unified. New models go from experiment to production in less time because the steps between them are automated.</p>

      <p>If your ML team is spending more time on toolchain coordination than on model development, that's the problem OhWise solves. <a href="https://cloud.ohwise.com" target="_blank" rel="noopener noreferrer">Get started</a> — connect your first pipeline and run it end-to-end in a single session.</p>
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
