import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
import SearchView from '../views/SearchView.vue';
import ProfileView from '../views/ProfileView.vue';
import AddBikeView from '../views/AddBikeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/profile/:username',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/addbike',
      name: 'addbike',
      component: AddBikeView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundView',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
});

export default router;
