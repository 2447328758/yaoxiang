<template lang="">
    <nav-btm>
        <nav-item text="设备状态" :selected="selected==0" @click="selected=0"><Odometer /></nav-item>
        <nav-item text="用户" :selected="selected==1" @click="selected=1"><User></User></nav-item>
    </nav-btm>
</template>
<script setup>
import {watch,ref} from 'vue'
import NavBtm from '@/component/NavBtm'
import NavItem from '@/component/NavItem'
import {User,Odometer} from '@element-plus/icons-vue'
import {useRouter} from 'vue-router'
const router=useRouter();
const selected=ref(0);
const paths = [
    "/",
    "/profile"
]
watch(selected,(n)=>{
    router.push(paths[n]);
})
</script>
<style lang="scss">
    
</style>