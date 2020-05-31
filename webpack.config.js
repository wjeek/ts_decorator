const path = require('path');

module.exports = {
  entry: {
    'src/demo': './rule.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'wx',
    jsonpFunction: 'morModuleLoader'
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    moduleIds: 'named',
    minimize: false,
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /\/(node_modules|npm_components|mock|mor-core)\//,
          enforce: true,
          reuseExistingChunk: true,
          chunks: 'all',
          priority: 2,
        },
        commons: {
          name: 'commons',
          test: /^((?!\/(node_modules|npm_components|mock)\/).)*$/,
          enforce: true,
          reuseExistingChunk: true,
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  },
  mode: 'production'
};
