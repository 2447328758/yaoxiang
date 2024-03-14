import mqtt from "mqtt"

function connect(broker){
    const client = mqtt.connect(broker,{
        clientId:Math.random().toFixed(32).toString().substring(2),
        clean:true,
        keepalive:30,
        
    })
    client.on("error",(err)=>{
        alert("连接失败！"+JSON.stringify(err));
        return new Promise((resolve,reject)=>{
            reject(err);
        })
    })
    client.on("connect",(err)=>{
        alert("连接成功！"+JSON.stringify(err));
        return new Promise((resolve,reject)=>{
            resolve(client);
        })
    })
}