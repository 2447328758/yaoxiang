import { createStore } from "vuex";

export default createStore({
    state:{
        state_test:"test_state",
        numberData:[
            {
                desp:"当前温度",
                value:100,
                min:0,
                max:150,
                unit:"°C",
                getPercent(){
                    return ((this.value-this.min)*100/(this.max-this.min)).toFixed(1);
                }
            },{
                desp:"当前温度",
                value:100,
                min:0,
                max:150,
                unit:"°C",
                getPercent(){
                    return ((this.value-this.min)*100/(this.max-this.min)).toFixed(1);
                }
            },{
                desp:"当前温度",
                value:100,
                min:0,
                max:150,
                unit:"°C",
                getPercent(){
                    return ((this.value-this.min)*100/(this.max-this.min)).toFixed(1);
                }
            },{
                desp:"当前温度",
                value:100,
                min:0,
                max:150,
                unit:"°C",
                getPercent(){
                    return ((this.value-this.min)*100/(this.max-this.min)).toFixed(1);
                }
            },{
                desp:"当前温度",
                value:100,
                min:0,
                max:150,
                unit:"°C",
                getPercent(){
                    return ((this.value-this.min)*100/(this.max-this.min)).toFixed(1);
                }
            },{
                desp:"当前温度",
                value:100,
                min:0,
                max:150,
                unit:"°C",
                getPercent(){
                    return ((this.value-this.min)*100/(this.max-this.min)).toFixed(1);
                }
            },{
                desp:"当前温度",
                value:100,
                min:0,
                max:150,
                unit:"°C",
                getPercent(){
                    return ((this.value-this.min)*100/(this.max-this.min)).toFixed(1);
                }
            },{
                desp:"当前温度",
                value:100,
                min:0,
                max:150,
                unit:"°C",
                getPercent(){
                    return ((this.value-this.min)*100/(this.max-this.min)).toFixed(1);
                }
            },{
                desp:"当前温度",
                value:100,
                min:0,
                max:150,
                unit:"°C",
                getPercent(){
                    return ((this.value-this.min)*100/(this.max-this.min)).toFixed(1);
                }
            },
        ],
    }
})