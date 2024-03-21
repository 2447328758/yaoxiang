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
  }
})
