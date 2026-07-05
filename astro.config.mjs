import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: process.env.SITE ?? "https://guilhermeeiti.com",
  trailingSlash: "always",
  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
    },
  ],

  adapter: cloudflare({
    imageService: "compile",
  }),
});
