/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom', // or 'jsdom', 'node'
    setupFiles: './src/test/setupTests',
  },
});
