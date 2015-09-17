var path = require('path');

module.exports = {
  entry: getEntrySources(['./src/js/index.js']),
  output: {
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  devtool: 'eval',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 versions',
          'sass?outputStyle=expanded'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=8192',
          'img'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'react-hot',
          'babel?stage=0'
        ]
      }
    ]
  }
};

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}
