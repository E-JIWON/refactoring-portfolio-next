import { ThemeType } from '@/_types/themeType';
import { create } from 'zustand';

interface ThemeStore {
   theme: ThemeType;
   setTheme: (newTheme: ThemeType) => void;
   toggleTheme: () => void;
}

/**
 * @desc 테마 전역 상태
 * @desc setTheme 특정 theme를 적용하기 위함
 * @desc toggle 호출로 토글
 */
const useThemeStore = create<ThemeStore>((set) => ({
   theme: '',
   setTheme: (newTheme: ThemeType) => set({ theme: newTheme }),
   toggleTheme: () =>
      set((state) => ({
         theme: state.theme === 'dark' ? 'light' : 'dark',
      })),
}));

export default useThemeStore;
