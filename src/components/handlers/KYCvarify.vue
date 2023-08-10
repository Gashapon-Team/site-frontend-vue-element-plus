<template>
  <div class="KYCHandlePage">
    <ul class="KYCHandlePage__progressbar">
      <li v-for="(item, i) in progress_bar_items" :key="i">
          <div  v-if="!item.finished">{{ item.index }}</div>
          <el-icon v-else><CircleCheckFilled /></el-icon>
          <div class="prgress_item_content">
            <h4>{{ item.title }}</h4>
            <p>{{ item.content }}</p>
          </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import {reactive} from 'vue'

const progress_bar_items = reactive([
  {
    index: 1,
    title: '步驟標題',
    content: '這裡是一段說明文字',
    finished: true
  },
  {
    index: 2,
    title: '步驟標題',
    content: '這裡是一段說明文字',
    finished: false
  },
  {
    index: 3,
    title: '步驟標題',
    content: '這裡是一段說明文字',
    finished: false
  },
])

</script>
<style lang="scss" scoped>
$default_color:#9ca3af;
$progress_color: #e5e7eb;
.KYCHandlePage {
  width: 100vw;
  height: calc(100vh - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  &__progressbar{
    padding: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    width: 60%;
    max-width: 500px;
    > li {
      background-color: $default_color;
      border-radius: 999px;
      list-style: none;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      padding: 4px;
      color: #ffffff;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        display: block;
        background-size: contain;
        height: 2px;
        background-color: $progress_color;
        width: 164px;
        top: 11.5px;
        transform: translateX(24px);
      }
      &:nth-last-child(1)::before {
        display: none;
      }
      .prgress_item_content {
        position: absolute;
        width: 200px;
        left: -88px;
        top: 36px;
        >h4{
          color: black;
          margin-bottom: 8px;
        }
        >p{
          color: #caced5;
        }
      }
      .el-icon {
        font-size: 36px;
        position: absolute;
        left: -4px;
        top: -4px;
        color: $mainBG;
        background-color: #ffffff;
      }
    }
  }
}
</style>