<template>

  <el-container>
    <el-aside v-if="showAside">
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
import {ref,shallowRef, computed} from 'vue';
import { useRoute } from 'vue-router'

import MainMenu from '../components/layout/main-menu.vue';
import MainHeader from '../components/layout/main-header.vue';
import MainFooter from '../components/layout/main-footer.vue';

import KYC from '../components/member/kyc.vue';

let contentPage = shallowRef(KYC);

//變更右側功能component
// const changePage = (pageName) => {
//   nowPage.value = markRaw(pageName)
// }


const route = useRoute()
const showAside = computed(() => {
  return route.meta.showAside
})

</script>


<style scoped lang="scss">
.el-aside {
  width: $aside-width;
}

.el-header {
  width: calc(100% - $aside-width);
  height: $header-height;
  padding: 0px;
}

.el-main {
  // background-color: #F9F9F9;
  background-color: $mainBgc;
  min-height: calc(100vh - $header-height - $footer-height);
  padding: 24px 40px;
}

.el-footer {
  height: $footer-height;
  padding: 0px;
}
</style>
