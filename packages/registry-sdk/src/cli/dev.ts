import path from "node:path";
import react from "@vitejs/plugin-react";
import chalk from "chalk";
import ora from "ora";
import { createServer, searchForWorkspaceRoot } from "vite";

import tailwindcss from "@tailwindcss/vite";

import { findFiles, loadConfig } from "./config";
import { logger } from "./utils/logger";
import { getAppRoot } from "./utils/vite";

function createVirtualPlugin(files: string[]) {
  return {
    name: "virtual-stories",
    resolveId(id: string) {
      if (id === "virtual:demos") return id;
    },
    async load(id: string) {
      if (id === "virtual:demos") {
        return `export * from "@/registry/button.r.ts";`;
      }
    },
  };
}

export default async function dev() {
  logger.info(`Executing ${chalk.bold("dev")} command\n`);

  const spinner = ora({
    text: "Loading...",
    color: "yellow",
  });

  spinner.start();

  const config = await loadConfig();
  const files = await findFiles(config.components);

  if (files.length === 0) {
    spinner.fail("No registry files found!");
    return false;
  }

  console.log(`Found ${files.length} registry files:`, files);

  const virtualPlugin = createVirtualPlugin(files);

  const vite = await createServer({
    mode: "development",
    root: getAppRoot(),
    plugins: [react(), tailwindcss(), virtualPlugin],
    server: {
      port: 7863,
      open: true,
      fs: {
        allow: [
          searchForWorkspaceRoot(process.cwd()), // user project
          searchForWorkspaceRoot(getAppRoot()), // registry app
        ],
      },
    },
    resolve: {
      alias: {
        "@": path.join(process.cwd(), "src"),
      },
    },
  });

  await vite.listen();

  spinner.succeed(
    `Registry dev server running at ${chalk.underline("http://localhost:7863")}\n`,
  );

  return true;
}
