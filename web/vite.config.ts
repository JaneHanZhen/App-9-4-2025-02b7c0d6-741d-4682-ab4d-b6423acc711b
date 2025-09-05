import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false,
    outDir: "dist",
    cssCodeSplit: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            if (id.includes('@radix-ui') || 
                id.includes('class-variance-authority') || 
                id.includes('clsx') || 
                id.includes('tailwind-merge')) {
              return 'ui';
            }
            return 'vendor'; // All other node_modules
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Increase the chunk size warning limit
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 3000
  }
})