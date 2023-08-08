<template>
  <div id="varify_name">
    <div class="varify_section varify_status">
        <h3 class="varify_status__title">實名認證(KYC)</h3>
        <p class="varify_status__content">依據《第三方支付服務業防治洗錢及打擊資恐辦法》規定，藍新有義務進行客戶身分調查...完成實名認證，請放心，身分資料僅用於...</p>
        <div class="varify_status__show_status">
          <div class="sction_left">
            <div class="sction__title">審核狀態</div>
            <div class="sction__status sction__status--gray">尚未認證</div>
          </div>
          <div class="sction_right">
            <div class="sction__title">審核描述</div>
            <div class="sction__status">尚未認證</div>
          </div>
        </div>
    </div>

    <div class="varify_section varify_history">
        <h3 class="title">修改歷程</h3>
        <div class="line"></div>
        <div class="content">
          <div class="no_data_text">尚無資料</div>
        </div>
    </div>

  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scope>
$border_color: #f0f1f1;
#varify_name {
  padding: 16px;
  .varify_section {
    padding: 14px;
    margin: 40px;
    border: 1px solid $border_color;
    border-radius: 6px;
    box-shadow: 0px 0px 0 1px $border_color;
  }
  .varify_status {
    &__title {
      margin-bottom: 12px;
      font-weight: 900;
    }
    &__content {
      margin-bottom: 32px;
    }
    &__content {
      font-size: 14px;
    }
    &__show_status {
      display: flex;
      font-size: 14px;
      div {
        padding: 4px;
      }
      .sction__title {
        color: #c1c5cd;
      }
      .sction__status--gray {
        background: #e5e7eb;
        border-radius: 4px;
        padding: 4px 8px;
      }
    }
  }
  .varify_history {
    .title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom:8px;
    }
    .line {
      width: calc(100% + 30px);
      transform: translateX(-16px);
      height: 1px;
      background: $border_color;
    }
    .content {
      height: 40vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

}

</style>