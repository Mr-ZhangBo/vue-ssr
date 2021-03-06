import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import { createRouter } from './router'
import { createStore } from './store'

Vue.config.productionTip = false

Vue.mixin({
  beforeMount() {
    if (this.$options.asyncData) {
      this.$options.asyncData({
        store: this.$store,
        route: this.$route
      })
    }
  }
})

export function createApp (context) {
  
  const router = createRouter()
  const store = createStore()
  
  const app = new Vue({
    router,
    store,
    context,
    render: h => h(App)
  })

  return { app, router, store }
}