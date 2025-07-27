import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt'],//, 'apple-touch-icon.png'],
      manifest: {
        name: "Misha Higham's Portfolio",
        short_name: 'Misha Higham',
        start_url: '/',
        description: "Misha Higham's Portfolio Page",
        background_color: 'rgba(255, 200, 0, 1)',
        theme_color: 'rgba(255, 200, 0, 1)',
        icons: [
          {
            src: 'assets/icons/icon192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/icons/icon512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    host: true,
    hmr: {
      clientPort: 5173,
    }
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
})
