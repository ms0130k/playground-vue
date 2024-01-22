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
const testArrayParam = () => {
  router.push({
    name: 'array param',
    params: {arrayparam: ['a', 'b', 'c']},
  })
};
const testArrayParam2 = () => {
  router.push({
    name: 'array param2',
    params: {arrayparam: ['a', 'b', 'c']},
  })
};
const optionalParam = () => {
  router.push({
    name: 'optional',
    params: {optional: 1},
  })
};
const optionalNoParam = () => {
  router.push({
    name: 'optional',
  })
};
</script>

<template>
  <div>go to another route page to TEST</div>
  <hr>
  <button type="button" @click="move">go</button>
  <button type="button" @click="testArrayParam">array param</button>
  <button type="button" @click="optionalParam">optional1</button>
  <button type="button" @click="optionalNoParam">optional 없음</button>
</template>

<style scoped>

</style>