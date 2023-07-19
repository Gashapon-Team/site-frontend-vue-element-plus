<template>
  <div class="demo-date-picker">
    <div class="container">
      <div class="block">
        <span class="demonstration">日期 Date</span>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="請選擇日期"
        />
      </div>

      <div class="block">
        <span class="demonstration">日期區間 Date Range</span>
        <el-date-picker
          v-model="value2"
          type="daterange"
          unlink-panels
          range-separator="~"
          start-placeholder="起始日"
          end-placeholder="結束日"
          :shortcuts="shortcuts"
          size="default"
        />
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
  import { ref } from 'vue'
  
  const value1 = ref('')
  const value2 = ref('')

  const shortcuts = [
    {
      text: '近一周',
      value: () => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
        return [start, end]
      },
    },
    {
      text: '近一個月',
      value: () => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
        return [start, end]
      },
    },
    {
      text: '近三個月',
      value: () => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
        return [start, end]
      },
    },
  ]

</script>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .container {
  flex: 1;
}

.demo-date-picker .block {
  padding: 20px 0;
  /* text-align: center; */
  border-bottom: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .demonstration {
  /* display: block; */
  padding-right: 20px;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  /* margin-bottom: 20px; */
  width: 180px;
  display: inline-block;
}
</style>
  