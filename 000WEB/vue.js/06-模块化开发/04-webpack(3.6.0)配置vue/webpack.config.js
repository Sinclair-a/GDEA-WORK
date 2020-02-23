const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //__dirname是node语法里的一个全局变量，表示当前文件的绝对路径
    filename: 'bundle.js',
    publicPath: './dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/, //正则运算符
        //css-loader负责加载css文件
        //style-loader负责将样式添加到DOM
        //webpack加载loder时，是从右往左加载的
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              //加载的图片，小于limit时,会将图片编译成base64字符串形式
              //加载的图片，大于limit时,需要使用file-loader模块进行加载
              limit: 102400, //单位:B
              name: 'img/balck-gold/[黑金锯手].[hash:8].[ext]'
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ],
  },
  resolve: {
    //省略扩展名
    extensions: ['.js','.vue','.css'],
    //alias: 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}