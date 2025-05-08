import type { NextRequest, NextResponse } from "next/server";

export type NextjsRoute = (
  req: NextRequest,
) => Promise<NextResponse> | NextResponse;
