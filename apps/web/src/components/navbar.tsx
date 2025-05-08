import { Palette } from "lucide-react";
import Link from "next/link";

import { GithubIcon } from "@/components/github";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="rounded bg-foreground p-2">
              <Palette className="size-4 text-white" />
            </div>
            <span className="font-medium text-lg">Registry SDK</span>
          </Link>

          <nav className="flex items-center space-x-4">
            <Link href="/registry" className="flex items-center">
              <Button variant="outline">Example Registry</Button>
            </Link>

            <Link
              href="https://github.com/willsather/registry-sdk"
              target="_blank"
              className="flex items-center"
            >
              <Button>
                <GithubIcon className="size-4 fill-white" />
                GitHub
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
