import { KeyRound } from "lucide-react";

import { IconBubble } from "@/components/atoms/icon-bubble";
import { AppBadge } from "@/components/primitives/app-badge";
import { AppCard } from "@/components/primitives/app-card";

type ClerkSetupNoticeProps = {
  action: "sign in" | "sign up";
};

function ClerkSetupNotice({ action }: ClerkSetupNoticeProps) {
  return (
    <AppCard variant="default" className="w-full max-w-md gap-5">
      <div className="flex items-start gap-3">
        <IconBubble icon={KeyRound} color="purple" />
        <div>
          <AppBadge variant="purple">Environment required</AppBadge>
          <h2 className="mt-3 text-xl font-bold tracking-normal">
            Clerk keys are not configured
          </h2>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            Add the Clerk environment variables below to render the live {action}
            form and enable real session protection.
          </p>
        </div>
      </div>
      <div className="rounded-xl border border-border-soft bg-surface-muted p-4 font-mono text-xs leading-6 text-text-secondary">
        <div>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</div>
        <div>CLERK_SECRET_KEY</div>
      </div>
    </AppCard>
  );
}

export { ClerkSetupNotice };
