<template>
  <!-- <div class="register">register</div> -->
  <div>
    <button @click="router.back()">返回</button>
    <h3>此乃列表页面</h3>
  </div>

  <!-- <div>品牌:{{ route.query.name }}</div>
  <div>价格:{{ route.params.price }}</div>
  <div>ID:{{ route.params.bid }}</div> -->


 <div>品牌:{{ item?.name }}</div>
  <div>价格:{{ item?.price }}</div>
  <div>ID:{{ item?.id }}</div>
</template>

<script setup lang='ts'>
import {data} from './list.json'
import { useRoute, useRouter } from "vue-router"; //获取数据

const route = useRoute();
const router = useRouter();

const item = data.find(v => v.id === Number(route.params.id))
</script>

<style>
.register {
  background: chartreuse;
  height: 400px;
  width: 400px;
  font-size: 20px;
  color: aliceblue;
}
</style>