import Vue from 'vue'
import App from './app.vue'
import '../src/msg.css';

import Msg from '../src';

Vue.use(Msg);

new Vue({
  el: '#app',
  render: h => h(App)
});