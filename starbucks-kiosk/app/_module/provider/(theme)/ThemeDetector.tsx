"use client";

import React, { useEffect, useState } from "react";
import useThemeStore from "../../store/themeStore";

export default function ThemeDetector({
  defaultTheme,
  children,
}: {
  defaultTheme?: string;
  children: React.ReactNode;
}) {
  const { theme, initializeTheme } = useThemeStore();

  const [themeStatus, setThemeStatus] = useState(defaultTheme);

  console.log("defaultTheme", defaultTheme);
  console.log("theme", theme);
  console.log("themeStatus", themeStatus);

  useEffect(() => {
    if (defaultTheme) initializeTheme(defaultTheme as "light" | "dark");
  }, [initializeTheme]);

  useEffect(() => {
    setThemeStatus(theme);
  }, [theme]);

  return <div className={themeStatus}>{children}</div>;
}
