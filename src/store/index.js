import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import catagtoryModule from './module/catagtory'
import listModule from './module/list'


export default new Vuex.Store({
  /*
  获取子模块的状态：$store.state.模块名.属性名
  
  默认情况下，模块内的actions、mutations和getters 是注册在全局命名空间的，这样就使得
  多个模块能对同一个mutations、actions、getters
  
  */
  modules:{
    catagtoryModule:catagtoryModule,
    listModule:listModule

  }
 
})
