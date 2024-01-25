<script setup lang="ts">

import {userEventEmitter} from '@/src/mitt/example/user.events';
import User from '@/src/mitt/example/user.model';
import {onUnmounted} from 'vue';

const saveUser = () => {
  const user = new User(9, '이름');
  userEventEmitter.emit('user:save', user);
};
const deleteUse = () => {
  userEventEmitter.emit('user:delete', 1)
};
</script>

<template>
  <button type="button" @click="saveUser">유저 등록</button>
  <button type="button" @click="deleteUse">유저 삭제</button>
</template>

<style scoped>

</style>