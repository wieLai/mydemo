<template>
  <div class="app">
<ul>
  <!-- <li v-for="(item,index) in listDome" :key="index">{{item}}</li> -->

  <li v-for="(item,index) in getlist1" :key="index">{{item}}</li><hr>
  <li v-for="(item,index) in getlist2" :key="index">{{item}}</li><hr>
  <li v-for="(item,index) in getlist3" :key="index">{{item}}</li><hr>
  <li v-for="(item,index) in getlist4" :key="index">{{item}}</li>
</ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      // 如果多个组件都是需要做这样的筛选操作的话，就是重复的代码了，我们就需要在vuex中直接做操作
      // listDome: this.$store.state.list.filter((item, index) => {
      //   return item === 'img'
      // })
      // 没有传参的方式
      // listDome: this.$store.getters.filterDome
      // 传参的方式,就需要像函数调用那样了
      // listDome: this.$store.getters.filterDome('p')
      listDome: this.$store.getters.filterDome('h1')
    }
  },
  computed: {
    //  普通用法就只能一个个地用了,
    // getlist1 () {
    //   return this.$store.getters.getlist1
    // },
    // getlist2 () {
    //   return this.$store.getters.getlist2
    // },
    // getlist3 () {
    //   return this.$store.getters.getlist3
    // },
    // getlist4 () {
    //   return this.$store.getters.getlist4
    // }

    // mapGetters用法,并没有什么的特别，就是提供了一个方法让我们一次就把我们需要的可以一次搞过来
    ...mapGetters(['getlist1', 'getlist2', 'getlist3', 'getlist4'])
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style>

</style>
