import vuex from 'vuex'
import Vue from 'vue'
// 所有的模块都是在store文件夹下的index下引入就ok
// 例子用了，cart，user两个模块
// 先导入
import cart from './cart'
import user from './user'
Vue.use(vuex)
export default new vuex.Store({

  modules: {
    cart: {
      // 命名空间
      namespaced: true,
      ...cart
    },
    user: {
      namespaced: true,
      ...user
    }
  }
})
