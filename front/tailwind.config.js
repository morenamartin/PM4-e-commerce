/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'violeta': {
          '50': '#fbf7fc',
          '100': '#f7eff8',
          '200': '#eddef0',
          '300': '#e0c4e3',
          '400': '#cea1d1',
          'secundario': '#9F60A2',
          'primario': '#9f60a2',
          '700': '#804a81',
          '800': '#6a3e6a',
          '900': '#593659',
          '950': '#371b37',
        },
        'gris': {
          '50': '#f7f7f7',
          '100': '#ededed',
          'primario': '#d9d9d9',
          '300': '#c8c8c8',
          '400': '#adadad',
          '500': '#999999',
          '600': '#888888',
          '700': '#7b7b7b',
          '800': '#676767',
          '900': '#545454',
          '950': '#363636',
        },
      }
    },
  },
  plugins: [],
}

