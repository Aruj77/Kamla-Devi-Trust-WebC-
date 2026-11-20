import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c', // marigold
          700: '#c2410c', // deep saffron
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        ivory: {
          50: '#fffbf5',
          100: '#fff7ed',
          200: '#fef2e2',
          300: '#fde8cb',
          400: '#fbd49d',
        },
        sacred: {
          gold: '#d97706',
          goldDark: '#b45309',
          brown: '#291508',
          charcoal: '#1c1917',
          warmGray: '#78350f',
        },
      },
      fontFamily: {
        devanagari: ['var(--font-noto-sans-devanagari)', 'Noto Sans Devanagari', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading-devanagari)', 'Tiro Devanagari Hindi', 'Noto Sans Devanagari', 'serif'],
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(194, 65, 12, 0.08), 0 2px 6px -1px rgba(194, 65, 12, 0.04)',
        'warm-lg': '0 10px 30px -4px rgba(194, 65, 12, 0.12), 0 4px 10px -2px rgba(194, 65, 12, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
