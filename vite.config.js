import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: () => "everything",
        entryFileNames: `script.js`,
        chunkFileNames: `script.js`,
        assetFileNames: ({ name }) => {
          if (name && name.endsWith(".css")) {
            return "style.css";
          }
          return "[name].[ext]";
        },
      },
    },
  },
});
