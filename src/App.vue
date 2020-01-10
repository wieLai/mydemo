<template>
  <div class="app">
<h1>来试试modules的用法，其实他就是有不同的模块的全局数据
  （如果所以的全局数据都放在一个模块中，那那个模块也太臃肿了），
  把不同的模块组合起来</h1>
<!-- 先试试使用数据 -->
<span>user模块的{{userCount}}</span> <hr>
<span>cart模块的{{cartCount}}</span> <hr>
<input type="button" value="点击我改变user模块中的数据" @click="handleuser">
<input type="button" value="点击我改变cart模块中的数据" @click="handlecart">
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  computed: {
    // 使用的时候就是多加一层.
    userCount () {
      return this.$store.state.user.userCount
    },
    cartCount () {
      return this.$store.state.cart.cartCount
    }
  },
  methods: {
    // 改变user模块中的数据
    handleuser () {
      // 先要改变其中对应模块中的数据的时候，就可以像下面那样多加一层路径
      this.$store.commit('user/adduserCount', 30)
    },
    // 改变cart模块中的数据
    handlecart () {
      this.$store.commit('cart/addcartCount', 50)
    }
  },
  mounted () {
    // 如果不知道他的层次，可以直接把this.$store打印出来看看
    console.log(this.$store)
  }
}
</script>

<style>

</style>
