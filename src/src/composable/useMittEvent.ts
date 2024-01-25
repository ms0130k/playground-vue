import {onUnmounted} from 'vue';
import type {Emitter} from 'mitt';

export default <T extends Record<string, unknown>, K extends keyof T>(mitt: Emitter<T>, key: K, fn: (e: T[K]) => any) => {
  mitt.on(key, fn);
  onUnmounted(() => mitt.off(key, fn));
};