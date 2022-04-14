const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash].js",
        clean: true,
        assetModuleFilename: "images/[name].[hash].[ext]"
    },
    resolve: {
        extensions: ['.js','jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: '/public/index.html'}),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        static: {
            directory: path.join(__dirname,'dist')
        },
        compress: true,
        open: true,
        port: 8080
    }
}