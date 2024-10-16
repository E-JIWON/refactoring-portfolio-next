'use client';

import React from 'react';
import Cookies from 'universal-cookie';
import { useEffect } from 'react';
import useThemeStore from '@/_store/themeStore';

const ThemeButton = () => {
   const cookies = new Cookies();
   const { theme, toggleTheme } = useThemeStore();

   useEffect(() => {
      cookies.set('theme', theme, { path: '/' });
   }, [theme]);

   return (
      <button
         className="py-4 px-12 text-2xl rounded-lg bg-light-bg text-black dark:bg-dark-bg dark:text-white "
         onClick={() => {
            toggleTheme();
         }}
      >
         {theme ? theme : 'Lading...'}
      </button>
   );
};

export default ThemeButton;
