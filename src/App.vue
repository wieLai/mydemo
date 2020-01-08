<template>
  <div class="app">
<span>{{count}}</span><br>
<!-- <span>{{addcount}}</span> -->
<input type="button" value="点击我加加" @click="handleClick">
  </div>
</template>

<script>
export default {
  data () {
    return {
      // count: this.$store.state.count
      // vuex中的计算属性，就是当计算属性那样来用就行，不能用函数调用的形式，this.$store.getters.addcount()
      // 如果用函数调用的形式，就是要用另外一种写法了的
      // 没有传参的用法
      // count: this.$store.getters.addcount
      // 传参的用法
      count: this.$store.getters.addcount(99)
    }
  },
  computed: {
    // addcount () {
    //   return this.$store.state.count
    // }
    addcount () {
      return this.$store.getters.addcount
    }
  },
  methods: {
    handleClick () {
      this.$store.commit('addcount')
    }
  },
  mounted () {
    // console.log(this.$store.getters.addcount)
  }
}
</script>

<style>

</style>
