import type * as webpack from "webpack";
import { baseConfig } from "./webpack.config";
import { merge } from "webpack-merge";
import { DuplicatesPlugin } from "inspectpack/plugin";

export const webpackConfigFindDuplicates: webpack.Configuration = merge(baseConfig, {
    plugins: [
        new DuplicatesPlugin({
            emitErrors: false,
            verbose: false
        })
    ]
});

export default webpackConfigFindDuplicates;
