import path from "node:path";
import chalk from "chalk";
import ora from "ora";
import { build as viteBuild } from "vite";

import { logger } from "./utils/logger";
import { getAppRoot } from "./utils/vite";

export default async function build() {
  logger.info(`Executing ${chalk.bold("build")} command\n`);

  const spinner = ora({
    text: "Loading...",
    color: "yellow",
  });

  spinner.start();

  await viteBuild({
    root: getAppRoot(),
    build: {
      outDir: path.resolve(process.cwd(), "registry-build"),
    },
    resolve: {
      alias: {
        "@": path.join(process.cwd(), "src"),
      },
    },
  });

  spinner.succeed(
    `Registry static site built to ${chalk.bold.yellow("/registry-build")}`,
  );

  return true;
}
