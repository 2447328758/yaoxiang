import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'


import {createRouter, createWebHistory,} from "vue-router"
const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })

import routes from './js/routes'
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})
app.use(router)


import store from '@/js/vuex/index'
app.use(store)

app.mount("#app")