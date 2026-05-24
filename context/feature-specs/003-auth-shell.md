---
spec: 003
title: "Auth Shell"
description: "Plan Clerk authentication shell, sign-in/sign-up routes, and protected dashboard routing."
---

# 003 - Auth Shell

## Objective

Add Clerk authentication structure for TinySheets, including sign-in, sign-up, Google auth UI, protected dashboard routing, and user identity boundaries.

## Scope

- Add Clerk dependencies and configuration.
- Add Clerk provider at the appropriate app boundary.
- Create `/sign-in` and `/sign-up` experiences.
- Protect dashboard routes for authenticated users.
- Add authenticated user shell behavior for dashboard pages.
- Prepare role metadata conventions for future teacher/tutor/admin distinctions.
- Ensure Supabase remains the data system and Clerk remains the auth system.

## Out of scope

- Supabase schema implementation.
- Real worksheet saving.
- Real PDF export history.
- Billing or subscription integration.
- Full admin permissions.
- Student accounts.
- Custom user management UI beyond the auth shell.

## Files likely affected

- `app/layout.tsx`
- `app/sign-in/*`
- `app/sign-up/*`
- `app/dashboard/*`
- `middleware.ts`
- `lib/auth/*`
- `components/organisms/*`
- `components/templates/*`
- `.env.example`
- `context/progress-tracker.md`
- `context/architecture-context.md` if implementation establishes a new auth boundary detail

## Implementation notes

- Clerk handles authentication, sessions, Google auth, user identity, and future role metadata.
- Do not introduce Supabase Auth as a primary auth system.
- Keep Clerk-specific logic out of pure UI components.
- Use existing TinySheets primitives and atoms from the design-system foundation.
- Auth pages should visually align with TinySheets but should not become a separate design system.

## Verification steps

- Run `npm run lint`.
- Run `npm run build`.
- Verify unauthenticated users are redirected away from protected dashboard routes.
- Verify sign-in and sign-up pages render.
- Verify environment variable requirements are documented without exposing secrets.
- Verify no Supabase Auth dependency or competing auth flow was added.

## Completion criteria

- [ ] Clerk provider and route protection are in place.
- [ ] Sign-in and sign-up routes exist.
- [ ] Dashboard routing requires authentication.
- [ ] Auth architecture remains Clerk-first.
- [ ] Progress tracker records changed files, verification, and any open auth decisions.
