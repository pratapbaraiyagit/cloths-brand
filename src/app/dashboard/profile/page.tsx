
import { ProfileForm } from "@/components/dashboard/ProfileForm";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { KeyRound } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="bg-background min-h-[calc(100vh-160px)] py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <Card className="w-full max-w-2xl shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                    <KeyRound className="h-8 w-8 text-primary" />
                </div>
                <div>
                    <CardTitle className="font-headline text-3xl">Profile Settings</CardTitle>
                    <CardDescription>Update your account information and password.</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <ProfileForm />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
