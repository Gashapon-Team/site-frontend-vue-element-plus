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
        <component v-if="sidemenu.icon" style="widh: 20px" :is="sidemenu.icon"></component>
        <span>{{ sidemenu.title }}</span>
      </template>

      <component
        :is="componentInSidemenu(sidemenu.subItem)"
        v-for="(item, sub_index) in sidemenu.subItem"
        :key="sub_index"
        :index="sub_index"
      >
        <template #title>
          <span @click="changePageTo(sidemenu.path)">{{ item.title }}</span>
        </template>
      </component>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
const sidemenus = reactive([
  {
    title: '會員中心',
    icon: 'Avatar',
    path: '/',
    subItem: [
      { title: '基本資料設定', path: '/' },
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
    icon: 'WarningFilled'
  },
  {
    title: '通知中心',
    icon: 'ChatLineSquare'
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

const changePageTo = function (thisPath) {
  console.log('切換頁面到:', thisPath)
  // this.$router.replace(thisPath)
}
const hasSubMenu = (subItem) => {
  if (subItem && subItem.length > 0) {
    return true
  } else {
    return false
  }
}
function componentInSidemenu(ifHasSubMenu) {
  return ifHasSubMenu ? 'el-menu-item' : 'el-sub-menu'
}
</script>

<style lang="scss">
@import '../../style/main.scss';
.sideMenuLayout {
  .sideMenuLayout.el-menu.el-menu--vertical.el-menu-vertical-demo {
    background-color: $blue;
    height: 100vh;
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
  .el-sub-menu {
    background-color: $blue;
    &:hover {
      background-color: $blue;
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
    background-color: $blue;
    color: #ffffff;
    .el-menu-item {
      color: #ffffff;
      &:hover {
        background-color: $blue;
      }
    }
  }
}
</style>