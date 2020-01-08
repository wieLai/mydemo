import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

export default new vuex.Store({
  // 需求就是需要在组件中（view）只筛选出我需要的
  state: {
    list: ['p', 'img', 'h1', 'h2', 'div']
  },

  getters: {
    // 没有传参的方式
    // filterDome (state) {
    //   return state.list.filter((item) => {
    //     return item === 'img'
    //   })
    // }
    // filterDome: state => state.list.filter(v => v === 'img')

    // 下面是传参的方式,通过返回一个函数让组件直接调用
    // filterDome (state) {
    //   return (params) => {
    //     return state.list.filter(item => {
    //       return item === params
    //     })
    //   }
    // }
    filterDome: state => params => state.list.filter(item => item === params)
  }

})
