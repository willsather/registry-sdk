import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./tailwind.css";

export const metadata: Metadata = {
  title: "Registry SDK",
  description: "Registry SDK Demo",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
