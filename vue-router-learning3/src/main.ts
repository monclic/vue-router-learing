import { createApp ,createVNode,render} from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-plus'
import 'element-plus/dist/index.css'
import loadingBar from './components/loadingBar.vue'

const Vnode=createVNode(loadingBar)
render(Vnode,document.body)
const whiteList=['/']

router.beforeEach((to,from,next)=>{
    document.title=to.meta.title
    Vnode.component?.exposed?.startLoading()
    if(whiteList.includes(to.path) || localStorage.getItem('token')){
        next()
    }
    else{
        next('/')
    }
})

router.afterEach((to, from) => {
    Vnode.component?.exposed?.endLoading()
})
const app = createApp(App)
app.use(router)
app.use(ElementUi)
app.mount('#app')
