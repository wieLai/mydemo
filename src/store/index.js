import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

export default new vuex.Store({
  // 需求就是需要在组件中（view）只筛选出我需要的
  state: {
    count: 10
  },

  mutations: {
    addcount (state) {
      state.count++
    }
  },
  actions: {
    // 普通用法
    // addcount (context) {
    //   // console.log(context)
    //   context.commit('addcount')
    // }
    // context是他本身就传过来的一个对象，我们直接接收并结构，就直接用就可以了
    // addcount ({ commit }) {
    //   // console.log(context)
    //   commit('addcount')
    // }
  }
})
