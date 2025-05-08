import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

import type { Registry } from "../registry";
import type { NextjsRoute } from "./types";

export function toNextJsRouteHandler(registry: Registry) {
  const GET: NextjsRoute = async (req) => {
    const url = req.nextUrl;
    const path = url.pathname.replace(/^\/+|\/+$/g, ""); // remove leading/trailing slashes

    const [base, r, file] = path.split("/");

    if (base === "registry" && r === "r" && file?.endsWith(".json")) {
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
