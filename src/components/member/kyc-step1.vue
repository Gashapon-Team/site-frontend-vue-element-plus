<template>
    <el-form
        id="kycStep1FormRef"
        ref="kycStep1FormRef"
        :model="kycStep1Data"
        :rules="rules"
        label-position="top"
        label-width="300px"
        size="large"
        status-icon
        style="display:flex; justify-content:center;"
    >
        <el-row :gutter="24" style="display:relative; width:100%;">
            <el-col class="tabAreaRwd_css" :sm="6" :xs="24" style="padding:20px; display:flex;">
                <el-tabs :tab-position="tabPosition" @tab-click="handleTabClick">
                    <el-tab-pane label="身分資料"></el-tab-pane>
                    <el-tab-pane label="國民身分證"></el-tab-pane>
                    <el-tab-pane label="雙證件影像檔"></el-tab-pane>
                </el-tabs>
            </el-col>

            <el-col :sm="18" :xs="24" style="max-width:1100px; min-width:300px; margin-bottom:24px;">
                <el-row :gutter="24" style="display:flex; justify-content:space-between; margin-bottom:24px;">
                    <el-col>
                        <h4>實名認證 (KYC)</h4>
                        <p style="margin-top:10px; color:#606266;">
                            依據《第三方支付服務業防制洗錢及打擊資恐辦法》規定，藍新有義進行客戶身分調查......完成實名認證，請放心資料僅用於......
                        </p>
                    </el-col>
                </el-row>
                
                <el-card>
                    <el-row :gutter="24" style="display:flex; justify-content:space-between; padding:20px 20px 0px;">
                        <el-col :lg="5" :md="24" style="padding-right:40px;">
                            <h4 style="margin-bottom:8px;" ref="identityRef">身分資料</h4>
                            <p style="margin-bottom:18px;">
                                這裡是說明文字
                            </p>
                        </el-col>

                        <el-col :lg="19" :xs="24">
                            <el-row>
                                <el-form-item label="中文姓名" prop="name_tw">
                                    <el-input v-model="kycStep1Data.name_tw" placeholder="您的中文姓名"/>
                                </el-form-item>
                            </el-row>
                            <el-row>
                                <el-form-item label="英文名字" prop="first_name_en">
                                    <el-input v-model="kycStep1Data.first_name_en" placeholder="請填寫與護照相同英文名字"/>
                                </el-form-item>
                                <el-form-item label="英文姓氏" prop="last_name_en">
                                    <el-input v-model="kycStep1Data.last_name_en" placeholder="請填寫與護照相同英文姓氏"/>
                                </el-form-item>
                            </el-row>
                            <el-row>
                                <el-form-item label="出生年月日" prop="birth">
                                    <el-date-picker
                                        v-model="kycStep1Data.birth"
                                        type="date"
                                        label="日期"
                                        placeholder="請選擇出生年月日"
                                        style="width: 100%"
                                    />
                                </el-form-item>
                            </el-row>
                        </el-col>
                    </el-row>

                    <el-divider />

                    <el-row :gutter="24" style="display:flex; justify-content:space-between; padding:20px 20px 0px;">
                        <el-col :lg="5" :md="24" style="padding-right:40px;">
                            <h4 style="margin-bottom:8px;" ref="idCardRef">國民身分證</h4>
                            <p style="margin-bottom:18px;">
                                這裡是說明文字
                            </p>
                        </el-col>

                        <el-col :lg="19" :xs="24">
                            <el-row>
                                <el-form-item label="身分證字號" prop="id_number">
                                    <el-input v-model="kycStep1Data.id_number" placeholder="身分證字號10碼，1碼英文+9碼數字"/>
                                </el-form-item>
                            </el-row>
                            <el-row>
                                <el-form-item label="發證民國年月日" prop="id_date">
                                    <el-date-picker
                                        class="id_date_class"
                                        v-model="kycStep1Data.id_date"
                                        type="date"
                                        label="日期"
                                        placeholder="請選擇發證民國年月日"
                                        style="width: 100%"
                                        format="YYYY/MM/DD"
                                        value-format="YYYY-MM-DD"
                                    />
                                        <!-- <template #default="syesr">
                                            <div class="">
                                                <span class="syesr">{{ syesr }}</span>
                                            </div>
                                        </template> -->
                                    <!-- </el-date-picker> -->
                                </el-form-item>
                            </el-row>
                            <el-row>
                                <el-form-item label="發證地點" prop="id_place">
                                    <selectTWzip
                                        v-model="kycStep1Data.id_place"
                                        @twZipCode="(v)=> kycStep1Data.id_place = v"
                                    ></selectTWzip>
                                </el-form-item>
                                
                                <el-form-item label="領補換類別" prop="id_apply_type">
                                    <el-select v-model="kycStep1Data.id_apply_type" placeholder="請選擇" style="width:100%;">
                                        <el-option label="初發" value="1" />
                                        <el-option label="補證" value="2" />
                                        <el-option label="換發" value="3" />
                                    </el-select>
                                </el-form-item>
                            </el-row>
                        </el-col>
                    </el-row>

                    <el-divider />

                    <el-row :gutter="24" style="display:flex; justify-content:space-between; padding:20px 20px 0px;">
                        <el-col :lg="5" :md="24" style="padding-right:40px;">
                            <h4 style="margin-bottom:8px;" ref="doubleIdRef">雙證件影像檔</h4>
                            <p style="margin-bottom:18px;">
                                這裡是說明文字
                            </p>
                        </el-col>
                        <el-col :lg="19" :xs="24">
                            <el-row>
                                <el-form-item label="國民身分證（正面）" prop="id_pic_front">
                                    <uploadDragOnePic
                                        v-model="kycStep1Data.id_pic_front"
                                        @returnIdPicFront="(v)=> kycStep1Data.id_pic_front = v"
                                        :reset-trigger="resetFlag"
                                    />
                                    <!-- <el-upload
                                        ref="id_pic_front_ref"
                                        v-model="kycStep1Data.id_pic_front"
                                        list-type="picture-card"
                                        drag
                                        
                                        action="#"
                                        :auto-upload="false"
                                       
                                        :limit="1"
                                        :on-exceed="idPicFrontExceed"
                                        :on-change="idPicFrontVerify"
                                        
                                        :on-preview="idPicFrontPreview"
                                        :on-remove="idPicFrontRemove"
                                    >

                                            <el-icon class="el-icon--upload"><UploadFilled /></el-icon>
                                            <div class="el-upload__text">
                                                將檔案拖到此處，或 <em>點擊上傳</em>
                                            </div>
         
                                        <template #tip>
                                            <div class="el-upload__tip">
                                                限JPG、JPEG、PNG檔案格式，檔案大小須小於5MB
                                            </div>
                                        </template>
                                    </el-upload>
                                    <el-dialog v-model="dialogVisible">
                                        <img style="width:100%;" :src="dialogImageUrl" alt="Preview Image" />
                                    </el-dialog> -->
                                </el-form-item>
                            </el-row>
                            <el-row>
                                <el-form-item label="國民身分證（反面）" prop="id_pic_back">
                                    <uploadDragOnePic
                                        v-model="kycStep1Data.id_pic_back"
                                        @returnIdPicFront="(v)=> kycStep1Data.id_pic_back = v"
                                        :reset-trigger="resetFlag"
                                    />
                                </el-form-item>
                            </el-row>
                            <el-row>
                                <el-form-item label="健保卡（正面）" prop="health_id_pic">
                                    <uploadDragOnePic
                                        v-model="kycStep1Data.health_id_pic"
                                        @returnIdPicFront="(v)=> kycStep1Data.health_id_pic = v"
                                        :reset-trigger="resetFlag"
                                    />
                                </el-form-item>
                            </el-row>
                        </el-col>

                    </el-row>

                    <el-divider />

                    <el-form-item style="margin: auto;">
                        <el-button @click="">上一步</el-button>
                        <el-button @click="resetForm(kycStep1FormRef)">重設</el-button>
                        <el-button type="primary" @click="submitForm(kycStep1FormRef)">
                            下一步
                        </el-button>
                    </el-form-item>
                </el-card>
                
            </el-col>
        </el-row>
    </el-form>
</template>
  
<script setup>

import { reactive, ref, shallowRef, onMounted, nextTick } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'
// import { ElMessage, genFileId } from 'element-plus'
import selectTWzip from '../form/selectTWzip.vue'
import uploadDragOnePic from '../form/uploadDragOnePic.vue'


// // =============圖檔上傳=============
// // 圖片上傳成功
// // const imageUrl = ref('')
// const idPicFrontSuccess = (uploadFile) => {
//     console.log('idPicFrontSuccess',uploadFile)
//     console.log('URL.createObjectURL(uploadFile)',URL.createObjectURL(uploadFile))

// //   imageUrl.value = URL.createObjectURL(uploadFile)
//   kycStep1Data.id_pic_front = URL.createObjectURL(uploadFile)
//   console.log(kycStep1Data.id_pic_front)
// }

// // 圖片驗證
// const idPicFrontVerify= (rawFile) => {
//     // console.log('idPicFrontVerify',rawFile)
//   if (rawFile.raw.type !== 'image/jpeg' && rawFile.raw.type !== 'image/png') {
//     ElMessage.error('限JPG、JPEG、PNG檔案格式!')
//     id_pic_front_ref.value.clearFiles() //clear preview pic
//     kycStep1Data.id_pic_front = ''
//     return false
//   } else if (rawFile.raw.size / 1024 / 1024 > 5) {
//     ElMessage.error('檔案大小須小於5MB!')
//     id_pic_front_ref.value.clearFiles()
//     kycStep1Data.id_pic_front = ''
//     return false
//   }

//   idPicFrontSuccess(rawFile.raw)
//   return true
// }

// // 圖檔更換 (limit 1)
// const id_pic_front_ref = ref(null)
// const idPicFrontExceed = (files) => {
//     // console.log(files)
//   id_pic_front_ref.value.clearFiles()
//   const file = files[0]
//   file.uid = genFileId()
//   id_pic_front_ref.value.handleStart(file)
// //   console.log(id_pic_front_ref)
//   idPicFrontSuccess(file)
// }

// // 圖檔預覽
// const dialogImageUrl = ref('')
// const dialogVisible = ref(false)
// const idPicFrontPreview = (file) => {
//     dialogImageUrl.value = file.url
//     dialogVisible.value = true
// }
// // 移除圖檔
// const idPicFrontRemove = (file) => {
//   console.log('idPicFrontRemove',file)
//   kycStep1Data.id_pic_front = ''
//   id_pic_front_ref.resetFields()
// }



// tab RWD
const tabPosition = ref('right') //right|top
onMounted(() => {
    // Check initial window width
    if(window.innerWidth <= 768) {
        tabPosition.value = 'right';
    }
  
    // Listen for window resize
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    mediaQuery.addEventListener('change', (e) => {
        if(e.matches) {
            tabPosition.value = 'top';
        } else {
            tabPosition.value = 'right';
        }
    });

});

// tab scroll into view
const identityRef = ref(null);
const idCardRef = ref(null);
const doubleIdRef = ref(null);
const handleTabClick = (tab) => {
    console.log('tab',tab.props.label)
    switch (tab.props.label){
        case "身分資料":
            nextTick(() => {
                identityRef.value.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
            });
            break;
        case "國民身分證":
            nextTick(() => {
                idCardRef.value.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" });
            });
            break;
        case "雙證件影像檔":
            nextTick(() => {
                doubleIdRef.value.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" });
            });
            break;
    }
};

// FORM
const kycStep1FormRef = ref(null)
const kycStep1Data = reactive({
  name_tw: '',
  first_name_en: '',
  last_name_en: '',
  id_number: '',
  id_date: '',
  id_place: '',
  id_apply_type: '',

  id_pic_front: '',
  id_pic_back: '',
  health_id_pic: ''
})

const rules = reactive({
  name_tw: [
    { required: true, message: '請填寫中文姓名', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  first_name_en: [
    { required: true, message: '請填寫與護照相同英文名字', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  last_name_en: [
    { required: true, message: '請填寫與護照相同英文姓氏', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  birth: [
    {
      type: 'date',
      required: true,
      message: '請選擇日期',
      trigger: 'change',
    },
  ],
  id_number: [
    { required: true, message: '身分證字號10碼，1碼英文+9碼數字', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  id_date: [
    {
      type: 'date',
      required: true,
      message: '請選擇發證日期',
      trigger: 'change',
    },
  ],
  id_place: [
    {
      required: true,
      message: '請選擇發證地點',
      trigger: 'change',
    },
  ],
  id_apply_type: [
    {
      required: true,
      message: '請選擇領補換類別',
      trigger: 'change',
    },
  ],
  id_pic_front:[
  {
      required: true,
      message: '請上傳國民身分證（正面）圖檔',
      trigger: 'change',
    }
  ],
  id_pic_back:[
  {
      required: true,
      message: '請上傳國民身分證（反面）圖檔',
      trigger: 'change',
    }
  ],
  health_id_pic:[
  {
      required: true,
      message: '請上傳健保卡（正面）圖檔',
      trigger: 'change',
    }
  ],
})

const submitForm = async (formEl) => {
    console.log('submitForm formEl',formEl)
    console.log(kycStep1Data)
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

let resetFlag = ref(false) //file upload reset preview
const resetForm = async (formEl) => {
    console.log('resetForm formEl',formEl)
  if (!formEl) return
    formEl.resetFields()

    kycStep1Data.id_pic_front = '' //clear all model

    resetFlag.value = true //clear preview file
    await nextTick() 
    resetFlag.value = false
}



</script>

<style scoped lang="scss">

.el-card__body {
    padding: 24px 24px;
}

.el-form-item {
    width: 300px;
    margin: 0px 8px 32px 0px;
}

#kycStep1FormRef .el-tabs{
    position: fixed;
}
.tabAreaRwd_css {
    justify-content: flex-end;
}


:deep(.el-form-item__label) {
    font-weight: 900;
}


//.el-upload file
// $kycUploadPicWidth: 300px;
// :deep(.el-upload-list--picture-card) {  //preview
//     --el-upload-list-picture-card-size: $kycUploadPicWidth;
// }
// :deep(.el-upload--picture-card) {  //upload
//     --el-upload-picture-card-size : $kycUploadPicWidth;
// }
// :deep(.el-upload-list--picture-card .el-upload-list__item) {
//     border: none;
// }


@media (max-width: 768px) {
    #kycStep1FormRef .el-tabs {
        position: relative;
    }
    .tabAreaRwd_css {
        justify-content: center;
    }
}

</style>
   