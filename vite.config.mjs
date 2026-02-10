import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { VitePWA } from 'vite-plugin-pwa';

const manifest = {
  name: 'File Dumper',
  short_name: 'File Dumper',
  description: 'A simple file dumper',
  theme_color: '#ffffff',
  icons: [
    {
      src: 'android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: 'android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
};

export default defineConfig({
  build: { minify: true },
  plugins: [
    createHtmlPlugin({ minify: true }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: manifest,
      workbox: { navigateFallback: 'index.html' },
    }),
  ],
});
