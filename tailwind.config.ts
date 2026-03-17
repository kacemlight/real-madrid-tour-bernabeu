import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rm-white': '#FFFFFF',
        'rm-black': '#000000',
        'rm-gold': '#FFB81C',
        'rm-blue': '#0066CC',
      },
    },
  },
  plugins: [],
};

export default config;
