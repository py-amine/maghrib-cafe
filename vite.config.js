import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8069",
        changeOrigin: true,
        rewrite: (path) => `${path}?db=maghrib_cafe`,
      },
    },
  },
});