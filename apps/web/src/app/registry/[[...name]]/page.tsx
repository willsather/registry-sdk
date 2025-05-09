import { registry } from "@/lib/registry";
import { toNextJsPageHandler } from "registry-sdk/nextjs";

const { page, generateStaticParams } = toNextJsPageHandler(registry);
export { page as default, generateStaticParams };
