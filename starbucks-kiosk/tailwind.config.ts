import type { Config } from 'tailwindcss';

const config: Config = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   darkMode: 'class',
   theme: {
      extend: {
         colors: {
            light: {
               white: {
                  500: '#dbd6c1',
               },
               green: {
                  500: '#001e1e',
               },
            },
            dark: {
               bg: '#128390',
            },
         },
      },
   },
   plugins: [],
};
export default config;
