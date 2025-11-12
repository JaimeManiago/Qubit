/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Vite's entry HTML
    './src/**/*.{js,jsx,ts,tsx}', // Your React files
    './node_modules/reactqbit/**/*.{js,jsx,ts,tsx}', // reactqbit components (for QuantumWire styles)
  ],
  theme: {
    extend: {}, // Add custom themes here if needed
  },
  plugins: [], // Add plugins like @tailwindcss/forms if used
};