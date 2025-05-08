import { buildRegistry } from "registry-sdk";

import { Footer } from "@/components/footer";

export const registry = buildRegistry({
  baseURL: "http://localhost:3000",
  components: [
    {
      name: "footer",
      title: "Footer",
      description: "A footer containing base links and social media links.",

      demo: {
        default: <Footer />,
      },

      dependencies: ["button"],
      registryDependencies: ["button"],

      files: [
        {
          path: "src/components/footer.tsx",
          target: "@/components/footer.tsx",
        },
      ],
    },
  ],
});
