<script setup lang="ts">

import Injector1 from '@/components/provide/Injector1.vue';
import Injector2 from '@/components/provide/Injector2.vue';
</script>

<template>
  <h5>중간다리</h5>
  <div>
    <h4>소비자1</h4>
    <injector1/>
  </div>
  <div>
    <h4>수령자2</h4>
    <Injector2/>
  </div>
  <h5>중간다리</h5>
</template>

<style scoped>

</style>