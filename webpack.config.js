const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use:{
                loader: "babel-loader"
            }

          },
          {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader", // compiles Sass to CSS, using Node Sass by default
                
            ]
          },

          {
            test: /\.css$/,
           use:[
            { loader: "style-loader" },
            { loader: "css-loader" }
            
            ]
            
          },

          {
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
          
          {
            test: /\.jsx?$/,
            use: ['babel-loader', 'astroturf/loader'],
          },
          
          {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
    
      },
      
    resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: __dirname + '/app',
      publicPath: '/',
      filename: 'widget.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
    devServer: {
      contentBase: './app'
    },
    performance: { hints: false }
  };