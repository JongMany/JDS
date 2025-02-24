import path from 'path';

import { defineConfig } from 'vitest/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./setupTests.ts'],
    coverage: {
      provider: 'v8',
      exclude: [
        '**/index.ts',
        '**/*.model.ts',
        '**/*.d.ts',
        '**/*.stories.tsx',
        '**/*.css.ts',
        './.storybook',
        './dist',
        '.eslintrc.cjs',
        'rollup.config.js',
        'vitest.config.ts',
        'vite.config.ts',
        './src/storybook-units',
      ],
    },
  },
  plugins: [vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
