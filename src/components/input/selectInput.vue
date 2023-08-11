<template>
  <div class="custom_input">
    <div class="mb-1">{{label}}</div>
      <el-select
        v-model="value"
        class="mr-2"
        :class="classes"
        placement="top"
        :placeholder="placeholder">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    <div class="tips">{{ tips }}</div>
  </div>
</template>

<script setup>
import {defineProps, ref  } from 'vue'
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

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

</script>

<style>
</style>