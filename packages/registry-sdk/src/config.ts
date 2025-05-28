import path from "node:path";
import { glob } from "fast-glob";

import type { RegistryConfig } from "./types";

export async function loadConfig(): Promise<{ files: string[] }> {
  const configPath = path.resolve(process.cwd(), ".registry");
  const config: RegistryConfig = (await import(configPath)).default;

  const files = await glob(config.components, { absolute: true });
  return { files };
}
