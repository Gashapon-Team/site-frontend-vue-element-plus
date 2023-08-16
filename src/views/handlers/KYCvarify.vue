<template>
  <div>
    <Progressbar></Progressbar>
    <div class="KYCvarify_layout">
      <div>
        <h3 class="mb-2">實名認證(KYC)</h3>
        <p>依據《第三方支付服務業防治洗錢及打擊資恐辦法》規定，藍新有義務進行客戶身分調查...</p>
      </div>
      <div class="KYCvarify">
        <div class="KYCvarify_data__eara">
          <!-- 身分證資料 -->
          <div class="KYCvarify__section">
            <div class="title">
              <h4>身分資料</h4>
              <p>這裡顯示說明文字</p>
            </div>
            <div class="content">
              <DefaultCustomInput
                :label="'中文姓名'"
                :placeholder="'您的中文姓名'"
                :tips="'We\'ll never share yourt email with anyone else.'"
                :classes="'input--md'"
              ></DefaultCustomInput>

              <div class="d-flex">
                <DefaultCustomInput
                  :label="'英文名字'"
                  :placeholder="'First Name'"
                  :tips="'與護照相同的英文名字'"
                  :classes="'input--sm mr-4'"
                ></DefaultCustomInput>

                <DefaultCustomInput
                  :label="'英文姓氏'"
                  :placeholder="'First Name'"
                  :tips="'與護照相同的英文名字'"
                  :classes="'input--sm'"
                ></DefaultCustomInput>
              </div>

              <DatePickerInput
                :label="'出生年月日'"
                :placeholder="'選擇日期'"
                :tips="'We\'ll never share your email with anyone else.'"
                :classes="'input--sm'"
              >
              </DatePickerInput>
            </div>
          </div>

          <div class="line line--full"></div>
          <!-- 國民身分證 -->
          <div class="KYCvarify__section">
            <div class="title">
              <h4>國民身分證</h4>
              <p>這裡顯示說明文字</p>
            </div>
            <div class="content">
              <DefaultCustomInput
                :label="'身分證字號'"
                :placeholder="'身分證字號10碼'"
                :tips="'1碼英文+9碼數字'"
                :classes="'input--md'"
              ></DefaultCustomInput>

              <div class="d-flex">
                <SelectInput
                  :label="'發證民國年'"
                  :placeholder="'請選擇民國年'"
                  :classes="'input--xs'"
                ></SelectInput>

                <SelectInput
                  :label="'月份'"
                  :placeholder="'請選擇月份'"
                  :classes="'input--xs'"
                ></SelectInput>

                <SelectInput
                  :label="'日期'"
                  :placeholder="'請選擇日期'"
                  :classes="'input--xs'"
                ></SelectInput>
              </div>

              <div class="d-flex">
                <SelectInput
                  :label="'發證地點'"
                  :placeholder="'請選擇'"
                  :classes="'input--sm'"
                ></SelectInput>

                <SelectInput
                  :label="'領補換類別'"
                  :placeholder="'請選擇'"
                  :classes="'input--sm'"
                ></SelectInput>
              </div>

            </div>
          </div>

          <div class="line line--full"></div>
          <!-- 雙證件影像檔 -->
          <div class="KYCvarify__section">
            <div class="title">
              <h4>雙證件影像檔</h4>
              <p>這裡顯示說明文字</p>
            </div>
            <div class="content">
              <UploadInput
                :label="'國民身分證(正面)'"
                :tips="'限JPG、JPEG、PNG檔案格式，檔案大小須小於5MB'"
                :classes="'mb-8'"
                :placeholder="'將檔案拖曳到此處，或點擊上傳'"
                :alert="'請至少上傳1張圖片'"
                @getFileList="getIDCardFile"
                >
              </UploadInput>
              <UploadInput
                :label="'國民身分證(反面)'"
                :tips="'限JPG、JPEG、PNG檔案格式，檔案大小須小於5MB'"
                :classes="'mb-8'"
                :placeholder="'將檔案拖曳到此處，或點擊上傳'"
                :alert="'請至少上傳1張圖片'"
                @getFileList="getIDBackCardFile"
                >
              </UploadInput>
              <UploadInput
                :label="'健保卡(正面)'"
                :tips="'限JPG、JPEG、PNG檔案格式，檔案大小須小於5MB'"
                :classes="'mb-8'"
                :placeholder="'將檔案拖曳到此處，或點擊上傳'"
                :alert="'請至少上傳1張圖片'"
                @getFileList="getHealthCardFileList"
                >
              </UploadInput>
            </div>
          </div>

        </div>
      </div>
      <el-row class="my-4 d-flex justify-content--center">
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="primary">Primary</el-button>
      </el-row>
    </div>
  </div>
</template>
<script setup>
import Progressbar from '../../components/progressbar/Progressbar.vue'
import DefaultCustomInput from '../../components/input/defaultCustomInput.vue'
import DatePickerInput from '../../components/input/datepickerInput.vue'
import SelectInput from '../../components/input/selectInput.vue'
import UploadInput from '../../components/input/uploadInput.vue'

import { defineComponent, reactive } from 'vue'

const file_id_card=reactive({
  file_data: {},
  file: ''
})
const file_id_card_back=reactive({
  file_data: {},
  file: ''
})
const file_health_card=reactive({
  file_data: {},
  file: ''
})

defineComponent({ Progressbar, DefaultCustomInput, DatePickerInput, SelectInput, UploadInput })

function getIDCardFile(file_data, file){
  file_id_card.file_data=file_data
  file_id_card.file=file
}
function getIDBackCardFile(file_data, file){
  file_id_card_back.file_data=file_data
  file_id_card_back.file=file
}
function getHealthCardFileList(file_data, file){
  file_health_card.file_data=file_data
  file_health_card.file=file
}

</script>
<style lang="scss" scoped>
@import '../../style/main.scss';
.KYCvarify_layout {
  padding: 16px;
  margin: 32px auto 0 auto;
  max-width: 800px;
  > h3 {
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 32px;
  }
}
.KYCvarify {
  // height: calc(100vh - 40px);
  height: fit-content;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  &__eara {
    padding: 16px;
  }
  &__section {
    display: flex;
    flex-wrap: nowrap;
    padding: 16px 40px;
    // box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
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