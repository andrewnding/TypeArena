const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: 'source-map',
};