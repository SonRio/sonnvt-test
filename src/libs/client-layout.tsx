"use client";

import { ReactNode } from "react";
import { ThemeProvider, type DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#079BEE",
  },
};

export default function ClientLayout({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
