const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js)$/,
                use: 'babel-loader',
            },
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ]
};
