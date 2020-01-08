<template>
  <div class="app">
    <h1>我们可以看一下，</h1>
<span>{{count}}</span>
<hr>
<span>{{countadd}}</span>
<input type="button" value="点击我" @click="handleCilck">
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: this.$store.state.count
    }
  },
  computed: {
    // 想要视图更新vuex中的的数据，就需要用计算属性监听this.$store.state.count这个依赖项的变化
    // 为什么一定要计算属性呢？从下面的watch中我们可以看出，data中的数据，需要初始化的，
    countadd () {
      return this.$store.state.count
    }
  },
  watch: {
    // 监听data中的count属性
    count () {
      console.log('如果这里输出了,就证明数据已经改变，但是就是没有更新到视图')
      console.log('没有输出就是data中的数据没有发生变化，不仅仅是视图没有变化，老师说data中的数据需要初始化')
      console.log(this.count)
    },
    // 监听vuex中的数据   监听对象中的属性值
    '$store.state.count' () {
      console.log('vuex中的数据发生了变化')
      console.log(this.$store.state.count)
    }
    // 监听一个对象
    // $store: {
    //   handler (newV, oldV) {
    //     console.log(newV.name, oldV.name)
    //   },
    //   deep: true
    // }
  },
  methods: {
    handleCilck () {
      this.$store.commit('updatedCount')
    },
    handleAction () {
      setTimeout(() => {
        this.$store.dispatch('updatedCount', 10)
      }, 3000)
    }
  },
  mounted () {
    this.handleAction()
  }
}
</script>

<style lang="less" scoped>

</style>
