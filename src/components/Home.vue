<script setup lang="ts">
import {useRoute} from 'vue-router';
import {computed} from 'vue';

const route = useRoute();

const username = computed(() => {
  return route.params.username;
});

</script>

<template>
  <div>This is my home.</div>
  <div>params.to :: {{route.params.to}}</div>
  <div>params.username :: {{username}}</div>

</template>

<style scoped>

</style>