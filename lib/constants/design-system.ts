import {
  BookOpenText,
  FileText,
  Gauge,
  Medal,
  NotebookPen,
  Shapes,
  Sigma,
  Smile,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";

export const colorTokens = [
  {
    name: "Primary Blue",
    className: "bg-primary",
    usage: "Main actions, active navigation, download controls",
  },
  {
    name: "Success Green",
    className: "bg-success",
    usage: "Connected states, Kindergarten, positive metrics",
  },
  {
    name: "Clerk Purple",
    className: "bg-purple",
    usage: "Auth accents, 2nd Grade, vocabulary emphasis",
  },
  {
    name: "PDF Red",
    className: "bg-danger",
    usage: "PDF labels, export rows, destructive states",
  },
  {
    name: "Template Yellow",
    className: "bg-warning",
    usage: "Saved templates, warnings, soft alerts",
  },
  {
    name: "App Surface",
    className: "bg-surface-muted",
    usage: "Muted panels and dashboard backgrounds",
  },
] as const;

export const appButtonExamples = [
  { label: "Generate PDF", variant: "primary" },
  { label: "Download PDF", variant: "pdf" },
  { label: "Save Worksheet", variant: "secondary" },
  { label: "Connected", variant: "success" },
  { label: "Regenerate", variant: "outline" },
  { label: "Delete", variant: "danger" },
] as const;

export const appBadgeExamples = [
  { label: "Teacher", variant: "teacher" },
  { label: "Tutor", variant: "tutor" },
  { label: "Admin", variant: "admin" },
  { label: "PDF", variant: "pdf" },
  { label: "Active", variant: "success" },
  { label: "Saved", variant: "warning" },
] as const;

export const gradeOptions = [
  {
    value: "kindergarten",
    label: "Kindergarten",
    icon: Smile,
  },
  {
    value: "first-grade",
    label: "1st Grade",
    icon: Star,
  },
  {
    value: "second-grade",
    label: "2nd Grade",
    icon: BookOpenText,
  },
] as const;

export const modeOptions = [
  {
    value: "math",
    label: "Math",
    icon: Sigma,
  },
  {
    value: "vocabulary",
    label: "Vocabulary",
    icon: BookOpenText,
  },
] as const;

export const difficultyOptions = [
  {
    value: "easy",
    label: "Easy",
    icon: Smile,
  },
  {
    value: "medium",
    label: "Medium",
    icon: Gauge,
  },
  {
    value: "hard",
    label: "Hard",
    icon: Trophy,
  },
] as const;

export const selectOptions = [
  { value: "addition-within-10", label: "Addition within 10" },
  { value: "subtraction-within-10", label: "Subtraction within 10" },
  { value: "sight-word-match", label: "Sight Word Match" },
] as const;

export const metricExamples = [
  {
    label: "Total Worksheets",
    value: "128",
    subtitle: "Generated worksheets",
    trend: "+18%",
    icon: FileText,
    color: "blue",
  },
  {
    label: "PDF Downloads",
    value: "342",
    subtitle: "Downloaded exports",
    trend: "+24%",
    icon: NotebookPen,
    color: "green",
  },
  {
    label: "This Week",
    value: "26",
    subtitle: "New worksheets",
    trend: "+12%",
    icon: Sparkles,
    color: "purple",
  },
  {
    label: "Saved Templates",
    value: "15",
    subtitle: "Custom templates",
    trend: "+8%",
    icon: Medal,
    color: "yellow",
  },
] as const;

export const worksheetPreviewItems = [
  "2 + 3 =",
  "4 + 1 =",
  "5 + 2 =",
  "3 + 4 =",
  "1 + 6 =",
  "2 + 6 =",
] as const;

export const iconBubbleExamples = [
  { label: "Blue", color: "blue", icon: FileText },
  { label: "Green", color: "green", icon: Smile },
  { label: "Purple", color: "purple", icon: BookOpenText },
  { label: "Red", color: "red", icon: FileText },
  { label: "Yellow", color: "yellow", icon: Star },
  { label: "Gray", color: "gray", icon: Shapes },
] as const;
