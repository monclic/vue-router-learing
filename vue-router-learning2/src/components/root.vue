<template>
  <router-link to="/user1">user1</router-link>
  <router-link style="margin-left: 20px" to="/user2">user2</router-link>
<hr>
  <router-view></router-view>
  <router-view name="bbb"></router-view>
  <router-view name="ccc"></router-view>
</template>

<script setup lang='ts'>

</script>

<style>

</style>