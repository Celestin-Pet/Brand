import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from 'rollup-plugin-copy';

export default defineConfig({
  base: "/portfolio",
  plugins: [
    react(),   
    copy({
      targets: [        
        { src: '/*', dest: 'build' },        
      ],
    
    }),
  ],
  build: {
    outDir: "build",
  },
});
