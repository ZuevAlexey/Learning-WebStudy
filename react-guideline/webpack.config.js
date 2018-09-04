const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';

const locations = [
    path.resolve(__dirname, 'frontend'),
];

module.exports = {
    mode: NODE_ENV,
    watch: NODE_ENV === 'development',

    entry: ['babel-polyfill', './frontend/guideline/index.jsx'],
    output: {
        path: path.resolve(__dirname, 'build/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.js$/],
                include: locations,
                use: { loader: 'babel-loader' }
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                include: locations,
                use: { loader: 'url-loader' }
            }, {
                test: /\.(less|css)$/,
                include: locations,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader'   },
                    { loader: 'less-loader'  }
                ]
            },
        ],
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    },
    resolveLoader: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    }
};