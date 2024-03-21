<template lang="">
    <div>
        indexpage
        <el-button type="primary" @click="user()"></el-button>
        <div></div>
        <card-progress title="药箱数据" :data="store.state.numberData">

        </card-progress>
        <card-status title="药箱状态">

        </card-status>
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
function user(){
    ElMessage({

            message: 'Connect to emqx success!',
            type: 'success',
        })
    console.log(store.state.state_test);
    router.push("/profile");
}
</script>
<style lang="scss">
    
</style>