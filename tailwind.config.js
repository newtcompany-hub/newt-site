/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        'inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'newt': {
          black: '#0A0A0A',
          red: '#E11D2A',
        }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '15': '3.75rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-up-delay': 'slideUpDelay 0.8s ease-out 0.2s both',
        'slide-up-delay-2': 'slideUpDelay2 0.8s ease-out 0.4s both',
        'reveal': 'reveal 0.6s ease-out forwards',
        'shimmer': 'shimmer 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        slideUp: {
          from: { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          to: { 
            opacity: '1', 
            transform: 'translateY(0)' 
          }
        },
        slideUpDelay: {
          from: { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          to: { 
            opacity: '1', 
            transform: 'translateY(0)' 
          }
        },
        slideUpDelay2: {
          from: { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          to: { 
            opacity: '1', 
            transform: 'translateY(0)' 
          }
        },
        reveal: {
          from: { 
            opacity: '0', 
            transform: 'translateY(40px)' 
          },
          to: { 
            opacity: '1', 
            transform: 'translateY(0)' 
          }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backdropBlur: {
        'xs': '2px',
      },
      screens: {
        'xs': '475px',
      },
      maxWidth: {
        'desktop': '90%',
      }
    },
  },
  plugins: [],
};