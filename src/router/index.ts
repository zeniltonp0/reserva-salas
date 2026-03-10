import { createRouter, createWebHistory } from 'vue-router'
import { routes } from "./routes";
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore();

  if (to.meta.requiresAuth && !auth.user) {
    next({ name: 'Login' });
  } 
  else if (to.path.startsWith('/auth') && auth.user) {
    next('/');
  } 
  else {
    next(); 
  }
});

export default router
