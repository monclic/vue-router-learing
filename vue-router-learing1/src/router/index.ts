//引入路由对象
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


//vue2 mode history vue3 createWebHistory
//vue2 mode  hash  vue3  createWebHashHistory
//vue2 mode abstact vue3  createMemoryHistory

//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [
    //   {
    //     path: '/',
    //     name: "Login", //通过添加name属性实现第二种跳转方式，需要更改<router-link>属性配置（此步骤时对应的<router-link>在App.vue中）
    //     component: () => import('../components/login.vue')
    // }, {
    //     path: '/register/:id',
    //     name: "register",
    //     component: () => import('../components/register.vue')
    // }
    {
        path: '/',//若此处改为/user，则在footer中也要改
        component: () => import('../components/footer.vue'),
        children:[
            {
                path: '',
                name: "Login", //通过添加name属性实现第二种跳转方式，需要更改<router-link>属性配置（此步骤时对应的<router-link>在App.vue中）
                component: () => import('../components/login.vue')
            }, {
                path: 'register',
                name: "register",
                component: () => import('../components/register.vue')
            }
        ]
    }

  
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

//导出router,需要在main.js中注册
export default router