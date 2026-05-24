---
title: "Code Standards - School Worksheet Generator"
description: "Code standards for the TinySheets Worksheet Generator"
path: "C:/Users/giost/CascadeProjects/websites/schoolWorksheetGenerator/website-one/context/code-standards.md"
---

# Code Standards - School Worksheet Generator

## Core Standards

Code must be modular, explicit, typed, and easy to refactor.

Prefer small focused files over large mixed-responsibility files. Keep product scope, UI rendering, auth, data access, worksheet generation, and PDF generation in separate layers.

## TypeScript

- Use TypeScript for all app code.
- Avoid `any`.
- Define domain types in dedicated files.
- Export shared types from domain modules.
- Keep props interfaces close to components unless shared broadly.
- Prefer explicit return types for domain logic, data access, and PDF generation functions.
- Model worksheet data with typed structures instead of loose objects.

## Next.js

- Use the App Router.
- Prefer Server Components by default.
- Use Client Components only when interactivity requires them.
- Keep route files thin.
- Move reusable UI into `components/`.
- Move business and domain logic into `lib/`.
- Keep metadata, redirects, and auth gating close to route or layout boundaries when appropriate.

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

Page components should compose templates and organisms rather than containing large blocks of repeated UI markup.

## Atomic Design Rules

- `components/primitives/` wraps base shadcn/ui primitives with TinySheets defaults.
- `components/atoms/` contains single-purpose visual elements.
- `components/molecules/` combines atoms into reusable small patterns.
- `components/organisms/` contains larger page sections.
- `components/templates/` owns reusable page layout structures.
- Route files in `app/` connect routing, data, auth, and composed UI.

## shadcn/ui Standards

Use shadcn/ui as the base primitive layer.

Do not scatter raw shadcn components with one-off custom classes through pages when the component has TinySheets-specific styling.

Preferred pattern:

```tsx
<AppButton variant="primary">Generate PDF</AppButton>
```

The wrapper should own product variants, sizes, and consistent styling.

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

Use clear, boring names that describe the component or module's job.

## Import Rules

Use the `@/` alias for application imports.

Avoid deep relative imports such as:

```txt
../../../components
```

Avoid circular dependencies between layers.

Lower-level modules should not import route files or page components.

## Styling Rules

- Use semantic tokens and reusable variants.
- Avoid random color scattering.
- Prefer consistent spacing, radius, shadows, and variants.
- Keep dashboard UI professional and calm.
- Keep worksheet PDF output readable and printable.
- Do not make the entire app overly childish.
- Preserve the visual direction in `context/ui-context.md`.

## Server and Client Component Rules

- Use Server Components unless client interactivity is required.
- Mark files with `"use client"` only when needed.
- Keep client components focused on interaction and presentation.
- Keep secrets, service keys, privileged database access, and admin checks out of client components.

## State Rules

- Use local state for form controls, selectors, preview toggles, and small UI interactions.
- Avoid global state until multiple distant routes or features clearly need it.
- Treat server data as server-owned unless there is a deliberate client-fetching reason.

## Validation Rules

Validate:

- Generation form inputs
- Grade selections
- Mode selections
- Skill selections
- Difficulty selections
- Question count
- One-page worksheet constraints
- Structured worksheet output
- User ownership
- PDF export requests

Use a consistent validation strategy once the app scaffold exists.

## Error Handling

- Use explicit error states.
- Do not silently fail.
- Do not expose internal implementation details to users.
- Preserve enough logging context for debugging server-side failures.
- Show user-facing messages that are understandable to teachers and tutors.

## Data Rules

Mock data belongs in:

```txt
lib/mock-data/
```

or:

```txt
lib/constants/
```

Do not hardcode repeated arrays directly inside page components.

Mock data should be easy to replace with Supabase-backed data later.

## Supabase Rules

Supabase code belongs in:

```txt
lib/supabase/
```

UI components should not directly perform Supabase queries.

Supabase records should reference Clerk user IDs.

Do not introduce Supabase Auth as the primary authentication system.

## Clerk Rules

Clerk logic belongs in:

```txt
lib/auth/
```

or route/layout boundaries where Clerk requires it.

Do not mix Clerk-specific logic into pure UI components.

Use Clerk for authentication, sessions, Google auth, user identity, and future role metadata.

## Worksheet Logic Rules

Worksheet generation belongs in:

```txt
lib/worksheets/
```

The generator should return structured data, not random JSX or arbitrary HTML.

Worksheet logic should enforce MVP limits for:

- K-2 only
- Math and vocabulary only
- One-page output only
- Supported skill sets
- Question count constraints

## PDF Rules

PDF rendering belongs in:

```txt
lib/pdf/
```

PDFs should render from validated worksheet JSON.

PDF output must remain:

- One page for MVP
- Printable
- Readable
- Child-friendly
- True PDF output

Do not make raw browser screenshots or arbitrary HTML blobs the primary PDF generation strategy.

## Accessibility

- Use semantic HTML.
- Use accessible labels.
- Use keyboard-friendly controls.
- Use visible focus states.
- Do not rely on color alone.
- Ensure controls have clear names.
- Ensure selected states are communicated accessibly.

## Verification

Before marking implementation work complete, run:

```bash
npm run lint
npm run build
```

If checks cannot run, document why in `context/progress-tracker.md`.

For documentation-only tasks before an app scaffold exists, do not run app build commands. Record the reason in the progress tracker.

## Anti-Patterns

Avoid:

- Huge page components
- Mixed auth/database/UI logic
- Untyped worksheet data
- Raw PDF generation from arbitrary HTML as the primary design
- Duplicated card markup
- One-off Tailwind colors everywhere
- Premature payments or subscriptions
- Building multi-page worksheets before MVP
- Introducing competing auth systems
- Scattering Supabase calls through components
- Putting progress logs in architecture or code standards docs
