import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '920px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        primary: { dark: '#111111', light: '#EFFAFF' },
        black: {
          100: '#534B52',
          200: '#423C41',
          300: '#312D30',
          400: '#211F20',
          500: '#111111'
        },
        white: {
          100: '#EFFAFF'
        },
        blue: {
          100: '#3DBBFA',
          200: '#25A2E5',
          300: '#008ACF'
        },
        orange: '#D58936'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
