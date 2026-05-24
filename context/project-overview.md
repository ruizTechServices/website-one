---
title: "Project Overview - School Worksheet Generator"
description: "Product overview for the TinySheets Worksheet Generator"
path: "C:/Users/giost/CascadeProjects/websites/schoolWorksheetGenerator/website-one/context/project-overview.md"
---

# Project Overview - School Worksheet Generator

## Project Identity

TinySheets is a PDF-first K-2 worksheet generator for teachers and tutors.

The product helps educators quickly create clean, printable, one-page math and vocabulary worksheets for young learners.

## Product Promise

Generate clean, one-page, child-friendly math and vocabulary worksheets as true PDFs.

TinySheets should save teachers and tutors time while producing worksheet materials that feel classroom-ready instead of manually assembled.

## Target Users

- Teachers
- Tutors
- First internal users: the founder's brother and sister-in-law

The first users need a practical tool for generating lesson and practice materials, not a broad education platform.

## Problem

Teachers and tutors often need quick printable practice materials but lose time formatting worksheets manually, checking whether content fits on one page, and organizing generated materials for later reuse.

TinySheets should reduce that work by turning simple worksheet settings into printable one-page PDFs.

## MVP Scope

### Included

- Authenticated users only
- Kindergarten, 1st Grade, and 2nd Grade
- Math worksheets
- Vocabulary worksheets
- One-page worksheet output only
- True PDF generation
- PDF download
- Print support
- Save worksheet to the user's dashboard
- Personal teacher/tutor dashboard
- PDF export history
- Admin dashboard shell
- Mock data during early UI foundation work

### Excluded From MVP

- Payments
- Subscriptions
- Student accounts
- Classroom management
- LMS integrations
- Multi-page worksheets
- AI-generated lesson plans
- Handwriting mode
- Science worksheets
- Social studies worksheets
- Reading comprehension packets
- Spelling tests
- Coloring pages
- Grading
- Heavy analytics for teachers
- Template marketplace

## First Supported Grades

- Kindergarten
- 1st Grade
- 2nd Grade

Higher grades are outside the MVP.

## First Supported Worksheet Modes

- Math
- Vocabulary

Other modes should be treated as future roadmap items.

## Core Product Workflow

1. User signs in.
2. User opens the dashboard.
3. User selects Generate Worksheet.
4. User chooses grade, mode, skill, difficulty, and question count.
5. System validates the settings against MVP limits.
6. System generates structured worksheet data.
7. System renders a worksheet preview.
8. System generates a true PDF.
9. User downloads, prints, and saves the worksheet.
10. User can find the saved worksheet and export metadata later in the dashboard.

## Product Rules

- Login is required before generating or saving worksheets.
- Worksheets are exactly one page for the MVP.
- Math and vocabulary are the only first modes.
- PDF output is core to the product, not an optional export.
- The app UI should feel professional, calm, and trustworthy for educators.
- Worksheet output should feel child-friendly, spacious, and printable.
- The MVP should not add higher grades or extra worksheet categories.

## Authentication Requirement

Users must authenticate before generating, saving, or viewing worksheet history.

Clerk is the intended authentication system. Google sign-in is part of the intended auth experience.

## Dashboard Requirement

Teachers and tutors need a personal dashboard that supports:

- Recent worksheets
- Latest PDF exports
- Quick generation entry points
- Plan or status panel
- Auth status display
- Infrastructure/status indicators during early product development

The dashboard should support real data later, but early UI work may use mock data.

## Admin Requirement

The product needs an admin area for the platform owner and future operators.

The admin MVP starts as a dashboard shell with mock/admin data panels. Real permissions, destructive actions, billing controls, and advanced analytics should come later through explicit specs.

## Core Product Promise

A teacher or tutor should be able to log in, configure a simple K-2 math or vocabulary worksheet, preview it, generate a true one-page PDF, download or print it, save it, and retrieve it later.

## Success Criteria

The MVP is successful when:

- A user can sign in.
- A user can generate a K-2 math or vocabulary worksheet.
- The generated worksheet fits on exactly one page.
- The worksheet can be previewed before export.
- The worksheet can be downloaded as a true PDF.
- The worksheet can be printed.
- The worksheet can be saved to the user's dashboard.
- The user can view previous worksheets and PDF exports.
- The admin dashboard shell gives the owner a clear overview of platform activity.

## Future Roadmap

- Answer keys
- Multi-page worksheets
- AI-assisted content generation
- Student groups
- Classroom folders
- Saved templates
- Subscriptions
- Usage analytics
- Template marketplace
- Broader worksheet categories
- More grade levels
- Standards alignment metadata
- Bulk export and batch generation

## Current Priority

The current priority is documentation alignment.

Before implementation begins, the project needs a clear documentation foundation for product scope, architecture, code standards, UI direction, workflow rules, progress tracking, and the feature-spec roadmap.
