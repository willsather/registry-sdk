import type { Metadata } from "next";
import type { ReactNode } from "react";

import Navbar from "@/components/navbar";

import "./globals.css";
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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
