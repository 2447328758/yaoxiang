<template lang="">
    <div>
        UserProfile
        <div>
            <input v-model="input" clearable placeholder="请输入时间(yyyy-MM-dd hh:mm:ss)"/>
            <el-button type="primary"  size='mini' @click="setEndt()">确认</el-button>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import { useStore } from 'vuex';
const input = ref();
const store=useStore();
function setEndt(){
    store.state.endt.value=new Date(input.value).getTime();
    localStorage.endt=store.state.endt;
}
</script>
<style lang="">
    
</style>