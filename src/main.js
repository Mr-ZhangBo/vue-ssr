import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import { createRouter } from './router'

Vue.config.productionTip = false

export function createApp (context) {
  const router = createRouter()
  const app = new Vue({
    router,
    context,
    render: h => h(App)
  }).$mount('#app')

  return { app, router }
}