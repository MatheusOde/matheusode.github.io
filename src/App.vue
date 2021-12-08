<template>
  <div id="wrapper">
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  beforeCreate(){
    document.querySelector('body').setAttribute('style', 'background:#1d2935')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#wrapper {
  background-color: #1d2935;
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #8599ad;
  margin-top: 60px;
}
</style>
