import { type NextRequest, NextResponse } from "next/server";
import type { Registry } from "../registry";

export type NextjsRoute = (
  req: NextRequest,
) => Promise<NextResponse> | NextResponse;

export function toNextJsHandler(registry: Registry) {
  const GET: NextjsRoute = async (req) => {
    const url = req.nextUrl;
    const path = url.pathname.replace(/^\/+|\/+$/g, ""); // remove leading/trailing slashes

    const [root, file] = path.split("/");

    if (root === "registry" && file?.endsWith(".json")) {
      const name = file.replace(/\.json$/, "");

      const registryItem = registry.getRegistryItem(name);

      if (registryItem == null) {
        return NextResponse.json(
          { error: "Component not found" },
          { status: 404 },
        );
      }

      return NextResponse.json(registryItem);
    }

    return NextResponse.json({ error: "Not found" }, { status: 404 });
  };

  const generateStaticParams = () => {
    return registry.getComponents().map((rc) => ({ name: rc.name }));
  };

  const dynamic = "force-static" as const;

  return { GET, dynamic, generateStaticParams };
}
