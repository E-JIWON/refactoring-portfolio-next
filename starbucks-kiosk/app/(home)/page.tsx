"use client";

import Cookies from "universal-cookie";
import useThemeStore from "../_module/store/themeStore";
import { useEffect } from "react";

export default function Home() {
  const cookies = new Cookies();
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    cookies.set("theme", theme);
  }, [theme]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <button
          className="py-4 px-12 text-2xl rounded-lg bg-light-bg text-black dark:bg-dark-bg dark:text-white"
          onClick={() => {
            setTheme();
          }}
        >
          바보
        </button>
      </main>
    </div>
  );
}
