
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VectorBlobs } from "@/components/shared/VectorBlobs";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset request for:", email);
    // In a real app, you'd call an API to send a reset link
    toast({
        title: "Check your email",
        description: `If an account exists for ${email}, a password reset link has been sent.`,
    });
    setIsSubmitted(true);
  };

  return (
    <div className="relative flex min-h-[calc(100vh-160px)] items-center justify-center p-4">
      <VectorBlobs />
      <Card className="w-full max-w-md z-10 shadow-xl bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl">Forgot Password</CardTitle>
          <CardDescription>
            {isSubmitted 
              ? "A password reset link has been sent to your email."
              : "Enter your email to receive a password reset link."
            }
          </CardDescription>
        </CardHeader>
        {isSubmitted ? (
            <CardContent className="text-center">
                 <Alert variant="default" className="border-green-500 bg-green-50 text-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <AlertTitle className="text-green-700">Request Sent</AlertTitle>
                    <AlertDescription>
                        Please check your inbox (and spam folder) for the reset link.
                    </AlertDescription>
                </Alert>
                <Link href="/login" passHref>
                    <Button variant="link" className="mt-4">
                      Back to Login
                    </Button>
                </Link>
            </CardContent>
        ) : (
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                        id="email" 
                        type="email" 
                        placeholder="m@example.com" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Button type="submit" className="w-full text-lg">Send Reset Link</Button>
                    <Link href="/login" passHref>
                      <Button variant="link">Back to Login</Button>
                    </Link>
                </CardFooter>
            </form>
        )}
      </Card>
    </div>
  );
}
