<template>
  <div id="App">
    <mainPage/>
  </div>
</template>

<script>
import mainPage from './components/mainPage.vue'

export default {
  name: 'App',
  beforeCreate(){
    document.querySelector('body').setAttribute('style', 'background:#09111a')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  },
  components: {
    mainPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #8599ad;
  margin-top: 60px;
}
</style>
