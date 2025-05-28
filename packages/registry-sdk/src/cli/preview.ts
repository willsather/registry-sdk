import chalk from "chalk";
import ora from "ora";
import { createServer } from "vite";

import { logger } from "./utils/logger";
import { getAppRoot } from "./utils/vite";

export default async function preview() {
  logger.info(`Executing ${chalk.bold("preview")} command\n`);

  const spinner = ora({
    text: "Loading...",
    color: "yellow",
  });

  spinner.start();

  const vite = await createServer({
    root: getAppRoot(),
    server: {
      port: 7863,
      open: true,
    },
  });

  await vite.listen();

  spinner.succeed(
    `Registry production server started at ${chalk.underline("http://localhost:7863")}`,
  );

  return true;
}
