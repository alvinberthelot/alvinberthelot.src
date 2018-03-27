const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CnameWebpackPlugin = require('cname-webpack-plugin')
// const SitemapPlugin = require('sitemap-webpack-plugin')
import SitemapPlugin from 'sitemap-webpack-plugin'

const paths = [
  {
    path: '/',
    priority: '1',
    changeFreq: 'monthly'
  }
]

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader?interpolate'
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/assets/html/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'events.html',
      template: 'src/assets/html/events.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'experiences.html',
      template: 'src/assets/html/experiences.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'langages.html',
      template: 'src/assets/html/langages.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'skills.html',
      template: 'src/assets/html/skills.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'stacks.html',
      template: 'src/assets/html/stacks.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'trainings.html',
      template: 'src/assets/html/trainings.html'
    }),
    new CnameWebpackPlugin({
      domain: 'alvin.berthelot.rocks'
    }),
    new SitemapPlugin('http://alvin.berthelot.rocks', paths)
  ]
}
