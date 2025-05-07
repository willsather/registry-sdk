import { registry } from "@/lib/registry";
import { toNextJsHandler } from "registry-sdk/nextjs";

export const { GET, dynamic, generateStaticParams } = toNextJsHandler(registry);
