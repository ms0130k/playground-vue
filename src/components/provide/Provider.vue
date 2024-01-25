<script setup lang="ts">
import {provide} from 'vue';
import Bridge from '@/components/provide/bridge.vue';

type Person = {
  name: string,
  age: number,
}
const person: Person = {
  name: '동동',
  age: 0,
}
provide('person', person);
</script>

<template>
  <h2>제공자</h2>
  <bridge/>
</template>

<style scoped>

</style>