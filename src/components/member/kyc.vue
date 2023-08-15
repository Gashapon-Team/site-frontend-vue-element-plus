<template>
    <el-card style="max-width:1524px; min-width:300px; margin:0 auto 24px;">
        <el-row :gutter="24" style="display: flex; justify-content: space-between;">
            <el-col :md="20" :xs="24">
                <h4>實名認證 (KYC)</h4>
                <p style="margin-top:10px; color:#606266;">
                    依據《第三方支付服務業防制洗錢及打擊資恐辦法》規定，藍新有義進行客戶身分調查......完成實名認證，請放心資料僅用於......
                </p>
                <div style="display:flex; justify-content:start; margin-bottom: 10px">
                    <div style="margin-right:40px;">
                        <p style="color:#9CA3AF; margin-top:24px;">審核狀態</p>
                        <p style="color:#4B5563; margin-top:5px; padding:4px 8px; background:#E5E7EB; border-radius:4px;">尚未認證</p>
                    </div>
                    <div style="margin-right:40px;">
                        <p style="color:#9CA3AF; margin-top:24px;">審核描述</p>
                        <p style="color:#4B5563; margin-top:5px;">尚未認證</p>
                    </div>
                </div>
            </el-col>
            
            <el-col :md="4" :xs="24" class="verifyBtn_css">
                <el-button size="large" type="primary">
                    <Icon size="17" style="margin: 0px 10px 0px 0px;"><AdminPanelSettingsFilled /></Icon>
                    <span>前往認證</span>
                </el-button>
            </el-col>
        </el-row>
    </el-card>

    <el-card :body-style="{display:'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column', flexGrow: '1'}" 
        style="max-width:1524px; min-width:300px; margin:0 auto 24px; min-height: 500px; display:flex; flex-direction: column;"
    >
        <template #header>
            <div class="card-header" style="padding: 4px 16px 0px 20px;">
                <p style="font-size: 16px;">修改歷程</p>
            </div>
        </template>
        
        <div style="text-align: center;">
            <el-empty description="尚無認證紀錄" image-size="104"/>
        </div>

        <!-- 改在<el-card>設定 :body-style
        <div style="height:100%; display:flex; justify-content:center; align-items: center; flex-direction: column; flex-grow: 1;">
            <el-empty description="尚無認證紀錄" image-size="104"/>
        </div> -->

    </el-card>
</template>
  
<script setup>

import { Icon } from "@vicons/utils"; //https://xicons.org/
import { AdminPanelSettingsFilled } from '@vicons/material'


</script>

<style scoped lang="scss">

.verifyBtn_css {
    text-align: right;
}
@media (max-width: 980px) {
    .verifyBtn_css {
        text-align: center;
    }
}

</style>
   