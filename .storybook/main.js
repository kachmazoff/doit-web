const path = require('path');
const { DefinePlugin } = require('webpack');
const myWebpackConfig = require("../webpack.config");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.tsx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async config => {

    // Bugfix with 'get' of undefined
    for (let i = 0; i < config.plugins.length; i++) {
      const element = config.plugins[i];
      if (element instanceof DefinePlugin) {
        config.plugins.splice(i, 1)
      }
    }

    return {
      ...config,
      resolve:  myWebpackConfig.resolve,
      module: {
        ...config.module,
        rules: [ ...myWebpackConfig.module.rules],
      },
    }
  },
}