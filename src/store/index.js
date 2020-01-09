import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

export default new vuex.Store({

  state: {
    count: 10
  },

  mutations: {
    // 就例如我们这里有一大堆，组件需要同步操作state仓库的方法,如果再组件那边我们如果一个个的引入的话
    // 那就太麻烦了,
    updateCount1 (state) {
      console.log(state.count)
      state.count += 1 // 并不需要return
    },
    updateCount2: state => { state.count += 2 },
    updateCount3: state => { state.count += 3 },
    updateCount4: state => { state.count += 4 }
  },
  actions: {

  }
})
