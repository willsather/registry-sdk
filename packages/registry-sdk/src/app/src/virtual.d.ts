declare module "virtual:demos" {
  import type { ComponentType } from "react";

  export const component: RegistryComponent<unknown>;
  export const demos: Record<string, ComponentType<unknown>>;
}
