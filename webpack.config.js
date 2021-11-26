const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./vue/main.js",
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.(png|jpg)/,
                type: "asset/resource",
                generator: {
                    filename: "images/[name][ext]",
                },
                use: [],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "./assets/style.css",
        }),
        new CleanWebpackPlugin(),
    ],
};
