<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="姓名" prop="name">
      <el-input v-model="ruleForm.name" placeholder="請填寫真實姓名"/>
    </el-form-item>
    <el-form-item label="性別" prop="gender">
      <el-select v-model="ruleForm.gender" placeholder="請選擇性別">
        <el-option label="男" value="man" />
        <el-option label="女" value="female" />
      </el-select>
    </el-form-item>
    <el-form-item label="數量" prop="count">
      <el-select-v2
        v-model="ruleForm.count"
        placeholder="數量"
        :options="options"
      />
    </el-form-item>
    <el-form-item label="時間" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker
            v-model="ruleForm.date1"
            type="date"
            label="日期"
            placeholder="日期"
            style="width: 100%"
          />
        </el-form-item>
      </el-col>
      <el-col class="text-center" :span="2">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker
            v-model="ruleForm.date2"
            label="時間"
            placeholder="時間"
            style="width: 100%"
          />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="開關" prop="switch">
      <el-switch v-model="ruleForm.switch" />
    </el-form-item>
    <el-form-item label="類型" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="類型一" name="type" model-value="1"/>
        <el-checkbox label="Promotion activities" name="type" />
        <el-checkbox label="Offline activities" name="type" />
        <el-checkbox label="Simple brand exposure" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Resources" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="Sponsorship" />
        <el-radio label="Venue" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Activity form" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  name: string
  gender: string
  count: string
  date1: string
  date2: string
  switch: boolean
  type: string[]
  resource: string
  desc: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: '',
  gender: '',
  count: '',
  date1: '',
  date2: '',
  switch: false,
  type: [],
  resource: '',
  desc: '',
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: '請填寫姓名', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  gender: [
    {
      required: true,
      message: '請選擇性別',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: '請選擇數量',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: '請選擇日期',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: '請選擇時間',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: '請選擇at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: '請選擇activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: '請填寫activity form', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    console.log(ruleForm)
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>
