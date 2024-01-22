<script setup lang="ts">
import {useRoute} from 'vue-router';

const route = useRoute();
</script>

<template>
  <div>array param test</div>
  <div>params:: {{route.params.optional}}</div>
</template>

<style scoped>

</style>