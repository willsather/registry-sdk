import { registry } from "@/lib/registry";
import { toNextJsHandler } from "registry-sdk/nextjs";

export const { POST, GET } = toNextJsHandler(registry);
