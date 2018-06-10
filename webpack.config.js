const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],
  watch: true,
  devtool: 'source-map', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  module: {
    rules:[{
      test: /\.js$/,
      exclude: /node_modules/,
      use:[{
        loader: 'babel-loader'
      }]
    },
    {
      test: /\.(ts|tsx)$/,
      loader: "awesome-typescript-loader"
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 8080,
    contentBase: (__dirname, './dist'),
  }
};