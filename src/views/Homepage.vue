<template>
  <div class="common-layout">
    <el-container>
      <el-aside><Sidemenu /></el-aside>
      <div class="Content">
        <el-row><Header /></el-row>
        <el-row>
          <rounter-view></rounter-view>
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
<style scoped>
.Content{
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>