// 'use strict'
// const path = require('path')

// function resolve(dir) {
//   return path.join(__dirname, '..', dir)
// }
// module.exports = {
//   chainWebpack: (config) => {
//     config.resolve.alias
//       //set第一个参数：设置的别名，第二个参数：设置的路径
//       .set('@', resolve('./src'))
//       .set('assets', resolve('./src/assets'))
//       .set('components', resolve('./src/components'))
//       .set('views', resolve('./src/views'))
//       .set('network', resolve('./src/network'))
//   }
// }

module.exports = {
  resolve : {
    alias: {
      '@': './src',
      'assets': '@/assets',
      'common': '@/common',
      'components': '@/components',
      'network': '@/network',
    }
  }
}