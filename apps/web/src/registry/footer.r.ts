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
