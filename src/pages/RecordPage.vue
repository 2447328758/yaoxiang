<template lang="">
    <div>
        <el-row justify="center" align="middle">
          <el-text size="large">服药记录</el-text>
        </el-row>

        <el-table :data="store.state.recd" style="width: 100%">
            <el-table-column prop="date" label="日期"  />
            <el-table-column prop="time" label="时段"  />
            <el-table-column prop="state" label="服药状态"/>
        </el-table>

        <!-- <el-button @click="add()"></el-button> -->
    </div>
</template>
<script setup>
import {useStore} from "vuex"
const store= useStore();


</script>
<style lang="scss">
    
</style>