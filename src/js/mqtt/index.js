import mqtt from "mqtt"
import { ElMessage } from 'element-plus'

const topic_sub="sxq"
const topic_pub="sxq"
export function connect(broker){
    return new Promise((resolve,reject)=>{
        const client = mqtt.connect(broker,{
            clientId:Math.random().toFixed(32).toString().substring(2),
            clean:true,
            keepalive:30,
            
        })
        client.on("error",(err)=>{
            console.log("连接失败！"+JSON.stringify(err));
            reject(err)
        })
        client.on("connect",(err)=>{
            console.log("连接成功！"+JSON.stringify(err));

            //todo 订阅并处理收到的消息
            client.subscribe(topic_sub);
            client.on("message",(top,msg)=>{
                ElMessage({
                    message: 'rec:'+msg,
                    type: 'success',
                    })
                //todo 处理数据
                // console.log(msg.toString())
                // let jsonMsg = JSON.parse(msg);
                // store.commit('setIotState',jsonMsg);
            })

            //将client设置到全局变量
            global.mqc=client;
            resolve(err)
        })
        
    });
    
}



export function sendCmd(msg)
{
    let client=global.mqc;
    if(!client){
        ElMessage({
            message: '连接未建立',
            type: 'error',
            });
        return;
    }
    //发送数据
    try{
        client.publish(topic_pub,msg);
    }catch(e){
        ElMessage({
            message: 'unkown:'+e,
            type: 'error',
            });
        return 1;
    }
    return 0;
}