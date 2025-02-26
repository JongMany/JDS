import type { StorybookConfig } from "@storybook/react-vite";
// import path, { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: (config) => {
    return {
      ...config,
      esbuild: {
        format: "esm",
      },
      // resolve: {
      //   alias: {
      //     "@": path.resolve(__dirname, "../src"),
      //   },
      // },
    };
  },
};
export default config;
