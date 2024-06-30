"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import defaultTheme from "@/themes/default";

export default function ThemeProviderWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
