import { createRouter, createWebHistory } from 'vue-router';
import BaseLayout from '../layouts/BaseLayout.vue';

import Show from '../views/Show.vue';
import Episode from '../views/Episode.vue';

const routes = [
  {
    path: '/',
    redirect: '/shows',
  },
  {
    path: '/shows',
    name: 'Shows',
    component: BaseLayout,
    children: [
        {
            path: ':id',
            name: 'Show',
            component: Show,
        },
        {
            path: ':id/episode',
            name: 'Episode',
            component: Episode,
        },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;