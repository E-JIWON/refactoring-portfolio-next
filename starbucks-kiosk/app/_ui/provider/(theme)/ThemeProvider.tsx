import React from 'react';
import { cookies } from 'next/headers';
import { ThemeType } from '@/_types/themeType';
import ThemeDetector from './ThemeDetector';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
   const serverCookie = cookies();
   const themeCookie = (serverCookie.get('theme')?.value ?? '') as ThemeType;

   return <ThemeDetector defaultTheme={themeCookie}>{children}</ThemeDetector>;
};

export default ThemeProvider;
