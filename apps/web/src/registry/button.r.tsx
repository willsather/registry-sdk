import { Button } from "@/components/ui/button";
// import type { RegistryMetadata } from "registry-sdk";

export const component = {
  title: "Button",
  description: "This is a button primitive",
}; //satisfies RegistryMetadata;

export const Primary = <Button>Primary</Button>;
export const Secondary = <Button variant="secondary">Secondary</Button>;
export const Outline = <Button variant="outline">Outline</Button>;
