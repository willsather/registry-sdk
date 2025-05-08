import { notFound } from "next/navigation";
import React from "react";

import type { Registry } from "../registry";
import { ComponentPage } from "./components/component-page";
import { HomePage } from "./components/home-page";

export function toNextJsPageHandler(registry: Registry) {
  async function page({ params }: { params?: Promise<{ name?: string[] }> }) {
    const parameters = await params;

    const name = parameters?.name?.[0];

    if (!name) {
      return <HomePage registry={registry} />;
    }

    const component = registry.getComponent(name);
    if (!component) return notFound();

    return <ComponentPage registry={registry} component={component} />;
  }

  function generateStaticParams() {
    return [
      {}, // index route
      ...registry.getComponents().map((c) => ({ name: [c.name] })),
    ];
  }

  return { page, generateStaticParams };
}
