<template>
    <div class="top_header">
        <!-- <div style="margin-right:20px;">{{timer}} 秒自動登出</div> -->
        <div style="margin-right:20px;">600 秒自動登出</div>

        <el-button type="primary" link>
            <Icon size="24" style="margin-right:20px;"><NotificationsNoneFilled /></Icon>
        </el-button>
        <el-button type="primary" link>
            <Icon size="24" style="margin-right:20px;"><HelpOutlineFilled /></Icon>
        </el-button>
        <!-- <el-icon><Bell /></el-icon> -->
        <!-- <el-icon><QuestionFilled /></el-icon> -->

        <!-- <div class="border-r"></div> -->
        <el-divider direction="vertical" />

        <el-menu
            :ellipsis="false"
            mode="horizontal"
            popper-offset="1"
            style="margin-right:40px;"
        >
            <el-sub-menu index="2">
                <template #title>
                    <p style="color:#3B82F6; font-size:16px; font-weight:500; letter-spacing:0.64px;">智慧家居公司</p>
                </template>
                <el-menu-item index="2-1">會員基本資料</el-menu-item>
                <el-menu-item index="2-2">登出</el-menu-item>
            </el-sub-menu>
        </el-menu>

    </div>
</template>

<script setup>
// import {ref, reactive} from 'vue';
// import { ref } from 'vue';

import { Icon } from "@vicons/utils"; //https://xicons.org/
import { NotificationsNoneFilled, HelpOutlineFilled } from '@vicons/material'

// let timer = ref(600);
// const timerCount = setInterval(() => {
//     timer.value--;
//     if (timer.value <= 0) {
//         clearInterval(timerCount);
//     }
// }, 1000)
</script>

<style scoped lang="scss">
.top_header {
    position: fixed;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 999;
    width: calc(100% - $aside-width);
    background: #FFFFFF;
    height: $header-height;
    box-shadow: $header-footer-box-shadow;
    color: $text;

    .el-sub-menu {
        height: $header-height;
    }

    .el-button {
        margin-left: 0px;
    }

    .el-divider--vertical{
        margin: 0;
    }
}







// .el-icon {
//     margin: 0px 10px;
//     color: $blue;
//     cursor: pointer;
// }

// .border-r {
//     height: 30px;
//     border-right: 2px solid #ebebeb;
// }

// :deep(.el-menu--horizontal>.el-sub-menu .el-sub-menu__title) {
//     color: $blue !important;
//     font-size: 18px;
//     font-weight: 700;
//     border-bottom: 0px solid transparent;
// }

// :deep(.el-menu) {
//     border-width: 0px;
//     height: 30px;
// }
</style>
