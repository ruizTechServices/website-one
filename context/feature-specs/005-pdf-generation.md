---
spec: 005
title: "PDF Generation"
description: "Plan true one-page PDF generation from validated worksheet JSON."
---

# 005 - PDF Generation

## Objective

Generate true one-page printable PDFs from validated worksheet JSON for the supported TinySheets math and vocabulary worksheet modes.

## Scope

- Select and install the PDF renderer package.
- Define PDF rendering types and layout contracts.
- Render math worksheets from structured worksheet JSON.
- Render vocabulary worksheets from structured worksheet JSON.
- Enforce one-page output for MVP.
- Add PDF download behavior.
- Add print-compatible output behavior.
- Preserve spacing, readability, name/date lines, title, instructions, questions, optional light illustration area, and footer branding.

## Out of scope

- Supabase Storage upload unless explicitly included in this spec at implementation time.
- Long-term PDF archival strategy.
- Multi-page PDFs.
- Answer keys unless separately approved.
- AI content generation.
- Billing or usage limits.

## Files likely affected

- `lib/pdf/pdf-types.ts`
- `lib/pdf/render-worksheet-pdf.tsx`
- `lib/pdf/math-worksheet-pdf.tsx`
- `lib/pdf/vocabulary-worksheet-pdf.tsx`
- `lib/worksheets/*`
- `app/dashboard/generate/*`
- `components/organisms/worksheet-preview-panel.tsx`
- `components/molecules/pdf-export-row.tsx`
- `context/progress-tracker.md`
- `context/architecture-context.md` if the selected PDF package changes technical guidance

## Implementation notes

- PDFs should render from validated worksheet JSON.
- Do not make random HTML blobs the primary PDF architecture.
- Keep PDF rendering separate from live preview components unless a shared layout abstraction is deliberately created.
- Preserve true PDF output as a core product requirement.
- Document the selected PDF renderer and why it was chosen.
- Keep future support for answer keys and multi-page PDFs possible without implementing them now.

## Verification steps

- Run `npm run lint`.
- Run `npm run build`.
- Generate at least one math PDF.
- Generate at least one vocabulary PDF.
- Open the generated PDFs and confirm they are one page.
- Confirm download works.
- Confirm print behavior is usable.
- Confirm generated PDFs remain readable and child-friendly.

## Completion criteria

- [ ] PDF renderer is selected and documented.
- [ ] Math worksheet PDF output works.
- [ ] Vocabulary worksheet PDF output works.
- [ ] Output is a true one-page PDF.
- [ ] Download behavior works.
- [ ] Progress tracker records verification, selected package, and open storage decisions.
