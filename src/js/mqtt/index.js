import mqtt from "mqtt"
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
            resolve(err)
        })
    });
    
}
