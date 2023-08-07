<template>
  <el-menu
    class="el-menu-vertical-demo sideMenuLayout"
  >
    <h2 class="title m-2">NwebPay 藍新金流</h2>
    <h4 class="subtitle m-2">會員平台管理</h4>

    <el-sub-menu v-for="(sidemenu, i) in sidemenus" :key="i" :index="i" :title="sidemenu.title">
      <template #title>
        <component style="widh:20px" :is="sidemenu.icon"></component>
        <span>{{sidemenu.title}}</span>
      </template>
      <el-sub-menu v-for="(item, sub_index) in sidemenu.subItem" :key="sub_index" :index="sub_index">
        <template #title>
          <!-- <el-icon><location /></el-icon> -->
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
    icon: 'User',
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
    icon: 'help-icon',
    subItem: [{ title: 'test' }]
  },
  {
    title: '通知中心',
    icon: 'inform-icon',
    subItem: [{ title: 'test' }]
  },
  {
    title: '電子發票',
    icon: 'clectronic-invoices-icon'
  },
  {
    title: '捐款',
    icon: 'donation-icon'
  },
  {
    title: '物流',
    icon: 'logistics-icon'
  },
  {
    title: '幫助中心',
    icon: 'help-icon'
  },
  {
    title: '金流',
    icon: 'money-icon'
  }
])
console.log('sideMenus', sidemenus)
</script>

<style lang="scss">
@import "../../style/main.scss";
.sideMenuLayout {
  .sideMenuLayout.el-menu.el-menu--vertical.el-menu-vertical-demo {
    background-color: $mainBG;
    height: 100vh;
  }
  .el-sub-menu__title{
    color: #ffffff;
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
    background-color: $mainBG;
    padding: 12px 12px 12px 24px;
    color: #ffffff;
  }
  .subtitle {
    padding-left: 24px;
    color: #ffffff;
    background-color: $mainBG;
  }
  .el-menu-item-group {
    background-color: $mainBG;
  }
  .el-sub-menu,
  .el-sub-menu:hover {
    background-color: $mainBG;
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