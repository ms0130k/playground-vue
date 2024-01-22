<script setup lang="ts">
const map = new Map([
  ['a', '1'],
  ['b', '2'],
  ['c', '3'],
]);
</script>

<template>
<div v-for="([key, val]) in map" :key="key">
  {{key}}, {{val}}
</div>
</template>

<style scoped>

</style>