---
spec: 002
title: "Design System Foundation"
description: "Plan the initial TinySheets visual system, primitive wrappers, atoms, and design-system preview."
status: complete
completed: 2026-05-25
---

# 002 - Design System Foundation

## Objective

Implement the first UI foundation for TinySheets: theme tokens, shadcn/ui setup, primitive wrappers, atoms, and a temporary `/design-system` preview route.

## Scope

- Initialize the app scaffold if it does not exist yet.
- Add Tailwind CSS and shadcn/ui according to the chosen Next.js setup.
- Define app-level theme tokens for TinySheets.
- Create primitive wrappers such as `AppButton`, `AppCard`, `AppBadge`, `AppInput`, and `AppSelect`.
- Create first atoms such as `AppLogo`, `IconBubble`, `StatusDot`, `GradeChip`, `ModeChip`, `DifficultyChip`, `PdfFileIcon`, and `MetricNumber`.
- Create a temporary `/design-system` route to preview the visual language.
- Use mock/static examples only.

## Out of scope

- Real dashboard pages.
- Real worksheet generation.
- Real PDF generation.
- Clerk authentication.
- Supabase data access.
- Admin functionality.
- Payment or subscription work.
- Student management.

## Files likely affected

- `package.json`
- `next.config.*`
- `tailwind.config.*`
- `app/globals.css`
- `app/design-system/page.tsx`
- `components/ui/*`
- `components/primitives/*`
- `components/atoms/*`
- `lib/constants/*`
- `context/progress-tracker.md`

## Implementation notes

- Follow `context/ui-context.md` as the canonical visual source.
- Follow the approved build sequence: tokens, shadcn setup, primitive wrappers, atoms, preview page.
- Use the images in `/images` as reference for tone, spacing, and product direction.
- Keep components small and clearly categorized.
- Use semantic variants instead of repeated raw Tailwind colors.
- Use mock data from `lib/constants/` or `lib/mock-data/` when needed.

## Verification steps

- Run `npm run lint`.
- Run `npm run build`.
- Start the local development server.
- Visually inspect `/design-system`.
- Verify desktop and basic mobile responsiveness.
- Confirm no auth, Supabase, worksheet, or PDF behavior was added.

## Completion criteria

- [x] App scaffold exists if this is the first implementation spec.
- [x] TinySheets theme tokens exist.
- [x] Required primitive wrappers exist.
- [x] Required atoms exist.
- [x] `/design-system` previews the initial visual system.
- [x] Checks are recorded in `context/progress-tracker.md`.
