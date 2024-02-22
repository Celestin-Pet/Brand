import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readdirSync } from 'fs';
import { join } from 'path';

export default defineConfig({
  base: "/portfolio",
  plugins: [react()],
  build: {
    outDir: "build",
  },
  optimizeDeps: {
    exclude: ['path', 'fs']
  },
  async configureServer(server) {
    const publicFiles = readdirSync(join(__dirname, 'public'))
    const srcFiles = readdirSync(join(__dirname, 'src'))
    const allFiles = [...publicFiles, ...srcFiles]
    allFiles.forEach(file => {
      server.middlewares.use('/' + file, (req, res, next) => {
        const filePath = join(__dirname, 'public', file)
        res.setHeader('Content-Type', 'text/html')
        res.end(readdirSync(filePath))
      })
    })
  }
});
