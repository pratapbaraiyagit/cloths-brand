import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <Link href="/" className="font-headline text-2xl font-bold text-foreground">
              LuneFemme
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Experience elegance, redefined.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LuneFemme. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
