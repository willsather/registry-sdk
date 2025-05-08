import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./tailwind.css";

export const metadata: Metadata = {
  title: "With Next.js Example",
  description: "Basic Next.js Example with Registry SDK",
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
