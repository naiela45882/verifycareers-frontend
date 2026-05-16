import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({

  plugins: [

    react(),

    VitePWA({

      registerType:
        "autoUpdate",

      includeAssets: [
        "favicon.svg",
      ],

      manifest: {

        name:
          "VerifyCareers AI",

        short_name:
          "VerifyCareers",

        description:
          "AI-powered career scam detection and resume intelligence platform",

        theme_color:
          "#2563eb",

        background_color:
          "#ffffff",

        display:
          "standalone",

        scope: "/",

        start_url: "/",

        icons: [
          {
            src: "/icon.png",
            sizes: "192x192",
            type: "image/png",
          },

          {
            src: "/icon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});