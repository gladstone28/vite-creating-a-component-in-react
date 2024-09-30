import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
base: 'https://gladstone28.github.io/vite-creating-a-component-in-react/', // Replace 'REPOSITORY_NAME' with your GitHub repo name
  plugins: [react()],
})
