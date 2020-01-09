<template>
  <div class="app">
<h1>先来一个异步改变数据的普通操作</h1>
<span>{{count}}</span>
<input type="button" value="点击我异步改变数据" @click="handleClick">
<h1>本来想着搞一下组合action的，但是还不知道他有什么用处，老师也还没有怎么讲，</h1>
  </div>
</template>

<script>

export default {
  data () {
    return {
      // count: this.$store.state.count
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    // 普通用法
    // handleClick () {
    //   this.$store.dispatch('addcount')
    // }
  },
  mounted () {

  }
}
</script>

<style>

</style>
