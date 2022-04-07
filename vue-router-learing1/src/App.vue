<!--在设置-实时模板中添加模板-->
<!--启动：npm run dev-->
<template>
  <div>
    <h1>Hello</h1>
    <!--页面跳转会保留历史记录中，如果要不添加记录要补充replace  ::保留历史记录指能用左右箭头前进后退-->
    <!-- 页面跳转 第一种-->
    <!--    <router-link replace to="/">login</router-link>-->
    <!--    <router-link style="margin-left: 10px" to="/register">register</router-link>-->

    <!-- 页面跳转 第二种  to前要添加:-->
    <!--    <router-link :to="{name:'Login'}">login</router-link>-->
    <!--    <router-link style="margin-left: 10px" :to="{name:'register'}">register</router-link>-->

    <!--页面跳转还可以用a标签，但会刷新页面，导致切换时页面会闪一下 -->
    <!--    <a href="/">login</a>-->
    <!--    <a style="margin-left: 10px" href="/register">register</a>-->

    <!-- 页面跳转 第四种 编程式导航-->
    <div>
      <button @click="toPage('/')">login</button>
      <button @click="toPage('/register')">register</button>npm install typescript -g
    </div>

    <div>
      <button @click="next()">next:前进</button>
      <button @click="prev()">prev:返回</button>
    </div>
    <hr />
    <!--长细黑横线-->
    <!--router-view 路由出口，路由匹配到的组件将渲染在这里-->
    <router-view></router-view>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from "vue-router";

const router = useRouter();

const toPage = (url: string) => {
  // 字符串跳转
  router.push(url);
  //push改为replace以不保留历史记录
  // router.replace(url)

  //对象跳转
  // router.push({
  //   path:url
  // })

  //命名式跳转 此时<template>中应为toPage('login') 对应index.ts中的name属性值
  // router.push({
  //   name:url
  // })
};

const next = () => {
  router.go(1);
};
const prev = () => {
  router.back();
};
</script>

<style></style>