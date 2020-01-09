<template>
  <div class="app">
<h1>来看看mapMutations的使用吧，类似于mapgetters的，都是为了方便</h1>
<span>{{count}}</span>
<!-- <input type="button" value="点我啊1" @click="handleClick1">
<input type="button" value="点我啊2" @click="handleClick2">
<input type="button" value="点我啊3" @click="handleClick3">
<input type="button" value="点我啊4" @click="handleClick4"> -->

<!--注意：：： 名字需要和下面 mapMutations方法结构出来的一样了-->
<!-- 但是还有一个，我就是还不知道这种方式怎么传参 -->
 <input type="button" value="点我啊1" @click="updateCount1">
<input type="button" value="点我啊2" @click="updateCount2">
<input type="button" value="点我啊3" @click="updateCount3">
<input type="button" value="点我啊4" @click="updateCount4">
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    // 普通用法，，，，一个个地写是不是太麻烦了
    // handleClick1 () {
    //   this.$store.commit('updateCount1')
    // },
    // handleClick2 () {
    //   this.$store.commit('updateCount2')
    // },
    // handleClick3 () {
    //   this.$store.commit('updateCount3')
    // },
    // handleClick4 () {
    //   this.$store.commit('updateCount4')
    // }

    // mapMutations只是贴心地为我们提供了少功夫，但是要注意的就是，上面绑定是事件处理函数就需要和
    // 下面结构出来的名字一样了
    ...mapMutations(['updateCount1', 'updateCount2', 'updateCount3', 'updateCount4'])

  },
  mounted () {

  }
}
</script>

<style>

</style>
