<script setup lang="ts">
import {inject} from 'vue';

const result = inject('person');
</script>

<template>
  <div>Injector1: {{result}}</div>
</template>

<style scoped>

</style>