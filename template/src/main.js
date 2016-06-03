import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
{{#validator}}
import VueValidator from 'vue-validator'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/validator}}
{{#vuex}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}

{{#router}}
Vue.use(VueRouter){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
{{#validator}}
Vue.use(VueValidator){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/validator}}
{{#vuex}}
Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}

{{#vuex}}
import store from './vuex/store'
{{#vuex}}

{{#router}}
import router from './router'
{{/router}}

{{#if router}}
// Create a root component
let App = Vue.extend({}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
// Start the app
router.start(App, 'body'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{else}}
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/if}}
