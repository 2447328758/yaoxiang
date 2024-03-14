<template lang="">
    <div>
        indexpage
        <el-button type="primary" @click="user()"></el-button>
        <nav-btm>
            <nav-item></nav-item>
            <nav-item></nav-item>
            <nav-item :selected="true"></nav-item>
            <nav-item :selected="true"></nav-item>
        </nav-btm>
    </div>
</template>
<script setup>
import {useStore} from 'vuex';
const store = useStore();

import {useRouter} from 'vue-router';
const router=useRouter();

import NavBtm from '@/component/NavBtm'
import NavItem from '@/component/NavItem'

function user(){
    console.log(store.state.state_test);
    router.push("/profile");
}
</script>
<style lang="scss">
    
</style>