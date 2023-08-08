<template>
  <div class="common-layout">
    <el-container>
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
import Header from '../components/layout/newheader.vue'
import { defineComponent } from 'vue'

defineComponent({ Header })
</script>
<style lang="scss" scoped>
@import '../style/main.scss';
.Content{
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>