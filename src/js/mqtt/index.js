import mqtt from "mqtt"
import { ElMessage } from 'element-plus'
import { useStore } from "vuex"

const topic_sub="sxq"
const topic_pub="sxq"

function Uint8ArrayToString(fileData){
    var dataString = "";
    for (var i = 0; i < fileData.length; i++) {
        dataString += String.fromCharCode(fileData[i]);
    }

    return dataString
}



export function connect(broker){
    const store = useStore();
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
                // ElMessage({
                //     message: 'rec from '+top+':'+msg,
                //     type: 'success',
                //     })
                let jsonMsg={}
                if(top==topic_sub){
                    let ms = Uint8ArrayToString(msg);
                    switch(ms){
                        case "zao1":jsonMsg.type='bool';jsonMsg.value=1;jsonMsg.id='m';ElMessage({
                            message: "早上已服药",
                            type: 'success',
                            });break;
                        case "zhong1":jsonMsg.type='bool';jsonMsg.value=1;jsonMsg.id='n';ElMessage({
                            message: "中午已服药",
                            type: 'success',
                            });break;
                        case "wan1":jsonMsg.type='bool';jsonMsg.value=1;jsonMsg.id='e';ElMessage({
                            message: "晚上已服药",
                            type: 'success',
                            });break;
                    }

                    if(ms.startsWith("tem")){
                        jsonMsg.type="number";
                        jsonMsg.id="tem";
                        jsonMsg.value=msg[3];
                    }else if(ms.startsWith("hum")){
                        jsonMsg.type="number";
                        jsonMsg.id="hum";
                        jsonMsg.value=msg[3];
                    }
                }
                
                //todo 处理数据
                // console.log(msg.toString())
                // let jsonMsg = JSON.parse(msg);
                store.commit('setIotState',jsonMsg);
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
        client.publish(topic_pub,msg,{
            qos:2,
        });
    }catch(e){
        ElMessage({
            message: 'unkown:'+e,
            type: 'error',
            });
        return 1;
    }
    return 0;
}