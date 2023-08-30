<template>
    <div class="main_footer">
        <div>© 2018 Nowob Technologies Co., Ltd.</div>
        <div>客服專線 02-2345-4321｜cs@nowob.com｜服務時間24小時</div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
$text: #666;

.main_footer {
    height: $footer-height;
    background-color: #FFF;
    box-shadow: $header-footer-box-shadow;
    padding: 0px 40px;
    color: $text;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>