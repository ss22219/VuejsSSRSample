const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    mode: 'development',
    entry: { main: path.join(__dirname, 'VueApp/client.js') },
    output: {
        publicPath: '/dist/',
        path: path.join(__dirname, 'wwwroot/dist'),
        filename: 'bundle.client.js',
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
        ]
    },
};
