<template>
    <div class="left_menu">
        <!--logo-->
        <div>
            <img alt="Newebpay logo" src="@/assets/NewebPay_Logo.png" style="padding: 13px 20px;"/>
            <p style="font-size:12px; margin:13px 20px; color:#fff;">
                會員平台管理
            </p>
        </div>

        <el-scrollbar height="85vh" always wrap-class="scrollbar">
            <el-menu 
                default-active="0-0"
                background-color="Transparent"   
                text-color="#fff"
                unique-opened
            >
                <el-sub-menu :index="`${idx1}`" v-for="(menu,idx1) in menus">
                    <template #title>
                        <component :is="menu.icon" size="20" style="margin: 3px 10px 0px 0px;"/>
                        <p style="font-size:16px; font-weight:500;">{{menu.mainTitle}}</p>
                    </template>
                    <el-menu-item v-for="(submenu,idx2) in menu.item" :index="`${idx1}-${idx2}`">
                        <p style="font-size:14px;">{{submenu.title}}</p>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup>
// import {ref, reactive} from 'vue';
import { reactive, h } from 'vue';
import { Icon } from "@vicons/utils"; //https://xicons.org/
import {
    PersonFilled, InfoSharp, InsertCommentSharp, PostAddOutlined, AttachMoneyFilled, ShoppingCartSharp, StackedLineChartSharp
} from '@vicons/material'

function renderIcon(xicons) {
    return () => h( Icon, { size:"20", style:"margin: 3px 10px 0px 0px;" }, { default: () => h(xicons) } )
}

const menus = reactive([
    {
        mainTitle: '會員中心',
        icon: renderIcon(PersonFilled),
        item: [
            {
                title: '基本資料設定',
                icon: 'InformationIcon',
            },
            {
                title: '實名認證 (KYC)',
            },
            {
                title: '商店',
            },
            {
                title: '帳戶餘額/提領',
            },
            {
                title: '發票/對帳單',
            },
            {
                title: '服務加值/帳單',
            },
            {
                title: '設定',
            },
            {
                title: '消費者專區',
            },
            {
                title: '平台商專區',
            },
        ]
    },
    {
        mainTitle: '幫助中心',
        icon: renderIcon(InfoSharp),
        item: [
            {
                title: '問與答',
            }
        ]
    },
    {
        mainTitle: '通知中心',
        icon: renderIcon(InsertCommentSharp),
    },
    {
        mainTitle: '電子發票',
        icon: renderIcon(PostAddOutlined),
    },
    {
        mainTitle: '捐款',
        icon: renderIcon(AttachMoneyFilled),
    },
    {
        mainTitle: '物流',
        icon: renderIcon(ShoppingCartSharp),
    },
    {
        mainTitle: '金流',
        icon: renderIcon(StackedLineChartSharp),
    }
]);
</script>

<style scoped lang="scss">
.left_menu {
    position: fixed;
    min-height: 100vh;
    background-image: linear-gradient(205deg, #3B82F6 -36.4%, #397EF2 -31.69%, #377AED -26.99%, #3676E9 -22.29%, #3472E4 -17.58%, #326DE0 -12.88%, #3069DB -8.18%, #2E65D7 -3.48%, #2D61D3 1.23%, #2B5DCE 5.93%, #2959CA 10.63%, #2755C5 15.34%, #2551C1 20.04%, #234CBC 24.74%, #2248B8 29.45%, #2044B3 34.15%, #1E40AF 38.85%);
    padding:15px 2px 15px 19px;
    color:#FFFFFF;
    z-index: 999;

    .el-menu{
        width: 251px;
        border-width:0px;
    }
    
    .el-sub-menu {
        padding-right: 14px;
        .el-menu-item {
            height: 46px;
        }
    }
    
    // .el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-sub-menu__title {
    //     // padding-left: calc(var(--el-menu-base-level-padding) + var(--el-menu-level) * var(--el-menu-level-padding));
    //     padding-left: 12px;
    // }
    
    .el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-menu-item, .el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-menu-item-group__title, .el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-sub-menu__title {
        padding-left: 64px;
    }


    // :deep(.el-icon.el-sub-menu__icon-arrow svg) {
    //     width: 1.2em;
    //     height: 1.2em;
    // }

    .el-menu-item.is-active {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        color: #FFFFFF;
    }

    // .scrollbar{
    //     background:#E4E7ED;
    // }
    
        .scrollbar {
            height: 243px;
        }
}
</style>
