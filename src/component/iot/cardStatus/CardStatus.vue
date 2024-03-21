<template>
    <el-card>
        <template #header>
            <div id="card-header">
                <span>{{title}}</span>
            </div>
        </template>
        <status-panel v-for="(item,index ) in data" :data="item" :key="index"></status-panel>
        <el-empty :image-size="70" v-if="data.length==0" />
    </el-card>
</template>
  
<script>
    import StatusPanel from '@/component/iot/cardStatus/StatusPanel'
    export default{
        components:{
            StatusPanel
        },
        props:{
            title:{
                default:"温度数据",
                type:String
            },
            data:{
                default:[
                    {
                        desp:"早餐",
                        value:1
                    },
                    {
                        desp:"午餐",
                        value:0
                    }
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
#card-header{
    font-weight: bold;
    margin: 5px;
}
</style>
  