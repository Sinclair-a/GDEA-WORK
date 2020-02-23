const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'), //__dirname是node语法里的一个全局变量，表示当前文件的绝对路径
    filename: 'bundle.js'
  }
}