import type { RegistryComponent, RegistryDemo } from "registry-sdk";

import { Button } from "@/components/ui/button";

export const component = {
  title: "Button",
  description: "This is a button primitive",
  component: Button,
} satisfies RegistryComponent<typeof Button>;

export default component;
type Demo = RegistryDemo<typeof component>;

export const Primary: Demo = {
  props: {
    children: "Primary",
  },
};

export const Secondary: Demo = {
  props: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Outline: Demo = {
  props: {
    variant: "outline",
    children: "Outline",
  },
};
