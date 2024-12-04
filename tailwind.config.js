/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-bg': 'gradientBG 6s ease infinite', // Gradient background animation
        'border-color-change': 'borderColorChange 5s ease infinite', // Border color change animation
        'bg-color-change': 'bgColorChange 4s ease infinite', // Background color change animation
      },
      keyframes: {
        gradientBG: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        borderColorChange: {
          '0%': { borderColor: '#ec4899' }, // Pink
          '50%': { borderColor: '#8b5cf6' }, // Purple
          '100%': { borderColor: '#f59e0b' }, // Yellow
        },
        bgColorChange: {
          '0%': { backgroundColor: '#ec4899' }, // Pink
          '50%': { backgroundColor: '#8b5cf6' }, // Purple
          '100%': { backgroundColor: '#f59e0b' }, // Yellow
        },
      },
      backgroundSize: {
        '200%': '200% 200%', // For gradient animation
      },
    },
  },
  plugins: [],
};
