/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import { lingui } from '@lingui/vite-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react({
      plugins: [['@lingui/swc-plugin', {}]],
    }),
    lingui(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    environmentOptions: {
      jsdom: {
        url: 'http://localhost:5173'
      }
    },
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: [...configDefaults.coverage.exclude, '**/test/**', '**/components/ui/**'],
    },
    include: ['./src/**/*.test.(tsx|ts)'],
    exclude: [...configDefaults.exclude, '**/test/**', '**/components/ui/**'],
    // Cool feature but experimental, slow and does not seem to work currently in this project
    // https://vitest.dev/guide/browser.html
    // browser: {
    //   enabled: true,
    //   name: 'firefox'
    // },
    // since parsing CSS is slow
    // css: true,
  },
})
