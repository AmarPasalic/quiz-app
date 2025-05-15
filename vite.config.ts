import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "https://quiz-be-zeta.vercel.app": {
        target: "https://quiz-be-zeta.vercel.app/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^https:\/\/quiz-be-zeta\.vercel\.app/, ""),
      },
    },
  },
});