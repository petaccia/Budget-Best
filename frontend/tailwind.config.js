/** @type {import('tailwindcss').Config} */
export default {
  mode : 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    important: true,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}