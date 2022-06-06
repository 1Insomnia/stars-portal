const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      // Base colors
      dark: '#000',
      light: '#fff',
      // Success
      success: {
        lighter: '#d3e5ff',
        light: '#3291ff',
        DEFAULT: '#0070f3',
        dark: '#0761d1'
      },
      // Error
      error: {
        lighter: '#f7d4d6',
        light: '#ff1a1a',
        DEFAULT: '#e00',
        dark: '#c50000'
      },
      // Warning
      warning: {
        lighter: '#ffefcf',
        light: '#f7b955',
        DEFAULT: '#f5a623',
        dark: '#ab570a'
      },
      // Extra
      // Violet
      violet: {
        lighter: '#e3d7fc',
        light: '#8a63d2',
        DEFAULT: '#7928ca',
        dark: '#4c2889'
      },
      // Cyan
      cyan: {
        lighter: '#aaffec',
        light: '#79ffe1',
        DEFAULT: '#50e3c2',
        dark: '#29bc9b'
      },
      // Highlight
      highlight: {
        purple: '#f81ce5',
        magenta: '#eb367f',
        pink: '#ff0080',
        yellow: '#fff500'
      },
      // Accents
      accents: {
        1: '#fafafa',
        2: '#eaeaea',
        3: '#999',
        4: '#888',
        5: '#666',
        6: '#444',
        7: '#333',
        8: '#111'
      }
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans]
    },
    extend: {}
  },
  plugins: []
}
