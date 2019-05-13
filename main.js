import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入路由
import router from './plugins/router';

//引入axios
import  './plugins/axios';

import './assets/css/style.css';
import './assets/css/order3.css';
import './assets/css/bootstrap.css';
import './assets/css/productDetail.css' 

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
