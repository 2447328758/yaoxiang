<template>
  <div id="mainContainer">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  <div style="min-height: 70px;"></div>
  <bottom-nav></bottom-nav>
</template>

<script setup>
import BottomNav from '@/pages/widgts/BottomNav'
import {useRouter} from 'vue-router';
import {connect} from '@/js/mqtt/index.js'
import {ElNotification} from 'element-plus'
import {useStore} from 'vuex'
import {onBeforeMount} from "vue"
const router=useRouter();
const ustore = useStore();

onBeforeMount(()=>{
  router.push("/");
  connect("wss://broker.emqx.io:8084/mqtt").then((res)=>{
    console.log(res);
    ElNotification({
      title:"success",
      message:"MQTT连接成功！",
      type:"success"
    })
  });
  ustore.commit("initStorage")
  console.log("获取本地记录成功！")
})


//退出前保存缓存数据
global.addEventListener("beforeunload",()=>{
  ustore.commit("saveStorage")
})
</script>

<style lang="scss">
@font-face {
    font-family: "阿里妈妈灵动体 VF Thin";
    src: url("./assets//AlimamaAgileVF-Thin.woff2") format("woff2"), url("./assets/AlimamaAgileVF-Thin.woff") format("woff");
    font-display: swap;
}

*{
  font-family: "阿里妈妈灵动体 VF Thin",system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-weight: bolder;
  transition: var(--el-transition-all);

  transition: var(--el-transition-box-shadow);
  transition: var(--el-transition-color);
  transition: var(--el-transition-border);
  transition: var(--el-transition-fade-linear);
}

body{
  background-color: var(--el-bg-color-page);
}


#mainContainer{
  padding: 5px;
}

</style>
