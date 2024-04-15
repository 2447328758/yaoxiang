import { createStore } from "vuex";
import {ref} from 'vue'

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
        ],
        endt1:ref({value:0}),
        endt2:ref({value:0}),
        endt3:ref({value:0})
        
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
        },
        setEndt(state, payload){
            //todo设置value为时分秒时间
            let time =payload.value.getTime() - new Date().setHours(0,0,0,0);
            switch(payload.ord){
                case 0:state.endt1.value=time;break;
                case 1:state.endt2.value=time;break;
                case 2:state.endt3.value=time;break;
            }
        }
    },
    getters:{
        getL(state){
             //todo获取最近一次的endt
            return  state.endt3;
        }
    }
})