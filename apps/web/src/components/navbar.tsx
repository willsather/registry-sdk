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
            <Link href="/registry">
              <Button variant="outline">Example Registry</Button>
            </Link>

            <Link
              href="https://www.npmjs.com/package/registry-sdk"
              target="_blank"
            >
              <Button className="bg-[#bc3433] hover:bg-[#992222]">
                <svg
                  className="size-6 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  role="graphics-symbol"
                >
                  <path d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2Zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89Zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79Zm13.78 7.29H64v14.56h-6.89Zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79Z" />
                </svg>
              </Button>
            </Link>

            <Link
              href="https://github.com/willsather/registry-sdk"
              target="_blank"
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
