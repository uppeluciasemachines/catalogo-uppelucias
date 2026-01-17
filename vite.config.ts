import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  // 🔥 DEV LIMPO / PROD PAGES
  base: mode === "production" ? "/catalogo-uppelucias/" : "/",

  build: {
    outDir: "docs",
    emptyOutDir: true,
  },

  server: {
    port: 5173, // 🔥 volta pro padrão do Vite
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
