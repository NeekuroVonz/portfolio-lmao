import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'primary-hover': 'rgba(199, 120, 221, 0.20)',
        'secondary-hover': 'rgba(171, 178, 191, 0.20);',
      },
      colors: {
        'main-pink': '#c778dd',
        'main-gray': '#abb2bf',
        'main-background': '#282c33',
      },
      gap: {
        'main-gap': '10px',
      },
      screens: {
        'desktop': "1920px",
        'laptop': "1440px",
        'tablet': "1024px",
        'mobile': "860px",
      },
    },
  },
  plugins: [],
}
export default config
