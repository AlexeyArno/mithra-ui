const path = require('path');
const webpack = require('webpack');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
      sources.push('webpack-dev-server/client?http://localhost:8080');
      sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}


module.exports = {
  entry: getEntrySources(['./src/index.tsx']),
  watch: true,
  devtool: 'source-map', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    alias:{
      src: path.resolve('./src')
    }
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
    },
    {
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options:{
            data: `@import "variables";`,
            includePaths:[
              path.resolve(__dirname, "src")
            ]
          }
        }

      ]
   } 
  ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 8080,
    contentBase: (__dirname, './dist'),
  }
};