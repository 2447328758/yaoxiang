<template lang="">
    <div>
        UserProfile
        <el-row justify='center' align="middle">
            <el-text size=large>服药时间1</el-text>
            <el-divider direction='vertical'></el-divider>
            <el-time-picker v-model="input1" size="large" @change="setEndt(0)" />
        </el-row>
        <el-divider></el-divider>
        <el-row justify='center' align="middle">
            <el-text size=large>服药时间2</el-text>
            <el-divider direction='vertical'></el-divider>
            <el-time-picker v-model="input2" size="large" @change="setEndt(1)" />
        </el-row>
        <el-divider></el-divider>
        <el-row justify='center' align="middle">
            <el-text size=large>服药时间3</el-text>
            <el-divider direction='vertical'></el-divider>
            <el-time-picker v-model="input3" size="large" @change="setEndt(2)" />
        </el-row>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import { useStore } from 'vuex';
const input1 = ref();
const input2 = ref();
const input3 = ref();
const store=useStore();
function setEndt(ord){
    let input;
    switch(ord){
        case 0:input=input1.value;break;
        case 1:input=input2.value;break;
        case 2:input=input3.value;break;
    }
    store.commit("setEndt",{ord:ord,value:input});//
}
</script>
<style lang="scss" scoped>
    
</style>