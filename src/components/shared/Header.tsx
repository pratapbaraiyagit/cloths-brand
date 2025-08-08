"use client";

import Link from "next/link";
import { Menu, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

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
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/login">
              <User className="h-6 w-6" />
              <span className="sr-only">Login</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-6 w-6" />
            <span className="sr-only">Shopping Bag</span>
          </Button>
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
                 <Button variant="outline" asChild>
                    <Link href="/login">
                        <User className="mr-2 h-4 w-4" />
                        Login
                    </Link>
                 </Button>
                 <Button>
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    My Bag
                 </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
