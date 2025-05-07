import { notFound } from "next/navigation";
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

    if (root === "r" && file?.endsWith(".json")) {
      try {
        const name = file.replace(/\.json$/, "");

        const registryItem = registry.getRegistryItem(name);

        if (registryItem == null) {
          notFound();
        }

        return NextResponse.json(registryItem);
      } catch (error) {
        return NextResponse.json(
          { error: "Failed to get registry item" },
          { status: 500 },
        );
      }
    }

    notFound();
  };

  const generateStaticParams = () => {
    return registry
      .getComponents()
      .map((rc) => ({ name: [`${rc.name}.json`] }));
  };

  return { GET, generateStaticParams };
}
