<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/header-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/header-light.svg">
  <img alt="Daniel Avila, software engineer" src="assets/header-light.svg" width="100%">
</picture>

<p align="center">
  <a href="https://www.linkedin.com/in/avila-daniel/"><b>LinkedIn</b></a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="https://linktr.ee/davila23"><b>Linktree</b></a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="mailto:daniel.avila@rottay.com"><b>daniel.avila@rottay.com</b></a>
</p>

<br>

I care about clear domain models, systems that stay maintainable long after
they ship, and interfaces that feel finished.

<br>

## Technologies

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/technologies-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/technologies-light.svg">
  <img alt="Languages: TypeScript · JavaScript · Go · Python · Java; Backend: Node.js · GraphQL (Apollo) · FastAPI · Spring Boot · REST / OpenAPI · Microservices; Frontend: React · Next.js · Redux · RxJS · Angular · Webpack Module Federation; Data and messaging: PostgreSQL · MongoDB · MySQL · Redis · DynamoDB · Kafka · SNS / SQS; Cloud and infrastructure: AWS · Azure · GCP · Docker · Jenkins · Datadog · Linux; AI: LLM systems · RAG · Fine-tuning pipelines · Prompt engineering · MCP · AI agents · Voice AI; Payments and Web3: Fireblocks (MPC custody) · Web3.js · Stripe · PayPal · PIX · Payment orchestration · Reconciliation; Security and risk: AML / KYC rules engines · Fraud detection · OAuth2 · JWT · TLS · FedRAMP · PCI-aligned handling" src="assets/technologies-light.svg" width="100%">
</picture>

<br>

## Open source

### [Agent Control Plane](https://github.com/rottay/agent-control-plane)

<a href="https://github.com/rottay/agent-control-plane">
  <img alt="Agent Control Plane" src="https://raw.githubusercontent.com/rottay/agent-control-plane/main/docs/readme/header/index.png" width="100%">
</a>

A local-first control plane for running AI coding agents as a team instead of
as separate chats. Each responsibility in a workflow, such as clarifying the
request, implementing, verifying and reviewing, is assigned to a provider,
model and account of your choice, with explicit boundaries on what that agent
may read, change, call or spend. Every step declares what it must deliver and
which evidence is required before the work is allowed to advance, so a task
moves forward on verified results rather than on an agent saying it is done.
When an account runs out of quota or a step fails, the plan pauses, recovers
or hands off to a compatible worker without losing the work already done.
TypeScript, provider-agnostic, built to swap tools without rebuilding the
workflow.

<br>

### [Design System](https://github.com/rottay/ui-design-system)

<a href="https://github.com/rottay/ui-design-system">
  <img alt="Design System" src="https://raw.githubusercontent.com/rottay/ui-design-system/main/docs/readme/header/index.png" width="100%">
</a>

A React and TypeScript design system for multi-tenant products, where every
customer gets a distinct visual identity over the same shared components.
A bounded set of tenant decisions, covering typography, shape, spacing,
surfaces, interaction states and motion, cascades through tokens, themes and
four composition tiers: primitives, patterns, structures and page surfaces.
The result is white-label differentiation that goes well beyond swapping a
primary color, with the same accessibility, interaction and responsive quality
whether a tenant customizes a little or a lot. Includes a tenant theme editor
contract, a component catalog with ownership rules, and verification gates
that keep each identity honest.
