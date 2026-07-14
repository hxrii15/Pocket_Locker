/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        void: '#000000',
        ash: '#001007',
        charcoal: '#00210e',
        ecto: '#00ff66',
        specter: '#00cc55',
        plasma: '#007a35',
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 255, 102, 0.35)',
        'glow-strong': '0 0 40px rgba(0, 255, 102, 0.55)',
      },
    },
  },
  plugins: [],
};
