
"use client";

import Link from "next/link";
import { Menu, User, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// This component handles the logic for showing Login vs Dashboard
function AuthNav() {
  const pathname = usePathname();
  const isLoggedIn = pathname.startsWith('/dashboard');

  if (isLoggedIn) {
    return (
      <Button asChild>
        <Link href="/dashboard">
          <LayoutDashboard />
          <span className="md:inline">Dashboard</span>
        </Link>
      </Button>
    );
  }

  return (
    <Button asChild>
      <Link href="/login">
        <User />
        <span className="md:inline">Login</span>
      </Link>
    </Button>
  );
}


export function Header() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg font-medium text-muted-foreground transition-colors hover:text-foreground",
                pathname === link.href && "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
           {isClient ? (
                <>
                    <div className="hidden md:block">
                        <AuthNav />
                    </div>
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                                <div className="flex flex-col gap-6 p-6">
                                    <Link href="/" className="flex items-center gap-2">
                                        <Logo />
                                        <span className="font-headline text-2xl font-bold text-foreground">
                                            LuneFemme
                                        </span>
                                    </Link>
                                    <nav className="flex flex-col gap-4">
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={cn(
                                                    "text-lg font-medium text-muted-foreground transition-colors hover:text-foreground",
                                                    pathname === link.href && "text-foreground"
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </nav>
                                    <div className="mt-4">
                                        <AuthNav />
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </>
            ) : (
                 <>
                    <div className="hidden md:block">
                        <div className="h-10 w-24 rounded-md bg-muted animate-pulse" />
                    </div>
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon" disabled>
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </>
            )}
        </div>
      </div>
    </header>
  );
}
