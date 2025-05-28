import path from "node:path";
import chalk from "chalk";
import ora from "ora";
import { build as viteBuild } from "vite";

import { logger } from "./utils/logger";
import { getAppRoot } from "./utils/vite";

export default async function build() {
  logger.info(`Executing ${chalk.bold("example")} command`);

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
  });

  spinner.succeed(
    `Registry static site built to ${chalk.bold.yellow("/registry-build")}`,
  );

  return true;
}
