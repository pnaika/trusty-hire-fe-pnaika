require('babel-polyfill');

const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./baseConfig');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const absoluteUrl = `http://${baseConfig.defaultHost}:${baseConfig.defaultPort}${baseConfig.publicPath}`;

const config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        `webpack-dev-server/client?${absoluteUrl}`, // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        'react-hot-loader/patch',
        `${baseConfig.srcPath}/index.dev` // Your appʼs entry point
    ],
    output: {
        path: path.join(__dirname, '/../dist'),
        filename: 'bundle.js',
        // when style-loader's sourceMap is activated,
        // public path has to be absoluteUrl for glyphicons lo be loaded properly
        // https://github.com/webpack-contrib/style-loader
        publicPath: absoluteUrl
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(baseConfig.srcPath, 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            'process.env.AUTH_CLIENT_ID': '"H9u3iiiYnEfhLlcyUxrMVE2qTXqnsQRz"'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        // Moment.js bundles large locale files by default due to how Webpack interprets its code.
        // This is a practical solution that requires the user to opt into importing specific locales.
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new OpenBrowserPlugin({ url: absoluteUrl })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: baseConfig.srcPath,
                enforce: 'pre',
                loader: 'eslint-loader'
            },
            {
                test: /\.(js|jsx)$/,
                use: ['react-hot-loader/webpack', 'babel-loader'],
                include: baseConfig.srcPath
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    'resolve-url-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss/,
                use: [
                    {
                        loader: 'style-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(ttf|ico|eot|png|jpg|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            }
        ]
    }
};

module.exports = config;
