<template>
  <div class="custom_upload_input">
    <div class="mb-1">{{ label }}</div>

    <div class="upload_container">

      <el-icon 
          v-if="fileContent"
          class="upload_container__close_icon"
          @click="removePreview">
            <CircleCloseFilled />
      </el-icon>
      <el-upload
        class="upload-demo"
        :class="fileContent?'active':''"
        drag
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
        :on-change="handleImport"
        :on-preview="handlePreview"
        :limit="1"
        :on-exceed="handleExceed"
        :file-list="fileList"
        :on-success="handleSuccess"
      >
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
        <template>
          <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
        </template>
      </el-upload>
      <img v-if="fileContent" :src="fileContent" alt="Preview Uploaded Image" class="file-preview" />
    </div>

  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  tips: {
    type: String,
    default: ''
  },
  classes: {
    type: String,
    default: ''
  }
})

const fileContent = ref('')
const fileList = ref([])

function handleImport(file) {
  let reader = new FileReader()
  reader.readAsDataURL(file.raw)
  reader.onloadend = async function (e) {
    fileContent.value = e.target.result
  }
}
function removePreview(){
  fileContent.value = '';
  console.log('fileList', fileList)
}
function handleSuccess(response, file, fileList){
  // 上傳成功後的處理
  console.log('response', response)
  console.log('file'. file);
  console.log('fileList', fileList)
};
const handleRemove = (file, fileList) => {
  // 移除已上傳的檔案
  const index = fileList.indexOf(file);
  if (index !== -1) {
    fileList.splice(index, 1);
  }
};
</script>

<style lang="scss" scoped>
@import '../../style/main.scss';
.custom_upload_input {
    .upload_container {
            position: relative;
        .upload-demo.active {
            opacity: 0;
            position: absolute;
            width: 420px;
            height: 220px;
        }
        .upload_container__close_icon {
          font-size: 36px;
          cursor: pointer;
          color: $default_color_grey;
          position: absolute;
          z-index: 2;
          right: 8px;
          top: 8px;
          box-shadow: 0px 2px 6px black;
          border-radius: 999px;
          background: white;
        }
    }
}
</style>