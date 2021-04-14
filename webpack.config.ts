import type * as webpack from "webpack";
import "webpack-dev-server";
import * as path from "path";
import CopyPlugin from "copy-webpack-plugin";

export const baseConfig: webpack.Configuration = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: { configFile: "tsconfig.build.json" },
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: "file-loader",
                options: {
                    name: "[path][name]-[hash].[ext]"
                }
            }
        ]
    },
    resolve: {
        alias: {
            "~root": __dirname,
            "~src": path.resolve(__dirname, "src"),
            "~resources": path.resolve(__dirname, "resources")
        }
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "html", to: "." }]
        })
    ],
    // @ts-ignore
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};

export default baseConfig;