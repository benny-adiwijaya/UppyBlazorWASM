const path = require('path');

module.exports = {
    entry: {
        site: './src/index.js'
    },
    output: {
        filename: 'site.index.js',
        path: path.resolve(__dirname, '..', 'dist')
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(eot|woff(2)?|ttf|otf|svg)$/i,
                type: 'asset'
            },
        ]
    }
};