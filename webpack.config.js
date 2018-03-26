const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist'
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
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
