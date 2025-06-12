import path from "node:path";
import { pathToFileURL } from "node:url";
import { globby } from "globby";

import type { RegistryConfig } from "../types";

export async function loadConfig(): Promise<RegistryConfig> {
  const configPath = path.resolve(process.cwd(), ".registry/config.ts");
  const configUrl = pathToFileURL(configPath).href;

  const configModule = await import(configUrl);

  return configModule.default;
}

export async function findFiles(pattern: string[]): Promise<string[]> {
  return await globby(pattern);
}
