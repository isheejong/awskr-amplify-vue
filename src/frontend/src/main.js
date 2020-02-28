import Vue from 'vue'
import App from './App.vue'
import router from './router';

import Amplify from 'aws-amplify';
import { components } from 'aws-amplify-vue'; 
import aws_exports from './aws-exports'

Vue.config.productionTip = false

Amplify.configure(aws_exports);

new Vue({
  render: h => h(App),
  router: router,
  component: {
    App,
    ...components
  }
}).$mount('#app')
