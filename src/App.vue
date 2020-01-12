<template>
  <div class="app">
<h1>我们来做一个关于时间的加减法</h1>
  </div>
</template>

<script>

export default {
  data () {
    return {
      startTime: '2019-10-30 22:50:00',
      endTime: '2019-10-31 00:00:00'
    }
  },
  // mounted () {
  //   let startTime = new Date(this.startTime)
  //   let endTime = new Date(this.endTime)
  //   console.log(startTime) // Wed Oct 30 2019 22:50:00 GMT+0800 (中国标准时间)
  //   console.log(endTime) // Thu Oct 31 2019 00:00:00 GMT+0800 (中国标准时间

  //   let duration = endTime - startTime
  //   console.log(duration) // 得到是一个毫秒数4200000

  //   // 拿到毫秒数就可以进行换算了，1s===1000ms
  //   let hour = parseInt(duration / 1000 / 60 / 60)
  //   console.log(hour) // 1.1666666666666667 // 1

  //   // let min = (duration - hour * 1000 * 60 * 60) / 1000 / 60
  //   // console.log(min) // 10

  //   let minutes = duration / 1000 / 60 - hour * 60
  //   console.log(minutes) // 10

  //   console.log(`${hour}时${minutes}分`)
  // },
  created () {
    let startTime = '15:20'
    let endTime = '08:08'
    // let startTime = '18:20'
    // let endTime = '20:30'

    let startTime0 = +startTime.split(':')[0]
    let startTime1 = +startTime.split(':')[1]
    console.log(startTime0)// 15
    console.log(startTime1)// 20

    let endTime0 = +endTime.split(':')[0]
    let endTime1 = +endTime.split(':')[1]
    console.log(endTime0) // 08
    console.log(endTime1)// 08

    let min = endTime1 - startTime1
    let hour = endTime0 - startTime0
    if (hour < 0) {
      hour += 24
    }
    if (min < 0) {
      hour--
      min += 60
    }
    console.log(`${hour}时${min}`)
  }

}
</script>

<style lang="less" scoped>

</style>
