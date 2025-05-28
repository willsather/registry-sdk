import type { ReactNode } from "react";

export interface RegistryComponent {
  name: string;
  title: string;

  description?: string;
  author?: string;

  demo?: Record<string, ReactNode>;

  dependencies?: string[];
  registryDependencies?: string[];

  files: {
    path: string;
    target?: string;
  }[];
}

export type RegistryFileType =
  | "registry:block" // Use for complex components with multiple files.
  | "registry:component" // Use for simple components.
  | "registry:lib" // Use for lib and utils.
  | "registry:hook" // Use for hooks.
  | "registry:ui" // Use for UI components and single-file primitives
  | "registry:page" // Use for page or file-based routes.
  | "registry:file" // Use for miscellaneous files.
  | "registry:style" // Use for registry styles. eg. new-york
  | "registry:theme"; // Use for themes.

// spec: https://ui.shadcn.com/docs/registry/registry-item-json
export interface RegistryItem {
  $schema: "https://ui.shadcn.com/schema/registry-item.json";
  name: string;
  type: RegistryFileType;

  title?: string;
  description?: string;
  author?: string;

  dependencies?: string[];
  registryDependencies?: string[];

  files: {
    path: string;
    content?: string;
    target?: string;
  }[];
}
