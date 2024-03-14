<template lang="">
    <div class="container">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    .container{
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: var(--el-color-primary-light-9);
        opacity: 60%;
        min-height: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow:var(--el-color-primary-light-5) 0 -5px 35px ;
    }
</style>