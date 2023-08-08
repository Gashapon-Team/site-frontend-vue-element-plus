<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo main-nav"
    mode="horizontal"
    @select="handleSelect"
  >
  <el-sub-menu index="1" class="item-color"  style="border-bottom:none;background: initial;" >
    <template #title><span class="companyName">智慧家居公司</span></template>
    <el-menu-item style="border-bottom:none;background: initial;" index="1-1">登出</el-menu-item>
  </el-sub-menu>
    <el-menu-item index="2" style="border-bottom:none;background: initial;"><el-icon class="icon-color"><QuestionFilled /></el-icon></el-menu-item>
    <el-menu-item index="3" style="border-bottom:none;background: initial;"><el-icon class="icon-color"><BellFilled /></el-icon></el-menu-item>
    <el-menu-item index="4" style="color: #666666;border-bottom:none;cursor: default;background: initial;"><span class="text-color">{{logOutCounter}}</span>秒後自動登出</el-menu-item>
  </el-menu>
</template>

<script setup>
import {ref, onMounted} from 'vue';
const logOutCounter = ref(600);
let intervalId = null;

function startCountdown (){
  intervalId = setInterval(()=>{
    if (logOutCounter.value > 0){
      logOutCounter.value--;
    } else {
      stopCountdown()
      alert('請重新登入')
    }
  }, 1000)
}
function stopCountdown(){
  clearInterval(intervalId);
};
onMounted(()=>{
  startCountdown();
})

</script>

<style lang="scss" scoped>
@import '../../style//main.scss';
.main-nav {
  max-height: 40px;
  width: 100%;
  flex-direction: row-reverse;
  &>li{
    padding: 4px;
    &.is-disabled {
      color: white;
    }
  }
  .icon-color,
  .item-color {
    color: $mainBG
  }
  .text-color {
    color: #666666;
  }
  .el-sub-menu__title.el-tooltip__trigger.el-tooltip__trigger {
    border-bottom: none;
  }
  .companyName {
    color: $mainBG;
  }
}
</style>