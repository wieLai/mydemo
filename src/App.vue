<template>
  <div class="app">
<h1>es6</h1>

  </div>
</template>

<script>

export default {
  data () {
    return {
      obj: {
        name: '罗',
        sex: '难',
        old: 22,
        school: '华夏',
        girlfirend: '婷'
      }
    }
  },
  mounted () {
    let { girlfirend, ...obj2 } = this.obj
    console.log(girlfirend)
    console.log(obj2) // 可以解构出变量，也可以找出剩余的对象
  }

}
</script>

<style lang="less" scoped>

</style>
