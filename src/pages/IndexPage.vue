<template lang="">
    <div>
        indexpage
        <el-button type="primary" @click="user()"></el-button>
    </div>
</template>
<script setup>
import {useStore} from 'vuex';
const store = useStore();

import {useRouter} from 'vue-router';
const router=useRouter();

function user(){
    console.log(store.state.state_test);
    router.push("/profile");
}
</script>
<style lang="scss">
    
</style>