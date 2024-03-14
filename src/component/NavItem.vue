<template lang="">
    <div class="container">
        <el-col class="item" :class="selected?'selected':''">
            <el-row><div><el-icon :size="30" ><slot></slot></el-icon></div></el-row>
            <el-row><div><text >{{text}}</text></div></el-row>
        </el-col>
    </div>
</template>
<script>
export default {
    props:{
        selected:{
            default:false
        },
        text:{
            default:"默认"
        },
        icon:{

        }
    },
}
</script>
<style scoped lang="scss">
    .container{
        margin: 5px; 
        /* background-color: antiquewhite;  */
        width: 60px; 
        height: 50px; 
        display: inline;
        font-size: small;
        text-align: center;
    }
    div{
        width: 100%;
    }

    .item{
        color: var(--el-color-primary-light-3)!important;
        text-shadow: 0 0 3px var(--el-color-primary-light-3);

    }
    .item.selected>div{
        color: var(--el-color-primary)!important;
        text-shadow: 0 0 3px var(--el-color-primary);
    }
</style>