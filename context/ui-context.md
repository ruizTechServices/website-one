---
title: "UI Context — School Worksheet Generator"
description: "UI context for the TinySheets Worksheet Generator"
path: "C:/Users/giost/CascadeProjects/websites/schoolWorksheetGenerator/website-one/context/ui-context.md"
---

# UI Context — School Worksheet Generator

## Design Goal

### TinySheets Worksheet Generator Design System

TinySheets is a modular, atomic design system for a PDF-first K–2 worksheet generator built with:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Clerk authentication with Google auth
- Supabase for data and storage
- Vercel deployment
- True PDF generation and downloads

The app exists to help teachers and tutors generate clean, one-page, child-friendly math and vocabulary worksheets for Kindergarten through 2nd Grade.

The interface should feel professional, calm, trustworthy, and efficient.

The worksheet outputs should feel child-friendly, printable, spacious, and classroom-ready.

---

## Product UI North Star

TinySheets should look and feel like:

> A clean professional SaaS dashboard for teachers and tutors, paired with child-friendly one-page worksheet outputs.

The product should not look like a toy app.

The dashboard should be polished enough for real educators.

The worksheet PDFs should be simple enough for young children.

---

## Primary Users

The first users are:

- teachers
- tutors
- the founder's brother
- the founder's sister-in-law

These users need to create lesson materials and printable worksheet PDFs for students.

---

## Grade Scope

The MVP supports:

- Kindergarten
- 1st Grade
- 2nd Grade

Do not add higher grades in the MVP.

---

## Worksheet Mode Scope

The MVP supports only:

- Math
- Vocabulary

Do not add handwriting, science, reading comprehension, spelling tests, coloring pages, or lesson plans yet.

---

## Output Scope

The MVP output must be:

- one page only
- true PDF-first
- printable
- downloadable
- child-friendly
- teacher-ready

The architecture should support multi-page worksheets later, but the MVP UI must enforce one-page worksheets.

---

## Visual Identity

### General Feel

The approved mockup direction uses:

- light SaaS dashboard layout
- white and soft gray backgrounds
- blue primary actions
- green success states
- purple Clerk/auth accents
- red PDF indicators
- yellow/orange saved-template accents
- rounded cards
- soft shadows
- clear spacing
- large readable labels
- approachable education visuals

The dashboard should feel like a polished modern app.

The worksheet previews should feel simple, friendly, and printable.

---

## Design Principles

### 1. PDF-first

The PDF is the core product.

Every generator UI decision should support the final PDF output.

### 2. One-page enforcement

The UI should communicate that worksheets are one page for the MVP.

Examples:

- "Worksheets are exactly one page for the MVP."
- "10 problems fit perfectly on one page."
- "A one-page PDF will be generated."

### 3. Professional app, child-friendly output

The dashboard should feel professional.

The worksheet output should feel friendly for children.

Do not make the entire app overly childish.

### 4. Atomic modularity

Do not jump straight into full dashboard cards.

Build the visual language from:

```txt
tokens
→ primitives
→ atoms
→ molecules
→ organisms
→ templates
→ pages
```

### 5. Separation of concerns

Do not mix:

- design tokens
- layout shells
- business logic
- auth logic
- Supabase queries
- worksheet generation
- PDF rendering

Each belongs in its own layer.

### 6. Reuse over repetition

If a visual pattern appears twice, it should probably become a reusable component.

### 7. shadcn/ui as the base, not the whole system

Use shadcn/ui primitives internally, but wrap them in TinySheets-specific components when the design needs product consistency.

---

## Atomic Design Hierarchy

### Design Tokens

Design tokens define the visual language.

Examples:

- colors
- shadows
- radius
- spacing
- typography
- borders
- status colors

### Primitive Wrappers

Primitive wrappers are TinySheets versions of shadcn primitives.

Examples:

- `AppButton`
- `AppCard`
- `AppBadge`
- `AppInput`
- `AppSelect`
- `AppDialog`
- `AppTable`

These should wrap shadcn/ui components and enforce app-level defaults.

### Atoms

Atoms are small visual elements that do one thing.

Examples:

- `AppLogo`
- `IconBubble`
- `StatusDot`
- `MetricNumber`
- `GradeChip`
- `ModeChip`
- `DifficultyChip`
- `PdfFileIcon`
- `DownloadIconButton`
- `SearchInput`
- `RoleBadge`
- `PlanBadge`

### Molecules

Molecules combine atoms into small reusable UI patterns.

Examples:

- `SidebarNavItem`
- `TechStatusRow`
- `AuthStatusCard`
- `MetricCard`
- `WorksheetThumbnailCard`
- `PdfExportRow`
- `QuickActionRow`
- `UserMenuTrigger`
- `FeatureMiniCard`
- `GradeSelector`
- `ModeSelector`
- `DifficultySelector`

### Organisms

Organisms are larger UI sections.

Examples:

- `AppSidebar`
- `AppTopbar`
- `DashboardStatsGrid`
- `RecentWorksheetsPanel`
- `LatestPdfExportsPanel`
- `QuickGeneratePanel`
- `GeneratorFormPanel`
- `WorksheetPreviewPanel`
- `AdminMetricsGrid`
- `AdminUsersTable`
- `SystemHealthPanel`
- `LandingHero`
- `AuthProviderPanel`

### Templates

Templates define reusable page layouts.

Examples:

- `DashboardShell`
- `AdminShell`
- `MarketingShell`
- `AuthShell`
- `GeneratorShell`
- `WorksheetPreviewShell`

### Pages

Pages connect routing, data, auth, and real behavior.

Examples:

- `/`
- `/sign-in`
- `/sign-up`
- `/dashboard`
- `/dashboard/generate`
- `/dashboard/worksheets`
- `/dashboard/pdf-exports`
- `/admin`
- `/admin/users`
- `/admin/system-health`

---

## Recommended Component Structure

```txt
components/
  ui/
    shadcn-generated-components/

  primitives/
    app-button.tsx
    app-card.tsx
    app-badge.tsx
    app-input.tsx
    app-select.tsx
    app-table.tsx
    app-dialog.tsx

  atoms/
    app-logo.tsx
    icon-bubble.tsx
    status-dot.tsx
    metric-number.tsx
    grade-chip.tsx
    mode-chip.tsx
    difficulty-chip.tsx
    pdf-file-icon.tsx
    download-icon-button.tsx
    search-input.tsx
    role-badge.tsx
    plan-badge.tsx

  molecules/
    sidebar-nav-item.tsx
    tech-status-row.tsx
    auth-status-card.tsx
    metric-card.tsx
    worksheet-thumbnail-card.tsx
    pdf-export-row.tsx
    quick-action-row.tsx
    user-menu-trigger.tsx
    feature-mini-card.tsx
    grade-selector.tsx
    mode-selector.tsx
    difficulty-selector.tsx

  organisms/
    app-sidebar.tsx
    app-topbar.tsx
    dashboard-stats-grid.tsx
    recent-worksheets-panel.tsx
    latest-pdf-exports-panel.tsx
    quick-generate-panel.tsx
    generator-form-panel.tsx
    worksheet-preview-panel.tsx
    admin-metrics-grid.tsx
    admin-users-table.tsx
    system-health-panel.tsx
    landing-hero.tsx
    auth-provider-panel.tsx

  templates/
    dashboard-shell.tsx
    admin-shell.tsx
    marketing-shell.tsx
    auth-shell.tsx
    generator-shell.tsx
    worksheet-preview-shell.tsx
```

---

## Design Tokens

### Core Colors

Use semantic tokens instead of scattering raw Tailwind colors everywhere.

Recommended token meanings:

```txt
primary
primary-soft
success
success-soft
purple
purple-soft
warning
warning-soft
danger
danger-soft
surface-app
surface-card
surface-muted
border-soft
text-primary
text-secondary
text-muted
```

### Intended Color Usage

#### Primary Blue

Use for:

- main CTA buttons
- active navigation
- dashboard links
- download actions
- selected 1st Grade chip
- chart lines
- focused input states

#### Success Green

Use for:

- Supabase indicators
- Google connected states
- positive KPI changes
- Kindergarten chip
- system health
- completed statuses

#### Clerk Purple

Use for:

- Clerk authentication indicators
- 2nd Grade chip
- vocabulary mode accents
- tutor role badge
- secondary visual emphasis

#### PDF Red

Use for:

- PDF icons
- export file indicators
- PDF-specific labels

#### Warning Yellow

Use for:

- saved templates
- storage usage warnings
- soft alert states

---

## Surface System

Use a soft layered system:

```txt
app background: very light gray/white
sidebar background: white or near-white
card background: white
muted panels: very light blue/gray
borders: soft gray-blue
shadows: subtle and low-contrast
```

The app should not feel dark, heavy, or overly saturated.

---

## Radius System

Use generous rounded corners.

Recommended visual rhythm:

```txt
small controls: rounded-lg
buttons/chips: rounded-xl
cards: rounded-2xl
large dashboard panels: rounded-2xl or rounded-3xl
worksheet preview paper: rounded-xl
```

---

## Shadow System

Use soft card shadows.

Avoid harsh drop shadows.

Recommended pattern:

```txt
border + subtle shadow
```

Cards should feel elevated but not flashy.

---

## Typography

Use a clean sans-serif font.

Preferred feel:

- modern
- readable
- teacher-friendly
- not playful in the dashboard
- simple and legible in PDFs

Suggested text hierarchy:

```txt
page title: large, bold
section title: medium, semibold
card label: small, medium
metric number: large, bold
body text: regular
muted helper text: small, muted
```

Worksheet PDFs should prioritize readability over brand styling.

---

## Spacing Rules

Use consistent spacing.

Recommended spacing rhythm:

```txt
page padding: 24px to 32px
card padding: 20px to 24px
small control gap: 8px
form section gap: 20px
dashboard grid gap: 20px to 24px
sidebar item padding: 12px to 16px
```

Avoid cramped dashboards.

---

## shadcn/ui Usage Rules

Use shadcn/ui as the primitive foundation.

Do not directly scatter shadcn components throughout pages if the component has product-specific styling.

Bad pattern:

```tsx
<Button className="bg-blue-600 rounded-xl shadow-sm">
  Download PDF
</Button>
```

Preferred pattern:

```tsx
<AppButton variant="primary">
  Download PDF
</AppButton>
```

The `AppButton` wrapper should own the TinySheets button variants.

---

## Primitive Wrapper Requirements

### AppButton

Required variants:

```txt
primary
secondary
outline
ghost
success
danger
pdf
```

Required sizes:

```txt
sm
md
lg
icon
```

Use for:

- Generate PDF
- Download PDF
- Print
- Save Worksheet
- Regenerate
- Invite Teacher
- Get Started Free
- Login actions

### AppCard

Required variants:

```txt
default
soft
interactive
dashboard
worksheet
```

Use for:

- metric cards
- worksheet cards
- dashboard panels
- auth cards
- PDF export cards
- admin cards

### AppBadge

Required variants:

```txt
default
success
purple
warning
danger
teacher
tutor
admin
plan
pdf
```

Use for:

- roles
- plans
- PDF labels
- active statuses
- grade/mode tags

### AppInput

Use for:

- search fields
- email fields
- worksheet title fields
- future custom prompts

### AppSelect

Use for:

- grade
- mode
- skill
- difficulty
- dashboard filters

---

## Required Atoms

### AppLogo

Use the TinySheets mark and name.

Should support:

```txt
full
mark-only
compact
```

### IconBubble

Used in KPI cards and dashboard panels.

Supports colors:

```txt
blue
green
purple
red
yellow
gray
```

### StatusDot

Used for:

- infrastructure status
- user active state
- system health
- connected integrations

Supports:

```txt
success
warning
danger
neutral
```

### GradeChip

Supported values:

```txt
kindergarten
first-grade
second-grade
```

Visual behavior:

- selected state
- unselected state
- icon support
- accessible label

### ModeChip

Supported values:

```txt
math
vocabulary
```

Visual behavior:

- selected state
- unselected state
- icon support

### DifficultyChip

Supported values:

```txt
easy
medium
hard
```

For MVP, difficulty can exist visually even if generation logic starts simple.

### PdfFileIcon

Use for:

- PDF export rows
- download lists
- recent exports
- worksheet output metadata

### MetricNumber

Used inside dashboard KPI cards.

Should support:

- large number
- optional trend
- optional subtitle

---

## Required Molecules

### SidebarNavItem

Used in all app/admin sidebars.

Supports:

- icon
- label
- href
- active state
- collapsed state later

### TechStatusRow

Used for infrastructure cards.

Examples:

- Next.js
- Supabase
- Clerk
- Google Auth

### AuthStatusCard

Shows:

- signed in with Clerk
- connected with Google
- green connected indicator

### MetricCard

Used for:

- Total Worksheets
- PDF Downloads
- This Week
- Saved Templates
- Total Users
- Active Teachers/Tutors
- Storage Used

### WorksheetThumbnailCard

Shows:

- worksheet preview thumbnail
- title
- grade
- mode
- created date
- menu action

### PdfExportRow

Shows:

- PDF icon
- file name
- grade/mode
- date
- time
- file size
- download action

### QuickActionRow

Used in admin dashboard quick controls.

Examples:

- Add New User
- Manage Users
- Manage Worksheets
- View Subscriptions
- System Settings

---

## Dashboard UI Requirements

The teacher/tutor dashboard should include:

- sidebar navigation
- top search bar
- notification bell
- user profile menu
- KPI cards
- recent worksheets
- quick generate panel
- latest PDF exports
- plan/status panel
- Clerk/Google auth status
- infrastructure status

Dashboard navigation items:

```txt
Dashboard
Generate Worksheet
My Worksheets
PDF Exports
Students
Admin
Settings
```

---

## Generator UI Requirements

The generator screen should include:

- sidebar navigation
- top search bar
- generation form
- live worksheet preview
- PDF action toolbar
- one-page MVP notice

Generator form controls:

```txt
Grade Level:
- Kindergarten
- 1st Grade
- 2nd Grade

Mode:
- Math
- Vocabulary

Skill:
- depends on selected mode

Difficulty:
- Easy
- Medium
- Hard

Question Count:
- constrained by one-page layout
```

PDF actions:

```txt
Generate PDF
Download PDF
Print
Save Worksheet
Regenerate
```

The preview should visually match the final PDF as closely as possible.

---

## Admin Dashboard UI Requirements

The admin dashboard should include:

- admin sidebar
- top search bar
- admin profile menu
- platform KPI cards
- recent signups
- users overview table
- subscription plan summary
- authentication overview
- system health
- recent PDF exports
- storage usage trend
- quick controls

Admin navigation items:

```txt
Dashboard
Users
Worksheets
PDF Exports
Templates
Subscriptions
Analytics
System Health
Settings
Audit Logs
```

Admin dashboard metrics:

```txt
Total Users
Active Teachers/Tutors
Worksheets Generated
PDF Exports
Storage Used
```

---

## Landing Page UI Requirements

The landing page should communicate:

```txt
Generate K–2 Math & Vocabulary Worksheets as True PDFs
```

Required sections:

- hero section
- worksheet preview mockup
- latest PDF exports mockup
- feature cards
- technology trust row
- auth/sign-in preview
- teacher/tutor positioning

Hero benefits:

```txt
K–2 Math & Vocabulary
Standards Aligned
Instant PDF Downloads
True PDF Exports
Personal Dashboards
Admin Tools
```

---

## Auth UI Requirements

Authentication uses Clerk.

The UI should support:

- Google sign-in
- email sign-in
- sign-up
- sign-in
- secure authentication messaging

The auth UI should visually align with the rest of TinySheets.

The user must be authenticated before generating or saving worksheets.

---

## Worksheet PDF Visual Requirements

Worksheet PDFs should be:

- one page
- clean
- readable
- child-friendly
- printer-friendly
- not overloaded
- simple black text with limited color accents
- spacious enough for children to write answers

PDFs should include:

```txt
Name line
Date line
Worksheet title
Short instruction
Questions
Optional child-friendly illustration
Footer branding
```

Example footer:

```txt
Generated by TinySheets
```

Footer branding should be small and non-distracting.

---

## Child-Friendly Worksheet Style

Use:

- simple title
- readable spacing
- clear answer boxes/lines
- light illustrations
- minimal clutter
- enough whitespace

Avoid:

- tiny text
- dense layouts
- excessive decoration
- distracting backgrounds
- overly saturated colors
- multi-page output in MVP

---

## Responsive Requirements

Desktop is the first priority.

The app should still be responsive for tablets and smaller screens.

Priority:

```txt
1. Desktop dashboard
2. Tablet dashboard
3. Mobile-friendly basic navigation
```

For mobile:

- sidebar may collapse into a sheet/drawer
- dashboard cards should stack
- worksheet preview may scroll horizontally or scale down
- PDF generation should still work

---

## Accessibility Requirements

Use:

- semantic HTML
- accessible buttons
- visible focus states
- proper labels
- color contrast
- keyboard-friendly controls
- descriptive aria labels where needed

Do not rely on color alone to communicate state.

---

## Data Display Rules

Use mock data first for visual development.

Real data should be wired later.

Mock data belongs in:

```txt
lib/constants/
```

or:

```txt
lib/mock-data/
```

Do not hardcode repeated mock data directly inside page components.

---

## Design-System Preview Page

Create a temporary design-system route during development:

```txt
/design-system
```

It should preview:

- colors
- typography
- buttons
- badges
- cards
- icon bubbles
- status dots
- grade chips
- mode chips
- difficulty chips
- PDF icons
- metric cards
- export rows
- worksheet thumbnails

This route exists to master the visual system before assembling full pages.

It can be removed or protected before production.

### Current Implementation Status

SPEC-002 implemented the initial `/design-system` route with:

- TinySheets theme tokens in `app/globals.css`
- shadcn/ui base components in `components/ui/`
- primitive wrappers in `components/primitives/`
- first atoms in `components/atoms/`
- static examples sourced from `lib/constants/design-system.ts`

This route remains a development preview surface, not a production dashboard or marketing page.

---

## Anti-Drift Rules

Do not implement these during the initial UI foundation:

- real worksheet generation
- real PDF generation
- Supabase queries
- database schema
- payment logic
- subscriptions
- student management
- admin permissions
- AI generation
- standards alignment
- multi-page worksheets

These come later.

The initial UI foundation should focus on reusable visual elements only.

---

## Approved Build Sequence

```txt
1. Theme tokens
2. shadcn/ui setup
3. primitive wrappers
4. atoms
5. design-system preview page
6. molecules
7. organisms
8. templates
9. static dashboard pages
10. Clerk auth
11. Supabase data
12. worksheet generation
13. PDF generation
14. admin functionality
```

---

## Component Decision Rule

Every component must clearly fit one category:

```txt
primitive
atom
molecule
organism
template
page
```

If a component does too much, split it.

If a page contains too much UI code, extract components.

If a component mixes UI and data-fetching unnecessarily, separate it.

---

## Naming Conventions

Use clear, boring names.

Good examples:

```txt
AppSidebar
DashboardShell
MetricCard
WorksheetThumbnailCard
PdfExportRow
GeneratorFormPanel
WorksheetPreviewPanel
GradeChip
ModeChip
StatusDot
IconBubble
```

Avoid vague names:

```txt
CoolCard
MainThing
BoxOne
BigPanel
StuffWrapper
```

---

## Summary

TinySheets should be built as a professional, modular, atomic design system before building full dashboards.

The first UI objective is not to complete every card.

The first UI objective is to create the reusable visual language that makes every card easy to assemble later.
