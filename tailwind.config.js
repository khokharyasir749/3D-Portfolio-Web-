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
        cyber: {
          bg: '#0a0a0f',
          darker: '#050508',
          card: 'rgba(16, 18, 27, 0.7)',
          cyan: '#00f0ff',
          magenta: '#ff0055',
          neonPink: '#ff2a85',
          neonPurple: '#9d00ff',
          neonGreen: '#00ff66',
          neonYellow: '#fcee0a',
          border: 'rgba(0, 240, 255, 0.2)',
          borderHover: 'rgba(0, 240, 255, 0.6)',
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
      },
      keyframes: {
        glowPulse: {
          '0%': { opacity: '0.6', filter: 'drop-shadow(0 0 5px rgba(0,240,255,0.4))' },
          '100%': { opacity: '1', filter: 'drop-shadow(0 0 15px rgba(0,240,255,0.8))' },
        },
      },
    },
  },
  plugins: [],
}
