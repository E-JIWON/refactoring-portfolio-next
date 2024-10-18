import React from 'react';
import { cookies } from 'next/headers';
import { ThemeType } from '@/_types/themeType';
import ThemeDetector from './ThemeDetector';

/** @desc 테마 적용하는 Provider - 서버에서 theme 쿠키 값을 받아오고 Detector에게 넘겨줌 */
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
   const serverCookie = cookies();
   const themeCookie = (serverCookie.get('theme')?.value ?? '') as ThemeType;

   return <ThemeDetector defaultTheme={themeCookie}>{children}</ThemeDetector>;
};

export default ThemeProvider;
