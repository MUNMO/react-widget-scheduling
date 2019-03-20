const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HTMLPlugin = new HTMLWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports = {
    entry: ['babel-polyfill', "./src/index.js"],
    output: {
        path: path.resolve('dist'),
        filename: 'widget.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
           
            {
                test: /\.css$/,
               use:[
                { loader: "style-loader" },
                { loader: "css-loader" }
                
                ]
                
            },
        ]
    },
     devServer: {
        historyApiFallback: true,
      },
    devtool: 'cheap-module-eval-source-map',
    plugins: [HTMLPlugin]
};