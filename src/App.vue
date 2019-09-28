<template lang="pug">
  #app

    a(
      v-if="quote.link"
      :href="quote.link"
    ) {{ quote.body }}

    span(v-else) {{ quote.body }}
    <!--<PwaNotification />-->
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
      this.quote = getRandomQuote()
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
