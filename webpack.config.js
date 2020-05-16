import path from "path";

import { optimize } from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import MinifyPlugin from "babel-minify-webpack-plugin";

// import cssnano from "cssnano";
// import postcssPresetEnv from "postcss-preset-env";

export default {
    mode: "development",
    entry: {
        app: './watch-store.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[chunkhash].js",
        chunkFilename: "[chunkhash].js"
    },
    cache: true,
    plugins: [
        // @ts-ignore
        new optimize.AggressiveSplittingPlugin({
            minSize: 30000,
            maxSize: 50000
        }),
        new HtmlWebpackPlugin({
            base: "/",
            chunks: ['app'],
            filename: 'index.html',
            template: 'index.html'
        }),
        new CopyPlugin({
            // @ts-ignore
            patterns: [{
                from: "assets",
                to: "assets",
                globOptions: {
                    dot: true,
                    gitignore: true,
                    ignore: ['**/.DS_Store']
                }
            }, {
                from: "watch-store.css",
                to: "watch-store.css"
            }]
        }),
        new MinifyPlugin({}, {}),
    ],
    module: {
        rules: [{
            test: /\.css$/i,
            use: ['to-string-loader', {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        // postcssPresetEnv,
                        // cssnano
                    ]
                }
            }],
        }, {
            test: /\.js$/,
            exclude: /node_modules(?!\/(lit-html|lit-element|lit-element-router))/,
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                ie: '11'
                            }
                        }
                    ]
                ],
                plugins: [
                    ['@babel/plugin-transform-runtime'],
                    // ['@babel/plugin-proposal-class-properties', { 'loose': true }],
                    // ['@babel/plugin-transform-classes', { 'loose': true }]
                ],
            }
        }]
    },
    devServer: {
        host: "0.0.0.0",
        useLocalIp: true,
        overlay: {
            warnings: true,
            errors: true
        },
        port: 8080,
        open: true,
        historyApiFallback: true
    }
};
