import { create } from "zustand";

interface ThemeStore {
  theme: "dark" | "light" | ""; // 빈 문자열도 초기값으로 설정 가능
  setTheme: () => void;
  initializeTheme: (initialTheme: "dark" | "light") => void; // 초기화 함수
}

const useThemeStore = create<ThemeStore>((set) => ({
  theme: "", // 기본값을 빈 문자열로 설정해, 나중에 초기화 가능
  setTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
  initializeTheme: (initialTheme) =>
    set(() => ({
      theme: initialTheme,
    })),
}));

export default useThemeStore;
