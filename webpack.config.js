const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.js',
    'script-loader!foundation-sites/dist/js/foundation.js',
    'script-loader!foundation-sites/dist/js/plugins/foundation.dropdownMenu.js',
    './app/app.jsx'
  ],

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },

  externals: {
    jquery: 'jQuery'
  },

  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],

  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./app/components'),
      path.resolve('./app/styles')
    ],
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
  ,

}
;