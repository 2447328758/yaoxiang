import mqtt from "mqtt"

import {useStore} from 'vuex';
import { ElMessage } from 'element-plus'

const topic_pub="test652110"


export function connect(broker){
    return new Promise((resolve,reject)=>{
        const client = mqtt.connect(broker,{
            clientId:Math.random().toFixed(32).toString().substring(2),
            clean:true,
            keepalive:30,
            
        })
        const store = useStore();
        client.on("error",(err)=>{
            console.log("连接失败！"+JSON.stringify(err));
            reject(err)
        })
        client.on("connect",(err)=>{
            console.log("连接成功！"+JSON.stringify(err));

            //todo 订阅并处理收到的消息
            client.subscribe(topic_pub);
            client.on("message",(top,msg)=>{
                ElMessage({
                    message: 'rec:'+msg,
                    type: 'success',
                    })
                //todo 处理数据
                // console.log(msg.toString())
                // let jsonMsg = JSON.parse(msg);
                // store.commit('setIotState',jsonMsg);
                store;
            })
            resolve(err)
        })

        

    });
    
}

