import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'lightest': 'rgb(255, 255, 255)',
      'lighter': 'rgb(202, 217, 144)',
      'light': 'rgb(140, 152, 94)',
      'dark': 'rgb(70, 79, 35)',
      'darkest': 'rgb(24, 31, 3)',
    },
    fontFamily: {
      display: ['var(--font-mono)', 'Roboto Mono', 'Courier New', 'monospace'],
      body: ['var(--font-sans)', 'Inter', 'Helvetica', 'sans-serif'],
    },
    fontWeight: {
      thin: '300',
      normal: '400',
      bold: '500',
      extrabold: '600',
    },
    extend: {
      transitionDelay: {
        '400': '400ms',
        '600': '800ms',
        '900': '900ms',
      },
    },
  },
  plugins: [],
};

export default config;
