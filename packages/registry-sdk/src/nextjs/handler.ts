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

      const component = registry.getComponent(name);

      if (component == null) {
        return NextResponse.json(
          { error: "Component not found" },
          { status: 404 },
        );
      }

      return NextResponse.json(component);
    }

    return NextResponse.json({ error: "Not found" }, { status: 404 });
  };

  const POST: NextjsRoute = async (req) => {
    return NextResponse.json({ message: "POST handler not implemented" });
  };

  return { GET, POST };
}
