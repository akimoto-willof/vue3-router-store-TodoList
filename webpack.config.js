const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        path: `${__dirname}/public`,
        filename: "main.js",
    },
    devServer: {
        static: [
            {
                directory: `${__dirname}/public`,
            },
        ],
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                ],
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "vue-loader",
                    },
                ],
            },
            {
                test: /\.(css|sass|scss)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true, // develop時のみ
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg)/,
                type: "asset/resource",
                generator: {
                    filename: "images/[name][ext]",
                },
                use: [
                    {
                        loader: "image-webpack-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "./assets/style.css",
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development"),
            },
        }),
    ],
};
