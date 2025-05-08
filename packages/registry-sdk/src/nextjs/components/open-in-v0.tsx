import React from "react";

import type { Registry, RegistryComponent } from "../../registry";

export function OpenInV0Card({
  registry,
  component,
  title,
  prompt,
}: {
  registry: Registry;
  component: RegistryComponent;
  title?: string;
  prompt?: string;
}) {
  const registryUrl = `${registry.config.baseURL}/registry/r/${component.name}.json`;
  const v0Url = buildV0Url(registryUrl, title, prompt);

  if (!component) {
    return (
      <div style={{ textAlign: "center", padding: "2rem", color: "#888" }}>
        No registry item found
      </div>
    );
  }

  return (
    <section>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "0.5rem",
          padding: "1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, margin: 0 }}>
            Preview
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <a
                href={v0Url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "0.25rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Open in
                <svg
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width="25"
                  height="25"
                  style={{ marginLeft: "0.25rem" }}
                  role="graphics-symbol"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.50321 5.5H13.2532C13.3123 5.5 13.3704 5.5041 13.4273 5.51203L9.51242 9.42692C9.50424 9.36912 9.5 9.31006 9.5 9.25L9.5 5.5L8 5.5L8 9.25C8 10.7688 9.23122 12 10.75 12H14.5V10.5L10.75 10.5C10.6899 10.5 10.6309 10.4958 10.5731 10.4876L14.4904 6.57028C14.4988 6.62897 14.5032 6.68897 14.5032 6.75V10.5H16.0032V6.75C16.0032 5.23122 14.772 4 13.2532 4H9.50321V5.5ZM0 5V5.00405L5.12525 11.5307C5.74119 12.3151 7.00106 11.8795 7.00106 10.8822V5H5.50106V9.58056L1.90404 5H0Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {component.demo != null
            ? Object.entries(component.demo).map(([key, node]) => (
                <div style={{ width: "100%" }} key={key}>
                  {node}
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}

function buildV0Url(registryUrl: string, title?: string, prompt?: string) {
  const params = new URLSearchParams();
  params.append("url", registryUrl);

  if (title != null) params.append("title", title);
  if (prompt != null) params.append("prompt", prompt);

  return `https://v0.dev/chat/api/open?${params.toString()}`;
}
