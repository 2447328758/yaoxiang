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
        endt3:{value:0,id:2},
        recd:[],
        reed:[]
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

                //添加一条记录
                let d = new Date();
                let t;
                state.reed
                switch(jsonMsg.id){
                    case "m":t="早上";break;
                    case "n":t="中午";break;
                    case "e":t="晚上";break;
                }
                state.recd.push({
                    date:`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`,
                    time:t,
                    state:"已服药"
                })

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
        },

        //保存缓存
        saveStorage(state){
            //保存Rec
            localStorage.setItem("recd",JSON.stringify(
                state.recd
            ))

            localStorage.setItem("endt1",JSON.stringify(state.endt1));
            localStorage.setItem("endt2",JSON.stringify(state.endt2));
            localStorage.setItem("endt3",JSON.stringify(state.endt3));
            localStorage.setItem("reed",JSON.stringify(state.reed));
            localStorage.setItem("lt",String(Date.now()));
            console.log("save storage")
        },
        //初始化缓存()
        initStorage(state){
            let recd = localStorage.getItem("recd");
            let endt1 = localStorage.getItem("endt1");
            let endt2 = localStorage.getItem("endt2");
            let endt3 = localStorage.getItem("endt3");
            let reed = localStorage.getItem("reed");
            let lt = Number(localStorage.getItem("lt"));
            if (new Date(lt).getDate()!=new Date().getDate())//如果不是同一天
                reed="[]"//reed清0


            try{
                if(recd)
                    state.recd=JSON.parse(recd);
                if(endt1)
                    state.endt1=JSON.parse(endt1);
                if(endt2)
                    state.endt2=JSON.parse(endt2);
                if(endt3)
                    state.endt3=JSON.parse(endt3);
                if(reed)
                    state.reed=JSON.parse(reed);

                console.info(state.recd,state.endt1,state.endt2,state.endt3)
            }catch(e){
                console.warn("json parse error, 记录缓存不是有效的json字符串:",recd)
            }
        }
    },
    getters:{
        getL(state){
            //  //todo获取最近一次的endt
            let min = state.endt1;
            // //先将min设置为最大的
            // if(state.endt2.value>min.value)min=state.endt2;
            // if(state.endt3.value>min.value)min=state.endt3;
            // if(min.value==0)return min;//如果最大的是0直接返回

            // //判断最小的
            // if(state.endt1.value<min.value&&state.endt1.value!=0)min=state.endt1;
            // if(state.endt2.value<min.value&&state.endt2.value!=0)min=state.endt2;
            // if(state.endt3.value<min.value&&state.endt3.value!=0)min=state.endt3;
            if(state.reed.filter((v)=>v=='m').length==1)min = state.endt2;//如果m已经被记录
            if(state.reed.filter((v)=>v=='n').length==1)min = state.endt3;
            if(state.reed.filter((v)=>v=='e').length==1)min = {value:0};
            console.log(min)

            return  min;
        }
    }
})