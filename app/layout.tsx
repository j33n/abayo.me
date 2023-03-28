"use client";

import { ThemeProvider } from "next-themes";
import { Exo_2 } from "next/font/google";

import "./styles/globals.css";

const exo2 = Exo_2({
  weight: ["100", "200", "100", "300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={exo2.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
