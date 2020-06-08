const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
  src: path.resolve(__dirname, `../src`),
  public: path.resolve(__dirname, `../public`),
};


const PAGES_DIR = `${PATHS.src}/pug`;
const PAGES = fs.readdirSync(PAGES_DIR)
  .filter(fileName => fileName.endsWith(`.pug`));


module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: PATHS.src,
  },
  output: {
    path: PATHS.public,
  },
  module: {
    rules: [{
      test: /\.pug$/,
      loader: `pug-loader`,
    }]
  },
  plugins: [
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/, '.html')}`,
    })),
  ],
};
