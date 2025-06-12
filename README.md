# Registry SDK

The goal is to create an SDK that helps automate creating a `shadcn/ui` [Registry](https://ui.shadcn.com/docs/registry).

## Vision

* simplify and automate the creation of `registry.json`
* expose standardized user interface with AI native features (open in v0, mcp, etc)

## Getting Started

1. Install
   ```shell 
    pnpm i registry-sdk
   ```

2. Create `.registry/config.ts` configuration file

   ```ts
   import type { RegistryConfig } from "registry-sdk";

   const config: RegistryConfig = {
   components: ["src/registry/**/*.r.@(js|jsx|ts|tsx)"],
   };
   
   export default config;
   ```

3. Create registry demos in `@/registry/*.r.ts`:

   ```ts
   import type { RegistryComponent, RegistryDemo } from "registry-sdk";
   
   import { Footer } from "@/components/footer";
   
   export const component = {
    title: "Footer",
    description: "A footer containing base links and social media links.",
    component: Footer,
   } satisfies RegistryComponent<typeof Footer>;
   
   export default component;
   type Demo = RegistryDemo<typeof component>;
   
   export const Default: Demo = {
    props: {},
   };
   ```
   
4. Run `pnpm registry-sdk dev` to start the Registry UI and expose the [
   `registry-item.json`](https://ui.shadcn.com/docs/registry/registry-item-json) files.

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
