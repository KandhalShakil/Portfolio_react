module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Disable source map loader to prevent warnings from dependencies
      if (webpackConfig.module && Array.isArray(webpackConfig.module.rules)) {
        webpackConfig.module.rules = webpackConfig.module.rules.map((rule) => {
          if (
            rule.enforce === 'pre' &&
            Array.isArray(rule.use) &&
            rule.use.some((loader) => loader?.loader?.includes('source-map-loader'))
          ) {
            // Disable source-map-loader
            return {
              ...rule,
              use: rule.use.filter((loader) => !loader?.loader?.includes('source-map-loader'))
            };
          }
          return rule;
        });
      }
      return webpackConfig;
    },
  },
};
