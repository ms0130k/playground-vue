<script setup lang="ts">
</script>

<style scoped>
</style>

<template>
  <h1>Hello App!</h1>
  <div style="display: flex; flex-direction: column">
    <RouterLink to="/">Home</RouterLink>
  <!--    <RouterLink to="/welcome">About</RouterLink>-->
  <!--    <RouterLink to="/go">Go</RouterLink>-->
  <!--    <RouterLink to="/slot">Slot test</RouterLink>-->
  <!--    <RouterLink to="/attrs">attrs</RouterLink>-->
  <!--    <RouterLink to="/vfor">vfor</RouterLink>-->

    <!--    <RouterLink to="/provide">provide</RouterLink>-->
    <!--    <RouterLink to="/publish">publish</RouterLink>-->
    <RouterLink to="/mitt-example">mitt-example</RouterLink>
    <RouterLink to="/mitt-example-wrap">mitt-example-wrap</RouterLink>
  </div>
  <router-view></router-view>
</template>
