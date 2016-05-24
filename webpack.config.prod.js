var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './client/todos'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
        include: path.join(__dirname, 'client')
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'client'),
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
};
