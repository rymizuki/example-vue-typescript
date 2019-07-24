const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const srcDir = path.resolve('./src')
const rootDir = path.resolve('./src')

module.exports = {
  entry: srcDir,
  output: {
    path: path.resolve('./public/scripts'),
    filename: '[name].bundle.js',
    publicPath: '/scripts/'
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '~': path.join(srcDir),
      '~~': path.join(rootDir),
      '@': path.join(srcDir),
      '@@': path.join(rootDir)
    }
  },
  plugins: [new VueLoaderPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8000,
    host: '0.0.0.0'
  }
}
