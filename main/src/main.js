import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
// import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false
Vue.use(Router)

const originalPush = Router.prototype.push
 
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    name: 'admin',
    path: '/',
    component: () => import('./components/Admin'),
    meta: { keepAlive: true }
  }
]

const router = new Router({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#mainApp')
