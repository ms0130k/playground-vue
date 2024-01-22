<script setup lang="ts">
import {onBeforeRouteUpdate, useRoute} from 'vue-router';

const route = useRoute();

onBeforeRouteUpdate((to, from, next) => {
  console.log('to', to, 'from', from, 'next', next);
  next('/');
});
</script>

<template>
Route ID:: {{route.params.id}}
query:: {{route.query.q}}
meta:: {{route.meta}}
</template>

<style scoped>

</style>