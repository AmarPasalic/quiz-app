import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://quiz-be-zeta.vercel.app/", // URL vašeg servera
        changeOrigin: true, // Promeni origin u zahtevu
        rewrite: (path) => path.replace(/^\/api/, ""), // Ukloni /api iz putanje
      },
    },
  },
});