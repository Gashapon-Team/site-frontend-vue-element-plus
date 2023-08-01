<template>
    <el-input 
        :type="props.inputType" 
        v-model="inputValue"
        :class="customStyle"
        @input="$emit('getValue','contactName',inputValue)">
    </el-input>
</template>
  
<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    inputType: {
        type:String,
        default: 'text' 
    },
    customStyle:{
        type:String,
        default: 'w-300' 
    }
});

const inputValue = ref('');


</script>

<style scoped lang="scss">
    .w-300{
        width:300px;
    }
</style>
   