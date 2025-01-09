import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@shadcn/ui": path.resolve(__dirname, "node_modules/shadcn-ui"),
    },
  },
});
