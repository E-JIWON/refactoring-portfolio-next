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
            light: '#dbd6c1',
          },
          orange: {
            light: '#d2925f',
          },
          green: {
            bright: '#36544d',
            light: '#1b3c35',
            dark: '#1b3c35',
            deep: '#001e1e',
          },
        },
        dark: {
          white: {
            light: '#dbd6c1',
          },
          orange: {
            light: '#d2925f',
          },
          green: {
            light: '#1b3c35',
            dark: '#1b3c35',
            deep: '#001e1e',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
