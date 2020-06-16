const PnpWebpackPlugin = require("pnp-webpack-plugin");

module.exports = () => {
  return {
    input: "src/index.tsx",
    output: {
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: require.resolve("babel-loader"),
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      plugins: [
        PnpWebpackPlugin,
      ]
    },
    resolveLoader: {
      plugins: [
        // This is necessary to make webpack work with Yarn PnP:
        PnpWebpackPlugin.moduleLoader(module),
      ],
    },
  }
}
