/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#D9E2FD',
          200: '#B6C9FB',
          300: '#8EA6F8',
          400: '#667DF5',
          500: '#4F5FF2',
          600: '#3B40E3',
          700: '#2F32C3',
          800: '#252A9C',
          900: '#1F267B'
        },
        secondary: {
          50: '#F0FDFF',
          100: '#CCF7FE',
          200: '#99ECFB',
          300: '#66DEF5',
          400: '#33CBEA',
          500: '#0CB6D8',
          600: '#0992B0',
          700: '#076F88',
          800: '#054B5F',
          900: '#022A37'
        },
        accent: {
          50: '#FFF6EE',
          100: '#FFEAD4',
          200: '#FFD5A8',
          300: '#FFBB7D',
          400: '#FFA251',
          500: '#FF8926',
          600: '#FF6A00',
          700: '#CC5500',
          800: '#994000',
          900: '#662B00'
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A'
        }
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideUp': 'slideUp 0.5s ease-in-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}