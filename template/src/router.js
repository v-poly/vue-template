/**
 * App router config
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let router = new VueRouter()

router.map({
  '/foo': {
    component: (resolve) => {
      require(['./app/Foo.vue'], resolve)
    }
  },
  '/bar': {
    component: (resolve) => {
      require(['./app/Bar.vue'], resolve)
    }
  }{{#validator}},
  '/validate': {
    component: (resolve) => {
      require(['./app/ValidatorExample.vue'], resolve)
    }
  }{{/validator}}
})

export default router
