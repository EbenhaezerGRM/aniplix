/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'dark-blue': '#001C30',
        'blue':'#176B87',
        'primary': '#64CCC5',
        'light-blue': '#DAFFFB'
      }
    }
  },
  plugins: [],
}