const apikey="7ff=miCfCLt1fvIefyzPcNjQiFk="
const deviceid="1004125172"
const baseurl="http://192.168.140.156/api"
let url="/devices/"+deviceid+"/datapoints"
function getHistoryData()
{
    return fetch(baseurl+url,{
        headers:{
            "Accept": "application/json, text/plain, */*",
            "api-key": apikey,
        }
    })
}


export default getHistoryData;