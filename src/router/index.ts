import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import CalendarView from '@/views/CalendarView.vue';
import ProfileView from '@/views/ProfileView.vue';
import ShareView from '@/views/ShareView.vue';
import SignInView from '@/views/SignInView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/calendar',
    name: 'calender',
    component: CalendarView,
    props: true,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/share',
    name: 'share',
    component: ShareView,
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignInView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
