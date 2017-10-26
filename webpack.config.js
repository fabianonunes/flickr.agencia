var path = require('path')
var Extractor = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    'main': './app/scripts/main.js',
    'styles': './app/styles/main.less'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  externals: {
    jquery: 'jQuery'
  },
  module: {
    rules: [{
      test: /\.js$/, loader: 'babel-loader'
    }, {
      test: /\.less$/,
      loader: Extractor.extract(['css-loader', 'less-loader'])
    }, {
      test: /\.(svg|woff|ttf|eot|woff2)$/,
      loaders: ['file-loader?name=fonts/[name].[hash:base64:5].[ext]']
    }]
  },
  plugins: [
    new Extractor('[name].css')
  ],
  devServer: {
    contentBase: path.resolve('./app'),
    publicPath: '/dist/'
  }
}
