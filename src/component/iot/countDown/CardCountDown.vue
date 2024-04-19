<template>
    <el-card>
        <template #header>
            <div id="card-header">
                <span>{{title}}</span>
            </div>
        </template>
        <count-down><slot></slot></count-down>
    </el-card>
</template>
  
<script setup>
import CountDown from '@/component/iot/countDown/CountDown'
import { defineProps } from 'vue';
defineProps({
    title:{
        default:"距离下次服药",
        type:String
    }
})
</script>
<style lang="scss" scoped>
#card-header{
    font-family: inherit;
    font-weight: bold;
    margin: 5px;
}
</style>
  