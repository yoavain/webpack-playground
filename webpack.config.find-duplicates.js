const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config");
const { DuplicatesPlugin } = require("inspectpack/plugin");

module.exports = merge(baseConfig, {
    plugins: [
        new DuplicatesPlugin({
            emitErrors: false,
            verbose: false
        })
    ]
});
