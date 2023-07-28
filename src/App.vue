<template>
  <el-container>
    <el-aside>
      <left-menu></left-menu>
    </el-aside>
    <el-container>
      <el-header>
        <topHead></topHead>
      </el-header>
      <el-main>
        <component :is="nowPage"></component>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import {ref,shallowRef} from 'vue';
import leftMenu from './components/layout/menu.vue'
import topHead from './components/layout/header.vue';

import KYC from './components/member/KYC.vue';

let nowPage = shallowRef(KYC);


//變更右側功能component
const changePage = (pageName) => {
  nowPage.value = markRaw(pageName)
}


</script>

<style>
  *{
    margin:0px;
    padding:0px;
  }
   
  .el-header{
    padding:0px !important;
  }

  .el-main{
    background-color:#eeeeee;
    min-height: calc(100vh - 60px);
  }
</style>
