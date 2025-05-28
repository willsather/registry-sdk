import path from "node:path";
import { pathToFileURL } from "node:url";
import { globby } from "globby";

import type { RegistryConfig } from "../types";

export async function loadConfig(): Promise<{ files: string[] }> {
  const configPath = path.resolve(process.cwd(), ".registry/config.ts");
  const configUrl = pathToFileURL(configPath).href;

  const configModule = await import(configUrl);
  const config: RegistryConfig = configModule.default;

  const files = await globby(config.components);

  return { files };
}
