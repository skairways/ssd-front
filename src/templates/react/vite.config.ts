import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@app": path.resolve(__dirname, "src/app"),
      "@images": path.resolve(__dirname, "src/images"),
      "@styles": path.resolve(__dirname, "src/shared/styles"),
      "@api": path.resolve(__dirname, "src/shared/api"),
      "@components": path.resolve(__dirname, "src/shared/components"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@models": path.resolve(__dirname, "src/shared/models"),
      "@views": path.resolve(__dirname, "src/views"),
      "@store": path.resolve(__dirname, "src/shared/store"),
      "@features": path.resolve(__dirname, "src/features"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
