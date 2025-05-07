# Registry SDK

The goal is to create an SDK that helps automate creating a component registry within a Next.js application.

## Vision

1. Install
   ```shell 
    pn i registry-sdk
   ```

2. Create `@/lib/registry.tsx` configuration file

   ```tsx
   import { registry } from "registry-sdk"
   
   export const registry = registry({
      baseURL: string,
      components: [
         {
            name: "footer",
            description: "A footer containing base links and social media links.",
            demo: {
               default: <Footer/>
            },
            registryDependencies: ["button"],
            files: [
               {
                  path: "@/components/footer.tsx",
                  target: "@/components/footer.tsx",
               }
            ]
         },
      ],
   
   });
   ```

3. Mount Handler at `/app/api/registry/[...all]/route.ts`

   ```ts
   import { registry } from "@/lib/registry"; // path to your registry config file
   import { toNextJsHandler } from "registry-sdk/next-js";
   
   export const { POST, GET } = toNextJsHandler(registry);
   ```

4. API Endpoints / Pages exposed automatically

   * `GET /registry` => home page
   * `GET /registry/component/${name}` => component specific page
   * `GET /registry/r/${name}.json` => json file containing component name, description, and content

