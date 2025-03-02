import path from 'path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default {
  plugins: [vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@components/*': path.resolve(__dirname, 'src/components'),
      '@styles/*': path.resolve(__dirname, 'src/styles'),
      '@utils/*': path.resolve(__dirname, 'src/utils'),
    },
  },
};
