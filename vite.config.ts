import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server:{
    allowedHosts: ['telegraphical-mitzi-deathly.ngrok-free.dev']
  }
})