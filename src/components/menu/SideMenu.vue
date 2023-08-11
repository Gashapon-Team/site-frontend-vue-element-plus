<template>
  <el-menu class="el-menu-vertical-demo sideMenuLayout">
    <h2 class="title m-2">NwebPay 藍新金流</h2>
    <h4 class="subtitle m-2">會員平台管理</h4>

    <el-sub-menu
      v-for="(sidemenu, i) in sidemenus"
      :key="i"
      :index="i"
      :title="sidemenu.title"
      :class="sidemenu.subItem ? '' : 'noSubItem'"
    >
      <template #title>
        <component v-if="sidemenu.icon" style="width: 20px" :is="sidemenu.icon"></component>
        <span @click="changePageTo(sidemenu.path)">{{ sidemenu.title }}</span>
      </template>

      <component
        :is="componentInSidemenu(sidemenu.subItem)"
        v-for="(item, sub_index) in sidemenu.subItem"
        :key="sub_index"
        :index="sub_index"
      >
        <template #title>
          <span @click="changePageTo(item.path)">{{ item.title }}</span>
        </template>
      </component>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { reactive  } from 'vue'
import { useRouter } from 'vue-router';
const sidemenus = reactive([
  {
    title: '會員中心',
    icon: 'Avatar',
    subItem: [
      { title: '基本資料設定', path: '/homepage/basedata' },
      { title: '實名認證(KYC)', path: '/handlers/KYCvarify' },
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
    path: '/homepage/varifyName'
  },
  {
    title: '通知中心',
    icon: 'ChatLineSquare',
    path: '/homepage/ChatLineSquare'
  },
  {
    title: '電子發票',
    icon: 'Tickets',
    path: '/homepage/Tickets'
  },
  {
    title: '捐款',
    icon: 'Pointer',
    path: '/homepage/Pointer'
  },
  {
    title: '物流',
    icon: 'Van',
    path: '/homepage/Van'
  },
  {
    title: '金流',
    icon: 'TrendCharts',
    path: '/homepage/TrendCharts'
  }
])
const router = useRouter();

const changePageTo = function (thisPath) {
  console.log('thisPath', thisPath)
  if(thisPath) router.push(thisPath)
}
function componentInSidemenu(ifHasSubMenu) {
  return ifHasSubMenu ? 'el-menu-item' : 'el-sub-menu'
}
</script>

<style lang="scss">
@import '../../style/main.scss';
.sideMenuLayout.el-menu.el-menu--vertical.el-menu-vertical-demo{
  height: 100vh;
  background: $mainBG;
  width: 100%;
  overflow-y: scroll;
  padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
  box-sizing: content-box; /* So the width will be 100% + 17px */
  .sideMenuLayout.el-menu.el-menu--vertical.el-menu-vertical-demo {
    background-color: $mainBG;
    height: 100vh;
  }
  .el-container {
    .el-sub-menu__title,
    li.el-menu-item {
      color: #ffffff;
    }
  }
  .title {
    background-color: $mainBG;
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
    background-color: $mainBG;
  }
  .el-menu-item-group {
    background-color: $mainBG;
  }
  .el-sub-menu {
    background-color: $mainBG;
    &:hover {
      background-color: $mainBG;
    }
    &.noSubItem .el-icon.el-sub-menu__icon-arrow {
      display: none;
    }
    &__title {
      color: #ffffff;
      font-size: 16px;
      &:hover {
        background: initial;
      }
    }
    &__title > svg {
      width: 20px;
      margin-right: 4px;
    }
  }
  .el-menu.el-menu--inline {
    margin-left: 20px;
    background-color: $mainBG;
    color: #ffffff;
    .el-menu-item {
      color: #ffffff;
      &:hover {
        background-color: $mainBG;
      }
    }
  }
  .el-sub-menu:not(.is-opened) .el-sub-menu__title .el-icon.el-sub-menu__icon-arrow {
    transform: rotate(-90deg) !important;
  }
}
</style>