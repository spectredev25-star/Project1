"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Overrides the injected script's type on the client side 
  // to trick React 19 into ignoring the script tag warning.
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
