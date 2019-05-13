import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import home from '../pages/home.vue';
import buyCar from '../pages/buyCar.vue';
import detail from '../pages/detail.vue';
import user from '../pages/user.vue';
import login from '../pages/login.vue';
import reg from '../pages/reg.vue';
// import error from '../pages/error.vue';
import list from '../pages/list.vue';
import category_list from '../pages/category_list.vue';

let routes = [
  {path:'/home',component:home},
  {path:'/buyCar',component:buyCar},
  {path:'/detail',component:detail},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/list',component:list},
  {path:'/user',component:user},
  {path:'/',redirect:'/home'},
  {path:'/category_list',component:category_list},
  // {path:'*',component:error},
];

let router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      x:0,
      y:0
    }
  }
});

export default router;