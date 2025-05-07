import fs from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";

import { resolveFileType, toTitleCase } from "./utils";

export interface RegistryConfig {
  baseURL: string;
  components: RegistryComponent[];
}

export interface Registry {
  config: RegistryConfig;
  getComponent: (name: string) => RegistryComponent;
  getComponents: () => RegistryComponent[];
  getRegistryItem: (name: string) => RegistryItem | null;
}

export interface RegistryComponent {
  name: string;

  title?: string;
  description?: string;
  author?: string;

  // TODO: add page with component preview
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

export function buildRegistry(config: RegistryConfig): Registry {
  const componentMap = new Map<string, RegistryComponent>(
    config.components.map((c) => [c.name.toLowerCase(), c]),
  );

  function getComponents(): RegistryComponent[] {
    return config.components;
  }

  function getComponent(name: string): RegistryComponent {
    const component = config.components.find((rc) => rc.name === name);

    if (component == null) {
      throw new Error(`Component ${name} not found`);
    }

    return component;
  }

  function getRegistryItem(name: string): RegistryItem | null {
    const component = componentMap.get(name.toLowerCase());
    if (!component) return null;

    return {
      $schema: "https://ui.shadcn.com/schema/registry-item.json",
      name: component.name,
      type: "registry:component",
      title: toTitleCase(component.name),
      description: component.description,
      files: component.files.map((file) => {
        const contentPath = path.resolve(process.cwd(), file.path);

        let content = "";
        try {
          content = fs.readFileSync(contentPath, "utf-8");
        } catch (err) {
          console.error(`Failed to read file: ${contentPath}`, err);
          throw new Error(`Failed to read file: ${contentPath}`);
        }

        return {
          path: file.path,
          type: resolveFileType(file.path),
          target: file.target,
          content,
        };
      }),
    };
  }

  return {
    config,
    getComponent,
    getComponents,
    getRegistryItem,
  };
}
