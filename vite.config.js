import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import WindiCSS from "vite-plugin-windicss";
import compression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";
import { VitePWA } from "vite-plugin-pwa";
import AutoImport from "unplugin-auto-import/vite";
//import { VitePluginNode } from "vite-plugin-node";

// Change this to your GitHub repository name
const repoName = "yeetaaron1.github.io"; 

// https://vite.dev/config/
export default defineConfig({
  base: `/${repoName}/`, // Set GitHub Pages base URL
  plugins: [
    react(),
    WindiCSS(),
    compression(),
    viteImagemin({
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.7, 0.9] },
      svgo: { plugins: [{ removeViewBox: false }] },
    }),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "My Vite PWA",
        short_name: "VitePWA",
        theme_color: "#ffffff",
      },
    }),
    AutoImport({
      imports: ["react", "react-router-dom"],
    }),
    //...VitePluginNode({ adapter: "express", appPath: "./server/index.js" }),
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist", // Output directory
  },
});
