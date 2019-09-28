<template>
  <div id="app">
    {{ quote }}
    <!--<PwaNotification />-->
  </div>
</template>

<script>
  import PwaNotification from './components/PwaNotification.vue'
  import { getRandomQuote } from '@/quotes'

  export default {
    name: 'app',
    data() {
      return {
        quote: null,
      }
    },
    components: {
      PwaNotification,
    },
    mounted() {
      this.quote = getRandomQuote().body
    },
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
