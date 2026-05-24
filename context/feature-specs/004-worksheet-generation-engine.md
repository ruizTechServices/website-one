---
spec: 004
title: "Worksheet Generation Engine"
description: "Plan structured K-2 math and vocabulary worksheet generation."
---

# 004 - Worksheet Generation Engine

## Objective

Implement structured worksheet generation for K-2 math and vocabulary worksheets using typed domain logic and MVP one-page constraints.

## Scope

- Define worksheet domain types.
- Define supported grades, modes, skills, difficulty values, and question-count limits.
- Implement math worksheet generation for the initial supported skills.
- Implement vocabulary worksheet generation for the initial supported skills.
- Validate generation settings before worksheet creation.
- Validate structured worksheet output before preview, saving, or PDF generation.
- Return structured worksheet JSON rather than JSX or arbitrary HTML.

## Out of scope

- PDF rendering.
- Supabase persistence.
- AI-generated content.
- Multi-page worksheets.
- Answer keys unless explicitly approved for MVP.
- Standards alignment metadata unless explicitly scoped.
- Full generator UI polish beyond the integration surface required for testing.

## Files likely affected

- `lib/worksheets/worksheet-types.ts`
- `lib/worksheets/worksheet-limits.ts`
- `lib/worksheets/generate-math-worksheet.ts`
- `lib/worksheets/generate-vocabulary-worksheet.ts`
- `lib/worksheets/validate-worksheet.ts`
- `lib/constants/*`
- `lib/mock-data/*`
- `app/dashboard/generate/*`
- `components/organisms/generator-form-panel.tsx`
- `components/organisms/worksheet-preview-panel.tsx`
- `context/progress-tracker.md`
- `context/architecture-context.md` if domain boundaries are refined

## Implementation notes

- Keep generation deterministic enough for testing where practical.
- Do not mix domain generation logic into UI components.
- Enforce Kindergarten, 1st Grade, and 2nd Grade only.
- Enforce Math and Vocabulary only.
- Enforce one-page limits through question-count and layout constraints.
- Design the data shape so the PDF layer can consume the same validated worksheet JSON.

## Verification steps

- Run `npm run lint`.
- Run `npm run build`.
- Add focused tests if a test framework exists.
- Manually verify generation settings reject unsupported grades, modes, skills, and counts.
- Manually verify sample math and vocabulary worksheets produce valid structured data.
- Confirm no PDF, Supabase, or auth expansion beyond necessary integration points.

## Completion criteria

- [ ] Worksheet types exist.
- [ ] Worksheet limit rules exist.
- [ ] Math generator exists.
- [ ] Vocabulary generator exists.
- [ ] Validation exists for inputs and generated output.
- [ ] Generator returns structured worksheet data.
- [ ] Progress tracker records verification and any remaining generation gaps.
