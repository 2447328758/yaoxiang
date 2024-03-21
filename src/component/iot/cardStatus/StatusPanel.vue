<template>
    <div class="container">
        <el-row :gutter="0" justify="center" align="middle">
          <el-col :span="12">
            <el-progress stroke-linecap="round" :width="60" type="circle" :status="data.value==0?'warning':'success'" :percentage="100" />
          </el-col>
          <el-col :push="3" :span="12">
            <el-row justify="center" class="text">
                <el-col :span="24"><text>{{data.desp}}</text></el-col>
            </el-row>
            <el-row justify="center" class="text">
              <el-col :span="24"><text>{{data.value==0?"OFF":"ON"}}</text></el-col>
            </el-row>
          </el-col>
        </el-row>
    </div>
</template>
  
<script setup>
import {defineProps} from 'vue'
defineProps({
    data:Object
});

</script>
<style lang="scss" scoped>
.container{
    display: inline-block;
    box-sizing: content-box;
    text-align: center;
    margin: 5px;
    .text{
      box-sizing: content-box;
    }
}
</style>
  