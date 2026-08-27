// These are staff/senior-level system designs currently in development —
// not yet shipped. Each is scoped to problems Clifford has solved in
// production before, at a level intended to demonstrate staff-level
// system design and ownership.

export const projectCategories = ['Frontend', 'Full-Stack / Backend', 'Infra & Cloud']

export const projects = [
  // ---- FRONTEND ----
  {
    id: 'design-token-pipeline',
    category: 'Frontend',
    name: 'Cross-Brand Design System & Token Pipeline',
    tags: ['React', 'TypeScript', 'Style Dictionary', 'Storybook'],
    problem:
      'Multiple product surfaces reinvent the same buttons, forms, and spacing scales, with no single source of truth for design tokens across brands.',
    approach:
      'A themeable component library built on accessible primitives, fed by a token pipeline (Style Dictionary) so design tools and code share one source of truth — versioned and documented in Storybook with visual regression tests.',
    impact:
      'Cuts UI implementation time across teams and makes accessibility and brand consistency a property of the system, not a convention people have to remember.',
  },
  {
    id: 'collaborative-canvas',
    category: 'Frontend',
    name: 'Real-Time Collaborative Canvas',
    tags: ['React', 'CRDTs', 'WebSockets', 'Canvas / WebGL'],
    problem:
      'Teams need to co-edit visual documents together in real time without conflicting edits or losing state on disconnect.',
    approach:
      'A CRDT-backed canvas with live cursors and presence, optimistic local updates, and offline-first sync that reconciles automatically on reconnect.',
    impact:
      'Demonstrates the client-state, conflict-resolution, and real-time UX work required for genuinely collaborative product surfaces.',
  },
  {
    id: 'frontend-observability',
    category: 'Frontend',
    name: 'Frontend Observability & Performance Dashboard',
    tags: ['React', 'Web Vitals API', 'Lighthouse CI', 'D3'],
    problem:
      'Regressions in load time or interactivity often ship unnoticed until users complain — teams have no shared visibility into real-world performance.',
    approach:
      'A dashboard that ingests Core Web Vitals from real users, tracks bundle size and Lighthouse scores per pull request, and visualizes trends with alerts on regressions.',
    impact:
      'Turns performance from a one-off audit into a continuously monitored, team-owned metric.',
  },

  // ---- FULL-STACK / BACKEND ----
  {
    id: 'workflow-engine',
    category: 'Full-Stack / Backend',
    name: 'Event-Driven Workflow Orchestration Engine',
    tags: ['Node.js', 'GraphQL', 'Redis', 'PostgreSQL', 'Docker'],
    problem:
      'Multi-step business processes — approvals, provisioning, notifications — are often hardcoded and brittle, breaking whenever one step changes.',
    approach:
      'A workflow engine where steps are defined declaratively and executed asynchronously via a job queue, with a GraphQL API for status, retries, and human-in-the-loop approval steps.',
    impact:
      'Shows the architecture pattern behind reliable, observable background processing — the kind of system most products eventually need.',
  },
  {
    id: 'multi-tenant-platform',
    category: 'Full-Stack / Backend',
    name: 'Multi-Tenant SaaS API Platform',
    tags: ['Node.js', 'Express', 'PostgreSQL (RLS)', 'Stripe', 'GraphQL'],
    problem:
      'Early-stage SaaS products often bolt on multi-tenancy and billing late, causing data-isolation bugs and painful retrofits.',
    approach:
      'An API platform with tenant isolation via Postgres row-level security, a combined REST/GraphQL gateway, per-tenant rate limiting, and usage-based billing metering integrated with Stripe.',
    impact:
      'Demonstrates the data-modeling and access-control decisions that make a platform safely multi-tenant from day one, not retrofitted later.',
  },
  {
    id: 'dev-portal-schema-registry',
    category: 'Full-Stack / Backend',
    flagship: true,
    name: 'Internal Developer Portal & Schema Registry',
    tags: ['Node.js', 'GraphQL', 'React', 'PostgreSQL'],
    problem:
      "As services multiply, engineers lose track of what APIs exist, what they return, and who owns them — the same problem I first solved years ago with a GraphQL schema visualizer at GraphQL Discovery.",
    approach:
      'A service catalog and schema registry that auto-discovers GraphQL schemas across services, renders live interactive diagrams (extending the introspection-to-SVG approach from that earlier project), and tracks ownership and versioning.',
    impact:
      "The staff-level evolution of a tool I already shipped once — from a single visualizer into a full internal platform for API discovery and ownership.",
  },

  // ---- INFRA & CLOUD ----
  {
    id: 'gitops-pipeline',
    category: 'Infra & Cloud',
    name: 'Multi-Region GitOps Deployment Pipeline',
    tags: ['Kubernetes', 'Terraform', 'ArgoCD', 'GitHub Actions'],
    problem:
      'Manual, single-region deployments create real risk: no fast rollback path, no protection against regional outages, inconsistent environments.',
    approach:
      'A GitOps pipeline where infrastructure is defined in Terraform and deployments are declarative via ArgoCD, rolling out with canary analysis across regions and automatic rollback on failed health checks.',
    impact:
      'Demonstrates the infrastructure-as-code and progressive-delivery patterns needed to run production services reliably at scale.',
  },
  {
    id: 'observability-stack',
    category: 'Infra & Cloud',
    name: 'Unified Observability Stack',
    tags: ['OpenTelemetry', 'Grafana', 'Prometheus', 'Loki'],
    problem:
      'When something breaks in production, engineers often have to check five different tools to piece together what actually happened.',
    approach:
      'A stack instrumented with OpenTelemetry across services, correlating logs, metrics, and traces in Grafana, with SLO-based alerting and on-call runbooks.',
    impact:
      'Shows the operational maturity to not just build systems, but to know when they are breaking and why — before customers notice.',
  },
  {
    id: 'zero-downtime-migrations',
    category: 'Infra & Cloud',
    name: 'Zero-Downtime Database Migration Framework',
    tags: ['PostgreSQL', 'Node.js', 'Docker', 'CI/CD'],
    problem:
      'Schema changes on live databases are one of the riskiest operations a team performs, and most teams still handle them manually and nervously.',
    approach:
      'A migration framework that enforces backward-compatible, expand-contract migration patterns, automated in CI with dry-run validation against a production-like replica before any migration touches live data.',
    impact:
      'Encodes hard-won migration lessons into tooling, removing risk from a process that is usually just tribal knowledge.',
  },
]
