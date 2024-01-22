<script setup lang="ts">
import {useRouter} from 'vue-router';

const router = useRouter();
const move = () => {
  router.push({
    name: 'home to',
    // path: '/to/:to/username/:username',
    params: {to: 'go', username: '동동'}
  });
};
</script>

<template>
<button type="button" @click="move">go to route page</button>
</template>

<style scoped>

</style>