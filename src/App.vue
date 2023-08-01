<template>
  <el-container>
    <el-aside width="278px">
      <left-menu></left-menu>
    </el-aside>
    <el-container>
      <el-header>
        <topHead></topHead>
      </el-header>
      <el-main>
        <component :is="pageName"></component>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import {ref,shallowRef} from 'vue';
import leftMenu from './components/layout/menu.vue'
import topHead from './components/layout/header.vue';

// import storeManage from './components/member/storeManage.vue';
import kyc from './components/member/kyc.vue';

let pageName = shallowRef(kyc);


//變更右側功能component
const changePage = (pageName) => {
  pageName.value = markRaw(pageName)
}


</script>

<style lang="scss">

  *{
    margin:0px;
    padding:0px;
  }

  #app{
    min-width: 1200px;
  }
   
  .el-header{
    padding:0px !important;
  }

  .el-main{
    background-color:#eeeeee;
    min-height: calc(100vh - 60px);
  }
</style>
