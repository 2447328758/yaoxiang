const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    // mode:'development',
    // entry:{
    //   index:'./src/main.js',
    //   vuex:'./src/js/vuex/index.js',
    //   routes:'./src/js/routes/index.js',
    //   mqtt:'./src/js/mqtt/index.js'
    // },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  //开启代理服务器(方法二)
//   devServer: {
    
//     proxy: {
//         //  '/yu'为请求前缀，用于控制是不是走代理，想走代理时就在请求前缀前边加上这个请求前缀
//         '/api': {
//             target: 'http://api.heclouds.com',
//             pathRewrite: { "^/api": "" }, //重写路径  匹配以/yu为开头的路径都变为空字符串 
//             //ws: true, //用于支持websocket
//             changeOrigin: true //用于控制请求头中的host值
//         }
//     }
// }
})


