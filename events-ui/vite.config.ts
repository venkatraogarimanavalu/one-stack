import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // checker({
    //   typescript: true,
    // }),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
  },
});
