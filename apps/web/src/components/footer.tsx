import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-muted-foreground text-sm leading-loose md:text-left">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 md:gap-6">
          <Link
            href="#"
            className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#"
            className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
          >
            Privacy
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
