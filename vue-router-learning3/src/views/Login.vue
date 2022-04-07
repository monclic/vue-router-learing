<template>
    <div class="login">
        <el-card class="box-card">
            <el-form ref="form" :rules="rules" :model="formInline" class="demo-form-inline">
                <el-form-item prop="user" label="账号">
                    <el-input v-model="formInline.user" />
                </el-form-item>
                <el-form-item prop="password" label="密码">
                    <el-input v-model="formInline.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import type { FormItemRule,FormInstance  } from "element-plus"
import { ElMessage } from 'element-plus'
import axios from 'axios'
const router = useRouter();

type From = {
    user: string;
    password: string;
}
type Rules = {
    [K in keyof From]?: Array<FormItemRule> //?代表非必填
}

const formInline = reactive<From>({
    user: "",
    password: "",
})

const form = ref<FormInstance >()
const rules = reactive<Rules>({
    user: [
        {
            required: true,
            message: "账号不能为空",
            type: "string",
            trigger: 'blur'
        },
    ],
    password: [
        {
            required: true,
            message: "密码不能为空",
            type: "string",
        },
    ],
});
const onSubmit = () => {
    console.log('submit!', form.value)
    form.value?.validate((validate)=> { // 此处为callback回调 (()=>{})
            if(validate){
            console.log(validate);
            initRouter()
          router.push("/index");
          localStorage.setItem('token','1')
    }else{
        ElMessage .error('请输入完整')
    }
})
}
//动态路由
const initRouter=async()=>{
      const result = await axios.get('http://localhost:9999/login', { params: formInline });
    result.data.route.forEach(
        (v: any) => {             
        router.addRoute({
            path: v.path,
            name: v.name,
                                    //这儿不能使用@,不是''而是``
            component: () => import(`../views/${v.component}`)
        })
        router.push('/index')
    })
    console.log(router.getRoutes());
 
}

</script>

<style>
.login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>