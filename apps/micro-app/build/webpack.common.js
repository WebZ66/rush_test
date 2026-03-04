// build/webpack.base.js
const pkg = require('../package.json')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const name = pkg.name
module.exports = {
  entry: path.join(__dirname, '../src/index.ts'), // 入口文件
  output: {
    filename: 'static/js/[name].js', // 每个输出js的名称
    path: path.join(__dirname, '../dist'), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    library: `vue2-subapp-[name]`,
    libraryTarget: 'umd',
 
  },
  resolve: {
    extensions: ['.js', '.cjs', '.ts', '.vue', '.mjs', '.less'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // 匹配.vue文件
        use: 'vue-loader' // 用vue-loader去解析vue文件
      },
      {
        test: /\.ts$/, // 匹配.ts文件
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-typescript',
                {
                  allExtensions: true //支持所有文件扩展名(重要)
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
      inject: true // 自动注入静态资源
    })
  ]
}
