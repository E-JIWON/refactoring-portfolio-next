import React from 'react';
import { cookies } from 'next/headers';

import ThemeDetector from './ThemeDetector';
import { ThemeType } from '@/_types/themeType';

/** @desc 테마 적용하는 Provider - 서버에서 theme 쿠키 값을 받아오고 Detector에게 넘겨줌 */
const ThemeProvider = async ({ children }: { children: React.ReactNode }) => {
  const serverCookie = await cookies();
  const themeCookie = (serverCookie.get('theme') ?? '') as ThemeType;

  return <ThemeDetector defaultTheme={themeCookie}>{children}</ThemeDetector>;
};

export default ThemeProvider;
