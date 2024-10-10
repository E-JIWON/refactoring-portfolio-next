import React from "react";
import { cookies } from "next/headers";
import ThemeDetector from "./ThemeDetector";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const cokies = cookies();
  const themeCookie = cokies.get("theme")?.value;

  return <ThemeDetector defaultTheme={themeCookie}>{children}</ThemeDetector>;
};

export default ThemeProvider;
