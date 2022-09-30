const path = require('path');
const port = 5123;

// import { BrowserSyncPlugin } from 'browser-sync-webpack-plugin';
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: './src.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  /* plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port,
      server: { baseDir: ['public'] }
    })
  ], */
  devServer: {
    historyApiFallback: true,
/*     static: {
      directory: path.resolve(__dirname, '/'),
    }, */
    client: {
      overlay: true,
      progress: true,
      logging: 'info',
    },
    open: true,
    compress: true,
    hot: true,
    watchFiles: {
      options: {
        ignored: /node_modules/,
      } 
    },
    port,
  },
};