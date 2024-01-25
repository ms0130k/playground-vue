<script setup lang="ts">
import type User from '@/src/mitt/example/user.model';
import useMittEvent from '@/src/composable/useMittEvent';
import {userEventEmitter} from '@/src/mitt/example/user.events';

const saveUser = (user: User) => {
  console.log(`저장-wrap:: 아이디-${user.id}, 이름-${user.name}`);
};
const deleteUser = (id: number) => {
  console.log(`삭제-wrap:: 아이디-${id}`);
};

useMittEvent(userEventEmitter, 'user:save', saveUser);
useMittEvent(userEventEmitter, 'user:delete', deleteUser);
</script>

<template>
</template>

<style scoped>

</style>