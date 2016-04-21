module.exports = {
    entry: [
        './app/index.jsx'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index.js",
        library: 'shared-components',
        libraryTarget: 'umd'
    },
    externals: {
        'react': 'react'
    },
    module: {
        loaders: [
            {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.svg$/, loader: 'svg-inline'}
        ]
    },
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
