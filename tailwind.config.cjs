// tailwind.config.cjs
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        base: {
          bg: '#f5f3f0',        // fondo cálido
          ink: '#1f1b16',       // texto principal
          subtle: '#6b6a67',    // texto secundario
          line: '#e7e2db',      // divisores
          prime: '#1f2937'      // acento (stone-800 aprox)
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Libre Baskerville"', 'Georgia', 'serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}