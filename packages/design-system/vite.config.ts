import path from "path";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default {
  plugins: [vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
