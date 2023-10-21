const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.[contenthash].js',
    assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),

    // banner
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'components/wbp-banner.html'),
      filename: 'wbp-banner.html',
    }),

    // part
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'components/wbp-part.html'),
      filename: 'wbp-part.html',
    }),

    // event
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'components/wbp-event.html'),
      filename: 'wbp-event.html',
    }),

    // aboniment
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'components/wbp-aboniment.html'),
      filename: 'wbp-aboniment.html',
    }),

    // saving
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'components/wbp-saving.html'),
      filename: 'wbp-saving.html',
    }),

    // footer
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'components/wbp-footer.html'),
      filename: 'wbp-footer.html',
    }),

    //*

    // banner
    new HtmlWebpackPartialsPlugin({
      path: './src/components/wbp-banner.html',
      location: 'wbp-banner',
      template_filename: ['index.html'],
    }),

    // part
    new HtmlWebpackPartialsPlugin({
      path: './src/components/wbp-part.html',
      location: 'wbp-part',
      template_filename: ['index.html'],
    }),

    // event
    new HtmlWebpackPartialsPlugin({
      path: './src/components/wbp-event.html',
      location: 'wbp-event',
      template_filename: ['index.html'],
    }),

    // aboniment
    new HtmlWebpackPartialsPlugin({
      path: './src/components/wbp-aboniment.html',
      location: 'wbp-aboniment',
      template_filename: ['index.html'],
    }),

    // saving
    new HtmlWebpackPartialsPlugin({
      path: './src/components/wbp-saving.html',
      location: 'wbp-saving',
      template_filename: ['index.html'],
    }),

    // footer
    new HtmlWebpackPartialsPlugin({
      path: './src/components/wbp-footer.html',
      location: 'wbp-footer',
      template_filename: ['index.html'],
    }),

    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['dist'],
        },
        onEnd: {
          copy: [
            {
              source: path.join('src', 'static'),
              destination: 'dist',
            },
          ],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|webp|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              ['svgo', { name: 'preset-default' }],
            ],
          },
        },
      }),
    ],
  },
};
