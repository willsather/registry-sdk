import { cpSync, existsSync } from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/cli/index.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react"],
  onSuccess: async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    console.log(`__dirname: ${__dirname}`);

    const src = path.resolve(__dirname, "src/app");
    const dest = path.resolve(__dirname, "dist/app");

    if (existsSync(src)) {
      cpSync(src, dest, { recursive: true });
      console.log("✅ Copied /src/app to dist/app");
    } else {
      console.warn("⚠️ /src/app folder not found. Skipping.");
    }
  },
});
