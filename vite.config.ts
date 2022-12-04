/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { vitestConfig } from './vitestConfig'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    // globals: true
    environment: "jsdom",
    ...vitestConfig
  },
  plugins: [vue(), vueJsx()]
})
