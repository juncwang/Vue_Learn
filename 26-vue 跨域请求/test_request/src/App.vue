<template>
  <div id="app">
    <img v-on:click="simClick()" src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  methods: {
    // 跨域前需先配置 config/indes.js 内的 proxyTable 属性

    // 使用 fectch 进行跨域请求
    // simClick:function(){
    //     fetch("/apis/test/testToken.php",{
    //       method: "post",
    //       headers:{
    //         "Content-type":"application/json",
    //         token: "f4c902c9ae5a2a9d8f84868ad064e706"
    //       },
    //       body:JSON.stringify({
    //         username:"juncwang",
    //         password:"123456"
    //       })
    //     })
    //     .then(result => result.json())
    //     .then(data => console.log(data))
    // }

    // this.$axios.post("/apis/test/testToken.php",{
    //   username:"juncwang",
    //   password:"123456"
    //   })
    //   .then(data => console.log(data))
  },
  components: {
    HelloWorld
  },
  created(){
    // 使用 axios 进行跨域请求
    // this.$axios.post("/apis/test/testToken.php",{
    //   username:"juncwang",
    //   password:"123456"
    //   })
    //   .then(data => console.log(data))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
