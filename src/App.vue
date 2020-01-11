<template>
  <div class="app">
<h1>这个是深拷贝的一些技巧，数值交换</h1>
<span>平时项目的时候，不注意引用类型和原始类型的赋值传递的区别很容易造成错误，注意！！！！！</span><br><hr>
<input type="button" value="点击我" @click="handleClick">
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },

  methods: {
    handleClick () {
      // let num1 = 'aaa'
      // let num2 = num1
      // console.log(num1 === num2) // true  原始类型交换的是真正的值，

      // let obj1 = { name: '罗' }
      // let obj2 = obj1
      // console.log(obj1 === obj2) // true  引用类型交换的是指针，

      // 那我们对一些引用类内的值进行交换的时候就需要注意了
      // 下面是最简洁的深拷贝之一
      // let obj = { name: 'Luo' }
      // obj.handle = function () {
      //   console.log('momoda')
      // }
      // let obj2 = JSON.parse(JSON.stringify(obj))
      // console.log(obj === obj2)
      // // false   简洁是简洁了，但是如果被拷贝的对象中的成员是函数的话， 被拷贝过来的会被丢失
      // console.log(obj)
      // console.log(obj2)

      // es6中的数值交换,,需求，我们要下面这个对象中的两个值进行交换
      let obj1 = { num1: 10, num2: 20 }
      // 如果我们没有进行深拷贝，，那我们就很可能这样写
      // obj1.num1 = obj1.num2 // 在这一步的时候，num2已经等于num1了，下面的再交换已经没意义了
      // obj1.num2 = obj1.num1
      // console.log(obj1) // {num1: 20, num2: 20}

      // es6
      console.log(obj1);// {num1: 10, num2: 20}
      [obj1.num1, obj1.num2] = [obj1.num2, obj1.num1] // 使用这个东西的前面语句记得加上;要不报错都不知道怎么回事
      console.log(obj1) // {num1: 20, num2: 10}
    }
  }

}
</script>

<style>

</style>
