const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context: process.cwd(),
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { legacy: true }],
                            ["@babel/plugin-proposal-class-properties", { loose: true }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader", "css-loader"
                ]
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2)$/,
                use: [
                    "url-loader"
                ]
            }
        ]
    },
    plugins: [new htmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        contentBase: path.resolve('dist')
    }
};
