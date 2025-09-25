import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, LifeBuoy } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
        <p className="text-muted-foreground">
          Get help with your account, app features, or any other questions.
        </p>
      </div>

      <Card className="max-w-lg">
        <CardHeader>
            <div className="flex items-center gap-2">
                <LifeBuoy className="h-6 w-6" />
                <CardTitle>Contact Us</CardTitle>
            </div>
          <CardDescription>
            Our support team is here to assist you.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 rounded-md border p-4">
            <Mail className="h-6 w-6 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Email Support</p>
              <a href="mailto:support@eduquest.com" className="font-semibold text-primary hover:underline">
                support@eduquest.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-md border p-4">
            <Phone className="h-6 w-6 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Phone Support</p>
              <a href="tel:+1234567890" className="font-semibold text-primary hover:underline">
                (123) 456-7890
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
