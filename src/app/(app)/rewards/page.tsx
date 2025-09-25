import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Gift } from "lucide-react";

export default function RewardsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Rewards</h1>
        <p className="text-muted-foreground">
          Claim rewards for your hard work and achievements.
        </p>
      </div>

       <Alert>
        <Gift className="h-4 w-4" />
        <AlertTitle>Feature Coming Soon!</AlertTitle>
        <AlertDescription>
          The rewards system is currently under development. Check back soon to claim your prizes!
        </AlertDescription>
      </Alert>
    </div>
  );
}
