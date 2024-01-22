<script setup lang="ts">
import AttrsChild from '@/components/attrsprops/AttrsChild.vue';
import {ref} from 'vue';

const customStyle = ref('background-color: blue; color: white;');
const changeColor = () => {
  customStyle.value = 'background-color: red; color: yellow;'
};
</script>

<template>
  <AttrsChild prop-data="Hello, World!"
              :custom-style-attr="customStyle"
              :custom-style-prop="customStyle"
              aria-label="Child Component"
  />
  <button type="button" @click="changeColor">색상 변경</button>
</template>

<style scoped>

</style>