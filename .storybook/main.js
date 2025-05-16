const path = require("path");

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  "stories": [
    "../design-system/app/core/components/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook/experimental-nextjs-vite",
    "options": {}
  },
  viteFinal: (config) => {
    config.resolve = {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve?.alias || {}),
        "@": path.resolve(__dirname, "../design-system"), // 👈 points to project root
      },
    };
    return config;
  },
};
export default config;