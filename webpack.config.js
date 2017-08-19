const path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/,
                ],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [ ['es2015', {modules: false}], 'es2015' ],
                        plugins: [ require('babel-plugin-transform-object-rest-spread') ],
                    },
                }],
            },
        ],
    },
    devtool: '#source-map',
}
