<template>
  <div class="a">
    <div class="b">
    </div>
  </div>
  <button @click="connect()">连接</button>
  <video ref="vid"></video>
</template>

<script setup>
import {onMounted,ref} from "vue"
import mqtt from "mqtt"
let broker = "ws://broker.emqx.io:8083/mqtt"
var client;
const vid = ref({})
onMounted(()=>{
  navigator.mediaDevices.getUserMedia({
    video:true
  }).then((stream)=>{
    vid.value.srcObject=stream;
    vid.value.play();
  }).finally(()=>{

  })
})


function connect(){
  client = mqtt.connect(broker,{
    clientId:Math.random().toFixed(32).toString().substring(2),
    clean:true,
    keepalive:30,
    
  })
  client.on("error",(err)=>{
    alert("连接失败！"+JSON.stringify(err));
  })
  client.on("connect",(err)=>{
    alert("连接成功！"+JSON.stringify(err))
  })
}
</script>

<style lang="scss">
.a{
  background-color: blue;
  padding: 10px;
  .b{
    background-color:  red;
    width: 100px;
    height: 100px;
  }
}
</style>
