import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'useQueryStateForReactQuery',
      // the proper extensions will be added
      fileName: (format) => `index.${format}.js`,
      // Default formats are ['es', 'umd'].
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', '@tanstack/react-query'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          '@tanstack/react-query': 'ReactQuery',
        },
      },
    },
  },
  plugins: [react()],
});
