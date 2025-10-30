import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12'
        },
        slate: {
          950: '#06070a'
        }
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)']
      },
      boxShadow: {
        glow: '0 0 50px rgba(251, 146, 60, 0.35)'
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at 25px 25px, rgba(249, 115, 22, 0.15) 2px, transparent 0)' 
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
};

export default config;
