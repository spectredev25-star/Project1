"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const scriptProps = typeof window === "undefined" 
    ? undefined 
    : { type: "application/json" };

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      nonce={undefined}
      {...(scriptProps ? { scriptProps } : {})}
    >
      {children}
    </NextThemesProvider>
  );
}
