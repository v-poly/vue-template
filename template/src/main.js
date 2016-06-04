import Vue from 'vue'
import App from './App'
{{#validator}}
import VueValidator from 'vue-validator'
{{/validator}}

{{#validator}}
Vue.use(VueValidator)
{{/validator}}

{{#if router}}
import router from './router'

// Start the app
router.start(App, '#app')
{{else}}
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
{{/if}}
