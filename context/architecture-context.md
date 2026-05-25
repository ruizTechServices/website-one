---
title: "Architecture Context - School Worksheet Generator"
description: "Architecture context for the TinySheets Worksheet Generator"
path: "C:/Users/giost/CascadeProjects/websites/schoolWorksheetGenerator/website-one/context/architecture-context.md"
---

# Architecture Context - School Worksheet Generator

## Architecture Philosophy

This project prioritizes modularity, separation of concerns, predictable data flow, and scalable feature boundaries.

The app should be built in layers:

```txt
routes/pages
-> templates
-> organisms
-> molecules
-> atoms/primitives
-> domain logic
-> data access
-> external services
```

Each layer should depend downward on more focused layers. UI components should not own authentication, Supabase queries, PDF generation, or worksheet domain rules directly.

## Intended Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Clerk authentication with Google auth
- Supabase Postgres
- Supabase Storage later
- PDF renderer
- Vercel deployment

## Current Implementation Baseline

SPEC-002 established the first app scaffold and design-system foundation:

- Next.js `16.2.6`
- React `19.2.4`
- TypeScript
- Tailwind CSS v4
- shadcn/ui `base-nova`
- Base UI-backed shadcn primitives
- Lucide icons
- App Router without a `src/` directory
- `@/*` import alias

Implemented directories now include:

```txt
app/
components/
  ui/
  primitives/
  atoms/
lib/
  constants/
```

No Clerk, Supabase, worksheet-generation engine, or PDF-generation package has been added yet.

## Application Boundaries

### UI Layer

Responsible for rendering components, layouts, forms, controls, previews, and user interactions.

UI should be organized through the TinySheets atomic design hierarchy defined in `context/ui-context.md`.

### Domain Layer

Responsible for worksheet generation rules, grade-specific behavior, mode-specific behavior, one-page constraints, and validation.

Domain logic should be framework-light and should return structured data rather than JSX.

### Data Layer

Responsible for Supabase reads, writes, storage metadata, and data mapping.

Data access should be isolated so UI components do not scatter direct database queries.

### Auth Layer

Responsible for Clerk session state, user identity, Google auth, and future role metadata.

Clerk is the primary auth system. Supabase Auth should not be introduced as a competing primary auth system.

### PDF Layer

Responsible for converting validated worksheet data into true PDF output.

The PDF layer should be independent enough to support future answer keys and multi-page output without changing the core worksheet generator contract.

## Route Map

```txt
/ 
  currently redirects to /design-system until the marketing landing page is implemented

/sign-in
  planned Clerk sign-in

/sign-up
  planned Clerk sign-up

/dashboard
  planned teacher/tutor dashboard

/dashboard/generate
  planned worksheet generator

/dashboard/worksheets
  planned saved worksheets

/dashboard/pdf-exports
  planned PDF export history

/admin
  planned admin dashboard

/admin/users
  planned user management shell

/admin/system-health
  planned platform health shell

/design-system
  implemented temporary design-system preview route
```

Routes should stay thin. Reusable UI belongs in components. Domain logic belongs in `lib/`.

## Frontend Layer Structure

Recommended structure:

```txt
components/
  ui/
  primitives/
  atoms/
  molecules/
  organisms/
  templates/

app/
  page.tsx
  sign-in/
  sign-up/
  dashboard/
  admin/
  design-system/

lib/
  auth/
  constants/
  mock-data/
  pdf/
  supabase/
  worksheets/
```

The component hierarchy and visual requirements are defined in `context/ui-context.md`.

## Backend and Data Layer Structure

Backend-facing code should be isolated behind focused modules:

```txt
lib/auth/
  clerk-user.ts
  require-user.ts

lib/supabase/
  client.ts
  server.ts
  worksheets.ts
  pdf-exports.ts

lib/worksheets/
  worksheet-types.ts
  worksheet-limits.ts
  generate-math-worksheet.ts
  generate-vocabulary-worksheet.ts
  validate-worksheet.ts

lib/pdf/
  pdf-types.ts
  render-worksheet-pdf.tsx
  math-worksheet-pdf.tsx
  vocabulary-worksheet-pdf.tsx
```

These filenames are directional and may be adjusted during implementation, but the boundaries should remain.

## Auth Architecture

Clerk handles:

- Login
- Signup
- Google auth
- Session state
- User identity
- Future role metadata

Supabase records should reference the Clerk user ID.

Supabase should not be documented or implemented as the primary authentication system.

## Supabase Architecture

Supabase stores:

- Worksheet records
- Structured worksheet JSON
- PDF metadata
- User-linked records
- Future export records
- Future admin records
- Future audit records

Supabase Storage may later store generated PDFs. The first storage decision should remain explicit in a PDF/data-layer spec.

## Worksheet Generation Architecture

Worksheet generation should follow this flow:

```txt
user input
-> validate generation settings
-> apply grade/mode/skill limits
-> generate structured worksheet JSON
-> validate worksheet JSON
-> render preview
-> generate PDF
-> save worksheet record
-> optionally save PDF/export metadata
```

Generated worksheet data should be structured and typed. It should not be random text, page JSX, or arbitrary HTML.

## PDF Architecture

PDFs should be generated from validated worksheet JSON.

The PDF layer should support:

- Math worksheets
- Vocabulary worksheets
- One-page enforcement
- Printable layout
- Future answer keys
- Future multi-page output

Do not make random HTML blobs the primary PDF architecture.

## Dashboard Architecture

The teacher/tutor dashboard should read from user-scoped records when real data is introduced.

Initial dashboard UI may use mock data from `lib/mock-data/`, but the component and data boundaries should make real Supabase data straightforward to wire later.

## Admin Architecture

The admin dashboard should begin as a shell with mock/admin panels.

Real admin permissions, role checks, user management actions, billing controls, audit logs, and destructive operations must be introduced through explicit later specs.

## Storage Architecture

The MVP must support PDF download.

Whether generated PDFs are stored immediately in Supabase Storage or regenerated from saved worksheet JSON is an open decision. The data model should be able to track export metadata either way.

## Server and Client Boundary Rules

Use Server Components by default.

Use Client Components only for:

- Interactive forms
- Selectors
- Dashboard controls
- Preview controls
- Client-only auth UI
- Live worksheet preview interactions

Keep data fetching and mutations server-side where possible.

## State Management Principles

Use local component state for form interactions and preview controls.

Avoid global state until there is a clear cross-route need.

Server state should come from server-side data access patterns rather than client-side database calls scattered across components.

## Validation Principles

Validate:

- Generation form inputs
- Grade and mode combinations
- Skill selection
- Difficulty selection
- Question count limits
- One-page output constraints
- Worksheet JSON before PDF export
- User ownership before reads/writes
- PDF export requests

Validation should happen before saving or exporting.

## Security Principles

- Authenticated users only for generation and saved history.
- User records must be scoped to owner.
- No secrets in client components.
- No unsafe admin actions without explicit permission design.
- No destructive database migrations without an explicit spec.
- Validate all generation inputs.
- Validate all worksheet output before saving or exporting.
- Keep service keys and privileged database access server-side only.

## Deployment Architecture

Vercel is the deployment target.

Architecture should remain compatible with Vercel serverless and edge constraints. Long-running or storage-heavy operations should be evaluated before implementation.

## Scalability Notes

The MVP enforces one-page worksheets, but the data model should support future growth by avoiding assumptions that make multi-page worksheets impossible.

Future data may include:

- `pageCount`
- Structured `pages`
- Answer keys
- Standards metadata
- Template IDs
- Export records
- Storage paths

Do not build multi-page UI in the MVP.

## Future Extension Points

- Additional grade levels
- Additional worksheet modes
- Answer keys
- AI-assisted generation
- Standards alignment
- Template marketplace
- Classroom folders
- Subscription plans
- Analytics
- Batch generation
- Multi-page exports
