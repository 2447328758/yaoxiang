<template>
  <router-view></router-view>
</template>

<script setup>
import {onMounted} from 'vue';
import {useRouter} from 'vue-router';
const router=useRouter();
onMounted(()=>{
  router.push("/");
  onMounted(() => {
  })
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
</style>
