'use client';

import React, { useEffect, useState } from 'react';
import useThemeStore from '@/_store/themeStore';
import { ThemeType } from '@/_types/themeType';

export default function ThemeDetector({
   defaultTheme,
   children,
}: {
   defaultTheme?: ThemeType;
   children: React.ReactNode;
}) {
   const { theme, setTheme } = useThemeStore();
   const [themeStatus, setThemeStatus] = useState(defaultTheme ?? '');

   // 초기값이 비어있지 않을경우 theme를 적용
   useEffect(() => {
      if (themeStatus !== '') setTheme(themeStatus);
   }, []);

   //
   useEffect(() => {
      if (theme) {
         setThemeStatus(theme);
      }
   }, [theme]);

   return <div className={themeStatus}>{children}</div>;
}
