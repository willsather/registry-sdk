import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden p-6">
      <div className="absolute inset-0">
        <div className="-z-10 absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-white [background-size:16px_16px]" />
      </div>

      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
        <div className="mb-10 flex items-center justify-center gap-6">
          <Image
            src="/nextjs.svg"
            alt="Next.js Logo"
            width={100}
            height={100}
          />
        </div>

        <h1 className="mb-4 font-extrabold text-gray-900">
          Next.js with Registry SDK Example
        </h1>

        <Link href="/registry" className="flex items-center">
          <div className="mt-4 rounded-lg border-2 border-gray-200 bg-gray-200/20 p-4 px-8 font-mono hover:bg-gray-200/50">
            Go to the Registry
          </div>
        </Link>
      </div>
    </main>
  );
}
