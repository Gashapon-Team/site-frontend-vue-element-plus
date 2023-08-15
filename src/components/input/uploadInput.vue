<template>
  <div class="custom_input">
    <div class="mb-1">{{ label }}</div>

    <img v-if="fileContent" :src="fileContent" alt="Preview Uploaded Image" class="file-preview" />
    <el-upload
      v-else
      class="upload-demo"
      drag
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
      :on-change="handleImport"
      :on-preview="handlePreview"
      :limit="1"
      :on-exceed="handleExceed"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
      <template>
        <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
      </template>
    </el-upload>
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

function handleImport(file) {
  let reader = new FileReader()
  reader.readAsDataURL(file.raw);
  reader.onloadend = async function(e){
    fileContent.value = e.target.result
  }
}
</script>

<style>
</style>