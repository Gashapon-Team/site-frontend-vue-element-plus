<template>
<div>

    <el-container>
        
        <el-header>
            <main-header></main-header>
        </el-header>
        
        <el-container>
            <el-row style="margin:40px 0;">
                <kyc-step-head></kyc-step-head>
            </el-row>

            <el-main>
                <component :is="contentPage"></component>
            </el-main>
        
            <el-footer>
                <main-footer></main-footer>
            </el-footer>
      </el-container>
  
    </el-container>
</div>

</template>

<script setup>
import {ref, shallowRef} from 'vue';


import MainHeader from '../components/layout/main-header.vue';
import MainFooter from '../components/layout/main-footer.vue';


import kycStepHead from '../components/member/kyc-step-head.vue';
import kycStep1 from '../components/member/kyc-step1.vue';

const tabPosition = ref('left') //left|top
let contentPage = shallowRef(kycStep1);



//變更右側功能component
// const changePage = (pageName) => {
//   nowPage.value = markRaw(pageName)
// }




</script>


<style scoped lang="scss">
.el-aside {
  width: $aside-width;
}

.el-header {
  height: $header-height;
  padding: 0px;
  width: 100%;
}

.el-container {
    background-color: $mainBgc;
}

.el-main {
  min-height: calc(100vh - $header-height - $footer-height);
  padding: 24px 40px;
}

.el-footer {
  height: $footer-height;
  padding: 0px;
}
</style>
