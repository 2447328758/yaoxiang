<template>
    <div class="container">
        <el-row :gutter="0" justify="center">
          <el-col :span="12">
            <el-progress stroke-linecap="round" :width="60" type="circle" :percentage="Number(data.getPercent())" :color="colors" />
          </el-col>
          <el-col :span="12">
            <el-row justify="center">
                <el-col :span="24"><text>{{data.desp}}</text></el-col>
            </el-row>
            <el-row :gutter="0" justify="center">
              <el-col :span="24"><text>{{data.value}}{{data.unit}}</text></el-col>
            </el-row>
          </el-col>
        </el-row>
    </div>
</template>
  
<script setup>
import {defineProps} from 'vue'
const colors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
  ]

defineProps({
    data:Object
});

</script>
<style lang="scss" scoped>
.container{
    display: inline-block;
    box-sizing: content-box;
    width: 45%;
    min-width: 45%;
    max-width: 50%;
    text-align: center;
    margin: 5px;
}
</style>
  