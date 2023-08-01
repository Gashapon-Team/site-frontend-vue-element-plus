<template>
    <div class="left_menu">
        <!--logo-->
        <div class="logo">
            <h1>NewebPay藍新金流</h1>
            <h3>會員平台管理</h3>
        </div>
        <el-scrollbar height="80vh" always wrap-class="scrollbar">
            <el-menu 
                default-active="0-0"
                background-color="Transparent"   
                text-color="#fff"
                unique-opened
            >
                <el-sub-menu :index="`${idx1}`" v-for="(menu,idx1) in menus">
                    <template #title>
                        <el-icon><component :is="menu.icon" /></el-icon>
                        <h3>{{menu.mainTitle}}</h3>
                    </template>
                    <el-menu-item v-for="(submenu,idx2) in menu.item" :index="`${idx1}-${idx2}`">
                        <h4>{{submenu.title}}</h4>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-scrollbar>
    </div>
</template>
  
<script setup>
import {ref, reactive} from 'vue';

const menus = reactive([
    {
        mainTitle:'會員中心',
        icon:'UserFilled',
        item:[
            {
                title:'基本資料設定',
            },
            {
                title:'實名認證 (KYC)',
            },
            {
                title:'商店',
            },
            {
                title:'帳戶餘額/提領',
            },
            {
                title:'發票/對帳單',
            },
            {
                title:'服務加值/帳單',
            },
            {
                title:'設定',
            },
            {
                title:'消費者專區',
            },
            {
                title:'平台商專區',
            },
        ]
    },
    {
        mainTitle:'幫助中心',
        icon:'WarningFilled',
        item:[
            {
                title:'問與答',
            }
        ]
    },
    {
        mainTitle:'通知中心',
        icon:'WarningFilled',
    },
    {
        mainTitle:'電子發票',
        icon:'WarningFilled',
    },
    {
        mainTitle:'捐款',
        icon:'WarningFilled',
    },
    {
        mainTitle:'物流',
        icon:'WarningFilled',
    }
]);

</script>

<style scoped lang="scss">
.left_menu{
    position: fixed;
    min-height:100vh;
    background-image: linear-gradient(to top right, #07229a, #0064ff);
    padding:15px 10px;
    color:#FFFFFF;
    z-index: 999;

    .logo{
        padding:0px 10px;
        h1{
            font-size:28px;
            margin-bottom:30px;
        }

        h3{
            margin-bottom:20px;
        }
    }

    .el-menu{
        border-width:0px;

    }

    :deep(.el-icon.el-sub-menu__icon-arrow svg){
        width:2em;
        height:2em;
    }

    .el-menu-item.is-active{
        background-color: rgba(255,255,255,0.3);
        border-radius: 5px;
        color: #FFFFFF;
    }

    .scrollbar{
        color:white;
    }
    
}
</style>
  