import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        playwrite: ['Playwrite', 'serif'],
        playfair: ['Playfair', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
