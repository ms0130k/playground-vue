<script setup lang="ts">
</script>

<template>
  <h1>Hello App!</h1>
  <p>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/welcome">About</RouterLink>
    <RouterLink to="/go">Go</RouterLink>
    <RouterLink to="/slot">Slot test</RouterLink>
  </p>
  <router-view></router-view>
</template>

<style scoped>
</style>
