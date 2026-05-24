---
spec: 007
title: "Admin Dashboard"
description: "Plan the admin dashboard shell and mock/admin data panels before real permissions."
---

# 007 - Admin Dashboard

## Objective

Create the TinySheets admin dashboard shell and initial mock/admin data panels before adding real permissions, destructive actions, billing controls, or advanced analytics.

## Scope

- Create the admin dashboard shell.
- Add admin sidebar navigation.
- Add platform KPI cards.
- Add recent signups panel.
- Add users overview table using mock/admin data.
- Add subscription plan summary using mock/admin data.
- Add authentication overview panel.
- Add system health panel.
- Add recent PDF exports panel.
- Add storage usage trend mock panel.
- Add quick controls as non-destructive UI.

## Out of scope

- Real admin permission enforcement unless already established by the auth shell.
- Destructive user management actions.
- Billing implementation.
- Real subscription provider integration.
- Real audit logs.
- Production analytics.
- Database migrations beyond what the data-layer spec has already established.

## Files likely affected

- `app/admin/page.tsx`
- `app/admin/users/*`
- `app/admin/system-health/*`
- `components/templates/admin-shell.tsx`
- `components/organisms/admin-metrics-grid.tsx`
- `components/organisms/admin-users-table.tsx`
- `components/organisms/system-health-panel.tsx`
- `components/molecules/quick-action-row.tsx`
- `components/molecules/metric-card.tsx`
- `lib/mock-data/admin.ts`
- `context/progress-tracker.md`
- `context/ui-context.md` only if a new admin UI pattern becomes canonical

## Implementation notes

- Follow the visual direction in the approved admin mockup image.
- Use existing TinySheets primitives, atoms, molecules, organisms, and templates.
- Keep mock data in `lib/mock-data/`.
- Quick controls should be clearly non-destructive until real admin workflows exist.
- Admin UI should remain professional and information-dense, not marketing-like.
- If real role checks are not ready, document the limitation clearly in the progress tracker.

## Verification steps

- Run `npm run lint`.
- Run `npm run build`.
- Start the local development server.
- Inspect the admin dashboard on desktop.
- Check basic responsiveness.
- Confirm mock data is not hardcoded repeatedly in page components.
- Confirm no destructive admin actions were added.

## Completion criteria

- [ ] Admin shell exists.
- [ ] Admin dashboard route exists.
- [ ] Required admin panels render with mock/admin data.
- [ ] Admin navigation is present.
- [ ] No destructive actions are implemented.
- [ ] Progress tracker records verification and remaining admin permission work.
