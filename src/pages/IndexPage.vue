<template lang="">
    <div>
        indexpage
        <el-button type="primary" @click="user()"></el-button>
        <div></div>
        <card-progress title="药箱数据" :data="store.state.numberData">

        </card-progress>
        <card-status title="药箱状态" :data="store.state.statusData">

        </card-status>
        <card-count-down title="距离下次服药"
        :endt="endt"
        ref="cardCD">
            <div>
                <input v-model="input" clearable placeholder="请输入时间(yyyy-MM-dd hh:mm:ss)"/>
                <el-button type="primary"  size='mini' @click="setEndt()">确认</el-button>
            </div>
        </card-count-down>
        
        
    </div>
</template>
<script setup>
import {useStore} from 'vuex';
const store = useStore();

import {useRouter} from 'vue-router';
const router=useRouter();

import CardProgress from '@/component/iot/cardProgress/CardProgress'
import CardStatus from '@/component/iot/cardStatus/CardStatus'
import { ElMessage } from 'element-plus'
import CardCountDown from '@/component/iot/countDown/CardCountDown.vue';
import { ref,provide,onMounted } from 'vue';
const endt=ref({value:0});//这里使用{}否则不能被引用
const input = ref();
provide("endt",endt);
function setEndt(){
    endt.value=new Date(input.value).getTime();
}
function user(){
    ElMessage({

            message: 'Connect to emqx success!',
            type: 'success',
        })
    console.log(store.state.state_test);
    router.push("/profile");
}
onMounted(()=>{
console.log(endt)

})
</script>
<style lang="scss">
    
</style>