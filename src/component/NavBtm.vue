<template lang="">
    
    <div class="container btm">
        <slot></slot>
    </div>
    <div class="btm"></div>
</template>
<script>

</script>
<style scoped lang="scss">
    .btm{
        min-height: 70px;
    }
    .container{
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: var(--el-color-primary-light-9);
        opacity: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow:var(--el-color-primary-light-5) 0 -5px 35px ;
    }
</style>