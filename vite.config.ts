import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ command, mode }) => {
  /**
   * command === "serve"  → Lovable IDE + local dev
   * command === "build"  → production build
   */
  return {
    base: command === "build" ? "/tejas-homebase/" : "/",
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
