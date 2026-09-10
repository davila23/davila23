<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/header-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/header-light.svg">
  <img alt="Daniel Avila, senior software engineer" src="assets/header-light.svg" width="100%">
</picture>

<p>
  <a href="https://www.linkedin.com/in/avila-daniel/"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/contact-linkedin-dark.svg"><source media="(prefers-color-scheme: light)" srcset="assets/contact-linkedin-light.svg"><img alt="LinkedIn" src="assets/contact-linkedin-light.svg" height="44"></picture></a>
  &nbsp;&nbsp;
  <a href="https://linktr.ee/davila23"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/contact-linktree-dark.svg"><source media="(prefers-color-scheme: light)" srcset="assets/contact-linktree-light.svg"><img alt="Linktree" src="assets/contact-linktree-light.svg" height="44"></picture></a>
  &nbsp;&nbsp;
  <a href="mailto:daniel.avila@rottay.com"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/contact-email-dark.svg"><source media="(prefers-color-scheme: light)" srcset="assets/contact-email-light.svg"><img alt="daniel.avila@rottay.com" src="assets/contact-email-light.svg" height="44"></picture></a>
</p>

<br>

## About

Seventeen years as a software engineer, drawn to the work that changes a
product: migrations that cannot fail, features built from scratch, and
problems where the result is measured by the business rather than by the
ticket. I like owning things end to end, from the domain model to what the
user sees, and I bring a product view to engineering decisions.

Most of those years were spent on the backend of systems where mistakes are
expensive: telephone banking serving fifty thousand callers a day,
health-insurance quoting under regulatory constraints, a notifications
platform moving half a million messages a day, a security-compliance product
built to FedRAMP requirements, and a regulated real-money gaming platform with
its own payments, custody and risk stack.

Today my work is taking features end to end with full ownership and autonomy,
from the first conversation about the problem to production, leveraging AI
tooling and agent orchestration across the whole cycle. I have been an early
adopter of these tools since the first usable models, and they are now part
of how I design, build, test and review.

## Technologies

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/technologies-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/technologies-light.svg">
  <img alt="Languages: TypeScript · JavaScript · Go · Python · Java; Backend: Node.js · GraphQL (Apollo) · FastAPI · Spring Boot · REST / OpenAPI · Microservices; Frontend: React · Next.js · Redux · RxJS · Angular · Webpack Module Federation; Data and messaging: PostgreSQL · MongoDB · MySQL · Redis · DynamoDB · Kafka · SNS / SQS; Cloud and infrastructure: AWS · Azure · GCP · Docker · Jenkins · Datadog · Linux; AI: LLM systems · RAG · Fine-tuning pipelines · Prompt engineering · MCP · AI agents · Voice AI; Payments and Web3: Fireblocks (MPC custody) · Web3.js · Stripe · PayPal · PIX · Payment orchestration · Reconciliation; Security and risk: AML / KYC rules engines · Fraud detection · OAuth2 · JWT · TLS · FedRAMP · PCI-aligned handling" src="assets/technologies-light.svg" width="100%">
</picture>

<br>

## Contributions

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/contributions-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/contributions-light.svg">
  <img alt="Contributions in the last twelve months" src="assets/contributions-light.svg" width="100%">
</picture>

<br>

## Open source

<p align="center">
  <a href="https://github.com/rottay/agent-control-plane"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/pin-agent-control-plane-dark.svg"><source media="(prefers-color-scheme: light)" srcset="assets/pin-agent-control-plane-light.svg"><img alt="rottay/agent-control-plane" src="assets/pin-agent-control-plane-light.svg" width="49%"></picture></a>
  <a href="https://github.com/rottay/ui-design-system"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/pin-ui-design-system-dark.svg"><source media="(prefers-color-scheme: light)" srcset="assets/pin-ui-design-system-light.svg"><img alt="rottay/ui-design-system" src="assets/pin-ui-design-system-light.svg" width="49%"></picture></a>
</p>

<br>

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
