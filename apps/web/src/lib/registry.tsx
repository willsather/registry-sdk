import { buildRegistry } from "registry-sdk";

export const registry = buildRegistry({
  baseURL: "https://registry-sdk.vercel.app",
  components: [
    {
      name: "footer",
      title: "Footer",
      description: "A footer containing base links and social media links.",
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
