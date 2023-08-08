<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="sidemenu"><Sidemenu /></el-aside>
      <div class="Content">
        <el-row><Header /></el-row>
        <el-row>
          <router-view></router-view>
        </el-row>
      </div>
    </el-container>
  </div>
</template>

<script setup>
import Sidemenu from '../components/menu/SideMenu.vue'
import Header from '../components/layout/newheader.vue'
import { defineComponent } from 'vue'

defineComponent({ Sidemenu, Header })
</script>
<style lang="scss" scoped>
@import '../style/main.scss';
.Content{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.sidemenu{
  height: 100%;
  overflow: hidden;
}
</style>