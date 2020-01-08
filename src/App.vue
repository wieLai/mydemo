<template>
  <div class="app">
<span>{{count}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: this.$store.state.count
    }
  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>

</style>
