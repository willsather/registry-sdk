import { registry } from "@/lib/registry";
import { toNextJsRouteHandler } from "registry-sdk/nextjs";

export const { GET, generateStaticParams } = toNextJsRouteHandler(registry);
