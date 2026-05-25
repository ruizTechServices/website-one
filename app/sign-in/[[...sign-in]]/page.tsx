import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

import { ClerkSetupNotice } from "@/components/molecules/clerk-setup-notice";
import { AuthShell } from "@/components/templates/auth-shell";
import { tinysheetsClerkAppearance } from "@/lib/auth/clerk-appearance";
import { isClerkConfigured } from "@/lib/auth/clerk-config";

export const metadata: Metadata = {
  title: "Sign in | TinySheets",
  description: "Sign in to the TinySheets worksheet dashboard.",
};

export default function SignInPage() {
  const clerkConfigured = isClerkConfigured();

  return (
    <AuthShell
      title="Sign in to TinySheets"
      description="Access the protected worksheet dashboard for one-page K-2 math and vocabulary PDF workflows."
    >
      {clerkConfigured ? (
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          fallbackRedirectUrl="/dashboard"
          appearance={tinysheetsClerkAppearance}
        />
      ) : (
        <ClerkSetupNotice action="sign in" />
      )}
    </AuthShell>
  );
}
