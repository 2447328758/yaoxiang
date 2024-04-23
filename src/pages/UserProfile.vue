<template lang="">
    <div>
        <el-row justify='center' align="middle">
            <el-text size=large>服药时间(早)</el-text>
            <el-divider direction='vertical'></el-divider>
            <el-time-picker v-model="input1" size="large" @change="setEndt(0)" />
        </el-row>
        <el-divider></el-divider>
        <el-row justify='center' align="middle">
            <el-text size=large>服药时间(中)</el-text>
            <el-divider direction='vertical'></el-divider>
            <el-time-picker v-model="input2" size="large" @change="setEndt(1)" />
        </el-row>
        <el-divider></el-divider>
        <el-row justify='center' align="middle">
            <el-text size=large>服药时间(晚)</el-text>
            <el-divider direction='vertical'></el-divider>
            <el-time-picker v-model="input3" size="large" @change="setEndt(2)" />
        </el-row>
        <el-divider></el-divider>
        <el-row justify='space-around' align="middle">
            <el-text>药品A</el-text>
            <el-input-number v-model="form.a" placeholder="a药数量" max="9" min="0" size="small" value-on-clear="min"></el-input-number>
            <el-divider direction='vertical'></el-divider>
            <el-text>药品B</el-text>
            <el-input-number v-model="form.b" placeholder="b药数量" max="9" min="0" size="small" value-on-clear="min"></el-input-number>
        </el-row>
        <el-row justify='space-around' align="middle">
            <el-text>药品C</el-text>
            <el-input-number v-model="form.c" placeholder="c药数量" max="9" min="0" size="small" value-on-clear="min"></el-input-number>
            <el-divider direction='vertical'></el-divider>
            <el-text>药品D</el-text>
            <el-input-number v-model="form.d" placeholder="d药数量" max="9" min="0" size="small" value-on-clear="min"></el-input-number>
        </el-row>
        <el-row justify="end">
            <el-button style="margin:5px;" type="primary" @click="setDis()">设置</el-button>
        </el-row>

     
        <!-- <el-button @click="send()">test send(发送uint8array(12344))</el-button> -->

    </div>
</template>
<script setup>
import {reactive,ref} from 'vue'
import { useStore } from 'vuex';
import { sendCmd } from '@/js/mqtt';
import { ElMessage } from 'element-plus';
const input1 = ref();
const input2 = ref();
const input3 = ref();
const form =reactive({
    a:0,
    b:0,
    c:0,
    d:0
}) 
const store=useStore();
import {to2bit} from '../js/utils/nf'

function setEndt(ord){
    let input;
    let prefix=""
    switch(ord){
        case 0:input=input1.value;prefix='mon';break;
        case 1:input=input2.value;prefix='aft';break;
        case 2:input=input3.value;prefix='nig';break;
    }
    store.commit("setEndt",{ord:ord,value:input});//
    //todo 发送时间命令
    //let a = new Uint8Array(2);
    //a[0]=input.getHours();a[1]=input.getMinutes();
    sendCmd(prefix+`${to2bit(input.getHours())}${to2bit(input.getMinutes())}`);
    ElMessage({
                    message: "设置成功！",
                    type: 'success',
                    })
}
/* eslint-disable */


function setDis(){
    // console.log("dis"+`${a.value}${b.value}${c.value}${d.value}`)
    // console.log(form)
    sendCmd("dis"+`${form.a}${form.b}${form.c}${form.d}`);
    ElMessage({
                    message: "设置成功！",
                    type: 'success',
                    })
}


// function send(){
//     let a = new Uint8Array(5);
//     a[0]=1;
//     a[1]=2;
//     a[2]=3;
//     a[3]=4;
//     a[4]=4;
//     sendCmd(a);
// }
</script>
<style lang="scss" scoped>

</style>