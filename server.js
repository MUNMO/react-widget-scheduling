 const express = require('express')
 const app = express()
 const path = require('path')
 const webpack = require('webpack');
 const webpackConfig = require('./webpack.config.js');
 const port = process.env.PORT || 3000
 const compiler = webpack(webpackConfig);
 const webpackDevMiddleware = require('webpack-dev-middleware');


app.use(express.static(__dirname + '/app')); 

app.use(webpackDevMiddleware(compiler,{
  hot: true,
  filename: 'widget.js',
  publicPath: '/',
  stats: {
    colors: true,
  },

  historyApiFallback: true,
 
}));


// app.listen(port, () => console.log("Listening on Port", port)) 
app.listen(port, function () {
  console.log(`Online-Scheduling app!`);
 });
 