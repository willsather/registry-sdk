import chalk from "chalk";
import ora from "ora";
import { createServer, searchForWorkspaceRoot } from "vite";

import { loadConfig } from "./config";
import { logger } from "./utils/logger";
import { getAppRoot } from "./utils/vite";

export default async function preview() {
  logger.info(`Executing ${chalk.bold("dev")} command\n`);

  const spinner = ora({
    text: "Loading...",
    color: "yellow",
  });

  spinner.start();

  const config = await loadConfig();

  const vite = await createServer({
    mode: "development",
    root: getAppRoot(),
    server: {
      port: 7863,
      open: true,
      fs: {
        allow: [searchForWorkspaceRoot(process.cwd())],
      },
    },
  });

  await vite.listen();

  spinner.succeed(
    `Registry dev server running at ${chalk.underline("http://localhost:7863")}\n`,
  );

  return true;
}
