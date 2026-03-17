import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rm-white': '#FFFFFF',
        'rm-black': '#000000',
        'rm-gold': '#FFB81C',
        'rm-navy': '#0051BA',
      },
    },
  },
  plugins: [],
}
export default config
