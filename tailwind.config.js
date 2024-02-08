/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    colors: {
    'Fire-Opal': {
      500:'#eb614b',
      600:'#e13419'
    },
    'gray':{
      500: '#6B7280'
    }
  },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

