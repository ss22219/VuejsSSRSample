const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    target: 'node',
    mode: 'development',
    entry: path.join(__dirname, 'VueApp/server.js'),
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, 'wwwroot/dist'),
        filename: 'bundle.server.js',
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.vue\.html$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname,
                exclude: /node_modules/
            },
            {
                type: 'javascript/auto',
                test: /\.json?$/,
                loader: 'json-loader'
            }
        ]
    },
    "resolveLoader": {
        "moduleExtensions": ["-loader"]
    }
};
