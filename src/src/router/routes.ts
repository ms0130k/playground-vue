import Home from '@/components/Home.vue';
import TheWelcome from '@/components/TheWelcome.vue';
import User from '@/components/Router/Route.vue';

const routes = [
  {name: 'home', path: '/', component: Home},
  {name: 'home to', path: '/to/:to/username/:username', component: Home},
  {path: '/welcome', component: TheWelcome},
  {path: '/route/:id', component: User, meta: {test: 'test'}},
  {path: '/go', component: () => import('@/components/Router/GoToRoute.vue'), sensitive: true},
  {name: 'array param', path: '/route/:arrayparam(.*)*', component: () => import('@/components/Router/ArrayParam.vue')},
  {name: 'array param2', path: '/route/:arrayparam*', component: () => import('@/components/Router/ArrayParam2.vue')},
  {name: 'not found', path: '/:pathMatch(.*)*', component: () => import('@/components/Router/NotFound.vue')},
];

export default routes;