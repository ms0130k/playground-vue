<script setup lang="ts">
import {computed, type StyleValue, useAttrs} from 'vue';

defineProps({
  propData: String,
  customStyleProp: String,
});
const attrs = useAttrs();
const customStyleAttr = computed(() => {
  return attrs['custom-style-attr'] as StyleValue;
});
const ariaLabel = attrs['aria-label'] as string;
</script>

<template>
  <div :style="attrs['custom-style-attr'] as StyleValue" :aria-label="ariaLabel">
    {{ propData }}
  </div>
  <div :style="customStyleProp" :aria-label="ariaLabel">
    {{ propData }}
  </div>
</template>

<style scoped>

</style>