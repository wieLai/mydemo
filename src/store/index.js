import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

export default new vuex.Store({
  state: {
    count: 10
  },
  // getters相当于计算属性,既然说是像计算属性，那我试试改变state中的数据，也就是改变他的依赖项看看
  // 结果：依赖改变，他就改变
  // 下面是没有传参的方式,有没有传参，决定了了这个计算属性的写法，和用法
  getters: {
    // addcount (state) {
    //   return state.count + '我是'
    // }
    // addcount: state => state.count + '我是'
    //
    // 传参
    addcount (state) {
      return (num) => {
        return state.count + num
      }
    }
  },
  mutations: {
    addcount (state) {
      state.count++
    }
  }

})
