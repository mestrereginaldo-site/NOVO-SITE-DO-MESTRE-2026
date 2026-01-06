/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mystic: {
          900: '#080808', // Fundo principal
          800: '#1A1A1A', // Cards e seções
          500: '#4E1C50', // Roxo principal
        },
        teal: {
          400: '#006F87', // Acento moderno
          300: '#009EC2',
        },
        gold: {
          DEFAULT: '#D9B648', // Detalhes de luxo
          light: '#F7EBA5',
        }
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow 3s infinite ease-in-out',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        }
      }
    },
  },
  plugins:,
};
