import { createStore } from "vuex";
// import {ref} from 'vue'

export default createStore({
    state:{
        state_test:"test_state",
        numberData:[
            {
                id:"tem",
                desp:"当前温度",
                value:100,
                min:0,
                max:150,
                unit:"°C",
                getPercent(){
                    return ((this.value-this.min)*100/(this.max-this.min)).toFixed(1);
                }
            },{
                id:"hum",
                desp:"当前湿度",
                value:100,
                min:0,
                max:150,
                unit:"hum",
                getPercent(){
                    return ((this.value-this.min)*100/(this.max-this.min)).toFixed(1);
                }
            },
            // {
            //     id:"temp3",
            //     desp:"当前温度",
            //     value:100,
            //     min:0,
            //     max:150,
            //     unit:"°C",
            //     getPercent(){
            //         return ((this.value-this.min)*100/(this.max-this.min)).toFixed(1);
            //     }
            // }
        ],
        statusData:[
            {
                id:"m",
                desp:"早上",
                value:0
            },
            {
                id:"n",
                desp:"中午",
                value:0
            },
            {
                id:"e",
                desp:"晚上",
                value:0
            },
        ],
        endt1:{value:0,id:0},
        endt2:{value:0,id:1},
        endt3:{value:0,id:2}
        
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
            // console.log(jsonMsg)
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
            let min = state.endt1;
            //先将min设置为最大的
            if(state.endt2.value>min.value)min=state.endt2;
            if(state.endt3.value>min.value)min=state.endt3;
            if(min.value==0)return min;//如果最大的是0直接返回

            //判断最小的
            if(state.endt1.value<min.value&&state.endt1.value!=0)min=state.endt1;
            if(state.endt2.value<min.value&&state.endt2.value!=0)min=state.endt2;
            if(state.endt3.value<min.value&&state.endt3.value!=0)min=state.endt3;
            return  min;
        }
    }
})