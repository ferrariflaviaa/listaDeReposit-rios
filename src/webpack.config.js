const path = require('path');
const { PassThrough } = require('stream');
const ReactRefresWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: PassThrough.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx','.ts','tsx'],
    },
    plugins:[
        new ReactRefresWebpackPlugin()

    ],
    module: {
        rules: [
            {
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: 'babel-loader', 
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'], 
            }
        ],
    }
};