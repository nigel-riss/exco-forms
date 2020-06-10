const path = require(`path`);
const fs = require(`fs`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const devMode = process.env.NODE_ENV !== 'production';


const PATHS = {
  src: path.join(__dirname, `../src`),
  public: path.join(__dirname, `../public`),
  assets: `assets/`,
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
    filename: `${PATHS.assets}js/[name].[contenthash].js`,
    path: PATHS.public,
    publicPath: `/`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: `babel-loader`,
        exclude: /node_modules/,
      },
{
        test: /\.pug$/,
        loader: `pug-loader`,
      },
{
        test: /\.scss$/,
        use: [
          `style-loader`,
          {
            loader: MiniCssExtractPlugin.loader,
          }, {
            loader: `css-loader`,
            options: { sourceMap: true }
          }, {
            loader: `postcss-loader`,
            options: {
              sourceMap: true,
              config: { path: `postcss.config.js` }
            },
          }, {
            loader: `sass-loader`,
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: `${PATHS.assets}css/[name].[contenthash].css`,
      filename: `${PATHS.assets}css/[name].[contenthash].css`,
    }),

    // new CopyWebpackPlugin([
    //   { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
    //   { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
    //   { from: `${PATHS.src}/static`, to: "" }
    // ]),

    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/, `.html`)}`,
    })),
  ],
};
