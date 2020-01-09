import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

export default new vuex.Store({
  // 需求就是需要在组件中（view）只筛选出我需要的
  state: {
    list: ['p', 'img', 'h1', 'h2', 'div'],
    list2: [10, 20, 30, 40, 50, 60, 70, 80]
  },

  getters: {
    // mapGetters,,,使用 场景就是我们如果有很多的全局计算属性要用到，在组件中一个个地用台麻烦了
    getlist1 (state) {
      return state.list2.filter(item => {
        return item > 50
      })
    },
    getlist2 (state) {
      return state.list2.filter(item => {
        return item > 50
      })
    },
    getlist3 (state) {
      return state.list2.filter(item => {
        return item > 50
      })
    },
    getlist4 (state) {
      return state.list2.filter(item => {
        return item > 50
      })
    },

    // getters普通用法
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
