const path = require('path');
const baseConfig = require('./baseConfig');
const cookie = require('cookie');
const debugProxy = true;

let devServer = {
    contentBase: baseConfig.srcPath,
    historyApiFallback: true,
    hot: true,
    port: baseConfig.defaultPort,
    publicPath: baseConfig.publicPath,
    noInfo: false,
    stats: { colors: true },
    disableHostCheck: true,
    proxy: { }
};

if (debugProxy) {
    Object.keys(devServer.proxy).forEach(function (proxyKey) {
        Object.assign(devServer.proxy[proxyKey], {
            // adding a key-value pair to every proxy
            logLevel: 'debug'
        });
    });
}

module.exports = devServer;
