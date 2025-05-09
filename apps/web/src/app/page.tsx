import type React from "react";

import { CodeBlock } from "@/components/code-block";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-auto p-6 pt-16">
      <div className="-z-20 absolute inset-0">
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-white [background-size:16px_16px]" />
      </div>

      <div className="relative z-20 mx-auto mb-12 flex max-w-4xl flex-col items-center justify-center text-center">
        <h1 className="mb-4 font-extrabold text-4xl text-gray-900 md:text-5xl">
          Registry SDK
        </h1>
        <p className="mb-8 max-w-2xl text-gray-600 text-lg">
          insert some catchy reason why registries are sweet and that this sdk
          makes it so easy to use.
        </p>
      </div>

      <div className="relative z-20 mx-auto mb-24 w-full max-w-4xl space-y-12">
        <Step
          number={1}
          title="Installation"
          description="Install the Registry SDK package using your preferred package manager."
        >
          <CodeBlock title="terminal" code="npm i registry-sdk" />
        </Step>

        <Step
          number={2}
          title="Create a Registry Instance"
          description="Create a new instance of the Registry SDK with your configuration."
        >
          <CodeBlock
            title="@/lib/registry.tsx"
            code={`import { buildRegistry } from "registry-sdk"

export const registry = buildRegistry({
    baseURL: "http://localhost:3000",
    components: [
       {
          name: "footer",
          title: "Footer",
          description: "A footer containing base links and social media links.",
    
          demo: {
             default: <Footer/>
          },
    
          dependencies: ["button"],
          registryDependencies: ["button"],
    
          files: [
             {
                path: "src/components/footer.tsx",
                target: "@/components/footer.tsx",
             }
          ]
       },
    ],
});
`}
          />
        </Step>

        <Step
          number={3}
          title="Mount Route Handler"
          description="Set up your registry to expose endpoints for all registry-item.json files."
        >
          <CodeBlock
            title="/app/registry/r/[...name]/route.ts"
            code={`import { registry } from "@/lib/registry"; // your registry instance
import { toNextJsRouteHandler } from "registry-sdk/nextjs";

export const { GET, generateStaticParams } = toNextJsRouteHandler(registry);
`}
          />
        </Step>

        <Step
          number={4}
          title="Mount Page Handler"
          description="(Optional) Mount your page handler to expose a way to visualize all your registry component demos."
        >
          <CodeBlock
            title="/app/registry/[[...name]]/page.tsx"
            code={`import { registry } from "@/lib/registry"; // your registry instance
import { toNextJsPageHandler } from "registry-sdk/nextjs";

const { page, generateStaticParams } = toNextJsPageHandler(registry);
export { page as default, generateStaticParams };`}
          />
        </Step>
      </div>
    </main>
  );
}

function Step({
  number,
  title,
  description,
  children,
}: {
  number: number;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-6 md:flex-row">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 font-bold text-white text-xl">
        {number}
      </div>
      <div className="flex-1">
        <h2 className="mb-2 font-bold text-2xl text-gray-900">{title}</h2>
        <p className="mb-4 text-gray-600">{description}</p>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
}
