// eslint-disable-next-line @typescript-eslint/no-require-imports
const axios = require("axios");

const API = "http://localhost:1337/api";
const TOKEN = "<TOKEN_GENERATED_FROM_STRAPI_DASHBOARD>";

const client = axios.create({
  baseURL: API,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  },
});

async function flushAllData() {
  console.log("Flushing all existing data...");

  try {
    // Delete all contents
    const contents = await client.get("/contents");
    if (contents.data?.data) {
      for (const item of contents.data.data) {
        await client.delete(`/contents/${item.documentId}`);
      }
      console.log(`Deleted ${contents.data.data.length} content items`);
    }

    // Delete all navigation items
    const navItems = await client.get("/navigation-items");
    if (navItems.data?.data) {
      for (const item of navItems.data.data) {
        await client.delete(`/navigation-items/${item.documentId}`);
      }
      console.log(`Deleted ${navItems.data.data.length} navigation items`);
    }

    // Delete all contacts
    const contacts = await client.get("/contacts");
    if (contacts.data?.data) {
      for (const item of contacts.data.data) {
        await client.delete(`/contacts/${item.documentId}`);
      }
      console.log(`Deleted ${contacts.data.data.length} contacts`);
    }

    // Delete all newsletter subscribers
    const subscribers = await client.get("/newsletter-subscribers");
    if (subscribers.data?.data) {
      for (const item of subscribers.data.data) {
        await client.delete(`/newsletter-subscribers/${item.documentId}`);
      }
      console.log(
        `Deleted ${subscribers.data.data.length} newsletter subscribers`,
      );
    }

    console.log("✓ Data flush completed");
  } catch (err) {
    console.log("Warning: Some collections may not exist yet, continuing...");
  }
}

async function seedSiteSettings() {
  console.log("Seeding site settings...");

  await client.put("/site-setting", {
    data: {
      siteName: "Ohwise",
      siteDescription:
        "Ohwise is the ultimate AI Ops system that seamlessly integrates text-to-SQL, customer support automation, knowledge graphs, and multi-agent collaboration.",
      copyright: "© 2026 Ohwise. All rights reserved.",
      logo: null,
      favicon: null,
      theme: {
        primaryColor: "#3B82F6",
        secondaryColor: "#8B5CF6",
        fontFamily: "Inter, system-ui, sans-serif",
      },
      hero: {
        title: "Revolutionize Your Operations with Multi-Agent AI",
        ctaPrimary: { text: "Get Started", link: "https://cloud.ohwise.com/" },
        ctaSecondary: { text: "Watch Demo", link: "/blog" },
      },
      seo: {
        defaultTitle: "Ohwise — Multi-Agent AI Ops System",
        defaultDescription:
          "Transform your operations with Ohwise - a multi-agent AI system featuring text-to-SQL, customer support automation, knowledge graphs, and more.",
        defaultKeywords: [
          "AI Ops",
          "multi-agent AI",
          "text-to-SQL",
          "customer support automation",
          "knowledge graph",
          "GraphRAG",
          "AI automation",
          "enterprise AI",
          "workflow automation",
          "AI agents",
        ],
      },
      social: {
        github: "https://github.com/jw-open/",
        twitter: "https://twitter.com/ohwiseai",
        linkedin: "https://linkedin.com/company/ohwise",
        youtube: null,
      },
      contact: {
        email: "hello@ohwise.com",
        phone: null,
        address: "San Francisco, CA",
      },
      features: {
        enableComments: false,
        enableNewsletter: true,
        enableRSS: true,
        enableDarkMode: true,
      },
      quickLinks: [
        {
          title: "Features",
          path: "/product",
          type: "internal",
        },
        {
          title: "Documentation",
          path: "/documentation",
          type: "internal",
        },
        {
          title: "Security",
          path: "/security",
          type: "internal",
        },
      ],
    },
  });
  console.log("✓ Site settings created");
}

async function seedNavigation() {
  console.log("Seeding navigation...");

  const items = [
    { title: "Home", path: "/", type: "internal", order: 1 },
    { title: "Blog", path: "/blog", type: "internal", order: 2 },
    { title: "Product", path: "/product", type: "internal", order: 3 },
    {
      title: "Documentation",
      path: "/documentation",
      type: "internal",
      order: 4,
    },
    { title: "About", path: "/about", type: "internal", order: 5 },
    { title: "Contact", path: "/contact", type: "internal", order: 6 },
    { title: "Privacy", path: "/privacy", type: "internal", order: 7 },
    { title: "Terms", path: "/terms", type: "internal", order: 8 },
  ];

  for (const item of items) {
    await client.post("/navigation-items", { data: item });
  }
  console.log(`✓ Created ${items.length} navigation items`);
}

async function seedAbout() {
  console.log("Seeding about page...");

  await client.put("/about", {
    data: {
      name: "Ohwise",
      title: "About Ohwise",
      bio: "Ohwise is a multi-agent AI Ops system for modern enterprises. We combine cutting-edge AI technologies including text-to-SQL, customer support automation, knowledge graphs (GraphRAG), and multi-agent collaboration to transform business operations and enhance productivity across organizations.",
      email: "hello@ohwise.com",
      location: "San Francisco, CA",
    },
  });
  console.log("✓ About page created");
}

async function seedPosts() {
  console.log("Seeding blog posts...");

  const posts = [
    {
      title: "Introducing Ohwise: The Future of AI Operations",
      description:
        "Learn how Ohwise is revolutionizing business operations with multi-agent AI, text-to-SQL, and intelligent automation.",
      type: "post",
      slug: "introducing-ohwise",
      featured: true,
      tags: ["AI Operations", "Multi-Agent Systems", "Product Launch"],
      content: `# Introducing Ohwise: The Future of AI Operations

Today marks an exciting milestone as we officially launch Ohwise, a comprehensive AI Ops system designed to transform how businesses operate in the age of artificial intelligence.

## What is Ohwise?

Ohwise is not just another AI tool—it's a complete ecosystem that brings together:

- **Text-to-SQL**: Convert natural language queries into SQL code, empowering non-technical users to access data insights
- **Customer Support Automation**: Automated response systems that understand context and provide helpful, human-like support
- **Knowledge Graph (GraphRAG)**: Build comprehensive knowledge graphs to represent complex relationships and enable advanced reasoning
- **Multi-Agent Collaboration**: Specialized AI agents working together to solve complex problems through coordinated workflows

## Why We Built Ohwise

Traditional AI tools operate in isolation. We saw an opportunity to create something better—a system where multiple AI agents collaborate, learn, and adapt to your business needs. Our vision is to make enterprise-grade AI operations accessible to organizations of all sizes.

## Real Results

Companies using Ohwise have seen:
- 300% increase in productivity
- 85% reduction in operational costs
- 24/7 availability for customer support
- Insights that were previously impossible to discover

## Get Started Today

Ready to transform your operations? Visit [cloud.ohwise.com](https://cloud.ohwise.com) to get started, or explore our documentation to learn more.

Welcome to the future of AI operations.`,
      seo: {
        title: "Introducing Ohwise: Multi-Agent AI Operations Platform",
        description:
          "Discover how Ohwise combines text-to-SQL, customer support automation, and multi-agent AI to revolutionize business operations.",
        keywords: [
          "AI Operations",
          "Multi-Agent AI",
          "Product Launch",
          "Enterprise AI",
        ],
      },
      image: null,
      externalUrl: null,
    },
    {
      title: "Text-to-SQL: Making Data Accessible to Everyone",
      description:
        "How Ohwise's text-to-SQL feature democratizes data access by converting natural language into SQL queries.",
      type: "post",
      slug: "text-to-sql-explained",
      featured: true,
      tags: ["Text-to-SQL", "Data Access", "Natural Language Processing"],
      content: `# Text-to-SQL: Making Data Accessible to Everyone

One of the biggest barriers to data-driven decision making is the technical skill gap. Not everyone on your team knows SQL, yet everyone needs access to data insights.

## The Challenge

Traditional business intelligence tools require either:
- Learning SQL (time-consuming and technical)
- Relying on data teams (creates bottlenecks)
- Using limited pre-built dashboards (inflexible)

## The Ohwise Solution

Our text-to-SQL feature uses advanced natural language processing to understand what you're asking for and generate accurate, secure SQL queries automatically.

### How It Works

1. **Natural Language Input**: Ask your question in plain English
   - "Show me total sales by region for Q4"
   - "Which customers haven't purchased in 90 days?"
   - "What's our inventory turnover rate?"

2. **Intelligent Translation**: Our AI understands your intent and database schema
   - Recognizes table relationships
   - Handles complex joins automatically
   - Applies proper aggregations

3. **Secure Execution**: Queries are validated before execution
   - Prevents SQL injection
   - Respects access permissions
   - Optimizes for performance

4. **Human-Readable Results**: Data returned in formats you can understand

## Real-World Impact

"Ohwise has transformed how our data scientists interact with our databases. The text-to-SQL feature alone has saved us countless hours of work." - Sarah Johnson, CTO at TechNova Inc.

## Getting Started

Text-to-SQL is available in all Ohwise plans. Connect your database and start asking questions in natural language today.`,
      seo: {
        title: "Text-to-SQL Feature: Natural Language Database Queries",
        description:
          "Learn how Ohwise converts natural language into SQL queries, making data access simple for everyone on your team.",
        keywords: ["Text-to-SQL", "NLP", "Database Queries", "Data Access"],
      },
      image: null,
      externalUrl: null,
    },
    {
      title: "Multi-Agent Collaboration: The Power of Coordinated AI",
      description:
        "Explore how Ohwise's multi-agent system enables AI agents to work together, solving complex problems through intelligent coordination.",
      type: "post",
      slug: "multi-agent-collaboration",
      featured: true,
      tags: ["Multi-Agent Systems", "AI Collaboration", "Workflow Automation"],
      content: `# Multi-Agent Collaboration: The Power of Coordinated AI

The future of AI isn't about singular, powerful models—it's about multiple specialized agents working together to solve complex problems.

## Why Multi-Agent Systems?

Single AI models face limitations:
- **Generalization vs Specialization**: One model can't be expert at everything
- **Scalability**: Single models become unwieldy at scale
- **Flexibility**: Hard to adapt to changing requirements

## The Ohwise Multi-Agent Architecture

Our system uses specialized agents that collaborate:

### Agent Types

1. **Planning Agents**: Break down complex tasks into manageable steps
2. **Execution Agents**: Carry out specific actions (query databases, call APIs, etc.)
3. **Reasoning Agents**: Analyze results and make decisions
4. **Coordination Agents**: Orchestrate communication between other agents

### How They Work Together

Consider a customer inquiry: "I need a report on our top customers and want to send them a special offer"

1. **Planning Agent** breaks this into steps:
   - Query customer database
   - Analyze purchase history
   - Generate report
   - Draft email content
   - Send communications

2. **Data Agent** executes SQL queries to find top customers

3. **Analysis Agent** processes the data to identify patterns

4. **Content Agent** generates personalized email copy

5. **Communication Agent** sends emails through your system

All coordinated seamlessly by the **Coordination Agent**.

## Real Results

"The multi-agent collaboration capability has allowed us to automate complex workflows that previously required manual coordination between teams." - Michael Chen, Director of AI at DataFlow Systems

## Advanced Features

- **Learning from Experience**: Agents improve over time
- **Dynamic Task Allocation**: Work distributed based on agent capabilities
- **Fault Tolerance**: If one agent fails, others adapt
- **Human-in-the-Loop**: Easy intervention when needed

## Getting Started

Multi-agent collaboration is available in our Professional and Enterprise plans. Contact our team to learn how it can transform your workflows.`,
      seo: {
        title: "Multi-Agent AI Collaboration: Coordinated Intelligence",
        description:
          "Discover how Ohwise's multi-agent system enables specialized AI agents to work together, automating complex business workflows.",
        keywords: [
          "Multi-Agent Systems",
          "AI Collaboration",
          "Workflow Automation",
          "Coordinated AI",
        ],
      },
      image: null,
      externalUrl: null,
    },
    {
      title:
        "Knowledge Graphs and GraphRAG: Understanding Complex Relationships",
      description:
        "Learn how Ohwise uses knowledge graphs and GraphRAG to uncover hidden insights in your data through advanced relationship mapping.",
      type: "post",
      slug: "knowledge-graphs-graphrag",
      featured: false,
      tags: ["Knowledge Graphs", "GraphRAG", "Data Intelligence"],
      content: `# Knowledge Graphs and GraphRAG: Understanding Complex Relationships

Data doesn't exist in isolation. Understanding the relationships between entities is often more valuable than the data points themselves.

## What are Knowledge Graphs?

Knowledge graphs represent information as networks of entities and their relationships:

- **Nodes**: Entities (customers, products, transactions, etc.)
- **Edges**: Relationships (purchased, located in, related to, etc.)
- **Properties**: Attributes of nodes and edges

## GraphRAG: The Next Evolution

Ohwise implements GraphRAG (Graph Retrieval-Augmented Generation), combining:
- Knowledge graph technology
- Retrieval systems
- Large language models

This enables AI to understand not just facts, but context and relationships.

## Use Cases

### 1. Customer Intelligence
Map relationships between customers, products, and behaviors to:
- Predict churn before it happens
- Identify upsell opportunities
- Understand influence networks

### 2. Supply Chain Optimization
Model complex supplier and logistics relationships to:
- Identify bottlenecks
- Predict delays
- Optimize routing

### 3. Compliance and Risk
Track regulatory requirements and their connections to:
- Ensure comprehensive compliance
- Identify risk exposures
- Audit trail visualization

## Real Impact

"The knowledge graph functionality has given us insights into our data that we never would have discovered with traditional analytics approaches." - James Wilson, Data Science Lead at AnalyticsPro

## Technical Advantages

- **Multi-hop Reasoning**: Follow relationship chains to discover indirect connections
- **Semantic Search**: Find entities by meaning, not just keywords
- **Dynamic Updates**: Graph evolves as your data changes
- **Explainable AI**: See exactly why the AI made specific recommendations

## Getting Started

Knowledge graph capabilities are available in all Ohwise plans. Advanced GraphRAG features are available in Professional and Enterprise tiers.

Contact our team to discuss how knowledge graphs can unlock insights in your organization.`,
      seo: {
        title: "Knowledge Graphs & GraphRAG: Relationship Intelligence",
        description:
          "Explore how Ohwise uses knowledge graphs and GraphRAG to map complex data relationships and deliver unprecedented insights.",
        keywords: [
          "Knowledge Graphs",
          "GraphRAG",
          "Relationship Intelligence",
          "AI Insights",
        ],
      },
      image: null,
      externalUrl: null,
    },
    {
      title: "Enterprise Security: Protecting Your Data with Ohwise",
      description:
        "A comprehensive look at Ohwise's security architecture, encryption, compliance, and data protection measures.",
      type: "post",
      slug: "enterprise-security",
      featured: false,
      tags: ["Security", "Compliance", "Enterprise", "Data Protection"],
      content: `# Enterprise Security: Protecting Your Data with Ohwise

Security isn't a feature—it's the foundation. Here's how we protect your data at Ohwise.

## Security Architecture

### 1. End-to-End Encryption
- Data encrypted in transit (TLS 1.3)
- Data encrypted at rest (AES-256)
- Zero-knowledge architecture where possible

### 2. Access Controls
- Role-based access control (RBAC)
- Single sign-on (SSO) integration
- Multi-factor authentication (MFA)
- Granular permissions

### 3. Data Isolation
- Tenant isolation in multi-tenant deployments
- Private cloud options for sensitive workloads
- VPC deployment for enterprise customers

### 4. Audit & Monitoring
- Complete audit logs
- Real-time security monitoring
- Anomaly detection
- Incident response procedures

## Compliance

We maintain compliance with major standards:
- **SOC 2 Type II**: Independent security audit
- **GDPR**: European data protection
- **HIPAA**: Healthcare data security
- **ISO 27001**: Information security management

## Data Privacy

Your data is yours:
- We never train our models on customer data
- Data never leaves your secure environment unless configured
- Right to deletion and data portability
- Transparent data processing

## Security Best Practices

We recommend:
1. Enable MFA for all users
2. Regular access reviews
3. Principle of least privilege
4. Security awareness training
5. Regular security assessments

## Incident Response

In the unlikely event of a security incident:
- 24/7 security operations center
- Immediate notification
- Coordinated response
- Post-incident analysis

## Enterprise Features

Additional security for large organizations:
- Dedicated security liaison
- Custom compliance requirements
- Private deployment options
- Advanced threat protection

## Questions?

Security is paramount. Contact our security team at security@ohwise.com with any questions or to schedule a security review.

Your trust is our top priority.`,
      seo: {
        title: "Enterprise Security & Compliance | Ohwise",
        description:
          "Learn about Ohwise's comprehensive security architecture, encryption, compliance certifications, and data protection measures.",
        keywords: [
          "Enterprise Security",
          "Data Protection",
          "Compliance",
          "Encryption",
          "GDPR",
          "SOC 2",
        ],
      },
      image: null,
      externalUrl: null,
    },
  ];

  for (const post of posts) {
    await client.post("/contents", {
      data: {
        ...post,
        publishedAt: new Date().toISOString(),
      },
    });
  }
  console.log(`✓ Created ${posts.length} blog posts`);
}

async function run() {
  try {
    await flushAllData();
    await seedSiteSettings();
    await seedNavigation();
    await seedAbout();
    await seedPosts();
    console.log("\n🎉 Seeding completed successfully!");
  } catch (err) {
    console.error("\n❌ Error during seeding:");
    console.error(err.response?.data || err.message);
  }
}

run();
