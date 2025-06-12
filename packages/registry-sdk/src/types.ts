import type { ComponentProps, ComponentType } from "react";

export interface RegistryConfig {
  components: string[];
}

export interface RegistryComponent<
  T extends ComponentType<Record<string, unknown>>,
> {
  title: string;
  component: T;
  description?: string;
}

export interface RegistryDemo<
  T extends RegistryComponent<ComponentType<Record<string, unknown>>>,
> {
  props: ComponentProps<T["component"]>;
}
