<template>
  <div class="custom_input">
    <div class="mb-1">{{label}}</div>
    <el-input class=" mb-1"
      :class="classes"
      v-model="inputValue"
      :placeholder="placeholder"
      clearable 
      />
    <div class="tips">{{ tips }}</div>
  </div>
</template>

<script setup>
import {defineProps } from 'vue'
const props  = defineProps({
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

</script>

<style>
</style>