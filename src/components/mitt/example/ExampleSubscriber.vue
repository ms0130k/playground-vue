<script setup lang="ts">
import {userEventEmitter} from '@/src/mitt/example/user.events';
import type User from '@/src/mitt/example/user.model';
import {onUnmounted} from 'vue';

const saveUser = (user: User) => {
  console.log(`저장:: 아이디-${user.id}, 이름-${user.name}`);
};
const deleteUser = (id: number) => {
  console.log(`삭제:: 아이디-${id}`);
};
userEventEmitter.on('user:save', saveUser);
userEventEmitter.on('user:delete', deleteUser);

// onUnmounted(() => {
//   userEventEmitter.off('user:save');
//   userEventEmitter.off('user:delete');
// });
</script>

<template>
</template>

<style scoped>

</style>