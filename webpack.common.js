const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
        minimize: false
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),    
            title: 'Production'
        })
    ]
};