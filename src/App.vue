<template lang="pug">
  #app
    Card
      ButtonSpan

    PwaNotification
</template>

<script>
  import ButtonSpan from './components/ButtonSpan.vue'
  import Card from './components/Card.vue'
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
      ButtonSpan,
      Card,
      PwaNotification,
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 100px;
}

body {
  background-color: #F49782;
}

</style>
