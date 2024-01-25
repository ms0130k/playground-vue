<script setup lang="ts">
import {inject} from 'vue';

const result = inject('person');
</script>

<template>
  <div>Injector2: {{result}}</div>
</template>

<style scoped>

</style>