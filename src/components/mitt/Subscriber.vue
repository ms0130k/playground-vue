<script setup lang="ts">
import mitt, {type Emitter, type EventType} from 'mitt';
import useEmitter from '@/src/composable/useEmitter';

const globalEmitter: Emitter<Record<EventType, unknown>> = useEmitter();
const emitter = mitt();
emitter.on('event:key', (data) => alert(`event: ${data}`));
globalEmitter.on('event:key', (data) => alert(`global event: ${data}`));

</script>

<template>
  <h4>구독자</h4>

</template>

<style scoped>

</style>









<!--// ============================================= my-event.ts-->
<!--import User from "src/model/user.model";-->

<!--export type UserEvents = {-->
<!--'user:save': User;-->
<!--}-->

<!--// ============================================= parent-comp.vue-->
<!--import {provide} from 'vue';-->
<!--import mitt from 'mitt';-->
<!--import {UserEvents} from 'pages/user/events';-->

<!--const emitter = mitt<UserEvents>();-->
<!--provide('userEvent', emitter);-->

<!--emitter.on('user:save', async (param) => {-->

<!--});-->

<!--// ============================================= child-comp.vue-->
<!--import {inject} from 'vue';-->
<!--import {Emitter} from 'mitt';-->
<!--import {UserEvents} from 'pages/user/events';-->

<!--const userMitt = inject<Emitter<UserEvents>>('userEvent');-->

<!--  userMitt?.emit('user:save', model.value!);-->