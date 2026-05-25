import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

import { ClerkSetupNotice } from "@/components/molecules/clerk-setup-notice";
import { AuthShell } from "@/components/templates/auth-shell";
import { tinysheetsClerkAppearance } from "@/lib/auth/clerk-appearance";
import { isClerkConfigured } from "@/lib/auth/clerk-config";

export const metadata: Metadata = {
  title: "Sign up | TinySheets",
  description: "Create a TinySheets account for the worksheet dashboard.",
};

export default function SignUpPage() {
  const clerkConfigured = isClerkConfigured();

  return (
    <AuthShell
      title="Create your TinySheets account"
      description="Use Clerk authentication to prepare a secure teacher or tutor workspace before worksheet generation is added."
    >
      {clerkConfigured ? (
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          fallbackRedirectUrl="/dashboard"
          appearance={tinysheetsClerkAppearance}
        />
      ) : (
        <ClerkSetupNotice action="sign up" />
      )}
    </AuthShell>
  );
}
