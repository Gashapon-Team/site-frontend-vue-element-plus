<template>
  <div>
    <Progressbar></Progressbar>
    <div class="KYCvarify">
      <h3>實名認證(KYC)</h3>
      <p>依據《第三方支付服務業防治洗錢及打擊資恐辦法》規定，藍新有義務進行客戶身分調查...</p>
      <div class="KYCvarify_data__eara">
          <div class="KYCvarify__section">
              <div class="title">
                <h4>身分資料</h4>
                <p>這裡顯示說明文字</p>
              </div>
              <div class="content">

                <DefaultInput
                  :label="'中文姓名'"
                  :placeholder="'您的中文姓名'"
                  :tips="'We\'ll never share yourt email with anyone else.'"
                  :classes="'input--md'"
                  ></DefaultInput>

                <div class="d-flex">
                  <DefaultInput
                    :label="'英文名字'"
                    :placeholder="'First Name'"
                    :tips="'與護照相同的英文名字'"
                    :classes="'input--sm mr-4'"
                    ></DefaultInput>
  
                    <DefaultInput
                    :label="'英文姓氏'"
                    :placeholder="'First Name'"
                    :tips="'與護照相同的英文名字'"
                    :classes="'input--sm'"
                    ></DefaultInput>
                </div>

                <DatePickerInput
                  :label="'出生年月日'"
                  :placeholder="'選擇日期'"
                  :tips="'We\'ll never share your email with anyone else.'"
                  :classes="'input--sm'">
                  </DatePickerInput>

              </div>

            </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import Progressbar from '../../components/progressbar/Progressbar.vue';
import DefaultInput from '../../components/input/defaultInput.vue';
import DatePickerInput from '../../components/input/datepickerInput.vue';
import { defineComponent, ref } from 'vue'

defineComponent({ Progressbar, DefaultInput, DatePickerInput })

</script>
<style lang="scss" scoped>
.KYCvarify{
  padding: 16px;
  margin: 32px auto 0 auto;
  max-width: 800px;
  height: calc(100vh - 40px);
  >h3{
    margin-bottom: 8px;
  }
  p{
    margin-bottom: 32px;
  }
  &__eara{
    padding: 16px;
  }
  &__section{
    display: flex;
    flex-wrap: nowrap;
    padding: 16px 40px;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    .title {
      width: 40%;
      h4 {
        font-size: 18px;
        margin-bottom: 8px;
      }
      p {
        font-size: 14px;
      }
    }
    .content {
      width: 60%;
      display: flex;
      flex-direction: column;

    }
  }
}

</style>