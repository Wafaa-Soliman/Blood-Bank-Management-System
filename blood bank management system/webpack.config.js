
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const CopyPlugin = require('copy-webpack-plugin');
const pages = ["home", "pages/register"];

const devMode = process.env.NODE_ENV !== 'production';
module.exports = {
  entry: [
    './src/index.js'
  ],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/js/[name].js",
    chunkFilename: "assets/js/[name].[id].js",
  },
  devServer: {
    inline: false,
    contentBase: './dist'
  },
  module: {
    rules: [
      
      {
        test: /\.bundle\.js$/,
        use: {
          loader: 'bundle-loader',
          options: {
            lazy: true,
            name: 'chunk'
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: true,
              name: './images/[sha512:hash:base64:7].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './webfonts/[sha512:hash:base64:7].[ext]',
              publicPath: '../',
              outputPath: 'assets/',
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return (
                  path.relative(
                    path.dirname(resourcePath),
                    context
                  ) + "/"
                );
              }
            }
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ]
      },
      
    ],
  },
  
  plugins: [
    ...pages.map(page => new HtmlWebpackPlugin({
      template: "./src/" + page + ".html",
      filename: page + ".html",
      title: 'Project',
      inject: true,
      hash: true,
      minify: {
        collapseWhitespace: true,
        html5: true,
        removeComments: true,
        removeEmptyAttributes: true,
        minifyCSS: true
      }
    })),
    new MiniCssExtractPlugin({
      filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
      chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    }),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20
    }),
    new webpack.ProvidePlugin({
      $: "jquery", // Map jQuery to $
      jQuery: "jquery" // Add jQuery
    }),
    ,
    new CopyPlugin([
      {
        from: 'src/assets/js/plugins',
        to: './js/plugins/[name].[ext]',
        toType: 'template',
      },
    ]),
  ],
};