//引入路由对象
import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [{
    path: '/',
    component: () => import('../components/root.vue'),
    alias:['/root','/root2','/root3'],//路径 ‘/’配置该属性后获得别名，访问alias内的路径都会导向路径'/'

    //重定向   分别有字符串形式，path或name形式，回调函数形式
    // redirect:'/user1',
    // redirect:{path:'/user1'},
    redirect:to=>{
      // return 'user1'
        return{
            path:'/user1',
            query:{
                name:'传参'
            }
        }
    },
    children: [
        {
            path: '/user1',
            components: {
                //默认显示
                default: () => import('../components/A.vue')
            }
        },
        {
            path: '/user2',
            components: {
                bbb: () => import('../components/B.vue'),
                ccc: () => import('../components/C.vue')
            }

        }
    ]
}
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

//导出router
export default router