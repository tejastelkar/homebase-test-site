import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load env variables
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // Logic: If VITE_CPANEL_BASE is defined, use it. Otherwise, default to "/"
    // This keeps Lovable on "/" (safe) and forces cPanel to "/tejas-homebase/"
    base: env.VITE_CPANEL_BASE || "/", 
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});