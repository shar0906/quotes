<template>
  <div id="app">
    <h1>Welcome to The Quotes App</h1>
    <p>
      This app will send you one random quote each day.
    </p>
    <p>
      Think of it as a random message from the universe ;-)
    </p>
    <PwaNotification />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PwaNotification from './components/PwaNotification.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
