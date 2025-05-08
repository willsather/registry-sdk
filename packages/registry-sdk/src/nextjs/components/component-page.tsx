import Link from "next/link";
import React from "react";

import type { Registry, RegistryComponent } from "../../registry";
import { OpenInV0Card } from "./open-in-v0";

export function ComponentPage({
  registry,
  component,
}: { registry: Registry; component: RegistryComponent }) {
  return (
    <div style={{ padding: "2rem", maxWidth: "960px", margin: "0 auto" }}>
      <div
        style={{
          marginBottom: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Link
            href="/registry"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: "0.875rem",
              color: "#555",
              textDecoration: "none",
              marginBottom: "1rem",
            }}
          >
            <span style={{ marginRight: "0.5rem" }}>{"<-"}</span>Registry
          </Link>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", margin: 0 }}>
            {component.title}
          </h1>

          <p style={{ color: "#666" }}>{component.description}</p>
        </div>
      </div>

      <OpenInV0Card component={component} registry={registry} />
    </div>
  );
}
