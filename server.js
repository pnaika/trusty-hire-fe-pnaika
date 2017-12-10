/*eslint no-console:0 */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const baseConfig = require('./webpack/baseConfig.js');
const webpackConfig = require('./webpack/config.dev.js');
const devServer = require('./webpack/devServer.js');

new WebpackDevServer(
    webpack(webpackConfig),
    devServer
).listen(baseConfig.defaultPort, baseConfig.defaultHost, (err) => {
    if (err) {
        console.log(err);
    }
    const address = baseConfig.defaultHost + ':' + baseConfig.defaultPort;
    console.log('Listening at ' + address);
});
