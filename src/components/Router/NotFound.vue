<script setup lang="ts">
import {useRoute} from 'vue-router';

const route = useRoute();
</script>

<template>
  <div>404 Not Found</div>
  <div>params:: {{route.params.pathMatch}}</div>
</template>

<style scoped>

</style>