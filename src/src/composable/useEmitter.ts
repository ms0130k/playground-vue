import {getCurrentInstance} from 'vue';

export default function useEmitter() {
  const mitt = getCurrentInstance()?.appContext.config.globalProperties.emitter;
  return mitt;
}