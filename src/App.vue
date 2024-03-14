<template>
  <div id="mainContainer">
    <router-view>
    </router-view>
  </div>
  <bottom-nav></bottom-nav>
</template>

<script setup>
import BottomNav from '@/pages/widgts/BottomNav'
import {onMounted} from 'vue';
import {useRouter} from 'vue-router';
import {connect} from '@/js/mqtt/index.js'
import {ElNotification} from 'element-plus'
const router=useRouter();
onMounted(()=>{
  router.push("/");
  connect("wss://broker.emqx.io:8084/mqtt").then((res)=>{
    console.log(res);
    ElNotification({
      title:"success",
      message:"MQTT连接成功！",
      type:"success"
    })
  });
})
</script>

<style lang="scss">
*{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
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
