const merge = require(`webpack-merge`);
const {CleanWebpackPlugin} = require(`clean-webpack-plugin`);
const baseWebpackConfig = require(`./webpack.base.config.js`);


const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: `production`,
  output: {
    publicPath: `./`,
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});


module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
