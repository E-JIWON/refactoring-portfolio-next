'use client';

import React, { useEffect, useState } from 'react';
import useThemeStore from '@/_store/themeStore';
import { ThemeType } from '@/_types/themeType';

interface ThemeDetectorPorps {
  defaultTheme?: ThemeType;
  children: React.ReactNode;
}

/** @desc 테마 감시 함수 - 초기상태를 받아오고, 전역 상태 변경 감시 */
const ThemeDetector = ({ defaultTheme, children }: ThemeDetectorPorps) => {
  const { theme, setTheme } = useThemeStore();
  const [themeStatus, setThemeStatus] = useState(defaultTheme ?? '');

  // 초기값이 비어있지 않을경우 theme를 적용
  useEffect(() => {
    if (themeStatus !== '') setTheme(themeStatus);

    // 해당 의존성 배열은 일부러 비워둔 것임
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //
  useEffect(() => {
    if (theme) {
      setThemeStatus(theme);
    }
  }, [theme]);

  return <div className={themeStatus}>{children}</div>;
};

export default ThemeDetector;
