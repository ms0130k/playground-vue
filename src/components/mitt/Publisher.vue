<script setup lang="ts">
import mitt from 'mitt';
import useEmitter from '@/src/composable/useEmitter';
const emitter = mitt();
const data = {
  num: 9
}

const globalEmitter = useEmitter();

const publish = () => {
  emitter.emit('event;key', data);
  globalEmitter.emit('event:key', data);
};
</script>

<template>
  <h3>발행자</h3>
  <button type="button" @click="publish">발행</button>
</template>

<style scoped>

</style>