// vite.config.js (root of the repo)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react()],
  base: "/ds-calculator-dev/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/shared/components", import.meta.url)
      ),
    },
  },
});
