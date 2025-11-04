// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,   // <— главное
      interval: 100
    },
    host: true,
    hmr: {
      host: "localhost",
      protocol: "ws",
      port: 5173
    }
  }
});
