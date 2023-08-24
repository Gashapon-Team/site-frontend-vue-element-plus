<template>
    <el-upload
        ref="pic_ref"
        v-model="uploadValue"
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
        <!-- <img class="trueImg" v-if="imageUrl" :src="imageUrl" /> -->
        <!-- <div class="hiddenDiv" v-else> -->
            <el-icon class="el-icon--upload"><UploadFilled /></el-icon>
            <div class="el-upload__text">
                將檔案拖到此處，或 <em>點擊上傳</em>
            </div>
        <!-- </div> -->
        <template #tip>
            <div class="el-upload__tip">
                限JPG、JPEG、PNG檔案格式，檔案大小須小於5MB
            </div>
        </template>
    </el-upload>
    <el-dialog v-model="dialogVisible">
        <img style="width:100%;" :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
</template>
  
<script setup>
import { ref, watch } from 'vue';
import { ElMessage, genFileId } from 'element-plus'

const props = defineProps({
    returnIdPicFront:{
        type:String,
        default: ''
    },
    resetTrigger:{
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['returnIdPicFront'])
let uploadValue = ref(props.returnIdPicFront);
const pic_ref = ref()

watch(
  //父組件觸發resetTrigger
  props,
  ({ resetTrigger: isReset }) => {
    if (isReset) {
        uploadValue = ''
        pic_ref.value.clearFiles() //clear preview file
    }
  },
  {
    immediate: true,
    deep: true
  }
)



// =============圖檔上傳=============
// 圖片上傳成功
// const imageUrl = ref('')
const idPicFrontSuccess = (uploadFile) => {
    console.log('idPicFrontSuccess',uploadFile)
    console.log('URL.createObjectURL(uploadFile)',URL.createObjectURL(uploadFile))

//   imageUrl.value = URL.createObjectURL(uploadFile)
  uploadValue = URL.createObjectURL(uploadFile)
  console.log(uploadValue)

  emit('returnIdPicFront', uploadValue)
}

// 圖片驗證
const idPicFrontVerify= (rawFile) => {
    console.log('idPicFrontVerify uploadValue',uploadValue)
    console.log('pic_ref.value',pic_ref.value)
        // console.log('idPicFrontVerify',rawFile)
    if (rawFile.raw.type !== 'image/jpeg' && rawFile.raw.type !== 'image/png') {
        ElMessage.error('限JPG、JPEG、PNG檔案格式!')
        pic_ref.value.clearFiles() //clear preview pic
        uploadValue = ''
        return false
    } else if (rawFile.raw.size / 1024 / 1024 > 5) {
        ElMessage.error('檔案大小須小於5MB!')
        pic_ref.value.clearFiles()
        uploadValue = ''
        return false
    }

    idPicFrontSuccess(rawFile.raw)
    return true
}

// 圖檔更換 (limit 1)
const idPicFrontExceed = (files) => {
    console.log('pic_ref.value',pic_ref.value)
    pic_ref.value.clearFiles() //clear preview file
    const file = files[0]
    file.uid = genFileId()
    pic_ref.value.handleStart(file)
    //   console.log(pic_ref.value)
    idPicFrontSuccess(file)
}

// 圖檔預覽
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const idPicFrontPreview = (file) => {
    dialogImageUrl.value = file.url
    dialogVisible.value = true
}
// 移除圖檔
const idPicFrontRemove = (file) => {
    console.log('idPicFrontRemove',file)
    console.log('idPicFrontRemove pic_ref',pic_ref)
    uploadValue = ''
    pic_ref.value.clearFiles() //clear preview file
}

</script>

<style scoped lang="scss">
//.el-upload file
$kycUploadPicWidth: 300px;
:deep(.el-upload-list--picture-card) {  //preview
    --el-upload-list-picture-card-size: $kycUploadPicWidth;
}
:deep(.el-upload--picture-card) {  //upload
    --el-upload-picture-card-size : $kycUploadPicWidth;
}
:deep(.el-upload-list--picture-card .el-upload-list__item) {
    border: none;
}
</style>
   