import { registry } from "@/lib/registry";
import { toNextJsHandler } from "registry-sdk/nextjs";

export const { GET, generateStaticParams } = toNextJsHandler(registry);
