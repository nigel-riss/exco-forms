// const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');


const devWebpackConfig = merge(baseWebpackConfig, {
  mode: `development`,
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.public,
    port: 1337,
    overlay: {
      warnings: true,
      errors: true,
    },
    // watchContentBase: true,
  },
});


module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
