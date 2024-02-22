import react from "@vitejs/plugin-react";

export default {
  base: "/portfolio",
  plugins: [react()],
  build: {
    outDir: "build",
  },
};
