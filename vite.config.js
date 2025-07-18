import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        services: resolve(root, 'services', 'index.html'),
        payment: resolve(root, 'payment', 'index.html'),
        test: resolve(root, 'test', 'index.html'),
      }
    }
  }
})