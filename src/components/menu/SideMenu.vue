<template>
  <el-menu
    class="el-menu-vertical-demo sideMenuLayout"
  >
    <h2 class="title m-2">NwebPay 藍新金流</h2>
    <h4 class="subtitle m-2">會員平台管理</h4>

    <el-sub-menu v-for="(sidemenu, i) in sidemenus" :key="i" :index="i" :title="sidemenu.title">
      <template #title>
        <component v-if="sidemenu.icon" style="widh:20px" :is="sidemenu.icon"></component>
        <span>{{sidemenu.title}}</span>
      </template>
      <el-sub-menu v-for="(item, sub_index) in sidemenu.subItem" :key="sub_index" :index="sub_index">
        <template #title>
          <span>{{item.title}}</span>
        </template>

      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref, reactive } from 'vue'
const sidemenus = reactive([
  {
    title: '會員中心',
    icon: 'Avatar',
    subItem: [
      { title: '基本資料設定' },
      { title: '實名認證(KYC)' },
      { title: '商店' },
      { title: '帳戶餘額/提領' },
      { title: '發票/對帳單' },
      { title: '設定' },
      { title: '消費者專區' },
      { title: '平台商專區' }
    ]
  },
  {
    title: '幫助中心',
    icon: 'WarningFilled',
  },
  {
    title: '通知中心',
    icon: 'ChatLineSquare',
  },
  {
    title: '電子發票',
    icon: 'Tickets'
  },
  {
    title: '捐款',
    icon: 'Pointer'
  },
  {
    title: '物流',
    icon: 'Van'
  },
  {
    title: '金流',
    icon: 'TrendCharts'
  }
])
console.log('sideMenus', sidemenus)
</script>

<style lang="scss">
@import "../../style/main.scss";
.sideMenuLayout {
  .sideMenuLayout.el-menu.el-menu--vertical.el-menu-vertical-demo {
    background-color: $blue;
    height: 100vh;
  }
  .el-sub-menu__title{
    color: #ffffff;
    font-size: 16px;
    &:hover {
      background: initial;
    }
  }
  .el-container {
    .el-sub-menu__title,
    li.el-menu-item {
      color: #ffffff;
    }
  }
  .title {
    background-color: $blue;
    padding: 16px 16px 30px 24px;
    color: #ffffff;
    font-weight: 200;
  }
  .subtitle {
    padding-left: 24px;
    padding-bottom: 10px;
    color: #ffffff;
    font-size: 8px;
    font-weight: 400;
    background-color: $blue;
  }
  .el-menu-item-group {
    background-color: $blue;
  }
  .el-sub-menu,
  .el-sub-menu:hover {
    background-color: $blue;
  }
  .el-sub-menu__title>svg{
    width: 20px;
  }
  .el-sub-menu__title>svg{
    margin-right: 4px;
  }
  .el-menu.el-menu--inline {
    margin-left: 20px;
  }
}
</style>