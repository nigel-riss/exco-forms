const merge = require(`webpack-merge`);
const baseWebpackConfig = require(`./webpack.base.config.js`);


const devWebpackConfig = merge(baseWebpackConfig,{
  mode: `development`,
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.public,
    port: 1337,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  module: {
    rules: [],
  },
});


module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
