<template>
    <div class="top_header" style="padding-right: 30px;">
        <div>{{timer}} 秒自動登出</div>
        <el-icon><Bell /></el-icon>
        <el-icon><QuestionFilled /></el-icon>
        <div class="border-r"></div>
            <el-menu
                class="mr-30"
                :default-active="'1'"
                mode="horizontal"
                :ellipsis="false"
            >   
                <el-sub-menu index="2-1">
                    <template #title>小查理企業</template>
                    <el-menu-item index="2-2">登出</el-menu-item>
                </el-sub-menu>
            </el-menu>
    </div>
</template>
  
<script setup>
import {ref, reactive} from 'vue';

let timer = ref(600);
const timerCount = setInterval(() => {
    timer.value--;
    if(timer.value <= 0){
       clearInterval(timerCount);
    }
},1000)


</script>

<style scoped lang="scss">
    .top_header{
        position:fixed;
        display:flex;
        justify-content: flex-end;
        align-items: center;
        z-index:999;
        width:calc(100% - 300px);
        height:60px;
        background:#FFFFFF;
        box-shadow: 0 4px 3px -2px #dddddd;
        color:$text;
    }
    .el-icon{
        margin:0px 10px;
        color:$blue;
        cursor: pointer;
    }

    .border-r{
        height:30px;
        border-right:2px solid #ebebeb;;
    }

    .mr-30{
        margin-right:30px;
    }

    :deep(.el-menu--horizontal>.el-sub-menu .el-sub-menu__title){
        color:$blue;
        font-size:18px;
        font-weight: 700;
        border-bottom: 0px solid transparent;
    }

    :deep(.el-menu){
        border-width: 0px;
        height:30px;
    }
</style>
  