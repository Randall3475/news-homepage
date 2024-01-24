/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe-UI',
          'sans-serif',
        ],
      },
      colors: {
        main: 'hsla(36, 100%, 99%, 1)',
        primary: 'hsla(5, 85%, 63%, 1)',
        secondary: 'hsla(240, 100%, 5%, 1)',
        accent: 'hsla(35, 78%, 62%, 1)',
        body: 'hsla(237, 13%, 42%, 1)',
        misc: 'hsla(236, 8%, 79%, 1)',
        divider: 'hsla(236, 13%, 42%, 1)',
      },
    },
  },
  plugins: [],
}
