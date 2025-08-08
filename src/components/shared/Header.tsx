
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

export function Header() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // A real app would use a proper auth state management (like Context or a library)
  // For this demo, we'll just check if the path is the dashboard
  useEffect(() => {
    setIsLoggedIn(pathname.startsWith('/dashboard'));
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="sr-only">LuneFemme</span>
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
        <div className="hidden items-center gap-2 md:flex">
           {isLoggedIn ? (
             <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard">
                <LayoutDashboard className="h-6 w-6" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </Button>
           ) : (
            <Button variant="ghost" size="icon" asChild>
                <Link href="/login">
                <User className="h-6 w-6" />
                <span className="sr-only">Login</span>
                </Link>
            </Button>
           )}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
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
              <div className="mt-4 flex flex-col gap-4">
                 {isLoggedIn ? (
                    <Button variant="outline" asChild>
                        <Link href="/dashboard">
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            Dashboard
                        </Link>
                    </Button>
                 ) : (
                    <Button variant="outline" asChild>
                        <Link href="/login">
                            <User className="mr-2 h-4 w-4" />
                            Login
                        </Link>
                    </Button>
                 )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
