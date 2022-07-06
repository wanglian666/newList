import Vue from 'vue'
import App from './App.vue'
// 导入路由对象
import router from './router'
import store from './store'

import '@/styles/index.css'


import 'bootstrap/dist/css/bootstrap.css'
import './assets/font/iconfont.css'



// 一次性导入所有组件，引入所有组件会增加代码包体积，不推荐
/* import Vant from 'vant';
import 'vant/lib/index.css'; */

// 按需引入
import { Button } from 'vant';
Vue.use(Button);

Vue.config.productionTip = false

// 全局注册指令  v-gfocus
Vue.directive('gfocus',{
  inserted(e){
    e.focus();
  }
})

new Vue({
  // 把路由对象注入到vue实例中 在任何一个组件中就可以使用路由对象
  router,
  store,
  render: h => h(App)
}).$mount('#app')
