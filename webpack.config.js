const path = require("path");
const MiniCssExtractPlugin =require("mini-css-extract-plugin");
const HtmlWebapckPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin }  = require("clean-webpack-plugin");
const webpack = require("webpack");

function resolve(dir){
    return path.resolve( __dirname, dir);
}
module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "main.js",
        path: resolve('./dist') 
    },
    mode: "development",
    devtool:'inline-source-map',
    devServer: {
        contentBase: "./",
        host:"localhost",  
        port: 8090,
    },
    module:{
        rules: [
            {
                test: /\.css$/, /* 通过正则表达式匹配 CSS 文件*/
                use:[ 'style-loader','css-loader'], /* 处理顺序从右往左进行 */
            }
        ]
    },
    // plugins: [
    //     new CleanWebpackPlugin(),
    //     new MiniCssExtractPlugin({
    //         filename: "[name].css",
    //         chunkFilename: "[id].css"
    //     }),
    //     new HtmlWebapckPlugin({
    //         title: "Demo",
    //         filename: "index.html",
    //         template: resolve('./src/index.html'),
    //         minify: {
    //             collapseWhitespace: true,
    //             removeComments: true,
    //             removeAttributeQuotes: false
    //         },
    //     }),
    // ]
}