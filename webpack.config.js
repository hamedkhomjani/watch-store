let path = require ("path");

let webpack = require("webpack");

let HtmlWebpackPlugin = require( "html-webpack-plugin");

module.exports = {
    entry: {
        app: './watch-store/watch-store.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[chunkhash].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
        rules: [
            {
                test: /\.(jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.(css)$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        // @ts-ignore
        new webpack.optimize.AggressiveSplittingPlugin({
            minSize: 30000,
            maxSize: 50000
        }),
        new HtmlWebpackPlugin({
            base: "/",
            chunks: ['app'],
            filename: 'index.html',
            template: 'index.html'
        }),
    ],
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