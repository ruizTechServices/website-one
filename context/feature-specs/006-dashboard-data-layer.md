---
spec: 006
title: "Dashboard Data Layer"
description: "Plan Supabase schema and data access for saved worksheets and PDF export metadata."
---

# 006 - Dashboard Data Layer

## Objective

Add the Supabase-backed data layer for saved worksheets and PDF export metadata while keeping Clerk as the authentication source of truth.

## Scope

- Define the initial Supabase schema for worksheet records.
- Define the initial Supabase schema for PDF export metadata.
- Store structured worksheet JSON.
- Link records to Clerk user IDs.
- Add data access modules in `lib/supabase/`.
- Add owner-scoped reads for dashboard data.
- Add create/update behavior needed for saving worksheets and recording PDF exports.
- Document or implement RLS-compatible access assumptions.

## Out of scope

- Supabase Auth.
- Student accounts.
- Classroom management.
- Billing data.
- Advanced analytics.
- Admin destructive actions.
- Full storage upload flow unless explicitly added.
- Multi-page worksheet schema beyond future-compatible fields.

## Files likely affected

- `lib/supabase/client.ts`
- `lib/supabase/server.ts`
- `lib/supabase/worksheets.ts`
- `lib/supabase/pdf-exports.ts`
- `lib/auth/*`
- `lib/worksheets/*`
- `app/dashboard/*`
- `app/dashboard/worksheets/*`
- `app/dashboard/pdf-exports/*`
- `context/progress-tracker.md`
- `context/architecture-context.md`
- `context/code-standards.md` if a new data access convention is established

## Implementation notes

- Clerk user ID should be the owner reference in Supabase records.
- Keep Supabase queries out of UI components.
- Use server-side data access where possible.
- Validate ownership before reads, writes, updates, and exports.
- Decide whether generated PDFs are stored immediately or regenerated from saved JSON before implementing storage behavior.
- Keep schema future-compatible with page count, export metadata, and possible storage paths.

## Verification steps

- Run `npm run lint`.
- Run `npm run build`.
- Verify authenticated users can save worksheet records.
- Verify dashboard reads only the current user's records.
- Verify PDF export metadata can be recorded.
- Verify no Supabase Auth flow was added.
- Verify secrets are not exposed client-side.

## Completion criteria

- [ ] Supabase access modules exist.
- [ ] Saved worksheet data can be persisted.
- [ ] PDF export metadata can be persisted.
- [ ] Records are linked to Clerk user IDs.
- [ ] Dashboard data can be loaded through scoped data access functions.
- [ ] Progress tracker records verification and any open RLS/storage decisions.
