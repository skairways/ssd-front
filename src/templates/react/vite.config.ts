import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@app": path.resolve(__dirname, "src/app"),
      "@images": path.resolve(__dirname, "src/images"),
      "@styles": path.resolve(__dirname, "src/shared/styles"),
      "@api": path.resolve(__dirname, "src/shared/api"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@models": path.resolve(__dirname, "src/shared/models"),
      "@store": path.resolve(__dirname, "src/shared/store"),
      "@features": path.resolve(__dirname, "src/features"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
