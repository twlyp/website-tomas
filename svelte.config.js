import adapter from "@sveltejs/adapter-cloudflare"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html",
      precompress: false,
      strict: true,
    }),
    alias: {
      $css: "./src/app.css",
    },
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
    },
  },

  compilerOptions: {
    experimental: {
      async: true
    }
  }
}

export default config
