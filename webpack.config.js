var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/index.jsx'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },
    module: {
        loaders: [
            {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.svg$/, loader: 'svg-inline'}
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ],
    resolve: {
        extensions: [
            "",
            ".webpack.js",
            ".web.js",
            ".js",
            '.jsx'
        ]
    }
};
