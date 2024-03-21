import { createStore } from "vuex";

export default createStore({
    state:{
        state_test:"test_state",
        numberData:[
            {
                id:"temp1",
                desp:"当前温度",
                value:100,
                min:0,
                max:150,
                unit:"°C",
                getPercent(){
                    return ((this.value-this.min)*100/(this.max-this.min)).toFixed(1);
                }
            },{
                id:"temp2",
                desp:"当前温度",
                value:100,
                min:0,
                max:150,
                unit:"°C",
                getPercent(){
                    return ((this.value-this.min)*100/(this.max-this.min)).toFixed(1);
                }
            },{
                id:"temp3",
                desp:"当前温度",
                value:100,
                min:0,
                max:150,
                unit:"°C",
                getPercent(){
                    return ((this.value-this.min)*100/(this.max-this.min)).toFixed(1);
                }
            }
        ],
        statusData:[
            {
                id:"m",
                desp:"早饭",
                value:1
            },
            {
                id:"n",
                desp:"午饭",
                value:0
            },
            {
                id:"e",
                desp:"晚饭",
                value:0
            },
        ]
    },
    //操作
    mutations:{
        setIotState(state,jsonMsg){
            if(jsonMsg.type=='number'){
                let filt = state.numberData.filter((v)=>v.id===jsonMsg.id)
                if(filt.length!=0)
                    filt[0].value=jsonMsg.value
            }else if(jsonMsg.type=='bool'){
                let filt = state.statusData.filter((v)=>v.id===jsonMsg.id)
                if(filt.length!=0)
                    filt[0].value=jsonMsg.value
            }
        }
    }
})