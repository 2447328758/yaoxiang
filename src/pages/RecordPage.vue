<template lang="">
    <div>
        <el-row justify="center" align="middle">
          <el-text size="large">服药记录</el-text>
        </el-row>

        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期"  />
            <el-table-column prop="time" label="时段"  />
            <el-table-column prop="state" label="服药状态"/>
        </el-table>

        <!-- <el-button @click="add()"></el-button> -->
    </div>
</template>
<script setup>
import { ref,onMounted } from 'vue';
let tableData = ref({});
tableData.value=[
]


onMounted(()=>{


    for(let i=0;i<3;i++){
        tableData.value.push({
            date:`2024-5-${7+i}`,
            time:"早上",
            state:"已服药"
        })

        tableData.value.push({
            date:`2024-5-${7+i}`,
            time:"中午",
            state:"已服药"
        })

        tableData.value.push({
            date:`2024-5-${7+i}`,
            time:"晚上",
            state:"已服药"
        })
    }
    
})


</script>
<style lang="scss">
    
</style>