// router/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import About from '../views/AboutUs.vue';
import UserDetails from '../views/UserDetail.vue'; // 新增的用户详情页面

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/user', 
    name: 'UserDetails',
    component: UserDetails,
    // props: true, // 启用props以将路由参数传递给组件
  },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),

//   history: createWebHistory('/my-app'),
  routes,
});

export default router;
