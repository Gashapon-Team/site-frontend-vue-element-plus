<template>
   <el-container>
        <el-card class="box-card">
            <template #header class="header--no--underline">
                <div class="card-header">
                    <span>實名認證 (KYC)</span>
                </div>
            </template>
        </el-card>
   </el-container>
</template>
  
<script setup>
import {ref} from 'vue';




</script>

<style scoped lang="scss">
    .el-container{
        padding:25px;
    }

    .box-card{
        width:100%;
    }

    :deep(.header--no--underline){
        border-bottom-width:0px;
    }

    .card-header{
        font-weight: 800;
        font-size:18px;
    }

</style>
  