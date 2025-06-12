import type { RegistryConfig } from "registry-sdk";

const config: RegistryConfig = {
  components: ["src/registry/**/*.r.@(js|jsx|ts|tsx)"],
};

export default config;
