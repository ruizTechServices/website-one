---
prompt: 000
---
AI ONLY: WRITE THOUGHTS AND CONCEPTS HERE
<thoughts>


</thoughts>
---
Pick up where we left off on the TinySheets / School Worksheet Generator project.


---
## The correct mental model is:


project-overview.md
= product/business/user scope

architecture-context.md
= system structure and technical boundaries

code-standards.md
= coding rules and implementation discipline

ui-context.md
= visual system and UI component direction

ai-workflow-rules.md
= how Codex should behave

progress-tracker.md
= what happened, what is happening, what is next
---


You are working in:

```txt
C:\Users\giost\CascadeProjects\websites\schoolWorksheetGenerator\website-one
```

Your task is **documentation alignment only**.

Do **not** build components yet.

Do **not** implement pages yet.

Do **not** install packages yet.

Do **not** modify app code unless required to inspect reality.

Your job is to fill in the remaining project context `.md` files so the entire project has correct systemic documentation for:

- product scope
- architecture
- code standards
- UI/design context
- workflow rules
- progress tracking
- modular frontend
- modular backend
- auth
- database
- PDF generation
- dashboards
- admin area
- worksheet generation
- scalability
- separation of concerns

The UI context file is already the canonical UI/design-system context. Do not rewrite it into something narrower. Only lightly update it if needed to keep it consistent with the other docs.

---

# Required first step

Read these files before writing anything:

```txt
AGENTS.md
CLAUDE.md
context/project-overview.md
context/architecture-context.md
context/code-standards.md
context/ui-context.md
context/ai-workflow-rules.md
context/progress-tracker.md
```

Then inspect the images in:

```txt
/images
```

The images are the approved product visualization references.

Use them to understand the actual product direction, but do not make every `.md` file only about UI.

Each `.md` file has a separate responsibility.

---

# Product summary

TinySheets is a PDF-first K–2 worksheet generator for teachers and tutors.

The first real users are teachers/tutors, specifically the founder’s brother and sister-in-law.

The MVP supports:

```txt
Grades:
- Kindergarten
- 1st Grade
- 2nd Grade

Modes:
- Math
- Vocabulary

Output:
- one-page worksheets only
- true PDF generation
- download
- print
- save to user dashboard
```

Users must log in before generating or saving worksheets.

The app should be clean and professional for educators.

The worksheet outputs should be child-friendly, printable, spacious, and one-page only for the MVP.

---

# Stack direction

The intended stack is:

```txt
Next.js App Router
TypeScript
Tailwind CSS
shadcn/ui
Clerk authentication with Google auth
Supabase Postgres
Supabase Storage later
PDF generation
Vercel deployment
```

Important auth/database split:

```txt
Clerk = authentication, sessions, Google auth, user identity, user roles
Supabase = database, worksheet records, PDF metadata, storage, RLS-compatible data access
```

Do not document Supabase Auth as the primary auth system.

Do not create two competing auth systems.

---

# Main documentation goal

Fill these files appropriately:

```txt
context/project-overview.md
context/architecture-context.md
context/code-standards.md
context/progress-tracker.md
```

Review but mostly preserve:

```txt
context/ui-context.md
context/ai-workflow-rules.md
```

Create missing feature-spec folder/files only if useful:

```txt
context/feature-specs/
```

At minimum, create:

```txt
context/feature-specs/001-project-context-alignment.md
context/feature-specs/002-design-system-foundation.md
context/feature-specs/003-auth-shell.md
context/feature-specs/004-worksheet-generation-engine.md
context/feature-specs/005-pdf-generation.md
context/feature-specs/006-dashboard-data-layer.md
context/feature-specs/007-admin-dashboard.md
```

Only write the specs as plans. Do not implement them yet.

---

# File responsibility map

## `context/project-overview.md`

This file should explain **what the product is**.

It should include:

```txt
Project identity
Problem statement
Target users
MVP scope
Non-goals
Primary user workflows
Core product promise
First supported grades
First supported worksheet modes
PDF-first requirement
Authentication requirement
Dashboard requirement
Admin requirement
Success criteria
Future roadmap
Current priority
```

It should not contain low-level code architecture.

It should not contain detailed component inventories.

It should not become a UI style guide.

Use this conceptual structure:

```md
# Project Overview — School Worksheet Generator

## Project Identity

TinySheets is a PDF-first K–2 worksheet generator for teachers and tutors.

## Product Promise

Generate clean, one-page, child-friendly math and vocabulary worksheets as true PDFs.

## Target Users

- teachers
- tutors
- first internal users: founder’s brother and sister-in-law

## Problem

Teachers and tutors need quick printable practice materials without wasting time formatting worksheets manually.

## MVP Scope

### Included

- authenticated users only
- K–2 only
- math worksheets
- vocabulary worksheets
- one-page output only
- true PDF generation
- download
- print
- save to dashboard
- personal dashboard
- admin dashboard shell

### Excluded From MVP

- payments
- subscriptions
- student accounts
- classrooms
- multi-page worksheets
- AI-generated lesson plans
- handwriting mode
- science/social studies
- LMS features
- grading
- analytics-heavy teacher tools

## Core User Workflow

1. User signs in.
2. User opens dashboard.
3. User selects Generate Worksheet.
4. User chooses grade, mode, skill, difficulty, and question count.
5. System generates structured worksheet data.
6. System renders worksheet preview.
7. System generates true PDF.
8. User downloads, prints, and saves worksheet.

## Product Rules

- Login is required before generating.
- Worksheets are one page only for MVP.
- Math and vocabulary are the only first modes.
- PDF output is core, not optional.
- The app UI is professional.
- The worksheet output is child-friendly.

## Success Criteria

The MVP is successful when a teacher/tutor can log in, generate a one-page K–2 math or vocabulary worksheet, preview it, download it as a true PDF, print it, and find it later in their dashboard.

## Future Roadmap

- multi-page worksheets
- answer keys
- AI-assisted content generation
- student groups
- classroom folders
- subscriptions
- usage analytics
- template marketplace
```

---

## `context/architecture-context.md`

This file should explain **how the app is structured**.

It should include:

```txt
Architecture principles
High-level system overview
Route structure
Frontend layer structure
Backend/data layer structure
Auth architecture
Supabase architecture
PDF architecture
Worksheet generation architecture
Dashboard architecture
Admin architecture
Storage architecture
Server/client boundaries
State management principles
Validation principles
Security principles
Deployment architecture
Scalability notes
Future extension points
```

It should be systemic and technical.

Use this conceptual structure:

```md
# Architecture Context — School Worksheet Generator

## Architecture Philosophy

This project prioritizes modularity, separation of concerns, predictable data flow, and scalable feature boundaries.

The app should be built in layers:

```txt
routes/pages
→ templates
→ organisms
→ molecules
→ atoms/primitives
→ domain logic
→ data access
→ external services
```

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Clerk
- Supabase
- PDF renderer
- Vercel

## Application Boundaries

### UI Layer

Responsible for rendering components and user interactions.

### Domain Layer

Responsible for worksheet generation rules, grade rules, one-page constraints, and validation.

### Data Layer

Responsible for Supabase reads/writes and storage metadata.

### Auth Layer

Responsible for Clerk session/user identity.

### PDF Layer

Responsible for converting structured worksheet data into PDF output.

## Route Map

```txt
/
  marketing landing page

/sign-in
  Clerk sign-in

/sign-up
  Clerk sign-up

/dashboard
  teacher/tutor dashboard

/dashboard/generate
  worksheet generator

/dashboard/worksheets
  saved worksheets

/dashboard/pdf-exports
  PDF export history

/admin
  admin dashboard

/admin/users
  user management shell

/admin/system-health
  platform health shell

/design-system
  temporary design-system preview route
```

## Auth Architecture

Clerk handles:

- login
- signup
- Google auth
- session state
- user identity
- role metadata later

Supabase does not handle primary auth.

Supabase records should reference the Clerk user ID.

## Data Architecture

Supabase stores:

- worksheet records
- worksheet JSON
- PDF metadata
- user-linked records
- future export records
- future admin/audit records

## Worksheet Data Flow

```txt
user input
→ validate generation settings
→ generate structured worksheet JSON
→ validate worksheet JSON
→ render preview
→ generate PDF
→ save worksheet record
→ optionally save PDF/export metadata
```

## PDF Architecture

The PDF should be generated from structured worksheet JSON.

Do not generate PDFs from random HTML blobs as the primary architecture.

The PDF layer should support:

- math worksheets
- vocabulary worksheets
- one-page enforcement
- future answer keys
- future multi-page output

## Server/Client Boundary Rules

Use Server Components by default.

Use Client Components only for:

- interactive forms
- selectors
- dashboard controls
- preview controls
- client-only auth UI
- live worksheet preview interactions

Keep data fetching and mutations server-side when possible.

## Supabase Access Pattern

Supabase access should be isolated in:

```txt
lib/supabase/
```

Do not scatter Supabase queries throughout UI components.

## Worksheet Domain Pattern

Worksheet logic should live in:

```txt
lib/worksheets/
```

Expected files:

```txt
worksheet-types.ts
worksheet-limits.ts
generate-math-worksheet.ts
generate-vocabulary-worksheet.ts
validate-worksheet.ts
```

## PDF Pattern

PDF logic should live in:

```txt
lib/pdf/
```

Expected files:

```txt
pdf-types.ts
render-worksheet-pdf.tsx
math-worksheet-pdf.tsx
vocabulary-worksheet-pdf.tsx
```

## Security Principles

- authenticated users only for generation
- user records scoped to owner
- no secrets in client components
- no unsafe admin actions
- no destructive database migrations without explicit spec
- validate all generation inputs
- validate all worksheet output before saving/exporting

## Scalability Notes

The MVP enforces one-page worksheets, but the data model should support future multi-page worksheets by storing `pageCount` and structured `pages` later.

Do not build multi-page UI yet.

## Deployment

Vercel is the deployment target.

Architecture should remain compatible with Vercel serverless/edge constraints.
```

---

## `context/code-standards.md`

This file should explain **how code must be written**.

It should include:

```txt
TypeScript rules
Next.js rules
component rules
atomic design rules
file naming
import rules
server/client component rules
state rules
validation rules
error handling
Supabase rules
Clerk rules
PDF rules
testing/check rules
accessibility rules
mock data rules
anti-patterns
```

Use this conceptual structure:

```md
# Code Standards — School Worksheet Generator

## Core Standards

Code must be modular, explicit, typed, and easy to refactor.

Prefer small focused files over large mixed-responsibility files.

## TypeScript

- Use TypeScript for all app code.
- Avoid `any`.
- Define domain types in dedicated files.
- Export shared types from domain modules.
- Keep props interfaces close to components unless shared broadly.

## Next.js

- Use App Router.
- Prefer Server Components by default.
- Use Client Components only when interactivity requires them.
- Keep route files thin.
- Move reusable UI into components.
- Move business logic into `lib/`.

## Component Standards

Every component must fit one category:

```txt
primitive
atom
molecule
organism
template
page
```

If a component does too much, split it.

## shadcn/ui Standards

Use shadcn/ui as the base primitive layer.

Do not scatter raw shadcn components with custom one-off classes through pages.

Wrap app-specific variants in:

```txt
components/primitives/
```

Example:

```tsx
<AppButton variant="primary">Generate PDF</AppButton>
```

## File Naming

Use kebab-case filenames.

Examples:

```txt
app-sidebar.tsx
metric-card.tsx
worksheet-thumbnail-card.tsx
generate-math-worksheet.ts
```

Use PascalCase for component names.

## Import Rules

Use the `@/` alias.

Avoid deep relative imports like:

```txt
../../../components
```

## Styling Rules

Use semantic tokens and reusable variants.

Avoid random color scattering.

Prefer consistent spacing, radius, shadows, and variants.

## Data Rules

Mock data belongs in:

```txt
lib/mock-data/
```

or:

```txt
lib/constants/
```

Do not hardcode repeated arrays inside pages.

## Supabase Rules

Supabase code belongs in:

```txt
lib/supabase/
```

UI components should not directly perform Supabase queries.

## Clerk Rules

Clerk logic belongs in:

```txt
lib/auth/
```

or route/layout boundaries where Clerk requires it.

Do not mix Clerk logic into pure UI components.

## Worksheet Logic Rules

Worksheet generation belongs in:

```txt
lib/worksheets/
```

The generator should return structured data, not random JSX.

## PDF Rules

PDF rendering belongs in:

```txt
lib/pdf/
```

PDFs should render from validated worksheet JSON.

## Validation Rules

Validate:

- generation form inputs
- worksheet data
- user ownership
- PDF export requests

Use a consistent validation strategy.

## Error Handling

Use explicit error states.

Do not silently fail.

Do not expose internal implementation details to users.

## Accessibility

Use semantic HTML.

Use accessible labels.

Use keyboard-friendly controls.

Use visible focus states.

Do not rely on color alone.

## Verification

Before marking work complete, run:

```bash
npm run lint
npm run build
```

If checks cannot run, document why in `progress-tracker.md`.

## Anti-Patterns

Avoid:

- huge page components
- mixed auth/database/UI logic
- untyped worksheet data
- raw PDF generation from arbitrary HTML
- duplicated card markup
- one-off Tailwind colors everywhere
- premature payments/subscriptions
- building multi-page worksheets before MVP
```

---

## `context/ui-context.md`

This file is already the UI source of truth.

Codex should:

```txt
preserve it
review for consistency
only update if another context file introduces a real correction
do not narrow it into only design-system atoms
do not remove the dashboard/generator/admin/landing references
```

It should remain responsible for:

```txt
visual identity
atomic design hierarchy
component style direction
dashboard UI patterns
landing UI patterns
generator UI patterns
admin UI patterns
worksheet PDF visual style
```

---

## `context/ai-workflow-rules.md`

This file is already mostly correct.

Codex should preserve it unless there is an obvious missing rule.

It should remain responsible for:

```txt
how Codex works
how feature specs are handled
how context docs are updated
how progress is tracked
what drift means
verification rules
source-of-truth rules
safety rules
```

If updated, add only small clarifying rules like:

```txt
Do not use UI specs to overwrite product/architecture/code-standard docs.
Each context file has its own responsibility.
```

Do not rewrite it into product documentation.

---

## `context/progress-tracker.md`

This file should track **status**, not architecture.

It should include:

```md
# Progress Tracker — School Worksheet Generator

## Current Objective

Establish complete project context documentation before implementation.

## Active Scope

- Fill project overview context.
- Fill architecture context.
- Fill code standards context.
- Preserve UI context as canonical design reference.
- Preserve AI workflow rules.
- Create initial feature-spec roadmap.

## Current MVP Direction

TinySheets will begin as an authenticated PDF-first K–2 math and vocabulary worksheet generator for teachers and tutors.

## Completed

- UI direction established from generated mockups.
- UI context prepared.
- Product scope clarified.

## In Progress

- Project context alignment.
- Architecture documentation.
- Code standards documentation.
- Feature-spec roadmap.

## Next Recommended Specs

1. `001-project-context-alignment.md`
2. `002-design-system-foundation.md`
3. `003-auth-shell.md`
4. `004-worksheet-generation-engine.md`
5. `005-pdf-generation.md`
6. `006-dashboard-data-layer.md`
7. `007-admin-dashboard.md`

## Open Decisions

- Exact app name: TinySheets appears to be the current working name.
- PDF renderer package.
- Whether PDFs are regenerated from JSON or stored immediately in Supabase Storage.
- Whether answer keys are included in MVP or post-MVP.

## Latest Log

### YYYY-MM-DD — Context documentation alignment

Status: Partial

#### Files changed
- `context/project-overview.md`
- `context/architecture-context.md`
- `context/code-standards.md`
- `context/progress-tracker.md`
- optional feature specs

#### What changed
- Filled project-level context.
- Filled architecture-level context.
- Filled code standards.
- Preserved UI context.
- Preserved AI workflow rules.
- Established feature-spec roadmap.

#### Verification
- `npm run lint`: not run; documentation-only task
- `npm run build`: not run; documentation-only task

#### Known issues
- No app implementation yet.

#### Next recommended spec
- `context/feature-specs/002-design-system-foundation.md`
```

---

# Required feature-spec roadmap

Create this folder if missing:

```txt
context/feature-specs/
```

Create these specs as planning files only:

## `001-project-context-alignment.md`

Purpose:

```txt
Fill and align all context docs.
```

## `002-design-system-foundation.md`

Purpose:

```txt
Implement tokens, shadcn wrappers, primitives, atoms, and /design-system preview.
```

## `003-auth-shell.md`

Purpose:

```txt
Add Clerk app shell, sign-in, sign-up, protected dashboard routing, and Google auth UI.
```

## `004-worksheet-generation-engine.md`

Purpose:

```txt
Implement structured worksheet generation for K–2 math and vocabulary.
```

## `005-pdf-generation.md`

Purpose:

```txt
Generate true one-page PDFs from structured worksheet JSON.
```

## `006-dashboard-data-layer.md`

Purpose:

```txt
Add Supabase schema/data access for saved worksheets and PDF export metadata.
```

## `007-admin-dashboard.md`

Purpose:

```txt
Create admin dashboard shell and mock/admin data panels before real permissions.
```

Each spec should include:

```txt
Objective
Scope
Out of scope
Files likely affected
Implementation notes
Verification steps
Completion criteria
```

---

# Important separation rules

Do not combine these concerns:

```txt
UI design
product overview
backend architecture
code standards
workflow rules
progress logs
```

Each context file must stay in its lane.

Do not dump everything into `ui-context.md`.

Do not make `project-overview.md` a code file.

Do not make `architecture-context.md` a product pitch.

Do not make `code-standards.md` a progress log.

Do not make `progress-tracker.md` a design system guide.

---

# Final checks

After updating docs, report:

```txt
files changed
files created
what each context file is now responsible for
whether any conflicts were found
whether any docs were preserved unchanged
```

Do not claim implementation is complete.

This is a documentation-alignment task only.