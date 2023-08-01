<template>

  <el-container>
    <el-aside width="278px">
        <main-menu></main-menu>
    </el-aside>

    <el-container>
      <el-header>
        <main-header></main-header>
      </el-header>

      <el-main>
        <component :is="contentPage"></component>
      </el-main>

      <el-footer>
        <main-footer></main-footer>
      </el-footer>
    </el-container>

  </el-container>

</template>

<script setup>
// import {ref,shallowRef} from 'vue';
import { shallowRef } from 'vue';

import MainMenu from '../components/layout/main-menu.vue';
import MainHeader from '../components/layout/main-header.vue';
import MainFooter from '../components/layout/main-footer.vue';

import KYC from '../components/member/kyc.vue';

let contentPage = shallowRef(KYC);

//變更右側功能component
// const changePage = (pageName) => {
//   nowPage.value = markRaw(pageName)
// }
</script>


<style>
* {
  margin: 0px;
  padding: 0px;
}

.el-header {
  padding: 0px !important;
}

.el-main {
  background-color: #eeeeee;
  min-height: calc(100vh - 60px);
}
</style>
