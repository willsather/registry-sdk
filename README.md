# Registry SDK

The goal is to create an SDK that helps automate creating a component registry within a Next.js application.

## Getting Started

1. Install
   ```shell 
    npm i registry-sdk
   ```

2. Create `@/lib/registry.tsx` configuration file

   ```tsx
   import { buildRegistry } from "registry-sdk"
   
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
   ```

3. Mount Route Handler at `/app/api/registry/r/[...name]/route.ts`

   ```ts
   import { registry } from "@/lib/registry"; // path to your registry config file
   import { toNextJsRouteHandler } from "registry-sdk/nextjs";
   
   export const { GET, generateStaticParams } = toNextJsRouteHandler(registry);
   ```

4. (Optional) Mount Page Handler at `/app/api/registry/[[...name]]/page.tsx`

   ```tsx
   import { registry } from "@/lib/registry"; // path to your registry config file
   import { toNextJsPageHandler } from "registry-sdk/nextjs";
   
   const { page, generateStaticParams } = toNextJsPageHandler(registry);
   
   export default page;
   export { generateStaticParams };
   ```

5. Navigate to `/registry` to view your component registry with individual component previews each with `Open in v0`
   buttons.

> [!NOTE]  
> The `registry-sdk` exposes routes and pages under `/registry/*`, with the [`registry-item.json`](https://ui.shadcn.com/docs/registry/registry-item-json) files located at `/registry/r/${name}.json`.

## Local Development

To start using, you can use the following commands:

```zsh
pnpm install
pnpm dev
pnpm build
```

This project also has some configured some tools like:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Vitest](https://vitest.dev/) for unit testing
- [Biome](https://biomejs.dev/) for code linting & formatting

### Applications

Located under `/apps`, you will find an application.

- `web`: a simple [Next.js](https://nextjs.org/) app to host main site and use as a demo

### Packages

In this example, there is a shared package called `registry-sdk` which contains the primary SDK.

### Shared Configuration

Located under `/packages/config` is all the shared configuration which the Turborepo uses. This is a great space to put
handy developer tools and code cleanliness configuration.

- `@registry-sdk/vitest-config`: `vitest` configurations for `base` and `ui` configurations
- `@registry-sdk/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Useful Turborepo Links

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
