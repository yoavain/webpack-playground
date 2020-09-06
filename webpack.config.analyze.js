const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
    plugins: [new BundleAnalyzerPlugin()]
});
