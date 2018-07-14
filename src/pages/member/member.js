import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [{
  path: '/',
  component: () =>
    import ('./components/member.vue')
}, {
  path: '/address',
  component: () =>
    import ('./components/address.vue'),
  children: [{
      path: 'all',
      name: 'all',
      component: () =>
        import ('./components/all.vue')
    },
    {
      path: '',
      component: () =>
        import ('./components/all.vue')
    },
    {
      path: 'form',
      name: 'form',
      component: () =>
        import ('./components/form.vue')
    }
  ]
}]


const router = new Router({
  routes
})

new Vue({
  el: '#app',
  router
})
