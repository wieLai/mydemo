import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10
  },
  mutations: {
    updatedCount (state, num) {
      // state.count++
      state.count += num
    }
  },
  actions: {
    updatedCount (context, num) {
      context.commit('updatedCount', num)
    }
  },
  modules: {
  }
})
