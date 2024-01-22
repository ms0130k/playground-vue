<script setup lang="ts">
import {onBeforeMount, onMounted, reactive, useAttrs, useSlots} from 'vue';

const baby = reactive({
  name: '동동',
  age: 0,
});
const numbers = reactive([1, 2, 3,]);

const slots = useSlots();
const attrs = useAttrs();
console.log(slots);
console.log(attrs);
</script>

<template>
  <slot>기본 슬롯</slot>
  <slot name="extra" :baby="baby" :nums="numbers">추가 슬롯 기본값</slot>
</template>

<style scoped>

</style>