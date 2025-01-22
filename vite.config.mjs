import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  build: { minify: true },
  plugins: [createHtmlPlugin({ minify: true }), VitePWA({ registerType: 'autoUpdate' })],
})
