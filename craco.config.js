module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      const oneOfLocation = webpackConfig.module.rules.findIndex((rule) =>
        Boolean(rule.oneOf)
      );
      const rules = webpackConfig.module.rules[oneOfLocation].oneOf;
      rules.push({
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      });
      return webpackConfig;
    },
  },
};
