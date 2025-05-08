import React from "react";

import Link from "next/link";
import type { Registry } from "../../registry";

export function HomePage({ registry }: { registry: Registry }) {
  const components = registry.getComponents();

  return (
    <main
      style={{
        backgroundColor: "var(--background)",
        padding: "2rem",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: "80rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            fontSize: "0.875rem",
            color: "#555",
            textDecoration: "none",
            marginBottom: "1rem",
          }}
        >
          <span style={{ marginRight: "0.5rem" }}>{"<-"}</span>Home
        </Link>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "2rem",
              letterSpacing: "-0.02em",
            }}
          >
            Design Registry
          </h1>
          <p style={{ color: "var(--muted-foreground)" }}>
            A collection of components and blocks for your design system
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {[
            { title: "Components", items: components },
            // { title: "Blocks", icon: "📦", items: blockItems },
          ].map(({ title, items }) => (
            <div
              key={title}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "0.5rem",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h2 style={{ fontWeight: 600, fontSize: "1.25rem" }}>
                    {title}
                  </h2>
                  <div
                    style={{
                      backgroundColor: "var(--primary)",
                      padding: ".75rem",
                      borderRadius: "0.25rem",
                      color: "white",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="lucide lucide-palette-icon lucide-palette"
                      role="graphics-symbol"
                    >
                      <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
                      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <p style={{ color: "#6b7280" }}>
                  {title === "Components"
                    ? "Reusable UI components for your application"
                    : "Pre-built UI blocks for common patterns"}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  marginTop: "1.15rem",
                }}
              >
                {items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <a
                      href={`/registry/${item.name}`}
                      style={{
                        fontSize: "1rem",
                        textDecoration: "underline",
                        color: "var(--foreground)",
                      }}
                    >
                      {item.title}
                    </a>
                    <span style={{ fontSize: "1rem", color: "#9ca3af" }}>
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
            padding: "1.5rem",
            backgroundColor: "#ffffff",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <h2 style={{ fontWeight: 600, fontSize: "1.25rem" }}>
              About the Design Registry
            </h2>
            <p style={{ color: "#6b7280" }}>
              This design registry serves as a central repository for all UI
              components and blocks used in your applications. It helps maintain
              consistency across your products and speeds up development by
              providing ready-to-use components.
            </p>
            <p style={{ marginTop: "0.5rem", color: "#6b7280" }}>
              Each component and block is documented with examples, props, and
              usage guidelines. You can browse components by category, search
              for specific components, and view examples of how they are used in
              different contexts.
            </p>
            <p style={{ marginTop: "1rem" }}>
              <a
                href="https://github.com/willsather/registry-sdk"
                style={{
                  textDecoration: "underline",
                  color: "#000000",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "#000000" }}
                  role="graphics-symbol"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  />
                </svg>
                GitHub Repository
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
