const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';

const locations = [
    path.resolve(__dirname, 'frontend'),
    path.resolve(__dirname, 'backend')
];

const common = {
    mode: NODE_ENV,
    watch: NODE_ENV === 'development',

    plugins: [
        new webpack.DefinePlugin({
            __dirName: '__dirname',
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            NODE_ENV: NODE_ENV,
            routing: __dirname + '/route.config.js',
        }),
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    },
    resolveLoader: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    }
};

const frontend = {
    entry: ['babel-polyfill', './frontend/entry.js'],
    output: {
        path: path.resolve(__dirname, 'build/public'),
        chunkFilename: 'chunk.[name].js',
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
                test: [/\.less$/, /\.css$/],
                include: locations,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader'   },
                    { loader: 'less-loader'  }
                ]
            },
        ],
    },
};

const backend = {
    entry: ['babel-polyfill', './backend/entry.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.js'
    },
    target: 'node',
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
                test: [/\.less$/, /\.css$/],
                include: locations,
                use: [
                    { loader: 'css-loader'   },
                    { loader: 'less-loader'  }
                ]
            },
        ],
    },
};

module.exports = [
    Object.assign({} ,common, frontend),
    Object.assign({} ,common, backend)
];