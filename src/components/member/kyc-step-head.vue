<template>
  <el-steps :active="active" align-center finish-status="success">
    <el-step title="步驟標題一" description="這裡是一段說明文字" />
    <el-step title="步驟標題二" description="這裡是一段說明文字" />
    <el-step title="步驟標題三" description="這裡是一段說明文字" />
  </el-steps>
</template>
  
<script setup>
import { ref } from 'vue';

const active = ref(1)


</script>

<style scoped lang="scss">

.el-steps {
    width: 800px;
    margin: auto;
    // padding: 40px;
    // margin: 40px auto 80px;
}


@media (min-width: 768px) {

}

</style>
   