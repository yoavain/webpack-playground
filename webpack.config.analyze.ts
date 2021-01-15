import type * as webpack from "webpack";
import { baseConfig } from "./webpack.config";
import { merge } from "webpack-merge";
import { BundleAnalyzerPlugin }  from "webpack-bundle-analyzer";

export const webpackAnalyzerConfig: webpack.Configuration = merge(baseConfig, {
    plugins: [new BundleAnalyzerPlugin()]
});

export default webpackAnalyzerConfig;
