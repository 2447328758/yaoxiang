<template lang="">
    <div>
        <div ref="left" id="left" v-if='endt.value!=0'>
            <el-row justify=space-around>
              <el-col :span="2">{{leftTime.getHours()-8}}</el-col>
              <el-col :span="1">:</el-col>
              <el-col :span="3">{{leftTime.getMinutes()}}</el-col>
              <el-col :span="1">:</el-col>
              <el-col :span="3">{{leftTime.getSeconds()}}</el-col>
              <el-col :span="1">.</el-col>
              <el-col :span="5">{{leftTime.getMilliseconds()}}</el-col>
            </el-row>            
        </div>
        <el-empty :image-size="35" description="没有设置时间" v-if="endt.value==0">
            <slot ></slot>
        </el-empty>
    </div>
</template>
<script setup>
import {inject,watch,ref,onBeforeUnmount} from 'vue'

const endt = inject("endt");

const left=ref(null);
const leftTime=ref(new Date())
const colors=[
    "#b71c1c","#d32f2f","#f44336","#ef5350"
]
let intervalId,falshCount=true,animateId;
function getLeftTimeString()
{ 

    let time = new Date(endt.value-Date.now())
    if(time.getTime()<=0){
        left.value.innerHTML="0:0:0.000";
        intervalId = setInterval(()=>{
            if(falshCount)
                left.value.style.color="#ffcdd2";
            else
                left.value.style.color=colors[0];
            falshCount=!falshCount;
            
        },500);
        cancelIdleCallback(animateId);//动画结束
        return;
    }
    //如果时间小于30分钟根据时间更改颜色
    if((time.getHours()-8)<=0&&time.getMinutes()<30){
        let i;
        i=(time.getMinutes()*(colors.length)/30).toFixed(0);
        left.value.style.color=colors[i];
    }
    
    leftTime.value=time;
    requestIdleCallback(getLeftTimeString)
}

onBeforeUnmount(() => {
    if(intervalId)
        clearInterval(intervalId)
})
watch(endt,async (nv,ov)=>{
    console.log(nv,ov);
    if(intervalId)
        clearInterval(intervalId);
    animateId = requestIdleCallback(getLeftTimeString);
    console.log(endt)
})
</script>
<style lang="scss" scoped>
@font-face {
    font-family: "阿里妈妈灵动体 VF Thin";
    src: url("./AlimamaAgileVF-Thin.woff2") format("woff2"), url("./AlimamaAgileVF-Thin.woff") format("woff");
    font-display: swap;
}
#left{
    font-family: '阿里妈妈灵动体 VF Thin';
    font-weight:300;
    font-size: 50px;
    transition: var(--el-transition-all);
    color:#66bb6a;
}
.el-empty{
    // border: 1px solid black;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>