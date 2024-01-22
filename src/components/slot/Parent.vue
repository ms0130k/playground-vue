<script setup lang="ts">
import Child from '@/components/slot/Child.vue';
</script>

<template>
  <div>부모 컴포넌트</div>
  <Child>
    <template #extra="{baby, nums}">
      <div>추가 슬롯에 삽입한 값입니다.</div>
      <div>자식 요소로부터 받은 값:: {{`${baby.age}, ${baby.name}`}}</div>
      <div>자식 요소로부터 받은 값:: {{nums}}</div>
    </template>
    <template #default>
      <div>기본 슬롯에 삽입한 값입니다.</div>
    </template>
  </Child>
</template>

<style scoped>

</style>