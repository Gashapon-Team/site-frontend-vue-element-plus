<template>
  <div class="common-layout">
    <el-container>
      <el-aside><Sidemenu /></el-aside>
        <el-row><Header /></el-row>
        <el-row> Main </el-row>
    </el-container>
  </div>
</template>

<script setup>
import Sidemenu from '../components/menu/SideMenu.vue'
import Header from '../components/layout/header.vue'
import { defineComponent } from 'vue'

defineComponent({ Sidemenu, Header })
</script>
<style>
</style>