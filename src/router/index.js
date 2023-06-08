import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
import SearchView from '../views/SearchView.vue';
import ProfileView from '../views/ProfileView.vue';
import BicycleDetailView from '../views/BicycleDetailView.vue';

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
      path: '/bicycle/:id',
      name: 'bicycle',
      component: BicycleDetailView,
    },
  ],
});

export default router;
