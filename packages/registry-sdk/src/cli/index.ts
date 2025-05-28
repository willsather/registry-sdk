#!/usr/bin/env node
import { Command } from "commander";
import build from "./build.js";
import dev from "./dev.js";
import preview from "./preview.js";

const program = new Command("registry-sdk");

program
  .command("dev")
  .description("run the registry dev server")
  .action(async () => {
    await dev();
  });

program
  .command("build")
  .description("build static app")
  .action(async () => {
    const success = await build();
    if (success) {
      process.exit(0);
    }
    process.exit(1);
  });

program
  .command("preview")
  .description("start registry static build")
  .action(async () => {
    await preview();
  });

program.parse(process.argv);
