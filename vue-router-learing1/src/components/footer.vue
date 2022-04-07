<!--在设置-实时模板中添加模板-->
<!--启动：npm run dev-->
<template>
  <div>
    <router-view></router-view>
    <hr />
    <h3>FOOTER</h3>
  </div>
  <div>
    <router-link to="/">login</router-link>
    <!-- 此处改为to="/user" -->
    <router-link style="margin: 10px" to="/register">register</router-link>
    <!-- 此处改为to="/user/register" -->
  </div>
</template>

<script setup lang='ts'>
</script>

<style></style>