import {createRouter,createWebHistory} from "vue-router";

declare module 'vue-router'{
    interface RouteMeta{
        title:string
        // 路由动效
        transistion:string
    }
}
//滚动行为
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),

    scrollBehavior (to, from, savedPosition) {
        if(savedPosition){
            return savedPosition
        }
        else {
            return{
                top:0
            }
        }
    },

    routes:[
        {
            path: '/',
            component:()=>import('@/views/Login.vue'), //@指代/src，与..相同 ，在vite.config.ts中配置，仅用于书写方便
            meta:{
                title:'登录页面',
                icon:'',
                transistion:'animate__fadeIn'
            }
        }, {
            path: '/index',
            component:()=>import('@/views/Index.vue'),
            meta:{
                title:'首页',
                transistion:'animate__fadeInUp'
            }
        }
    ]
})
export default router