<template>
 <div>此乃列表页面</div>
  <table cellspacing="0" class="table" border="1">
    <thead>
    <tr>
      <th>品牌</th>
      <th>价格</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr :key="item.id" v-for="item in data">
      <th>{{item.name}}</th>
      <th>{{item.price}}</th>
      <th>
        <button @click="toDetail(item)">详情</button>
      </th>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang='ts'>
import {data} from './list.json'
import {useRouter} from 'vue-router'
import { registerRuntimeCompiler } from '@vue/runtime-core'

const router = useRouter()

//复制json串后使用json to Type 功能将json转为代码，并进行修改
type Item = {
	price: number;
	name: string;
	id: number;
}

const toDetail = (item:Item)=>{
  router.push({
    //用query传参，所以也要用query取参
    // path:'/register',
    // query:item,   

    //param传参,不会展示在url上而是存在于内存中
    // name:'register',
    // params:item,

    //动态参数传参,需要修改index.ts的path
     name:'register',
    params:{
      id:item.id
    }
  })
}


</script>

<style>
.login{
  background: aqua;
  height: 400px;
  width: 400px;
  font-size: 20px;
  color: aliceblue;
}
</style>