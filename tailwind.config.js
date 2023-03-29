/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    minHeight: {
             '0': '0',
          '1/4': '25%',
            '1/2': '50%',
             '3/4': '75%',
             'full': '100%',
             'screen': '100vh',
             'hscreen':'75vh'
            }
  },
  plugins: [],
}

