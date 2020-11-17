const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: [
            './public/index.jsx',
            './public/index.html'
        ]
    },
    resolve: {
        extensions: ['.js', '.mjs', '.jsx', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ]
};
