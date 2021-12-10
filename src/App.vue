<template>
  <div id="App">
    <top/>
    <button class="button is-primary">Mybutton</button>
    <mainPage/>
  </div>
</template>

<script>
import mainPage from './components/mainPage.vue'
import header from './components/header.vue'

export default {
  name: 'App',
  beforeCreate(){
    document.querySelector('body').setAttribute('style', 'background:#09111a')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  },
  components: {
    mainPage,
    'top': header,
  },
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #8599ad;
  margin-top: 60px;
}
</style>
