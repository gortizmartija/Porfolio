import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/Porfolio/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // manualChunks como función para evitar usar globs inválidos
        manualChunks(id) {
          // vendor separa react/react-dom
          if (
            id.includes('node_modules/react') ||
            id.includes('node_modules/react-dom')
          ) {
            return 'vendor';
          }
          // todos los SVG de icons en un chunk 'icons' (si se importan como módulos)
          if (
            id.includes('/src/assets/icons/') ||
            id.includes('\\src\\assets\\icons\\')
          ) {
            return 'icons';
          }
          // todos los SVG de logos en un chunk 'logos'
          if (
            id.includes('/src/assets/logos/') ||
            id.includes('\\src\\assets\\logos\\')
          ) {
            return 'logos';
          }
          // por defecto, deja que Rollup decida
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 4096,
    sourcemap: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['@svgr/plugin-jsx'],
  },
});
