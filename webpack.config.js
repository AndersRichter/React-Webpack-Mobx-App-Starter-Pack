const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve('build'),
    filename: '[name].bundle.js',
  },
  resolve: {
    alias: {
      api: path.resolve('src', 'api'),
      pages: path.resolve('src', 'pages'),
      components: path.resolve('src', 'components'),
      constants: path.resolve('src', 'constants'),
      icons: path.resolve('src', 'assets', 'icons'),
      models: path.resolve('src', 'models'),
      hooks: path.resolve('src', 'hooks'),
      styles: path.resolve('src', 'styles'),
      assets: path.resolve('src', 'assets'),
    },
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(css|styl)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              modules: {
                localIdentName: '[local]--[hash:base64:5]',
              },
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer({ remove: false })]
            }
          },
          {
            loader: "stylus-loader",
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
};
