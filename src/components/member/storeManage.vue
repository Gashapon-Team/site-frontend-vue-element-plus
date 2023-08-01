<template>
   <el-container>
        <el-header>
            <h1 class="page_title">商店管理</h1>
        </el-header>
        <el-tabs v-model="activeTab">
            <el-tab-pane label="基本資料設定" name="memberInfo">
                <!--基本資料設定組件-->
            </el-tab-pane>
            <el-tab-pane label="收款設定" name="moneySetting">
                <!--收款設定組件-->
            </el-tab-pane>
            <el-tab-pane label="物流設定" name="logisticSetting">
                <!--物流設定組件-->
            </el-tab-pane>
            <el-tab-pane label="商店審核" name="storeCheck">
                <!--商店審核組件-->
            </el-tab-pane>
        </el-tabs>

        <el-card class="box-card">
            <el-row :gutter="24">
                <el-col :span="6" :offset="1">
                    <div>
                        <h3>聯絡資訊</h3>
                        <h5 class="mt-10 text-gray">這裡是說明文字</h5>
                    </div>
                </el-col>
                <el-col :span="16">
                    <input-label @getValue="setEmitValue"></input-label>
                </el-col>
                {{inpuytObj.contactName }}
            </el-row>
        </el-card>
   </el-container>
</template>
  
<script setup>
import {ref, reactive} from 'vue';
import inputLabel from '../form/inputLabel.vue';

const activeTab = ref('memberInfo')
const inpuytObj = reactive({
    contactName:'',
});

//將input內的值傳入輸入框共用obj
const setEmitValue = (inputName,value) => {
    inpuytObj[inputName] = value;
}



</script>

<style scoped lang="scss">
    .el-container{
        padding:25px;
    }

    .page_title{
        font-size:28px;
        font-weight: 900;
    }

    :deep(.header--no--underline){
        border-bottom-width:0px;
    }

</style>
  