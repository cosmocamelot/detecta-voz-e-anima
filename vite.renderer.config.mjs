import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// https://vitejs.dev/config
export default defineConfig({
  esbuild: {
    jsxFragment: 'React.Fragment',
    jsxFactory: 'React.createElement',
    jsxInject: "import React from 'react'",
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // splash: resolve(__dirname, 'splash.html')
      },
    },
  },
});
