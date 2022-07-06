// 引入vue  vue-router和vue深度集成
import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'


// 在vue中，使用vue的插件都需要调用Vue.use()
Vue.use(VueRouter)

// 创建路由规则，一一对应关系
const routes = [
  {
    path: '/',   // 路由地址`
    component:()=>import('@/views/Home.vue'), // 按需加载
    
  },
  {
    path:'/index',
    component:()=>import('@/views/index.vue')
  }
  
]

// 创建路由对象 router
const router = new VueRouter({
  // 路由规则 
  routes,
  mode:'history'
})

// 全局路由守卫
router.beforeEach((to,from,next) => {
  next();
})

// 暴露路由对象
export default router
