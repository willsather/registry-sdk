import type { RegistryFileType } from "./registry";

export function toTitleCase(str: string): string {
  return str
    .split(/[-_]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

export function resolveFileType(filePath: string): RegistryFileType {
  if (filePath.includes("use-")) return "registry:hook";
  if (filePath.endsWith(".tsx") || filePath.endsWith(".jsx"))
    return "registry:component";
  return "registry:file";
}
