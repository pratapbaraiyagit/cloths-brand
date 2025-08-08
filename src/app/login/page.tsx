import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VectorBlobs } from "@/components/shared/VectorBlobs";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-160px)] items-center justify-center p-4">
      <VectorBlobs />
      <Card className="w-full max-w-md z-10 shadow-xl bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl">Welcome Back</CardTitle>
          <CardDescription>Log in to access your account and dashboard.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full text-lg">Log In</Button>
           <p className="text-sm text-center text-muted-foreground">
              Don't have an account?{" "}
              <Link href="#" className="font-semibold text-primary-foreground hover:underline">
                Register here
              </Link>
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}
