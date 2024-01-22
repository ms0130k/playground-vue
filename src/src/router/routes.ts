import Home from '@/components/Home.vue';
import TheWelcome from '@/components/TheWelcome.vue';
import User from '@/components/Route.vue';

const routes = [
  {name: 'home', path: '/', component: Home},
  {name: 'home to', path: '/to/:to/username/:username', component: Home},
  {path: '/welcome', component: TheWelcome},
  {path: '/route/:id', component: User, meta: {test: 'test'}},
  {path: '/go', component: () => import('@/components/GoToRoute.vue')},
];

export default routes;