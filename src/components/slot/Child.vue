<script setup lang="ts">
import {reactive} from 'vue';

const baby = reactive({
  name: '동동',
  age: 0,
});
const numbers = reactive([1, 2, 3,]);
</script>

<template>
  <slot>기본 슬롯</slot>
  <slot name="extra" :baby="baby" :nums="numbers">추가 슬롯 기본값</slot>
</template>

<style scoped>

</style>