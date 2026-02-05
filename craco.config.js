module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      if (webpackConfig.module && Array.isArray(webpackConfig.module.rules)) {
        webpackConfig.module.rules = webpackConfig.module.rules.map((rule) => {
          const usesSourceMapLoader =
            rule.enforce === 'pre' &&
            Array.isArray(rule.use) &&
            rule.use.some(
              (loaderEntry) =>
                loaderEntry &&
                typeof loaderEntry === 'object' &&
                typeof loaderEntry.loader === 'string' &&
                loaderEntry.loader.includes('source-map-loader')
            );

          if (usesSourceMapLoader) {
            const existingExclude = rule.exclude
              ? Array.isArray(rule.exclude)
                ? rule.exclude
                : [rule.exclude]
              : [];
            rule.exclude = [...existingExclude, /@mediapipe\/tasks-vision/];
          }

          return rule;
        });
      }

      return webpackConfig;
    },
  },
};
