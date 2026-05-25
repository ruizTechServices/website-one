import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { isClerkConfigured } from "@/lib/auth/clerk-config";

export type AuthenticatedTinySheetsUser = {
  userId: string;
  user: Awaited<ReturnType<typeof currentUser>>;
};

export async function requireAuthenticatedUser(): Promise<AuthenticatedTinySheetsUser> {
  if (!isClerkConfigured()) {
    redirect("/sign-in");
  }

  const { isAuthenticated, redirectToSignIn, userId } = await auth();

  if (!isAuthenticated || !userId) {
    return redirectToSignIn();
  }

  return {
    userId,
    user: await currentUser(),
  };
}
