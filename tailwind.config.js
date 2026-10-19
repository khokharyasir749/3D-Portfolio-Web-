/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nordic: {
          bg: '#0A1312',
          surface: '#132B27',
          elevated: '#1A3D37',
          border: '#25524B',
          accent: '#2C665D',
          accentHover: '#357B70',
          bronze: '#C58A55',
          bronzeHover: '#DE9F68',
          text: '#E6F4F1',
          textMuted: '#9FB8B2',
        },
        theme: {
          bg: '#0A1312',
          surface: '#132B27',
          elevated: '#1A3D37',
          border: '#25524B',
          accent: '#2C665D',
          accentHover: '#357B70',
          bronze: '#C58A55',
          bronzeHover: '#DE9F68',
          text: '#E6F4F1',
          textMuted: '#9FB8B2',
        },
        cyber: {
          bg: '#0A1312',
          darker: '#060B0A',
          card: 'rgba(19, 43, 39, 0.85)',
          cyan: '#2C665D',
          magenta: '#C58A55',
          neonPink: '#DE9F68',
          neonPurple: '#2C665D',
          neonGreen: '#2C665D',
          neonYellow: '#E6F4F1',
          border: 'rgba(37, 82, 75, 0.6)',
          borderHover: 'rgba(197, 138, 85, 0.8)',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 240, 255, 0.4)',
        'neon-magenta': '0 0 15px rgba(255, 0, 85, 0.4)',
        'neon-glow': '0 0 25px rgba(0, 240, 255, 0.25), inset 0 0 15px rgba(0, 240, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'marquee': 'marquee 32s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%': { opacity: '0.6', filter: 'drop-shadow(0 0 5px rgba(0,240,255,0.4))' },
          '100%': { opacity: '1', filter: 'drop-shadow(0 0 15px rgba(0,240,255,0.8))' },
        },
        marquee: {
          '0%': { transform: 'translate3d(0%, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
      },
    },
  },
  plugins: [],
}
