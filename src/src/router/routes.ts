import Home from '@/components/Home.vue';
import TheWelcome from '@/components/TheWelcome.vue';
import User from '@/components/router/Route.vue';
import Parent from '@/components/slot/Parent.vue';

const routes = [
  {name: 'home', path: '/', component: Home},
  {name: 'home to', path: '/to/:to/username/:username', component: Home},
  {path: '/welcome', component: TheWelcome},
  {path: '/route/:id', component: User, meta: {test: 'test'}},
  {path: '/go', component: () => import('@/components/router/GoToRoute.vue'), sensitive: true},
  {name: 'array param', path: '/route/:arrayparam(.*)*', component: () => import('@/components/router/ArrayParam.vue')},
  {name: 'array param2', path: '/route/:arrayparam*', component: () => import('@/components/router/ArrayParam2.vue')},
  {name: 'optional', path: '/route/optional:optional(\\d+)?', component: () => import('@/components/router/OptionalParam.vue')},
  {path: '/attrs', component: () => import('@/components/attrsprops/AttrsParent.vue')},
  {path: '/vfor', component: () => import('@/components/basic/Vfor.vue')},



  {path: '/slot', component: () => import('@/components/slot/Parent.vue')},

  {name: 'not found', path: '/:pathMatch(.*)*', component: () => import('@/components/router/NotFound.vue')},
];

export default routes;