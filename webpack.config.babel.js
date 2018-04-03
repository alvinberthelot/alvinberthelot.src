const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CnameWebpackPlugin = require('cname-webpack-plugin')
// const SitemapPlugin = require('sitemap-webpack-plugin')
import SitemapPlugin from 'sitemap-webpack-plugin'
const marked = require('marked')
const renderer = new marked.Renderer()

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
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdown-loader',
            options: {
              pedantic: true,
              renderer
            }
          }
        ]
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
      template: 'src/index.hbs'
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      template: 'src/blog.hbs'
    }),
    new HtmlWebpackPlugin({
      filename: 'cv.html',
      template: 'src/cv.hbs'
    }),
    new HtmlWebpackPlugin({
      filename: 'trainings.html',
      template: 'src/trainings.hbs'
    }),
    new HtmlWebpackPlugin({
      filename: 'events.html',
      template: 'src/events.hbs'
    }),
    new HtmlWebpackPlugin({
      filename: 'blog/ng-europe-2016.html',
      template: 'src/blog/ng-europe-2016.md'
    }),
    new HtmlWebpackPlugin({
      filename: 'blog/lets-sketch-together.html',
      template: 'src/blog/lets-sketch-together.md'
    }),
    new HtmlWebpackPlugin({
      filename: 'blog/sublime-text-preferences.html',
      template: 'src/blog/sublime-text-preferences.md'
    }),
    new HtmlWebpackPlugin({
      filename: 'blog/pepper.html',
      template: 'src/blog/pepper.md'
    }),
    new HtmlWebpackPlugin({
      filename: 'blog/vorlon-js.html',
      template: 'src/blog/vorlon-js.md'
    }),
    new CnameWebpackPlugin({
      domain: 'alvin.berthelot.rocks'
    }),
    new SitemapPlugin('http://alvin.berthelot.rocks', paths)
  ]
}
