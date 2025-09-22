/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.625rem', // 10px
      },
    },
  },
  plugins: [],
}
