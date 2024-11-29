import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

if (typeof globalThis.structuredClone === 'undefined') {
  globalThis.structuredClone = (obj: any): any => JSON.parse(JSON.stringify(obj));
}


export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,
    watch: {
      usePolling: true,
    },
  },
})
