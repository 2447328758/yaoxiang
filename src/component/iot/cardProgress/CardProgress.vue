<template>
    <el-card style="max-width: 480px">
        <template #header>
            <div id="card-header">
                <span>{{title}}</span>
            </div>
        </template>
        <progress-bar v-for="(item,index ) in data" :data="item" :key="index"></progress-bar>
        
        <el-empty :image-size="70" v-if="data.length==0" />
    </el-card>
</template>
  
<script>
    import ProgressBar from '@/component/iot/cardProgress/ProgressBar'
    export default{
        components:{
            ProgressBar
        },
        props:{
            title:{
                default:"温度数据",
                type:String
            },
            data:{
                default:[]
            }
        }
    }
</script>
<style lang="scss" scoped>
#card-header{
    font-weight: bold;
}
</style>
  