<template>
  <div class="home">
    <button v-if="notificationsSupported" @click="askPermission">Enable notifications</button>
  </div>
</template>

<script>
  import cron from 'node-cron'
  import quotes from '@/quotes'

  export default {
    name: 'home',
    data() {
      return {
        notificationsSupported: false,
      }
    },
    methods: {
      askPermission() {
        if (this.notificationsSupported) {
          Notification.requestPermission(result => {
            console.log('result from permission question', result);
              if (result !== 'granted') {
              alert('You probably do not like notifications?!');
            } else {
              console.log('A notification will be send from the service worker => This only works in production');
              this.showNotification()
            }
          })
        }
      },
      getRandomQuote() {
        const max = quotes.length
        // returns a random integer up to max - 1
        const i = Math.floor(Math.random() * Math.floor(max))
        return quotes[i]
      },
      showNotification() {
        const quote = this.getRandomQuote().body
        console.log(quote)

        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.ready // returns a Promise, the active SW registration
            .then(swreg => {
              swreg.showNotification('Notifications granted', {
                body: quote,
                icon: '/img/icons/android-chrome-192x192.png',
                //image: '/img/autumn-forest.png',
                vibrate: [300, 200, 300],
                //badge: '/img/icons/plint-badge-96x96.png',
                // actions: [
                //   { action: 'confirm', title: 'Okay', icon: '/img/icons/android-chrome-192x192.png'},
                //   { action: 'cancel', title: 'Cancel', icon: '/img/icons/android-chrome-192x192.png'}
                // ],
              })
            })
        }
      },
    },
    created() {
      if ('Notification' in window && 'serviceWorker' in navigator) {
        this.notificationsSupported = true
        cron.schedule('1 15 11 * * *', () => {
          this.showNotification()
        })
      }
    },
  }
</script>

<style scoped>
  button {
    background: #1da025;
    color: #fff;
    padding: 10px 20px;
    font-size: 18px;
    margin-top: 20px;
  }
</style>
