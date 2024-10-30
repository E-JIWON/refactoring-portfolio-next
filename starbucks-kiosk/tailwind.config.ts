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
        skeleton: {
          base: '#1b3c35',
          highlight: '#36544d',
        },

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
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'skeleton-loading': 'shimmer 1.8s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
